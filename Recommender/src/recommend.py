import argparse
import dill
import numpy as np
import torch
import requests
from bs4 import BeautifulSoup
from Recommender.src.modules.CIDGMed import CIDGMed
from Recommender.src.modules.causal_construction import CausaltyGraph4Visit
from Recommender.src.training import Test, Train, Evaluate
from Recommender.src.util import buildPrjSmiles
from concurrent.futures import ThreadPoolExecutor

def set_seed():
    torch.manual_seed(1203)
    np.random.seed(2048)


def parse_args():
    parser = argparse.ArgumentParser()

    parser.add_argument("--debug", default=False,
                        help="debug mode, the number of samples, "
                             "the number of generations run are very small, "
                             "designed to run on cpu, the development of the use of")
    parser.add_argument("--Test", default=False, help="test mode")

    # environment
    parser.add_argument('--dataset', default='mimic4', help='mimic3/mimic4')
    parser.add_argument('--resume_path', default="../saved/trained_model_10epoch", type=str,
                        help='path of well trained model, only for evaluating the model, needs to be replaced manually')
    parser.add_argument('--device', type=int, default=0, help='gpu id to run on, negative for cpu')

    # parameters
    parser.add_argument('--dim', default=64, type=int, help='model dimension')
    parser.add_argument('--lr', default=5e-4, type=float, help='learning rate')
    parser.add_argument('--dp', default=0.7, type=float, help='dropout ratio')
    parser.add_argument("--regular", type=float, default=0.005, help="regularization parameter")
    parser.add_argument('--target_ddi', type=float, default=0.06, help='expected ddi for training')
    parser.add_argument('--coef', default=2.5, type=float, help='coefficient for DDI Loss Weight Annealing')
    parser.add_argument('--epochs', default=5, type=int, help='the epochs for training')

    args = parser.parse_args()
    if args.Test and args.resume_path is None:
        raise FileNotFoundError('Can\'t Load Model Weight From Empty Dir')

    return args

def get_drug_desc(atc4_code):

    url = f"https://atcddd.fhi.no/atc_ddd_index/?code={atc4_code}&showdescription=no"
    query = f"code={atc4_code}&showdescription=no"
    response = requests.get(url)

    soup = BeautifulSoup(response.text,"html.parser")
    div = soup.find("div",attrs={"id":"content"})
    b_tags = div.find_all("b")

    for b_tag in b_tags:
        a_tag = b_tag.find("a",href=True)
        if a_tag and query in a_tag["href"]:
            return a_tag.text

    return "Error"

def pipeline_recommender(eval, subject_id, hadm_id):
    set_seed()
    args = parse_args()
    #print(args)
    if not torch.cuda.is_available() or args.device < 0:
        device = torch.device("cpu")
        if not args.Test:
            print("GPU unavailable, switch to debug mode")
            args.debug = True
    else:
        device = torch.device(f'cuda:{args.device}')

    data_path = f'Recommender/data/output/records_final.pkl'
    voc_path = f'Recommender/data/output/voc_final.pkl'
    ddi_adj_path = f'Recommender/data/output/ddi_A_final.pkl'
    molecule_path = f'Recommender/data/input/idx2drug.pkl'
    relevance_diag_med_path = f'Recommender/data/graphs/Diag_Med_causal_effect.pkl'
    relevance_proc_med_path = f'Recommender/data/graphs/Proc_Med_causal_effect.pkl'

    with open(ddi_adj_path, 'rb') as Fin:
        ddi_adj = torch.from_numpy(dill.load(Fin)).to(device)
    with open(data_path, 'rb') as Fin:
        data = dill.load(Fin)
        adm_id = 0
        for patient in data:
            for adm in patient:
                adm.append(adm_id)
                adm_id += 1
        if args.debug:
            data = data[:5]
            data = data[1:]
    with open(voc_path, 'rb') as Fin:
        voc = dill.load(Fin)
    with open(molecule_path, 'rb') as Fin:
        molecule = dill.load(Fin)
    with open(relevance_proc_med_path, 'rb') as Fin:
        relevance_proc_med = dill.load(Fin)
    with open(relevance_diag_med_path, 'rb') as Fin:
        relevance_diag_med = dill.load(Fin)

    diag_voc, pro_voc, med_voc = voc['diag_voc'], voc['pro_voc'], voc['med_voc']
    voc_size = [
        len(diag_voc.idx2word),
        len(pro_voc.idx2word),
        len(med_voc.idx2word)
    ]

    binary_projection, average_projection, smiles_list = buildPrjSmiles(molecule, med_voc.idx2word)

    relevance_diag_mole = np.dot(relevance_diag_med.to_numpy(), binary_projection)
    relevance_proc_mole = np.dot(relevance_proc_med.to_numpy(), binary_projection)
    relevance_med_mole = average_projection
    mole_relevance = [relevance_diag_mole, relevance_proc_mole, relevance_med_mole, binary_projection]
    voc_size.append(relevance_med_mole.shape[1])

    unique_val = f"{subject_id}_{hadm_id}"

    causal_graph = CausaltyGraph4Visit(eval, data, voc_size[0], voc_size[1], voc_size[2], args.dataset, unique_val)

    model = CIDGMed(
        causal_graph=causal_graph,
        mole_relevance=mole_relevance,
        tensor_ddi_adj=ddi_adj,
        dropout=args.dp,
        emb_dim=args.dim,
        voc_size=voc_size,
        device=device
    ).to(device)

    adm_id = 0
    for patient in eval:
        for adm in patient:
            adm.append(adm_id)
            adm_id += 1

    smm_record = Evaluate(model, device, eval)

    for pt_idx, y_pred_label in enumerate(smm_record):
        for adm_idx, y_pred_label_adm in enumerate(y_pred_label):
            y_labels = []
            for value in y_pred_label_adm:
                y_labels.append(med_voc.idx2word[value])
            with ThreadPoolExecutor() as executor:
                y_labels = list(executor.map(get_drug_desc, y_labels))
                print(y_labels)

    return y_labels
