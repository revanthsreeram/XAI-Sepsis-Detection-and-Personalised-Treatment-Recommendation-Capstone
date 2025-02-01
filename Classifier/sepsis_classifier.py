import os
import numpy as np
import pandas as pd
import tensorflow as tf
from sklearn.preprocessing import StandardScaler
from sklearn.impute import SimpleImputer
from sklearn.cluster import KMeans
from sklearn.tree import DecisionTreeClassifier, export_graphviz
from sklearn.metrics import accuracy_score, roc_auc_score, precision_score, recall_score
from tensorflow.keras.regularizers import l2
from tensorflow.keras.callbacks import ReduceLROnPlateau
from tensorflow.keras.preprocessing.sequence import pad_sequences
from sklearn.model_selection import train_test_split
from concurrent.futures import ThreadPoolExecutor
from tqdm import tqdm
import matplotlib.pyplot as plt
import graphviz
from typing import Tuple, List, Dict
import pickle

# GPU Setup
gpus = tf.config.list_physical_devices('GPU')
if gpus:
    for gpu in gpus:
        tf.config.experimental.set_memory_growth(gpu, True)
print(f"GPUs available: {len(gpus)}")


# Parallelized Data Preprocessing
def process_file(file_path: str) -> Tuple[np.ndarray, int]:
    """Process a single .psv file to extract features and label."""
    try:
        df = pd.read_csv(file_path, sep='|')
        features = df.iloc[:, :-1].values  # Exclude the label column
        label = df.iloc[-1, -1]  # Label is the last value in the last column
        return features, label
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return None, None


def load_and_preprocess_directory(data_dir: str, max_seq_len) -> Tuple[np.ndarray, np.ndarray]:
    """Load and preprocess data from a directory of .psv files."""
    files = [os.path.join(data_dir, f) for f in os.listdir(data_dir) if f.endswith(".psv")]
    all_features, all_labels = [], []
    sequence_lengths = []

    # Parallel file processing
    with ThreadPoolExecutor() as executor:
        results = list(tqdm(executor.map(process_file, files), total=len(files), desc="Processing files"))

    for features, label in results:
        if features is not None:
            all_features.append(features)
            all_labels.append(label)
            sequence_lengths.append(features.shape[0])

    max_seq_length = max(sequence_lengths)

    # Pad sequences
    all_features_padded = pad_sequences(
        all_features, maxlen=max_seq_len, padding='post', dtype='float32'
    )

    # Handle NaN columns
    num_samples, max_len, num_features = all_features_padded.shape
    reshaped_features = all_features_padded.reshape(-1, num_features)
    nan_columns = np.isnan(reshaped_features).all(axis=0)

    # Replace all-NaN columns with a placeholder (e.g., 0)
    placeholder_value = 0
    reshaped_features[:, nan_columns] = placeholder_value

    # Impute only the non-all-NaN columns
    imputer = SimpleImputer(strategy='median')
    imputed_features = reshaped_features.copy()  # Copy to retain shape
    imputed_features[:, ~nan_columns] = imputer.fit_transform(reshaped_features[:, ~nan_columns])

    # Reshape back to 3D
    all_features_padded = imputed_features.reshape(num_samples, max_len, num_features)

    return all_features_padded, np.array(all_labels)


# TCN Model Implementation
class CausalConv1D(tf.keras.layers.Conv1D):
    def __init__(self, filters, kernel_size, dilation_rate, **kwargs):
        super().__init__(filters=filters, kernel_size=kernel_size,
                         dilation_rate=dilation_rate, padding="causal", **kwargs)


class TemporalBlock(tf.keras.layers.Layer):
    def __init__(self, filters, kernel_size, dilation_rate, dropout_rate=0.2):
        super().__init__()
        self.conv1 = tf.keras.layers.Conv1D(
            filters,
            kernel_size,
            dilation_rate=dilation_rate,
            padding="causal",
            kernel_regularizer=l2(0.01),
            activation="relu",
        )
        self.conv2 = tf.keras.layers.Conv1D(
            filters,
            kernel_size,
            dilation_rate=dilation_rate,
            padding="causal",
            kernel_regularizer=l2(0.01),
            activation="relu",
        )
        self.dropout = tf.keras.layers.SpatialDropout1D(dropout_rate)
        self.bn1 = tf.keras.layers.BatchNormalization()
        self.bn2 = tf.keras.layers.BatchNormalization()

        # Convolution for residual connection to match shapes
        self.residual_conv = tf.keras.layers.Conv1D(
            filters, kernel_size=1, padding="same", activation=None
        )

    def call(self, inputs, training=False):
        x = self.conv1(inputs)
        x = self.bn1(x, training=training)
        x = self.dropout(x, training=training)
        x = self.conv2(x)
        x = self.bn2(x, training=training)

        # Match shapes for residual connection
        residual = self.residual_conv(inputs)
        return tf.keras.layers.add([residual, x])  # Residual Connection


