# Recommender System

This .md file deals with the **Treatment Recommender for Sepsis** and its related code.
The directory structures has a data folder, to store the input data, causal graphs and processed
output data. The saved folder, is used to save the best models and visualize results.
The src folder has the Python files dealing with the recommender model.

The files that need to be provided for data/input folder:

1. prescriptions.csv, procedures_icd.csv and diagnoses_icd.csv can be installed from
MIMIC IV database after filtering for sepsis patients only.
2. drug-DDI.csv can be downloaded from the link: https://drive.google.com/file/d/1mnPc0O0ztz0fkv3HF-dpmBb8PLWsEoDz/view?usp=sharing

The files that need to be provided for the data/graph folder:

3. causal_graph.pkl and matrix4causalgraph.pkl can be generated using code from the 
GitHub link: https://github.com/lixiang-222/CIDGMed