"""

if __name__ == '__main__':
    set_seed()
    args = parse_args()
    print(args)
    if not torch.cuda.is_available() or args.device < 0:
        device = torch.device("cpu")
        if not args.Test:
            print("GPU unavailable, switch to debug mode")
            args.debug = True
    else:
        device = torch.device(f'cuda:{args.device}')

    data_path = f'../data/output/records_final.pkl'
    voc_path = f'../data/output/voc_final.pkl'
    ddi_adj_path = f'../data/output/ddi_A_final.pkl'
    ddi_mask_path = f'../data/output/ddi_mask_H.pkl'
    molecule_path = f'../data/input/idx2drug.pkl'
    relevance_diag_med_path = f'../data/graphs/Diag_Med_causal_effect.pkl'
    relevance_proc_med_path = f'../data/graphs/Proc_Med_causal_effect.pkl'

    with open(ddi_adj_path, 'rb') as Fin:
        ddi_adj = torch.from_numpy(dill.load(Fin)).to(device)
    with open(ddi_mask_path, 'rb') as Fin:
        ddi_mask_H = torch.from_numpy(dill.load(Fin)).to(device)
    with open(data_path, 'rb') as Fin:
        data = dill.load(Fin)
        adm_id = 0
        for patient in data:
            for adm in patient:
                adm.append(adm_id)
                adm_id += 1
        if args.debug:
            data = data[:5]
            data = data[1:]
    with open(voc_path, 'rb') as Fin:
        voc = dill.load(Fin)
    with open(molecule_path, 'rb') as Fin:
        molecule = dill.load(Fin)
    with open(relevance_proc_med_path, 'rb') as Fin:
        relevance_proc_med = dill.load(Fin)
    with open(relevance_diag_med_path, 'rb') as Fin:
        relevance_diag_med = dill.load(Fin)

    diag_voc, pro_voc, med_voc = voc['diag_voc'], voc['pro_voc'], voc['med_voc']
    voc_size = [
        len(diag_voc.idx2word),
        len(pro_voc.idx2word),
        len(med_voc.idx2word)
    ]

    split_point = int(len(data) * 2 / 3)
    data_train = data[:split_point]
    eval_len = int(len(data[split_point:]) / 2)
    data_test = data[split_point:split_point + eval_len]
    data_eval = data[split_point + eval_len:]

    binary_projection, average_projection, smiles_list = buildPrjSmiles(molecule, med_voc.idx2word)

    relevance_diag_mole = np.dot(relevance_diag_med.to_numpy(), binary_projection)
    relevance_proc_mole = np.dot(relevance_proc_med.to_numpy(), binary_projection)
    relevance_med_mole = average_projection
    mole_relevance = [relevance_diag_mole, relevance_proc_mole, relevance_med_mole, binary_projection]
    voc_size.append(relevance_med_mole.shape[1])

    causal_graph = CausaltyGraph4Visit(data, data_train, voc_size[0], voc_size[1], voc_size[2], args.dataset)

    model = CIDGMed(
        causal_graph=causal_graph,
        mole_relevance=mole_relevance,
        tensor_ddi_adj=ddi_adj,
        dropout=args.dp,
        emb_dim=args.dim,
        voc_size=voc_size,
        device=device
    ).to(device)

    print("1.Training Phase")
    if args.Test:
        print("Test mode, skip training phase")
        with open(args.resume_path, 'rb') as Fin:
            model.load_state_dict(torch.load(Fin, map_location=device))
    else:
        model = Train(model, device, data_train, data_eval, voc_size, args)

    print("2.Testing Phase")
    Test(model, device, data_test, voc_size)
    """