class TCNModel(tf.keras.Model):
    def __init__(self, input_shape, num_channels=[64, 32, 16], kernel_size=3, dropout=0.3):
        super().__init__()
        self.input_layer = tf.keras.layers.Input(shape=input_shape, name="input_layer")

        # Initialize blocks
        x = self.input_layer
        self.block_layers = []
        for i, ch in enumerate(num_channels):
            temporal_block = TemporalBlock(ch, kernel_size, 2 ** i, dropout)
            self.block_layers.append(temporal_block)
            x = temporal_block(x)

        self.global_pool = tf.keras.layers.GlobalAveragePooling1D(name="global_pool")(x)
        self.output_layer = tf.keras.layers.Dense(1, activation="sigmoid", name="output_layer")(self.global_pool)

        # Create the model
        super().__init__(inputs=self.input_layer, outputs=self.output_layer)


# TREPAN Decision Tree Class
class TREPANDecisionTree:
    def __init__(self):
        self.tree = None

    def train(self, X, y):
        self.tree = DecisionTreeClassifier(max_depth=5, min_samples_split=10)
        self.tree.fit(X, y)

    def explain(self):
        if self.tree:
            return export_graphviz(self.tree, filled=True, rounded=True, special_characters=True)
        else:
            raise ValueError("Tree is not trained.")


# Cluster Hidden Outputs
def cluster_hidden_outputs(model, X):
    """
    Cluster the hidden layer outputs of the TCN model.
    """
    sample_input = tf.convert_to_tensor(X[:1], dtype=tf.float32)
    _ = model(sample_input, training=False)  # Initialize the model with a sample input

    intermediate_model = tf.keras.Model(inputs=model.input, outputs=model.get_layer("global_pool").output)
    hidden_outputs = intermediate_model.predict(X, batch_size=32)

    kmeans = KMeans(n_clusters=5, random_state=42)
    cluster_labels = kmeans.fit_predict(hidden_outputs)

    return hidden_outputs, cluster_labels, kmeans


class TREPANExplainer:
    def __init__(self, model: tf.keras.Model, n_clusters: int = 5):
        self.model = model
        self.n_clusters = n_clusters
        self.kmeans = None
        self.trees: Dict[int, TREPANDecisionTree] = {}

    def extract_hidden_outputs(self, X: np.ndarray) -> np.ndarray:
        """Extract outputs from the global pooling layer."""
        intermediate_model = tf.keras.Model(
            inputs=self.model.input,
            outputs=self.model.get_layer("global_pool").output
        )
        return intermediate_model.predict(X, batch_size=32)

    def cluster_hidden_outputs(self, hidden_outputs: np.ndarray) -> np.ndarray:
        """Cluster the hidden layer outputs."""
        self.kmeans = KMeans(n_clusters=self.n_clusters, random_state=42)
        return self.kmeans.fit_predict(hidden_outputs)

    def train_cluster_trees(self, hidden_outputs: np.ndarray, y: np.ndarray, cluster_labels: np.ndarray):
        """Train decision trees for each cluster."""
        for cluster_id in np.unique(cluster_labels):
            indices = np.where(cluster_labels == cluster_id)[0]
            tree = TREPANDecisionTree()
            tree.train(hidden_outputs[indices], y[indices])
            self.trees[cluster_id] = tree

    def explain_instance(self, X_instance: np.ndarray) -> Tuple[TREPANDecisionTree, int]:
        """Explain a single instance using the appropriate cluster's decision tree."""
        hidden_output = self.extract_hidden_outputs(X_instance)
        cluster_id = self.kmeans.predict(hidden_output)[0]
        return self.trees[cluster_id], cluster_id

    def fit(self, X: np.ndarray, y: np.ndarray):
        """Fit the TREPAN explainer to the data."""
        hidden_outputs = self.extract_hidden_outputs(X)
        cluster_labels = self.cluster_hidden_outputs(hidden_outputs)
        self.train_cluster_trees(hidden_outputs, y, cluster_labels)
        return self


