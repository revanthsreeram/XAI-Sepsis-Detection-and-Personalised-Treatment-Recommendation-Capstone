import numpy as np
import torch
import torch.nn as nn
import torch.nn.functional as F
from torch_geometric.data import HeteroData
from torch_geometric.nn import RGCNConv


class hetero_effect_graph(nn.Module):
    def __init__(self, in_channels, out_channels, device, levels=5):
        super(hetero_effect_graph, self).__init__()

        self.device = device

        self.levels = levels + 1

        self.edge_type_mapping = {}
        self.initialize_edge_type_mapping()

        self.conv1 = RGCNConv(in_channels, out_channels, self.levels)
        self.conv2 = RGCNConv(out_channels, out_channels, self.levels)


    def initialize_edge_type_mapping(self):
        j = 0
        for i in range(self.levels + 1):
            edge_type = ('Mole', f'connected__{i}', 'Entity')
            self.edge_type_mapping[edge_type] = j
            j += 1


    def create_hetero_graph(self, emb_entity, emb_mole, entity_mole_weight):

        data = HeteroData()

        data['Entity'].x = emb_entity.squeeze(0)
        data['Mole'].x = emb_mole.squeeze(0)

        if np.all(entity_mole_weight == 0):
            src = torch.zeros(entity_mole_weight.size, dtype=torch.int64)
            dst = torch.arange(0, entity_mole_weight.size, dtype=torch.int64)
            edge_index = torch.stack([src, dst])
            data['Mole', f'connected__{0}', 'Entity'].edge_index = edge_index
        else:
            for i in range(1, self.levels):
                mask = (entity_mole_weight > (i / self.levels)) & \
                       (entity_mole_weight <= ((i + 1) / self.levels))
                edge_index = torch.from_numpy(np.vstack(mask.nonzero()))

                if edge_index.size(0) > 0:
                    edge_index = edge_index.flip([0])
                    data['Mole', f'connected__{i}', 'Entity'].edge_index = edge_index

        return data

    def hetero_to_homo(self, data):
        entity_offset = 0
        mole_offset = entity_offset + data['Entity'].x.size(0)

        x_all = torch.cat([data['Entity'].x, data['Mole'].x], dim=0)

        edge_index_list = []
        edge_type_list = []

        for i in range(self.levels):
            key = ('Mole', f'connected__{i}', 'Entity')
            if key in data.edge_types:
                src, dst = data[key].edge_index
                edge_index_list.append(torch.stack([src + mole_offset, dst + entity_offset], dim=0))
                edge_type_list.append(torch.full((len(src),), self.edge_type_mapping[key]))

        edge_index = torch.cat(edge_index_list, dim=1).to(self.device)

        edge_type = torch.cat(edge_type_list, dim=0).to(self.device)

        return x_all, edge_index, edge_type

    def forward(self, emb_entity, emb_mole, entity_mole_weights):

        data = self.create_hetero_graph(emb_entity, emb_mole, entity_mole_weights)

        x, edge_index, edge_type = self.hetero_to_homo(data)

        out1 = self.conv1(x, edge_index, edge_type)
        out1 = F.relu(out1)
        out = self.conv2(out1, edge_index, edge_type)

        entity_offset = 0
        mole_offset = entity_offset + data['Entity'].x.size(0)

        out_emb_entity = out[entity_offset:mole_offset]
        out_emb_mole = out[mole_offset:]

        return out_emb_entity.unsqueeze(0)