import networkx as nx
import torch
import torch.nn as nn
from torch_geometric.data import Data


class LearnableMaskLayer(nn.Module):
    def __init__(self, emb_dim):
        super(LearnableMaskLayer, self).__init__()
        self.mask_weights = nn.Parameter(torch.ones(emb_dim))

    def forward(self, x):
        return x * self.mask_weights


class CausalWeight(nn.Module):
    def __init__(self, emb_dim, device):
        super(CausalWeight, self).__init__()
        self.device = device
        self.list_weights = nn.ModuleList([LearnableMaskLayer(emb_dim) for _ in range(4)])

    def forward(self, x, causal_graph):
        echelon = self.node_classify(causal_graph)
        x1 = torch.zeros_like(x)

        for i, node_list in enumerate(echelon):
            for node in node_list:
                x1[0, node, :] += self.list_weights[i](x[0, node, :])

        return x1

    def node_classify(self, causal_graph):

        echelon = [[], [], [], []]

        for node in causal_graph.nodes():
            in_degree = causal_graph.in_degree(node)
            out_degree = causal_graph.out_degree(node)

            if in_degree == 0 and out_degree == 0:
                echelon[1].append(node)
            elif in_degree > 0 and out_degree == 0:
                echelon[3].append(node)
            elif in_degree == 0 and out_degree > 0:
                echelon[0].append(node)
            else:
                echelon[2].append(node)

        return echelon


class homo_relation_graph(nn.Module):
    def __init__(self, emb_dim, device):
        super(homo_relation_graph, self).__init__()
        self.device = device
        self.causal_weight = CausalWeight(emb_dim, device)

    def forward(self, graph, node_features):
        data = self.nx_to_pyg(graph, node_features)
        x, edge_index = data.x, data.edge_index
        return x

    def nx_to_pyg(self, graph, node_features):

        mapping = {node: i for i, node in enumerate(graph.nodes())}
        graph = nx.relabel_nodes(graph, mapping)

        node_features2 = self.causal_weight(node_features, graph)

        edge_list = list(graph.edges(data=True))

        edge_index = torch.tensor([[edge[0] for edge in edge_list], [edge[1] for edge in edge_list]]).to(self.device)
        edge_index = edge_index.to(torch.int64)

        return Data(x=node_features2, edge_index=edge_index)