# Visualize Decision Tree
def visualize_tree(tree: TREPANDecisionTree, output_path: str):
    """Visualize the decision tree."""
    graph = graphviz.Source(tree.explain())
    graph.render(output_path, format='png', cleanup=True)

    # Display the tree as an inline plot
    plt.figure(figsize=(10, 10))
    plt.imshow(plt.imread(output_path + ".png"))
    plt.axis('off')
    plt.show()


class EnhancedTREPANExplainer:
    def __init__(self, model: tf.keras.Model, n_clusters: int = 5, feature_names: List[str] = None, max_depth: int = 5):
        self.model = model
        self.n_clusters = n_clusters
        self.kmeans = None
        self.trees: Dict[int, DecisionTreeClassifier] = {}
        self.feature_names = feature_names
        self.cluster_distributions = {}
        self.max_depth = max_depth
        self.derived_feature_names = self.get_derived_feature_names() if feature_names else None

    def get_derived_feature_names(self) -> List[str]:
        """Generate feature names for derived features"""
        derived_names = []
        prefixes = ['mean', 'std', 'max', 'min', 'last']
        for name in self.feature_names:
            for prefix in prefixes:
                derived_names.append(f"{prefix}_{name}")
        return derived_names

    def map_feature_importance(self, feature_importances):
        """Map feature importances to their corresponding derived features."""
        if not self.derived_feature_names:
            return None

        # Create a dictionary mapping derived features to their importance
        importance_map = []
        for name, importance in zip(self.derived_feature_names, feature_importances):
            # Extract original feature name and statistic type
            stat_type, feat_name = name.split('_', 1)
            importance_map.append({
                'original_feature': feat_name,
                'statistic': stat_type,
                'importance': importance
            })

        # Convert to DataFrame for easier analysis
        df_importance = pd.DataFrame(importance_map)

        # Calculate aggregate importance for each original feature
        feature_summary = df_importance.groupby('original_feature')['importance'].agg([
            'sum',  # Total importance across all derived features
            'max',  # Maximum importance among derived features
            'mean'  # Average importance of derived features
        ]).round(4)

        # Get the most important statistic for each feature
        most_important_stats = df_importance.loc[
            df_importance.groupby('original_feature')['importance'].idxmax()
        ][['original_feature', 'statistic', 'importance']]

        return {
            'detailed': df_importance,
            'summary': feature_summary,
            'most_important_stats': most_important_stats
        }


    def extract_features(self, X: np.ndarray) -> np.ndarray:
        """Extract meaningful features from temporal data"""
        # Calculate statistical features across time dimension
        mean_vals = np.mean(X, axis=1)
        std_vals = np.std(X, axis=1)
        max_vals = np.max(X, axis=1)
        min_vals = np.min(X, axis=1)
        last_vals = X[:, -1, :]  # Last timestep

        # Concatenate all features
        features = np.concatenate([
            mean_vals,
            std_vals,
            max_vals,
            min_vals,
            last_vals
        ], axis=1)

        return features

    def get_derived_feature_names(self) -> List[str]:
        """Generate feature names for derived features"""
        derived_names = []
        for prefix in ['mean', 'std', 'max', 'min', 'last']:
            derived_names.extend([f"{prefix}_{name}" for name in self.feature_names])
        return derived_names

    def cluster_data(self, X: np.ndarray) -> np.ndarray:
        """Cluster using model's hidden representations"""
        # Get hidden representations
        intermediate_model = tf.keras.Model(
            inputs=self.model.input,
            outputs=self.model.get_layer("global_pool").output
        )
        hidden_outputs = intermediate_model.predict(X, batch_size=32)

        # Normalize hidden outputs
        scaler = StandardScaler()
        hidden_outputs_scaled = scaler.fit_transform(hidden_outputs)

        # Perform clustering
        self.kmeans = KMeans(n_clusters=self.n_clusters, random_state=42, n_init=10)
        cluster_labels = self.kmeans.fit_predict(hidden_outputs_scaled)

        # Store cluster distributions
        unique, counts = np.unique(cluster_labels, return_counts=True)
        self.cluster_distributions = dict(zip(unique, counts))

        return cluster_labels

    def train_cluster_trees(self, features: np.ndarray, y: np.ndarray, cluster_labels: np.ndarray):
        """Train decision trees for each cluster"""
        for cluster_id in np.unique(cluster_labels):
            indices = np.where(cluster_labels == cluster_id)[0]

            if len(indices) > 10:  # Minimum samples threshold
                tree = DecisionTreeClassifier(
                    max_depth=self.max_depth,
                    min_samples_split=20,
                    min_samples_leaf=10,
                    random_state=42
                )
                tree.fit(features[indices], y[indices])
                self.trees[cluster_id] = tree

    def explain_instance(self, X_instance: np.ndarray, df: pd.DataFrame = None) -> Tuple[
        DecisionTreeClassifier, int, List]:
        """Explain a single instance using the appropriate cluster's decision tree."""
        # Get hidden representation for clustering
        hidden_output = self.extract_hidden_outputs(X_instance)
        cluster_id = self.kmeans.predict(hidden_output)[0]
        tree = self.trees[cluster_id]

        # Extract features for the instance
        features = self.extract_features(X_instance)
        feature_importances = tree.feature_importances_

        # Create detailed explanation with actual values
        detailed_explanation = []

        # For each original feature
        for i, feature_name in enumerate(self.feature_names):
            # Calculate indices for this feature's derived features
            mean_idx = i
            std_idx = i + len(self.feature_names)
            max_idx = i + 2 * len(self.feature_names)
            min_idx = i + 3 * len(self.feature_names)
            last_idx = i + 4 * len(self.feature_names)

            # Sum up importance of all derived features for this original feature
            total_importance = (
                    feature_importances[mean_idx] +
                    feature_importances[std_idx] +
                    feature_importances[max_idx] +
                    feature_importances[min_idx] +
                    feature_importances[last_idx]
            )

            # Get actual value from DataFrame if provided, otherwise use mean from features
            if df is not None:
                actual_value = df[feature_name].mean()
            else:
                actual_value = features[0, mean_idx]  # Use mean value as representative

            detailed_explanation.append([
                feature_name,
                total_importance,
                actual_value
            ])

        # Sort by importance
        detailed_explanation.sort(key=lambda x: x[1], reverse=True)

        return tree, cluster_id, detailed_explanation

    def extract_hidden_outputs(self, X: np.ndarray) -> np.ndarray:
        """Extract outputs from the global pooling layer."""
        intermediate_model = tf.keras.Model(
            inputs=self.model.input,
            outputs=self.model.get_layer("global_pool").output
        )
        return intermediate_model.predict(X, batch_size=32)

    # Usage example:
    def analyze_feature_importance(explainer, X_instance):
        tree, cluster_id, importance_mapping = explainer.explain_instance(X_instance)

        print("\nFeature Importance Analysis:")
        print("============================")

        # Print top 10 most important features (aggregate)
        print("\nTop 10 Most Important Features (Overall):")
        print(importance_mapping['summary'].sort_values('sum', ascending=False).head(10))

        # Print top 10 most important specific derived features
        print("\nTop 10 Most Important Derived Features:")
        print(importance_mapping['detailed'].sort_values('importance', ascending=False).head(10))

        # Print most important statistic for each feature
        print("\nMost Important Statistic per Feature (Top 10):")
        print(importance_mapping['most_important_stats'].sort_values('importance', ascending=False).head(10))

        return importance_mapping

    def fit(self, X: np.ndarray, y: np.ndarray):
        # Extract temporal features
        features = self.extract_features(X)

        # Cluster using hidden representations
        cluster_labels = self.cluster_data(X)

        # Train trees using extracted features
        self.train_cluster_trees(features, y, cluster_labels)
        return self

    def visualize_cluster_distribution(self):
        plt.figure(figsize=(12, 6))
        clusters = list(self.cluster_distributions.keys())
        counts = list(self.cluster_distributions.values())

        plt.bar(clusters, counts)
        plt.title('Distribution of Samples Across Clusters')
        plt.xlabel('Cluster ID')
        plt.ylabel('Number of Samples')

        # Add percentage labels
        total_samples = sum(counts)
        for i, count in enumerate(counts):
            percentage = (count / total_samples) * 100
            plt.text(i, count, f'{percentage:.1f}%', ha='center', va='bottom')

        plt.show()

    def evaluate_clusters(self, X: np.ndarray, y: np.ndarray):
        """Evaluate the quality of clustering"""
        cluster_labels = self.cluster_data(X)

        print("\nCluster Analysis:")
        print("-----------------")
        for cluster_id in np.unique(cluster_labels):
            indices = np.where(cluster_labels == cluster_id)[0]
            cluster_y = y[indices]
            pos_rate = np.mean(cluster_y)

            print(f"\nCluster {cluster_id}:")
            print(f"Samples: {len(indices)}")
            print(f"Positive rate: {pos_rate:.3f}")

    def visualize_tree(self, cluster_id: int, output_path: str):
        if cluster_id not in self.trees:
            raise ValueError(f"No tree found for cluster {cluster_id}")

        tree = self.trees[cluster_id]
        derived_feature_names = self.get_derived_feature_names()

        dot_data = export_graphviz(
            tree,
            feature_names=derived_feature_names,
            filled=True,
            rounded=True,
            special_characters=True,
            class_names=['Negative', 'Positive']
        )

        graph = graphviz.Source(dot_data)
        graph.render(output_path, format='png', cleanup=True)

        plt.figure(figsize=(20, 15))
        img = plt.imread(output_path + ".png")
        plt.imshow(img)
        plt.axis('off')
        plt.title(f'Decision Tree for Cluster {cluster_id}')
        plt.show()

        # Print feature importance
        importances = tree.feature_importances_
        feature_imp = pd.DataFrame({
            'feature': derived_feature_names,
            'importance': importances
        })
        feature_imp = feature_imp.sort_values('importance', ascending=False)

        print(f"\nTop 10 Important Features for Cluster {cluster_id}:")
        print(feature_imp.head(10))


