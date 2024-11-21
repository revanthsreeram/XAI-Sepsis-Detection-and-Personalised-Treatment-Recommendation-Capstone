from Recommender.data.processing import preprocess_pipeline
from Recommender.src.recommend import pipeline_recommender

def pipeline(json_input):
    subject_id = [10001401]
    hadm_id = [21544441]
    icd_codes_list = [["I10","D259","Z87891","E785","E890"]]
    pro_codes_list = [["0TTB4ZZ","07BC4ZX","8E0W4CZ"]]

    data_eval = preprocess_pipeline(subject_id, hadm_id, icd_codes_list, pro_codes_list)
    return pipeline_recommender(data_eval, str(subject_id[0]), str(hadm_id[0]))
