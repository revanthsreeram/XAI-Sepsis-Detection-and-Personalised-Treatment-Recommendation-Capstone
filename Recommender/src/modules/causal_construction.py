import os
from enum import unique
import dill
import networkx as nx
import pandas as pd
import statsmodels.api as sm
from cdt.causality.graph import GES
from dowhy import CausalModel
from tqdm import tqdm


class CausaltyGraph4Visit:
    def __init__(self, data_all, data_train, num_diagnosis, num_procedure, num_medication, dataset, unique_val):

        self.dataset = dataset
        self.unique_val = unique_val

        self.num_d = num_diagnosis
        self.num_p = num_procedure
        self.num_m = num_medication

        self.data = self.data_process(data_train)

        self.causal_graphs = self.build_graph(data_all)

        self.diag_med_effect = self.build_effect(num_diagnosis, num_medication, "Diag", "Med")
        self.proc_med_effect = self.build_effect(num_procedure, num_medication, "Proc", "Med")


    def get_graph(self, graph_id, graph_type):
        graph = self.causal_graphs[graph_id]

        if graph_type == "Diag":
            return graph[0]
        elif graph_type == "Proc":
            return graph[1]
        elif graph_type == "Med":
            return graph[2]


    def get_effect(self, a, b, A_type, B_type):
        a = A_type + '_' + str(int(a))
        b = B_type + '_' + str(int(b))

        if A_type == "Diag" and B_type == "Med":
            effect_df = self.diag_med_effect
        elif A_type == "Proc" and B_type == "Med":
            effect_df = self.proc_med_effect
        else:
            raise ValueError("Invalid A_type and B_type combination")

        effect = effect_df.loc[a, b]
        return effect


    def get_threshold_effect(self, threshold, A_type, B_type):
        if A_type == "Diag" and B_type == "Med":
            effect_df = self.diag_med_effect
        elif A_type == "Proc" and B_type == "Med":
            effect_df = self.proc_med_effect
        else:
            raise ValueError("Invalid A_type and B_type combination")

        flattened = effect_df.stack()
        threshold_value = flattened.quantile(threshold)
        return threshold_value


    def build_effect(self, num_a, num_b, a_type, b_type):

        current_dir = os.path.dirname(os.path.abspath(__file__))
        file_path = os.path.normpath(os.path.join(current_dir, f"../../data/graphs/{a_type}_{b_type}_causal_effect.pkl"))

        try:
            effect_df = dill.load(open(file_path, "rb"))
        except FileNotFoundError:

            print("Your local graphless causal effect is being built, which will take a few hours.")
            processed_data = self.data

            effect_df = pd.DataFrame(0.0, index=[f"{a_type}_{i}" for i in range(num_a)],
                                     columns=[f"{b_type}_{j}" for j in range(num_b)])

            for i in tqdm(range(num_a)):
                for j in range(num_b):
                    causal_value = self.compute_causal_value(processed_data, i, j, a_type, b_type)
                    effect_df.at[f"{a_type}_{i}", f"{b_type}_{j}"] = causal_value
                    print(f"{a_type}:{i}, {b_type}:{j}, causal_value:{causal_value}")

            with open(file_path, "wb") as f:
                dill.dump(effect_df, f)

        return effect_df


    def compute_causal_value(self, data, d, m, a_type, b_type):
         selected_data = data[[f'{a_type}_{d}', f'{b_type}_{m}']]
         model = CausalModel(data=selected_data, treatment=f'{a_type}_{d}', outcome=f'{b_type}_{m}')

         identified_estimand = model.identify_effect(proceed_when_unidentifiable=True)
         estimate = model.estimate_effect(identified_estimand,
                                          method_name="backdoor.generalized_linear_model",
                                          method_params={"glm_family": sm.families.Binomial()})
         return estimate.value


    def build_graph(self, data_all):
        current_dir = os.path.dirname(os.path.abspath(__file__))

        file_path = os.path.normpath(os.path.join(current_dir, f"../../data/graphs/{self.unique_val}/causal_graph.pkl"))
        try:
            subgraph_list = dill.load(open(file_path, "rb"))
        except FileNotFoundError:

            os.makedirs(f"Recommender/data/graphs/{self.unique_val}", exist_ok=True)
            causal_graphs = []
            print("Build all cause and effect diagrams.")
            sessions = self.sessions_process(data_all)
            for adm in tqdm(sessions):
                D = adm[0]
                P = adm[1]
                M = adm[2]

                visit = [f"Diag_{d}" for d in D] + [f"Proc_{p}" for p in P] + [f"Med_{m}" for m in M]
                visit_data = self.data[visit]

                cdt_algo = GES()
                causal_graph = cdt_algo.predict(visit_data)

                new_graph = nx.DiGraph()

                for node in causal_graph.nodes():
                    new_graph.add_node(node)

                for edge in causal_graph.edges():
                    source, target = edge

                    if source.startswith("Diag") and target.startswith("Diag"):
                        new_graph.add_edge(source, target)
                    elif source.startswith("Diag") and target.startswith("Med"):
                        new_graph.add_edge(source, target)
                    elif source.startswith("Diag") and target.startswith("Proc"):
                        new_graph.add_edge(source, target)
                    elif source.startswith("Proc") and target.startswith("Proc"):
                        new_graph.add_edge(source, target)
                    elif source.startswith("Proc") and target.startswith("Diag"):
                        new_graph.add_edge(source, target)
                    elif source.startswith("Proc") and target.startswith("Med"):
                        new_graph.add_edge(source, target)
                    elif source.startswith("Med") and target.startswith("Med"):
                        new_graph.add_edge(source, target)

                causal_graph = new_graph

                while not nx.is_directed_acyclic_graph(causal_graph):
                    cycle_nodes = nx.find_cycle(causal_graph, orientation="original")

                    for edge in cycle_nodes:
                        source, target, _ = edge
                        causal_graph.remove_edge(source, target)

                causal_graph = nx.DiGraph(causal_graph)
                causal_graphs.append(causal_graph)

            subgraph_list = []
            for graph in tqdm(causal_graphs):
                graph_type = []

                nodes_to_remove = [node for node in graph.nodes() if "Med" in node or "Proc" in node]
                graph2 = graph.copy()
                graph2.remove_nodes_from(nodes_to_remove)
                graph_type.append(graph2)

                nodes_to_remove = [node for node in graph.nodes() if "Diag" in node or "Med" in node]
                graph2 = graph.copy()
                graph2.remove_nodes_from(nodes_to_remove)
                graph_type.append(graph2)

                nodes_to_remove = [node for node in graph.nodes() if "Diag" in node or "Proc" in node]
                graph2 = graph.copy()
                graph2.remove_nodes_from(nodes_to_remove)
                graph_type.append(graph2)

                subgraph_list.append(graph_type)
            dill.dump(subgraph_list, open(file_path, "wb"))
        return subgraph_list


    def sessions_process(self, raw_data):
        sessions = []
        for patient in raw_data:
            for adm in patient:
                sessions.append(adm)
        return sessions


    def data_process(self, data_train):

        current_dir = os.path.dirname(os.path.abspath(__file__))
        file_path =os.path.normpath(os.path.join(current_dir, f'../../data/graphs/matrix4causalgraph.pkl'))
        try:
            with open(file_path, "rb") as f:
                df = dill.load(f)
        except FileNotFoundError:

            train_sessions = self.sessions_process(data_train)

            df = pd.DataFrame(0.0, index=range(len(train_sessions)), columns=
            [f'Diag_{i}' for i in range(self.num_d)] +
            [f'Proc_{i}' for i in range(self.num_p)] +
            [f'Med_{i}' for i in range(self.num_m)])

            for i, session in tqdm(enumerate(train_sessions)):
                D, P, M, _ = session
                df.loc[i, [f'Diag_{d}' for d in D]] = 1
                df.loc[i, [f'Proc_{p}' for p in P]] = 1
                df.loc[i, [f'Med_{m}' for m in M]] = 1

            with open(file_path, "wb") as f:
                dill.dump(df, f)
        return df

if __name__ == '__main__':

    data_path = "../../data/output/records_final.pkl"
    voc_path = "../../data/output/voc_final.pkl"
    data = dill.load(open(data_path, "rb"))

    voc = dill.load(open(voc_path, "rb"))
    diag_voc, pro_voc, med_voc = voc["diag_voc"], voc["pro_voc"], voc["med_voc"]

    voc_size = (len(diag_voc.idx2word), len(pro_voc.idx2word), len(med_voc.idx2word))

    adm_id = 0
    for patient in data:
        for adm in patient:
            adm.append(adm_id)
            adm_id += 1
    data = data[:5]

    split_point = int(len(data) * 2 / 3)
    data_train = data[:split_point]
    causal_graph = CausaltyGraph4Visit(data, data_train, voc_size[0], voc_size[1], voc_size[2], 'mimic4')