def explain_with_feature_names(model, X_train, y_train, X_test, feature_names, n_clusters=5, max_depth=5):
    # Initialize explainer
    explainer = EnhancedTREPANExplainer(
        model,
        n_clusters=n_clusters,
        feature_names=feature_names,
        max_depth=max_depth
    )

    # Fit the explainer
    explainer.fit(X_train, y_train)

    # Evaluate clustering
    explainer.evaluate_clusters(X_train, y_train)

    # Show cluster distribution
    explainer.visualize_cluster_distribution()

    # Explain a test instance
    test_instance = X_test[:1]
    tree, cluster_id = explainer.explain_instance(test_instance)

    feature_importances = tree.feature_importances_
    detailed_explanation = [
        [feature_name, importance, value]
        for feature_name, importance, value in zip(feature_names, feature_importances, test_instance)
    ]

    # Visualize the tree for this instance
    explainer.visualize_tree(
        cluster_id,
        f"tree_visualization_cluster_{cluster_id}"
    )

    return explainer, cluster_id, detailed_explanation


def main():
    #data_dir = "/kaggle/input/sepsis-data/training"
    X, y = load_and_preprocess_directory(data_dir)

    # Split data
    X_train, X_temp, y_train, y_temp = train_test_split(X, y, test_size=0.3, random_state=42)
    X_val, X_test, y_val, y_test = train_test_split(X_temp, y_temp, test_size=0.5, random_state=42)

    # Compute class weights
    class_weights = {
        0: len(y) / (2 * np.sum(y == 0)),
        1: len(y) / (2 * np.sum(y == 1))
    }

    # Train TCN model
    input_shape = (X.shape[1], X.shape[2])
    mirrored_strategy = tf.distribute.MirroredStrategy()

    with mirrored_strategy.scope():
        tcn_model = TCNModel(input_shape)
        tcn_model.compile(
            optimizer="adam",
            loss="binary_crossentropy",
            metrics=["accuracy", tf.keras.metrics.AUC()],
        )

        # Train the model
        lr_scheduler = ReduceLROnPlateau(
            monitor="val_loss", factor=0.5, patience=3, min_lr=1e-6, verbose=1
        )

        tcn_model.fit(
            X_train,
            y_train,
            validation_data=(X_val, y_val),
            class_weight=class_weights,
            epochs=20,
            batch_size=32,
            callbacks=[lr_scheduler],
        )

    feature_names = [
        "HR", "O2Sat", "Temp", "SBP", "MAP", "DBP", "Resp", "EtCO2",
        "BaseExcess", "HCO3", "FiO2", "pH", "PaCO2", "SaO2", "AST",
        "BUN", "Alkalinephos", "Calcium", "Chloride", "Creatinine",
        "Bilirubin_direct", "Glucose", "Lactate", "Magnesium", "Phosphate",
        "Potassium", "Bilirubin_total", "TroponinI", "Hct", "Hgb", "PTT",
        "WBC", "Fibrinogen", "Platelets", "Age", "Gender", "Unit1", "Unit2", "HospAdmTime", "ICULOS"
    ]
    explainer, cluster_id, detailed_explanation = explain_with_feature_names(tcn_model, X_train, y_train, X_test,
                                                                             feature_names)

    # Model evaluation
    y_pred = tcn_model.predict(X_test)
    y_pred_binary = (y_pred > 0.5).astype(int)

    # Print metrics
    print("\nModel Evaluation Results:")
    print(f"Accuracy: {accuracy_score(y_test, y_pred_binary):.4f}")
    print(f"AUC: {roc_auc_score(y_test, y_pred):.4f}")
    print(f"Precision: {precision_score(y_test, y_pred_binary):.4f}")
    print(f"Recall: {recall_score(y_test, y_pred_binary):.4f}")

    print("\nFeature Importances and Values for Test Instance:")
    print(detailed_explanation)

    filename = '/kaggle/working/model.h5'
    tcn_model.save(filename)

    print(f"Model saved as {filename}")

    test_instance = X_test[:1]
    test_file = '/kaggle/working/test.pkl'
    with open(test_file, 'wb') as file:
        pickle.dump(test_instance, file)


