from Recommender.data.processing import preprocess_pipeline
from Recommender.src.recommend import pipeline_recommender
from ReportGeneration.report_generation import local_search
from langchain.prompts import PromptTemplate

template = """ You are a medical assistant to assist doctors with dealing with patients who may be suspected of sepsis.
You must generate a report with the information given to you. Go into detail of symptoms, specific causes for sepsis and 
the treatments recommended which must be specific to the given patient. Reduce the amount of generalisation.
The classifier suggests that the patient is sepsis {classifier_label}. 
The feature importance of all the factors considered for the above decision will be given to you in a JSON format
along with the values observed in the patient.
The feature_importance with values are {feature_importance}.
The recommended medication is given as a list. If the patient is not Positive, no medication will be given.
The recommended medications are : {medication_list}. Do not just list the medications. Give some context to all of them.

Give a report with sufficient details to help the doctor and other users understand the case better and explain the 
suggestions properly. Provide the data in html format with proper formatting for headings and new lines.
"""


def classifier_output(json_input):

    return "Positive", {
        "icu_length_of_stay":"5 days",
        "temperature_max": "38C",
        "potassium":"4.22mmol/l"
    }


def process_codes(dict_list):

    required_list = list()
    for json in dict_list:
        required_list.append(json['value'])

    return required_list

def recommender_output(json_input):

    #subject_id = [10001401]
    #hadm_id = [21544441]
    #icd_codes_list = [["I10","D259","Z87891","E785","E890"]]
    #pro_codes_list = [["0TTB4ZZ","07BC4ZX","8E0W4CZ"]]

    subject_id = [int(json_input["subject_id"])]
    hadm_id = [int (json_input["hadm_id"])]
    icd_codes_list = [process_codes(json_input["icd_codes"])]
    proc_codes_list = [process_codes(json_input["proc_codes"])]

    data_eval = preprocess_pipeline(subject_id, hadm_id, icd_codes_list, proc_codes_list)
    medication_list =  pipeline_recommender(data_eval, str(subject_id[0]), str(hadm_id[0]))
    return medication_list

def generate_report(classifier_label, feature_importance, medication_list):

    prompt_template = PromptTemplate(
        input_variables=["classifier_label","feature_importance","medication_list"],
        template = template
    )

    formatted_prompt = prompt_template.format(
        classifier_label=classifier_label,
        feature_importance=feature_importance,
        medication_list=medication_list
    )

    response = local_search(formatted_prompt)
    return response


def pipeline(json_input):

    classification_label, feature_importance = classifier_output(json_input)
    medication_list = list()

    if classification_label == "Positive":
        medication_list = recommender_output(json_input)

    report = generate_report(classification_label, feature_importance, medication_list)

    return classification_label, medication_list, report