def analyze_feature_importance(explainer, X_instance):
    tree, cluster_id, importance_mapping = explainer.explain_instance(X_instance)

    print("\nFeature Importance Analysis:")
    print("============================")

    # Print top 10 most important features (aggregate)
    print("\nTop 10 Most Important Features (Overall):")
    print(importance_mapping['summary'].sort_values('sum', ascending=False).head(10))

    # Print top 10 most important specific derived features
    print("\nTop 10 Most Important Derived Features:")
    print(importance_mapping['detailed'].sort_values('importance', ascending=False).head(10))

    # Print most important statistic for each feature
    print("\nMost Important Statistic per Feature (Top 10):")
    print(importance_mapping['most_important_stats'].sort_values('importance', ascending=False).head(10))

    return importance_mapping

feature_names = [
        "HR", "O2Sat", "Temp", "SBP", "MAP", "DBP", "Resp", "EtCO2",
        "BaseExcess", "HCO3", "FiO2", "pH", "PaCO2", "SaO2", "AST",
        "BUN", "Alkalinephos", "Calcium", "Chloride", "Creatinine",
        "Bilirubin_direct", "Glucose", "Lactate", "Magnesium", "Phosphate",
        "Potassium", "Bilirubin_total", "TroponinI", "Hct", "Hgb", "PTT",
        "WBC", "Fibrinogen", "Platelets", "Age", "Gender", "Unit1", "Unit2", "HospAdmTime", "ICULOS"
    ]

model_file = "Classifier/model.h5"
data_dir = "Classifier/data"
x_train = "Classifier/X_train.pkl"
y_train = "Classifier/y_train.pkl"

with open(x_train, "rb") as file:
    X_train = pickle.load(file)

with open(y_train, "rb") as file:
    y_train = pickle.load(file)

input_shape = (X_train.shape[1], X_train.shape[2])

tcn_model = TCNModel(input_shape)
tcn_model.load_weights(model_file)

explainer = EnhancedTREPANExplainer(
        tcn_model,
        n_clusters=5,
        feature_names=feature_names,
        max_depth=5
    )
explainer.fit(X_train, y_train)

def classifier_pipeline():


    df = pd.read_csv("Classifier/data/output.psv", sep="|")

    test_instance, y = load_and_preprocess_directory(data_dir, 336)

    prediction = tcn_model.predict(test_instance)[0][0]
    classifier_label = "Positive" if prediction >= 0.5 else "Negative"
    print(f"The given patient has been classified as {classifier_label}")

    tree, cluster_id, detailed_explanation = explainer.explain_instance(test_instance, df)

    feature_list:list = list()

    print("\nFeature Importances and Values:")
    print("Feature Name | Importance | Actual Value")
    print("-" * 50)
    for feature_name, importance, value in detailed_explanation:
        print(f"{feature_name:<20} {importance:.4f}    {value:.4f}")
        feature_list.append((feature_name, value))

    return classifier_label,feature_list