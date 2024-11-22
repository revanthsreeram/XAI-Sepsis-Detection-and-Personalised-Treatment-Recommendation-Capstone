const diagnosisOptions = [
    {
        "value": "E785",
        "label": "Hyperlipidemia, unspecified"
    },
    {
        "value": "4019",
        "label": "Unspecified essential hypertension"
    },
    {
        "value": "Z87891",
        "label": "Personal history of nicotine dependence"
    },
    {
        "value": "I10",
        "label": "Essential (primary) hypertension"
    },
    {
        "value": "K219",
        "label": "Gastro-esophageal reflux disease without esophagitis"
    },
    {
        "value": "2724",
        "label": "Other and unspecified hyperlipidemia"
    },
    {
        "value": "N179",
        "label": "Acute kidney failure, unspecified"
    },
    {
        "value": "I2510",
        "label": "Atherosclerotic heart disease of native coronary artery without angina pectoris"
    },
    {
        "value": "4280",
        "label": "Congestive heart failure, unspecified"
    },
    {
        "value": "53081",
        "label": "Esophageal reflux"
    },
    {
        "value": "F329",
        "label": "Major depressive disorder, single episode, unspecified"
    },
    {
        "value": "Z7901",
        "label": "Long term (current) use of anticoagulants"
    },
    {
        "value": "Z794",
        "label": "Long term (current) use of insulin"
    },
    {
        "value": "25000",
        "label": "Diabetes mellitus without mention of complication, type II or unspecified type, not stated as uncontrolled"
    },
    {
        "value": "5849",
        "label": "Acute kidney failure, unspecified"
    },
    {
        "value": "42731",
        "label": "Atrial fibrillation"
    },
    {
        "value": "F419",
        "label": "Anxiety disorder, unspecified"
    },
    {
        "value": "A419",
        "label": "Sepsis, unspecified organism"
    },
    {
        "value": "41401",
        "label": "Coronary atherosclerosis of native coronary artery"
    },
    {
        "value": "311",
        "label": "Depressive disorder, not elsewhere classified"
    },
    {
        "value": "V1582",
        "label": "Personal history of tobacco use"
    },
    {
        "value": "E039",
        "label": "Hypothyroidism, unspecified"
    },
    {
        "value": "Z66",
        "label": "Do not resuscitate"
    },
    {
        "value": "E872",
        "label": "Acidosis"
    },
    {
        "value": "E1122",
        "label": "Type 2 diabetes mellitus with diabetic chronic kidney disease"
    },
    {
        "value": "D649",
        "label": "Anemia, unspecified"
    },
    {
        "value": "Z20822",
        "label": "Contact with and (suspected) exposure to COVID-19"
    },
    {
        "value": "40390",
        "label": "Hypertensive chronic kidney disease, unspecified, with chronic kidney disease stage I through stage IV, or unspecified"
    },
    {
        "value": "2859",
        "label": "Anemia, unspecified"
    },
    {
        "value": "N390",
        "label": "Urinary tract infection, site not specified"
    },
    {
        "value": "5990",
        "label": "Urinary tract infection, site not specified"
    },
    {
        "value": "I4891",
        "label": "Unspecified atrial fibrillation"
    },
    {
        "value": "G4733",
        "label": "Obstructive sleep apnea (adult) (pediatric)"
    },
    {
        "value": "V5861",
        "label": "Long-term (current) use of anticoagulants"
    },
    {
        "value": "V5867",
        "label": "Long-term (current) use of insulin"
    },
    {
        "value": "2449",
        "label": "Unspecified acquired hypothyroidism"
    },
    {
        "value": "E871",
        "label": "Hypo-osmolality and hyponatremia"
    },
    {
        "value": "R6521",
        "label": "Severe sepsis with septic shock"
    },
    {
        "value": "J9601",
        "label": "Acute respiratory failure with hypoxia"
    },
    {
        "value": "E119",
        "label": "Type 2 diabetes mellitus without complications"
    },
    {
        "value": "99592",
        "label": "Severe sepsis"
    },
    {
        "value": "J449",
        "label": "Chronic obstructive pulmonary disease, unspecified"
    },
    {
        "value": "N189",
        "label": "Chronic kidney disease, unspecified"
    },
    {
        "value": "Z86718",
        "label": "Personal history of other venous thrombosis and embolism"
    },
    {
        "value": "I129",
        "label": "Hypertensive chronic kidney disease with stage 1 through stage 4 chronic kidney disease, or unspecified chronic kidney disease"
    },
    {
        "value": "D62",
        "label": "Acute posthemorrhagic anemia"
    },
    {
        "value": "0389",
        "label": "Unspecified septicemia"
    },
    {
        "value": "5859",
        "label": "Chronic kidney disease, unspecified"
    },
    {
        "value": "E669",
        "label": "Obesity, unspecified"
    },
    {
        "value": "3051",
        "label": "Tobacco use disorder"
    },
    {
        "value": "I130",
        "label": "Hypertensive heart and chronic kidney disease with heart failure and stage 1 through stage 4 chronic kidney disease, or unspecified chronic kidney disease"
    },
    {
        "value": "Y929",
        "label": "Unspecified place or not applicable"
    },
    {
        "value": "G8929",
        "label": "Other chronic pain"
    },
    {
        "value": "32723",
        "label": "Obstructive sleep apnea (adult)(pediatric)"
    },
    {
        "value": "5856",
        "label": "End stage renal disease"
    },
    {
        "value": "F17210",
        "label": "Nicotine dependence, cigarettes, uncomplicated"
    },
    {
        "value": "J45909",
        "label": "Unspecified asthma, uncomplicated"
    },
    {
        "value": "Z7902",
        "label": "Long term (current) use of antithrombotics/antiplatelets"
    },
    {
        "value": "I110",
        "label": "Hypertensive heart disease with heart failure"
    },
    {
        "value": "I480",
        "label": "Paroxysmal atrial fibrillation"
    },
    {
        "value": "Z515",
        "label": "Encounter for palliative care"
    },
    {
        "value": "I5032",
        "label": "Chronic diastolic (congestive) heart failure"
    },
    {
        "value": "J189",
        "label": "Pneumonia, unspecified organism"
    },
    {
        "value": "E875",
        "label": "Hyperkalemia"
    },
    {
        "value": "N186",
        "label": "End stage renal disease"
    },
    {
        "value": "I252",
        "label": "Old myocardial infarction"
    },
    {
        "value": "2761",
        "label": "Hyposmolality and/or hyponatremia"
    },
    {
        "value": "30000",
        "label": "Anxiety state, unspecified"
    },
    {
        "value": "D696",
        "label": "Thrombocytopenia, unspecified"
    },
    {
        "value": "Z8673",
        "label": "Personal history of transient ischemic attack (TIA), and cerebral infarction without residual deficits"
    },
    {
        "value": "M109",
        "label": "Gout, unspecified"
    },
    {
        "value": "V1251",
        "label": "Personal history of venous thrombosis and embolism"
    },
    {
        "value": "40391",
        "label": "Hypertensive chronic kidney disease, unspecified, with chronic kidney disease stage V or end stage renal disease"
    },
    {
        "value": "412",
        "label": "Old myocardial infarction"
    },
    {
        "value": "2720",
        "label": "Pure hypercholesterolemia"
    },
    {
        "value": "K5900",
        "label": "Constipation, unspecified"
    },
    {
        "value": "2762",
        "label": "Acidosis"
    },
    {
        "value": "E1165",
        "label": "Type 2 diabetes mellitus with hyperglycemia"
    },
    {
        "value": "486",
        "label": "Pneumonia, organism unspecified"
    },
    {
        "value": "N400",
        "label": "Benign prostatic hyperplasia without lower urinary tract symptoms"
    },
    {
        "value": "496",
        "label": "Chronic airway obstruction, not elsewhere classified"
    },
    {
        "value": "78552",
        "label": "Septic shock"
    },
    {
        "value": "Z992",
        "label": "Dependence on renal dialysis"
    },
    {
        "value": "Y92230",
        "label": "Patient room in hospital as the place of occurrence of the external cause"
    },
    {
        "value": "V4582",
        "label": "Percutaneous transluminal coronary angioplasty status"
    },
    {
        "value": "3572",
        "label": "Polyneuropathy in diabetes"
    },
    {
        "value": "G92",
        "label": "Toxic encephalopathy"
    },
    {
        "value": "49390",
        "label": "Asthma, unspecified type, unspecified"
    },
    {
        "value": "Z955",
        "label": "Presence of coronary angioplasty implant and graft"
    },
    {
        "value": "G4700",
        "label": "Insomnia, unspecified"
    },
    {
        "value": "Z86711",
        "label": "Personal history of pulmonary embolism"
    },
    {
        "value": "E43",
        "label": "Unspecified severe protein-calorie malnutrition"
    },
    {
        "value": "V5866",
        "label": "Long-term (current) use of aspirin"
    },
    {
        "value": "D631",
        "label": "Anemia in chronic kidney disease"
    },
    {
        "value": "51881",
        "label": "Acute respiratory failure"
    },
    {
        "value": "E876",
        "label": "Hypokalemia"
    },
    {
        "value": "V4581",
        "label": "Aortocoronary bypass status"
    },
    {
        "value": "99591",
        "label": "Sepsis"
    },
    {
        "value": "Z951",
        "label": "Presence of aortocoronary bypass graft"
    },
    {
        "value": "D509",
        "label": "Iron deficiency anemia, unspecified"
    },
    {
        "value": "V4986",
        "label": "Do not resuscitate status"
    },
    {
        "value": "N183",
        "label": "Chronic kidney disease, stage 3 (moderate)"
    },
    {
        "value": "2749",
        "label": "Gout, unspecified"
    },
    {
        "value": "27800",
        "label": "Obesity, unspecified"
    },
    {
        "value": "33829",
        "label": "Other chronic pain"
    },
    {
        "value": "E8339",
        "label": "Fall on stairs or ladders in water transport injuring unspecified person"
    },
    {
        "value": "E8339",
        "label": "Other disorders of phosphorus metabolism"
    },
    {
        "value": "2875",
        "label": "Thrombocytopenia, unspecified"
    },
    {
        "value": "I5033",
        "label": "Acute on chronic diastolic (congestive) heart failure"
    },
    {
        "value": "E870",
        "label": "Hyperosmolality and hypernatremia"
    },
    {
        "value": "42832",
        "label": "Chronic diastolic heart failure"
    },
    {
        "value": "73300",
        "label": "Osteoporosis, unspecified"
    },
    {
        "value": "N170",
        "label": "Acute kidney failure with tubular necrosis"
    },
    {
        "value": "41400",
        "label": "Coronary atherosclerosis of unspecified type of vessel, native or graft"
    },
    {
        "value": "2767",
        "label": "Hyperpotassemia"
    },
    {
        "value": "E860",
        "label": "Dehydration"
    },
    {
        "value": "E861",
        "label": "Hypovolemia"
    },
    {
        "value": "J690",
        "label": "Pneumonitis due to inhalation of food and vomit"
    },
    {
        "value": "28521",
        "label": "Anemia in chronic kidney disease"
    },
    {
        "value": "E1140",
        "label": "Type 2 diabetes mellitus with diabetic neuropathy, unspecified"
    },
    {
        "value": "Y92239",
        "label": "Unspecified place in hospital as the place of occurrence of the external cause"
    },
    {
        "value": "78791",
        "label": "Diarrhea"
    },
    {
        "value": "I5022",
        "label": "Chronic systolic (congestive) heart failure"
    },
    {
        "value": "60000",
        "label": "Hypertrophy (benign) of prostate without urinary obstruction and other lower urinary tract symptom (LUTS)"
    },
    {
        "value": "R197",
        "label": "Diarrhea, unspecified"
    },
    {
        "value": "Z781",
        "label": "Physical restraint status"
    },
    {
        "value": "V1254",
        "label": "Personal history of transient ischemic attack (TIA), and cerebral infarction without residual deficits"
    },
    {
        "value": "D6959",
        "label": "Other secondary thrombocytopenia"
    },
    {
        "value": "M810",
        "label": "Age-related osteoporosis without current pathological fracture"
    },
    {
        "value": "25060",
        "label": "Diabetes with neurological manifestations, type II or unspecified type, not stated as uncontrolled"
    },
    {
        "value": "T451X5A",
        "label": "Adverse effect of antineoplastic and immunosuppressive drugs, initial encounter"
    },
    {
        "value": "I959",
        "label": "Hypotension, unspecified"
    },
    {
        "value": "V4511",
        "label": "Renal dialysis status"
    },
    {
        "value": "27651",
        "label": "Dehydration"
    },
    {
        "value": "Y838",
        "label": "Other surgical procedures as the cause of abnormal reaction of the patient, or of later complication, without mention of misadventure at the time of the procedure"
    },
    {
        "value": "4168",
        "label": "Other chronic pulmonary heart diseases"
    },
    {
        "value": "E6601",
        "label": "Morbid (severe) obesity due to excess calories"
    },
    {
        "value": "56400",
        "label": "Constipation, unspecified"
    },
    {
        "value": "Y848",
        "label": "Other medical procedures as the cause of abnormal reaction of the patient, or of later complication, without mention of misadventure at the time of the procedure"
    },
    {
        "value": "K766",
        "label": "Portal hypertension"
    },
    {
        "value": "2851",
        "label": "Acute posthemorrhagic anemia"
    },
    {
        "value": "R0902",
        "label": "Hypoxemia"
    },
    {
        "value": "36201",
        "label": "Background diabetic retinopathy"
    },
    {
        "value": "4439",
        "label": "Peripheral vascular disease, unspecified"
    },
    {
        "value": "42822",
        "label": "Chronic systolic heart failure"
    },
    {
        "value": "D638",
        "label": "Anemia in other chronic diseases classified elsewhere"
    },
    {
        "value": "B9620",
        "label": "Unspecified Escherichia coli [E. coli] as the cause of diseases classified elsewhere"
    },
    {
        "value": "E46",
        "label": "Unspecified protein-calorie malnutrition"
    },
    {
        "value": "G40909",
        "label": "Epilepsy, unspecified, not intractable, without status epilepticus"
    },
    {
        "value": "R6520",
        "label": "Severe sepsis without septic shock"
    },
    {
        "value": "5853",
        "label": "Chronic kidney disease, Stage III (moderate)"
    },
    {
        "value": "2768",
        "label": "Hypopotassemia"
    },
    {
        "value": "E8798",
        "label": "Other specified procedures as the cause of abnormal reaction of patient, or of later complication, without mention of misadventure at time of procedure"
    },
    {
        "value": "Y92009",
        "label": "Unspecified place in unspecified non-institutional (private) residence as the place of occurrence of the external cause"
    },
    {
        "value": "R339",
        "label": "Retention of urine, unspecified"
    },
    {
        "value": "I120",
        "label": "Hypertensive chronic kidney disease with stage 5 chronic kidney disease or end stage renal disease"
    },
    {
        "value": "Z20828",
        "label": "Contact with and (suspected) exposure to other viral communicable diseases"
    },
    {
        "value": "42789",
        "label": "Other specified cardiac dysrhythmias"
    },
    {
        "value": "I2720",
        "label": "Pulmonary hypertension, unspecified"
    },
    {
        "value": "F05",
        "label": "Delirium due to known physiological condition"
    },
    {
        "value": "I5023",
        "label": "Acute on chronic systolic (congestive) heart failure"
    },
    {
        "value": "R1310",
        "label": "Dysphagia, unspecified"
    },
    {
        "value": "E8342",
        "label": "Other fall from one level to another in water transport injuring occupant of other watercraft -- crew"
    },
    {
        "value": "E8342",
        "label": "Hypomagnesemia"
    },
    {
        "value": "D72829",
        "label": "Elevated white blood cell count, unspecified"
    },
    {
        "value": "E8497",
        "label": "Accidents occurring in residential institution"
    },
    {
        "value": "G9341",
        "label": "Metabolic encephalopathy"
    },
    {
        "value": "D684",
        "label": "Acquired coagulation factor deficiency"
    },
    {
        "value": "F0390",
        "label": "Unspecified dementia, unspecified severity, without behavioral disturbance, psychotic disturbance, mood disturbance, and anxiety"
    },
    {
        "value": "2809",
        "label": "Iron deficiency anemia, unspecified"
    },
    {
        "value": "5715",
        "label": "Cirrhosis of liver without mention of alcohol"
    },
    {
        "value": "M1990",
        "label": "Unspecified osteoarthritis, unspecified site"
    },
    {
        "value": "78959",
        "label": "Other ascites"
    },
    {
        "value": "27801",
        "label": "Morbid obesity"
    },
    {
        "value": "Z9981",
        "label": "Dependence on supplemental oxygen"
    },
    {
        "value": "E1151",
        "label": "Type 2 diabetes mellitus with diabetic peripheral angiopathy without gangrene"
    },
    {
        "value": "V5865",
        "label": "Long-term (current) use of steroids"
    },
    {
        "value": "E559",
        "label": "Vitamin D deficiency, unspecified"
    },
    {
        "value": "Z23",
        "label": "Encounter for immunization"
    },
    {
        "value": "D61818",
        "label": "Other pancytopenia"
    },
    {
        "value": "42833",
        "label": "Acute on chronic diastolic heart failure"
    },
    {
        "value": "71590",
        "label": "Osteoarthrosis, unspecified whether generalized or localized, site unspecified"
    },
    {
        "value": "5845",
        "label": "Acute kidney failure with lesion of tubular necrosis"
    },
    {
        "value": "34590",
        "label": "Epilepsy, unspecified, without mention of intractable epilepsy"
    },
    {
        "value": "J90",
        "label": "Pleural effusion, not elsewhere classified"
    },
    {
        "value": "79902",
        "label": "Hypoxemia"
    },
    {
        "value": "Z681",
        "label": "Body mass index [BMI] 19.9 or less, adult"
    },
    {
        "value": "2760",
        "label": "Hyperosmolality and/or hypernatremia"
    },
    {
        "value": "Z950",
        "label": "Presence of cardiac pacemaker"
    },
    {
        "value": "5070",
        "label": "Pneumonitis due to inhalation of food or vomitus"
    },
    {
        "value": "R740",
        "label": "Nonspecific elevation of levels of transaminase and lactic acid dehydrogenase [LDH]"
    },
    {
        "value": "25040",
        "label": "Diabetes with renal manifestations, type II or unspecified type, not stated as uncontrolled"
    },
    {
        "value": "H409",
        "label": "Unspecified glaucoma"
    },
    {
        "value": "00845",
        "label": "Intestinal infection due to Clostridium difficile"
    },
    {
        "value": "D689",
        "label": "Coagulation defect, unspecified"
    },
    {
        "value": "5119",
        "label": "Unspecified pleural effusion"
    },
    {
        "value": "07054",
        "label": "Chronic hepatitis C without mention of hepatic coma"
    },
    {
        "value": "79092",
        "label": "Abnormal coagulation profile"
    },
    {
        "value": "I739",
        "label": "Peripheral vascular disease, unspecified"
    },
    {
        "value": "Z85828",
        "label": "Personal history of other malignant neoplasm of skin"
    },
    {
        "value": "Z9181",
        "label": "History of falling"
    },
    {
        "value": "V4365",
        "label": "Knee joint replacement"
    },
    {
        "value": "I132",
        "label": "Hypertensive heart and chronic kidney disease with heart failure and with stage 5 chronic kidney disease, or end stage renal disease"
    },
    {
        "value": "70703",
        "label": "Pressure ulcer, lower back"
    },
    {
        "value": "V4501",
        "label": "Cardiac pacemaker in situ"
    },
    {
        "value": "78820",
        "label": "Retention of urine, unspecified"
    },
    {
        "value": "G629",
        "label": "Polyneuropathy, unspecified"
    },
    {
        "value": "R000",
        "label": "Tachycardia, unspecified"
    },
    {
        "value": "A4151",
        "label": "Sepsis due to Escherichia coli [E. coli]"
    },
    {
        "value": "5712",
        "label": "Alcoholic cirrhosis of liver"
    },
    {
        "value": "G893",
        "label": "Neoplasm related pain (acute) (chronic)"
    },
    {
        "value": "V153",
        "label": "Personal history of irradiation, presenting hazards to health"
    },
    {
        "value": "V153",
        "label": "Person boarding or alighting a pedal cycle injured in collision with railway train or railway vehicle"
    },
    {
        "value": "28860",
        "label": "Leukocytosis, unspecified"
    },
    {
        "value": "N401",
        "label": "Benign prostatic hyperplasia with lower urinary tract symptoms"
    },
    {
        "value": "6826",
        "label": "Cellulitis and abscess of leg, except foot"
    },
    {
        "value": "E7800",
        "label": "Pure hypercholesterolemia, unspecified"
    },
    {
        "value": "V103",
        "label": "Personal history of malignant neoplasm of breast"
    },
    {
        "value": "V103",
        "label": "Person boarding or alighting a pedal cycle injured in collision with pedestrian or animal"
    },
    {
        "value": "B9689",
        "label": "Other specified bacterial agents as the cause of diseases classified elsewhere"
    },
    {
        "value": "C787",
        "label": "Secondary malignant neoplasm of liver and intrahepatic bile duct"
    },
    {
        "value": "B1920",
        "label": "Unspecified viral hepatitis C without hepatic coma"
    },
    {
        "value": "E11319",
        "label": "Type 2 diabetes mellitus with unspecified diabetic retinopathy without macular edema"
    },
    {
        "value": "Z993",
        "label": "Dependence on wheelchair"
    },
    {
        "value": "4254",
        "label": "Other primary cardiomyopathies"
    },
    {
        "value": "Z8546",
        "label": "Personal history of malignant neoplasm of prostate"
    },
    {
        "value": "V8741",
        "label": "Personal history of antineoplastic chemotherapy"
    },
    {
        "value": "J9811",
        "label": "Atelectasis"
    },
    {
        "value": "4589",
        "label": "Hypotension, unspecified"
    },
    {
        "value": "A4189",
        "label": "Other specified sepsis"
    },
    {
        "value": "D630",
        "label": "Anemia in neoplastic disease"
    },
    {
        "value": "R188",
        "label": "Other ascites"
    },
    {
        "value": "Z006",
        "label": "Encounter for examination for normal comparison and control in clinical research program"
    },
    {
        "value": "Z940",
        "label": "Kidney transplant status"
    },
    {
        "value": "4240",
        "label": "Mitral valve disorders"
    },
    {
        "value": "N184",
        "label": "Chronic kidney disease, stage 4 (severe)"
    },
    {
        "value": "Z853",
        "label": "Personal history of malignant neoplasm of breast"
    },
    {
        "value": "45981",
        "label": "Venous (peripheral) insufficiency, unspecified"
    },
    {
        "value": "R338",
        "label": "Other retention of urine"
    },
    {
        "value": "E9331",
        "label": "Antineoplastic and immunosuppressive drugs causing adverse effects in therapeutic use"
    },
    {
        "value": "E8770",
        "label": "Fluid overload, unspecified"
    },
    {
        "value": "E1142",
        "label": "Type 2 diabetes mellitus with diabetic polyneuropathy"
    },
    {
        "value": "I21A1",
        "label": "Myocardial infarction type 2"
    },
    {
        "value": "I951",
        "label": "Orthostatic hypotension"
    },
    {
        "value": "Z87440",
        "label": "Personal history of urinary (tract) infections"
    },
    {
        "value": "28529",
        "label": "Anemia of other chronic disease"
    },
    {
        "value": "I471",
        "label": "Supraventricular tachycardia"
    },
    {
        "value": "V1046",
        "label": "Personal history of malignant neoplasm of prostate"
    },
    {
        "value": "F319",
        "label": "Bipolar disorder, unspecified"
    },
    {
        "value": "Z6841",
        "label": "Body mass index [BMI] 40.0-44.9, adult"
    },
    {
        "value": "I255",
        "label": "Ischemic cardiomyopathy"
    },
    {
        "value": "E8780",
        "label": "Surgical operation with transplant of whole organ causing abnormal patient reaction, or later complication, without mention of misadventure at time of operation"
    },
    {
        "value": "27652",
        "label": "Hypovolemia"
    },
    {
        "value": "42823",
        "label": "Acute on chronic systolic heart failure"
    },
    {
        "value": "07070",
        "label": "Unspecified viral hepatitis C without hepatic coma"
    },
    {
        "value": "E11649",
        "label": "Type 2 diabetes mellitus with hypoglycemia without coma"
    },
    {
        "value": "V1581",
        "label": "Personal history of noncompliance with medical treatment, presenting hazards to health"
    },
    {
        "value": "N1830",
        "label": "Chronic kidney disease, stage 3 unspecified"
    },
    {
        "value": "5723",
        "label": "Portal hypertension"
    },
    {
        "value": "K7469",
        "label": "Other cirrhosis of liver"
    },
    {
        "value": "7907",
        "label": "Bacteremia"
    },
    {
        "value": "R791",
        "label": "Abnormal coagulation profile"
    },
    {
        "value": "K831",
        "label": "Obstruction of bile duct"
    },
    {
        "value": "B952",
        "label": "Enterococcus as the cause of diseases classified elsewhere"
    },
    {
        "value": "K7031",
        "label": "Alcoholic cirrhosis of liver with ascites"
    },
    {
        "value": "78659",
        "label": "Other chest pain"
    },
    {
        "value": "4241",
        "label": "Aortic valve disorders"
    },
    {
        "value": "3659",
        "label": "Unspecified glaucoma"
    },
    {
        "value": "I8510",
        "label": "Secondary esophageal varices without bleeding"
    },
    {
        "value": "V1255",
        "label": "Personal history of pulmonary embolism"
    },
    {
        "value": "2639",
        "label": "Unspecified protein-calorie malnutrition"
    },
    {
        "value": "M549",
        "label": "Dorsalgia, unspecified"
    },
    {
        "value": "78701",
        "label": "Nausea with vomiting"
    },
    {
        "value": "E8788",
        "label": "Other specified surgical operations and procedures causing abnormal patient reaction, or later complication, without mention of misadventure at time of operation"
    },
    {
        "value": "K3184",
        "label": "Gastroparesis"
    },
    {
        "value": "58381",
        "label": "Nephritis and nephropathy, not specified as acute or chronic, in diseases classified elsewhere"
    },
    {
        "value": "B961",
        "label": "Klebsiella pneumoniae [K. pneumoniae] as the cause of diseases classified elsewhere"
    },
    {
        "value": "78052",
        "label": "Insomnia, unspecified"
    },
    {
        "value": "R627",
        "label": "Adult failure to thrive"
    },
    {
        "value": "U071",
        "label": "COVID-19"
    },
    {
        "value": "K7200",
        "label": "Acute and subacute hepatic failure without coma"
    },
    {
        "value": "R112",
        "label": "Nausea with vomiting, unspecified"
    },
    {
        "value": "Z952",
        "label": "Presence of prosthetic heart valve"
    },
    {
        "value": "70715",
        "label": "Ulcer of other part of foot"
    },
    {
        "value": "5761",
        "label": "Cholangitis"
    },
    {
        "value": "E440",
        "label": "Moderate protein-calorie malnutrition"
    },
    {
        "value": "34982",
        "label": "Toxic encephalopathy"
    },
    {
        "value": "T380X5A",
        "label": "Adverse effect of glucocorticoids and synthetic analogues, initial encounter"
    },
    {
        "value": "E11621",
        "label": "Type 2 diabetes mellitus with foot ulcer"
    },
    {
        "value": "Z9049",
        "label": "Acquired absence of other specified parts of digestive tract"
    },
    {
        "value": "I340",
        "label": "Nonrheumatic mitral (valve) insufficiency"
    },
    {
        "value": "I4892",
        "label": "Unspecified atrial flutter"
    },
    {
        "value": "R7881",
        "label": "Bacteremia"
    },
    {
        "value": "C7951",
        "label": "Secondary malignant neoplasm of bone"
    },
    {
        "value": "I350",
        "label": "Nonrheumatic aortic (valve) stenosis"
    },
    {
        "value": "2930",
        "label": "Delirium due to conditions classified elsewhere"
    },
    {
        "value": "V420",
        "label": "Kidney replaced by transplant"
    },
    {
        "value": "V420",
        "label": "Car driver injured in collision with two- or three-wheeled motor vehicle in nontraffic accident"
    },
    {
        "value": "G9340",
        "label": "Encephalopathy, unspecified"
    },
    {
        "value": "5180",
        "label": "Pulmonary collapse"
    },
    {
        "value": "Y830",
        "label": "Surgical operation with transplant of whole organ as the cause of abnormal reaction of the patient, or of later complication, without mention of misadventure at the time of the procedure"
    },
    {
        "value": "Z9114",
        "label": "Patient's other noncompliance with medication regimen"
    },
    {
        "value": "V4364",
        "label": "Hip joint replacement"
    },
    {
        "value": "V4364",
        "label": "Car passenger injured in collision with van in traffic accident"
    },
    {
        "value": "I214",
        "label": "Non-ST elevation (NSTEMI) myocardial infarction"
    },
    {
        "value": "3569",
        "label": "Unspecified hereditary and idiopathic peripheral neuropathy"
    },
    {
        "value": "M069",
        "label": "Rheumatoid arthritis, unspecified"
    },
    {
        "value": "99859",
        "label": "Other postoperative infection"
    },
    {
        "value": "Z923",
        "label": "Personal history of irradiation"
    },
    {
        "value": "3004",
        "label": "Dysthymic disorder"
    },
    {
        "value": "25050",
        "label": "Diabetes with ophthalmic manifestations, type II or unspecified type, not stated as uncontrolled"
    },
    {
        "value": "K7290",
        "label": "Hepatic failure, unspecified without coma"
    },
    {
        "value": "F4310",
        "label": "Post-traumatic stress disorder, unspecified"
    },
    {
        "value": "7140",
        "label": "Rheumatoid arthritis"
    },
    {
        "value": "K921",
        "label": "Melena"
    },
    {
        "value": "V462",
        "label": "Other dependence on machines, supplemental oxygen"
    },
    {
        "value": "V462",
        "label": "Person on outside of car injured in collision with other nonmotor vehicle in nontraffic accident"
    },
    {
        "value": "K7460",
        "label": "Unspecified cirrhosis of liver"
    },
    {
        "value": "K7030",
        "label": "Alcoholic cirrhosis of liver without ascites"
    },
    {
        "value": "V1083",
        "label": "Personal history of other malignant neoplasm of skin"
    },
    {
        "value": "D539",
        "label": "Nutritional anemia, unspecified"
    },
    {
        "value": "78650",
        "label": "Chest pain, unspecified"
    },
    {
        "value": "Z931",
        "label": "Gastrostomy status"
    },
    {
        "value": "Z9221",
        "label": "Personal history of antineoplastic chemotherapy"
    },
    {
        "value": "J441",
        "label": "Chronic obstructive pulmonary disease with (acute) exacerbation"
    },
    {
        "value": "E8490",
        "label": "Home accidents"
    },
    {
        "value": "7245",
        "label": "Backache, unspecified"
    },
    {
        "value": "I472",
        "label": "Ventricular tachycardia"
    },
    {
        "value": "56210",
        "label": "Diverticulosis of colon (without mention of hemorrhage)"
    },
    {
        "value": "42732",
        "label": "Atrial flutter"
    },
    {
        "value": "Y832",
        "label": "Surgical operation with anastomosis, bypass or graft as the cause of abnormal reaction of the patient, or of later complication, without mention of misadventure at the time of the procedure"
    },
    {
        "value": "G43909",
        "label": "Migraine, unspecified, not intractable, without status migrainosus"
    },
    {
        "value": "03842",
        "label": "Septicemia due to escherichia coli [E. coli]"
    },
    {
        "value": "K567",
        "label": "Ileus, unspecified"
    },
    {
        "value": "34690",
        "label": "Migraine, unspecified, without mention of intractable migraine without mention of status migrainosus"
    },
    {
        "value": "04149",
        "label": "Other and unspecified Escherichia coli [E. coli]"
    },
    {
        "value": "K3189",
        "label": "Other diseases of stomach and duodenum"
    },
    {
        "value": "7904",
        "label": "Nonspecific elevation of levels of transaminase or lactic acid dehydrogenase [LDH]"
    },
    {
        "value": "R509",
        "label": "Fever, unspecified"
    },
    {
        "value": "73390",
        "label": "Disorder of bone and cartilage, unspecified"
    },
    {
        "value": "49320",
        "label": "Chronic obstructive asthma, unspecified"
    },
    {
        "value": "Z7982",
        "label": "Long term (current) use of aspirin"
    },
    {
        "value": "I272",
        "label": "Other secondary pulmonary hypertension"
    },
    {
        "value": "V1588",
        "label": "History of fall"
    },
    {
        "value": "5363",
        "label": "Gastroparesis"
    },
    {
        "value": "5762",
        "label": "Obstruction of bile duct"
    },
    {
        "value": "I509",
        "label": "Heart failure, unspecified"
    },
    {
        "value": "Z8619",
        "label": "Personal history of other infectious and parasitic diseases"
    },
    {
        "value": "E8782",
        "label": "Surgical operation with anastomosis, bypass, or graft, with natural or artificial tissues used as implant causing abnormal patient reaction, or later complication, without mention of misadventure at time of operation"
    },
    {
        "value": "F1010",
        "label": "Alcohol abuse, uncomplicated"
    },
    {
        "value": "V4589",
        "label": "Other postprocedural status"
    },
    {
        "value": "Z5111",
        "label": "Encounter for antineoplastic chemotherapy"
    },
    {
        "value": "99681",
        "label": "Complications of transplanted kidney"
    },
    {
        "value": "N319",
        "label": "Neuromuscular dysfunction of bladder, unspecified"
    },
    {
        "value": "M545",
        "label": "Low back pain"
    },
    {
        "value": "7242",
        "label": "Lumbago"
    },
    {
        "value": "R109",
        "label": "Unspecified abdominal pain"
    },
    {
        "value": "K7581",
        "label": "Nonalcoholic steatohepatitis (NASH)"
    },
    {
        "value": "29680",
        "label": "Bipolar disorder, unspecified"
    },
    {
        "value": "L03116",
        "label": "Cellulitis of left lower limb"
    },
    {
        "value": "J9621",
        "label": "Acute and chronic respiratory failure with hypoxia"
    },
    {
        "value": "F32A",
        "label": "Depression, unspecified"
    },
    {
        "value": "R570",
        "label": "Cardiogenic shock"
    },
    {
        "value": "30500",
        "label": "Alcohol abuse, unspecified"
    },
    {
        "value": "5854",
        "label": "Chronic kidney disease, Stage IV (severe)"
    },
    {
        "value": "Z95810",
        "label": "Presence of automatic (implantable) cardiac defibrillator"
    },
    {
        "value": "V667",
        "label": "Encounter for palliative care"
    },
    {
        "value": "V667",
        "label": "Person on outside of heavy transport vehicle injured in collision with other nonmotor vehicle in traffic accident"
    },
    {
        "value": "5770",
        "label": "Acute pancreatitis"
    },
    {
        "value": "E1121",
        "label": "Type 2 diabetes mellitus with diabetic nephropathy"
    },
    {
        "value": "41071",
        "label": "Subendocardial infarction, initial episode of care"
    },
    {
        "value": "R001",
        "label": "Bradycardia, unspecified"
    },
    {
        "value": "V4572",
        "label": "Acquired absence of intestine (large) (small)"
    },
    {
        "value": "5771",
        "label": "Chronic pancreatitis"
    },
    {
        "value": "I482",
        "label": "Chronic atrial fibrillation"
    },
    {
        "value": "V1302",
        "label": "Personal history, urinary (tract) infection"
    },
    {
        "value": "J9602",
        "label": "Acute respiratory failure with hypercapnia"
    },
    {
        "value": "04104",
        "label": "Streptococcus infection in conditions classified elsewhere and of unspecified site, streptococcus, group D [Enterococcus]"
    },
    {
        "value": "Z9884",
        "label": "Bariatric surgery status"
    },
    {
        "value": "L03115",
        "label": "Cellulitis of right lower limb"
    },
    {
        "value": "R64",
        "label": "Cachexia"
    },
    {
        "value": "78060",
        "label": "Fever, unspecified"
    },
    {
        "value": "25080",
        "label": "Diabetes with other specified manifestations, type II or unspecified type, not stated as uncontrolled"
    },
    {
        "value": "4011",
        "label": "Benign essential hypertension"
    },
    {
        "value": "2753",
        "label": "Disorders of phosphorus metabolism"
    },
    {
        "value": "A0472",
        "label": "Enterocolitis due to Clostridium difficile, not specified as recurrent"
    },
    {
        "value": "V4502",
        "label": "Automatic implantable cardiac defibrillator in situ"
    },
    {
        "value": "Z944",
        "label": "Liver transplant status"
    },
    {
        "value": "29420",
        "label": "Dementia, unspecified, without behavioral disturbance"
    },
    {
        "value": "R5081",
        "label": "Fever presenting with conditions classified elsewhere"
    },
    {
        "value": "E9342",
        "label": "Anticoagulants causing adverse effects in therapeutic use"
    },
    {
        "value": "E8781",
        "label": "Surgical operation with implant of artificial internal device causing abnormal patient reaction, or later complication,without mention of misadventure at time of operation"
    },
    {
        "value": "E874",
        "label": "Mixed disorder of acid-base balance"
    },
    {
        "value": "V433",
        "label": "Heart valve replaced by other means"
    },
    {
        "value": "V433",
        "label": "Unspecified car occupant injured in collision with car, pick-up truck or van in nontraffic accident"
    },
    {
        "value": "V5811",
        "label": "Encounter for antineoplastic chemotherapy"
    },
    {
        "value": "7823",
        "label": "Edema"
    },
    {
        "value": "59654",
        "label": "Neurogenic bladder NOS"
    },
    {
        "value": "J95851",
        "label": "Ventilator associated pneumonia"
    },
    {
        "value": "F0280",
        "label": "Dementia in other diseases classified elsewhere, unspecified severity, without behavioral disturbance, psychotic disturbance, mood disturbance, and anxiety"
    },
    {
        "value": "78720",
        "label": "Dysphagia, unspecified"
    },
    {
        "value": "591",
        "label": "Hydronephrosis"
    },
    {
        "value": "Z7984",
        "label": "Long term (current) use of oral hypoglycemic drugs"
    },
    {
        "value": "45829",
        "label": "Other iatrogenic hypotension"
    },
    {
        "value": "R7401",
        "label": "Elevation of levels of liver transaminase levels"
    },
    {
        "value": "Z8616",
        "label": "Personal history of COVID-19"
    },
    {
        "value": "B9561",
        "label": "Methicillin susceptible Staphylococcus aureus infection as the cause of diseases classified elsewhere"
    },
    {
        "value": "43889",
        "label": "Other late effects of cerebrovascular disease"
    },
    {
        "value": "45621",
        "label": "Esophageal varices in diseases classified elsewhere, without mention of bleeding"
    },
    {
        "value": "49121",
        "label": "Obstructive chronic bronchitis with (acute) exacerbation"
    },
    {
        "value": "R531",
        "label": "Weakness"
    },
    {
        "value": "V08",
        "label": "Asymptomatic human immunodeficiency virus [HIV] infection status"
    },
    {
        "value": "R578",
        "label": "Other shock"
    },
    {
        "value": "I878",
        "label": "Other specified disorders of veins"
    },
    {
        "value": "Z85038",
        "label": "Personal history of other malignant neoplasm of large intestine"
    },
    {
        "value": "Z720",
        "label": "Tobacco use"
    },
    {
        "value": "5601",
        "label": "Paralytic ileus"
    },
    {
        "value": "E873",
        "label": "Alkalosis"
    },
    {
        "value": "V707",
        "label": "Examination of participant in clinical trial"
    },
    {
        "value": "V707",
        "label": "Person on outside of bus injured in collision with pedestrian or animal in traffic accident"
    },
    {
        "value": "Z1159",
        "label": "Encounter for screening for other viral diseases"
    },
    {
        "value": "28419",
        "label": "Other pancytopenia"
    },
    {
        "value": "F1021",
        "label": "Alcohol dependence, in remission"
    },
    {
        "value": "R32",
        "label": "Unspecified urinary incontinence"
    },
    {
        "value": "Z8249",
        "label": "Family history of ischemic heart disease and other diseases of the circulatory system"
    },
    {
        "value": "Z21",
        "label": "Asymptomatic human immunodeficiency virus [HIV] infection status"
    },
    {
        "value": "60001",
        "label": "Hypertrophy (benign) of prostate with urinary obstruction and other lower urinary tract symptoms (LUTS)"
    },
    {
        "value": "E222",
        "label": "Syndrome of inappropriate secretion of antidiuretic hormone"
    },
    {
        "value": "M8580",
        "label": "Other specified disorders of bone density and structure, unspecified site"
    },
    {
        "value": "K760",
        "label": "Fatty (change of) liver, not elsewhere classified"
    },
    {
        "value": "V1204",
        "label": "Personal history of Methicillin resistant Staphylococcus aureus"
    },
    {
        "value": "B965",
        "label": "Pseudomonas (aeruginosa) (mallei) (pseudomallei) as the cause of diseases classified elsewhere"
    },
    {
        "value": "T45515A",
        "label": "Adverse effect of anticoagulants, initial encounter"
    },
    {
        "value": "F1120",
        "label": "Opioid dependence, uncomplicated"
    },
    {
        "value": "V5869",
        "label": "Long-term (current) use of other medications"
    },
    {
        "value": "G20",
        "label": "Parkinson's disease"
    },
    {
        "value": "G2581",
        "label": "Restless legs syndrome"
    },
    {
        "value": "B370",
        "label": "Candidal stomatitis"
    },
    {
        "value": "1977",
        "label": "Malignant neoplasm of liver, secondary"
    },
    {
        "value": "V1005",
        "label": "Personal history of malignant neoplasm of large intestine"
    },
    {
        "value": "C786",
        "label": "Secondary malignant neoplasm of retroperitoneum and peritoneum"
    },
    {
        "value": "78900",
        "label": "Abdominal pain, unspecified site"
    },
    {
        "value": "70722",
        "label": "Pressure ulcer, stage II"
    },
    {
        "value": "E8889",
        "label": "Unspecified fall"
    },
    {
        "value": "E8889",
        "label": "Other specified metabolic disorders"
    },
    {
        "value": "X58XXXA",
        "label": "Exposure to other specified factors, initial encounter"
    },
    {
        "value": "70714",
        "label": "Ulcer of heel and midfoot"
    },
    {
        "value": "Z933",
        "label": "Colostomy status"
    },
    {
        "value": "V4586",
        "label": "Bariatric surgery status"
    },
    {
        "value": "E1022",
        "label": "Type 1 diabetes mellitus with diabetic chronic kidney disease"
    },
    {
        "value": "T402X5A",
        "label": "Adverse effect of other opioids, initial encounter"
    },
    {
        "value": "R110",
        "label": "Nausea"
    },
    {
        "value": "R0789",
        "label": "Other chest pain"
    },
    {
        "value": "K861",
        "label": "Other chronic pancreatitis"
    },
    {
        "value": "I2699",
        "label": "Other pulmonary embolism without acute cor pulmonale"
    },
    {
        "value": "7850",
        "label": "Tachycardia, unspecified"
    },
    {
        "value": "V441",
        "label": "Gastrostomy status"
    },
    {
        "value": "V441",
        "label": "Car passenger injured in collision with heavy transport vehicle or bus in nontraffic accident"
    },
    {
        "value": "E1169",
        "label": "Type 2 diabetes mellitus with other specified complication"
    },
    {
        "value": "E8351",
        "label": "Other and unspecified fall in water transport injuring occupant of small boat, powered"
    },
    {
        "value": "E8351",
        "label": "Hypocalcemia"
    },
    {
        "value": "R319",
        "label": "Hematuria, unspecified"
    },
    {
        "value": "I429",
        "label": "Cardiomyopathy, unspecified"
    },
    {
        "value": "Z7682",
        "label": "Awaiting organ transplant status"
    },
    {
        "value": "78830",
        "label": "Urinary incontinence, unspecified"
    },
    {
        "value": "28800",
        "label": "Neutropenia, unspecified"
    },
    {
        "value": "Z6842",
        "label": "Body mass index [BMI] 45.0-49.9, adult"
    },
    {
        "value": "4580",
        "label": "Orthostatic hypotension"
    },
    {
        "value": "4271",
        "label": "Paroxysmal ventricular tachycardia"
    },
    {
        "value": "R079",
        "label": "Chest pain, unspecified"
    },
    {
        "value": "7291",
        "label": "Myalgia and myositis, unspecified"
    },
    {
        "value": "J9691",
        "label": "Respiratory failure, unspecified with hypoxia"
    },
    {
        "value": "25061",
        "label": "Diabetes with neurological manifestations, type I [juvenile type], not stated as uncontrolled"
    },
    {
        "value": "2869",
        "label": "Other and unspecified coagulation defects"
    },
    {
        "value": "25002",
        "label": "Diabetes mellitus without mention of complication, type II or unspecified type, uncontrolled"
    },
    {
        "value": "27669",
        "label": "Other fluid overload"
    },
    {
        "value": "29410",
        "label": "Dementia in conditions classified elsewhere without behavioral disturbance"
    },
    {
        "value": "R918",
        "label": "Other nonspecific abnormal finding of lung field"
    },
    {
        "value": "34830",
        "label": "Encephalopathy, unspecified"
    },
    {
        "value": "4148",
        "label": "Other specified forms of chronic ischemic heart disease"
    },
    {
        "value": "K529",
        "label": "Noninfective gastroenteritis and colitis, unspecified"
    },
    {
        "value": "I81",
        "label": "Portal vein thrombosis"
    },
    {
        "value": "E8809",
        "label": "Accidental fall on or from other stairs or steps"
    },
    {
        "value": "E8809",
        "label": "Other disorders of plasma-protein metabolism, not elsewhere classified"
    },
    {
        "value": "56409",
        "label": "Other constipation"
    },
    {
        "value": "I248",
        "label": "Other forms of acute ischemic heart disease"
    },
    {
        "value": "51889",
        "label": "Other diseases of lung, not elsewhere classified"
    },
    {
        "value": "B182",
        "label": "Chronic viral hepatitis C"
    },
    {
        "value": "T82868A",
        "label": "Thrombosis due to vascular prosthetic devices, implants and grafts, initial encounter"
    },
    {
        "value": "78061",
        "label": "Fever presenting with conditions classified elsewhere"
    },
    {
        "value": "A4101",
        "label": "Sepsis due to Methicillin susceptible Staphylococcus aureus"
    },
    {
        "value": "K521",
        "label": "Toxic gastroenteritis and colitis"
    },
    {
        "value": "04111",
        "label": "Methicillin susceptible Staphylococcus aureus in conditions classified elsewhere and of unspecified site"
    },
    {
        "value": "V463",
        "label": "Wheelchair dependence"
    },
    {
        "value": "V463",
        "label": "Unspecified car occupant injured in collision with other nonmotor vehicle in nontraffic accident"
    },
    {
        "value": "R410",
        "label": "Disorientation, unspecified"
    },
    {
        "value": "R1312",
        "label": "Dysphagia, oropharyngeal phase"
    },
    {
        "value": "D61810",
        "label": "Antineoplastic chemotherapy induced pancytopenia"
    },
    {
        "value": "R600",
        "label": "Localized edema"
    },
    {
        "value": "K5909",
        "label": "Other constipation"
    },
    {
        "value": "I428",
        "label": "Other cardiomyopathies"
    },
    {
        "value": "V4975",
        "label": "Below knee amputation status"
    },
    {
        "value": "K449",
        "label": "Diaphragmatic hernia without obstruction or gangrene"
    },
    {
        "value": "E8859",
        "label": "Fall from other slipping, tripping, or stumbling"
    },
    {
        "value": "E9320",
        "label": "Adrenal cortical steroids causing adverse effects in therapeutic use"
    },
    {
        "value": "7802",
        "label": "Syncope and collapse"
    },
    {
        "value": "2689",
        "label": "Unspecified vitamin D deficiency"
    },
    {
        "value": "20280",
        "label": "Other malignant lymphomas, unspecified site, extranodal and solid organ sites"
    },
    {
        "value": "R911",
        "label": "Solitary pulmonary nodule"
    },
    {
        "value": "D6481",
        "label": "Anemia due to antineoplastic chemotherapy"
    },
    {
        "value": "0413",
        "label": "Friedl\u00c3\u00a4nder's bacillus infection in conditions classified elsewhere and of unspecified site"
    },
    {
        "value": "7840",
        "label": "Headache"
    },
    {
        "value": "V4987",
        "label": "Physical restraints status"
    },
    {
        "value": "5789",
        "label": "Hemorrhage of gastrointestinal tract, unspecified"
    },
    {
        "value": "0417",
        "label": "Pseudomonas infection in conditions classified elsewhere and of unspecified site"
    },
    {
        "value": "2763",
        "label": "Alkalosis"
    },
    {
        "value": "R569",
        "label": "Unspecified convulsions"
    },
    {
        "value": "Z8551",
        "label": "Personal history of malignant neoplasm of bladder"
    },
    {
        "value": "0414",
        "label": "Escherichia coli [E. coli] infection in conditions classified elsewhere and of unspecified site"
    },
    {
        "value": "1970",
        "label": "Secondary malignant neoplasm of lung"
    },
    {
        "value": "Z96653",
        "label": "Presence of artificial knee joint, bilateral"
    },
    {
        "value": "E2740",
        "label": "Unspecified adrenocortical insufficiency"
    },
    {
        "value": "E8352",
        "label": "Other and unspecified fall in water transport injuring occupant of other watercraft -- crew"
    },
    {
        "value": "E8352",
        "label": "Hypercalcemia"
    },
    {
        "value": "A047",
        "label": "Enterocolitis due to Clostridium difficile"
    },
    {
        "value": "J159",
        "label": "Unspecified bacterial pneumonia"
    },
    {
        "value": "D709",
        "label": "Neutropenia, unspecified"
    },
    {
        "value": "I69354",
        "label": "Hemiplegia and hemiparesis following cerebral infarction affecting left non-dominant side"
    },
    {
        "value": "I872",
        "label": "Venous insufficiency (chronic) (peripheral)"
    },
    {
        "value": "E8499",
        "label": "Accidents occurring in unspecified place"
    },
    {
        "value": "Z6843",
        "label": "Body mass index [BMI] 50.0-59.9, adult"
    },
    {
        "value": "78079",
        "label": "Other malaise and fatigue"
    },
    {
        "value": "570",
        "label": "Acute and subacute necrosis of liver"
    },
    {
        "value": "1120",
        "label": "Candidiasis of mouth"
    },
    {
        "value": "0380",
        "label": "Streptococcal septicemia"
    },
    {
        "value": "W19XXXA",
        "label": "Unspecified fall, initial encounter"
    },
    {
        "value": "25062",
        "label": "Diabetes with neurological manifestations, type II or unspecified type, uncontrolled"
    },
    {
        "value": "03849",
        "label": "Other septicemia due to gram-negative organisms"
    },
    {
        "value": "Z932",
        "label": "Ileostomy status"
    },
    {
        "value": "1985",
        "label": "Secondary malignant neoplasm of bone and bone marrow"
    },
    {
        "value": "M797",
        "label": "Fibromyalgia"
    },
    {
        "value": "2752",
        "label": "Disorders of magnesium metabolism"
    },
    {
        "value": "Y92238",
        "label": "Other place in hospital as the place of occurrence of the external cause"
    },
    {
        "value": "Y846",
        "label": "Urinary catheterization as the cause of abnormal reaction of the patient, or of later complication, without mention of misadventure at the time of the procedure"
    },
    {
        "value": "30390",
        "label": "Other and unspecified alcohol dependence, unspecified"
    },
    {
        "value": "5533",
        "label": "Diaphragmatic hernia without mention of obstruction or gangrene"
    },
    {
        "value": "5559",
        "label": "Regional enteritis of unspecified site"
    },
    {
        "value": "Z7401",
        "label": "Bed confinement status"
    },
    {
        "value": "R7989",
        "label": "Other specified abnormal findings of blood chemistry"
    },
    {
        "value": "5722",
        "label": "Hepatic encephalopathy"
    },
    {
        "value": "04112",
        "label": "Methicillin resistant Staphylococcus aureus in conditions classified elsewhere and of unspecified site"
    },
    {
        "value": "R739",
        "label": "Hyperglycemia, unspecified"
    },
    {
        "value": "7295",
        "label": "Pain in limb"
    },
    {
        "value": "V4579",
        "label": "Other acquired absence of organ"
    },
    {
        "value": "Z8674",
        "label": "Personal history of sudden cardiac arrest"
    },
    {
        "value": "N136",
        "label": "Pyonephrosis"
    },
    {
        "value": "E890",
        "label": "Postprocedural hypothyroidism"
    },
    {
        "value": "6930",
        "label": "Dermatitis due to drugs and medicines taken internally"
    },
    {
        "value": "Z1624",
        "label": "Resistance to multiple antibiotics"
    },
    {
        "value": "3441",
        "label": "Paraplegia"
    },
    {
        "value": "5718",
        "label": "Other chronic nonalcoholic liver disease"
    },
    {
        "value": "K8309",
        "label": "Other cholangitis"
    },
    {
        "value": "C9000",
        "label": "Multiple myeloma not having achieved remission"
    },
    {
        "value": "B9562",
        "label": "Methicillin resistant Staphylococcus aureus infection as the cause of diseases classified elsewhere"
    },
    {
        "value": "V173",
        "label": "Family history of ischemic heart disease"
    },
    {
        "value": "V173",
        "label": "Person boarding or alighting a pedal cycle injured in collision with fixed or stationary object"
    },
    {
        "value": "042",
        "label": "Human immunodeficiency virus [HIV] disease"
    },
    {
        "value": "25051",
        "label": "Diabetes with ophthalmic manifestations, type I [juvenile type], not stated as uncontrolled"
    },
    {
        "value": "A4159",
        "label": "Other Gram-negative sepsis"
    },
    {
        "value": "R55",
        "label": "Syncope and collapse"
    },
    {
        "value": "V442",
        "label": "Ileostomy status"
    },
    {
        "value": "V442",
        "label": "Person on outside of car injured in collision with heavy transport vehicle or bus in nontraffic accident"
    },
    {
        "value": "I5030",
        "label": "Unspecified diastolic (congestive) heart failure"
    },
    {
        "value": "28749",
        "label": "Other secondary thrombocytopenia"
    },
    {
        "value": "78321",
        "label": "Loss of weight"
    },
    {
        "value": "I081",
        "label": "Rheumatic disorders of both mitral and tricuspid valves"
    },
    {
        "value": "Z9484",
        "label": "Stem cells transplant status"
    },
    {
        "value": "78702",
        "label": "Nausea alone"
    },
    {
        "value": "T80211A",
        "label": "Bloodstream infection due to central venous catheter, initial encounter"
    },
    {
        "value": "2800",
        "label": "Iron deficiency anemia secondary to blood loss (chronic)"
    },
    {
        "value": "Z590",
        "label": "Homelessness"
    },
    {
        "value": "Z85118",
        "label": "Personal history of other malignant neoplasm of bronchus and lung"
    },
    {
        "value": "2662",
        "label": "Other B-complex deficiencies"
    },
    {
        "value": "E10319",
        "label": "Type 1 diabetes mellitus with unspecified diabetic retinopathy without macular edema"
    },
    {
        "value": "34831",
        "label": "Metabolic encephalopathy"
    },
    {
        "value": "30393",
        "label": "Other and unspecified alcohol dependence, in remission"
    },
    {
        "value": "I447",
        "label": "Left bundle-branch block, unspecified"
    },
    {
        "value": "V6284",
        "label": "Suicidal ideation"
    },
    {
        "value": "A4181",
        "label": "Sepsis due to Enterococcus"
    },
    {
        "value": "V443",
        "label": "Colostomy status"
    },
    {
        "value": "V443",
        "label": "Unspecified car occupant injured in collision with heavy transport vehicle or bus in nontraffic accident"
    },
    {
        "value": "Z79899",
        "label": "Other long term (current) drug therapy"
    },
    {
        "value": "Z800",
        "label": "Family history of malignant neoplasm of digestive organs"
    },
    {
        "value": "J440",
        "label": "Chronic obstructive pulmonary disease with (acute) lower respiratory infection"
    },
    {
        "value": "7100",
        "label": "Systemic lupus erythematosus"
    },
    {
        "value": "Y831",
        "label": "Surgical operation with implant of artificial internal device as the cause of abnormal reaction of the patient, or of later complication, without mention of misadventure at the time of the procedure"
    },
    {
        "value": "J439",
        "label": "Emphysema, unspecified"
    },
    {
        "value": "33394",
        "label": "Restless legs syndrome (RLS)"
    },
    {
        "value": "3310",
        "label": "Alzheimer's disease"
    },
    {
        "value": "Z7952",
        "label": "Long term (current) use of systemic steroids"
    },
    {
        "value": "V160",
        "label": "Family history of malignant neoplasm of gastrointestinal tract"
    },
    {
        "value": "V160",
        "label": "Pedal cycle driver injured in collision with other nonmotor vehicle in nontraffic accident"
    },
    {
        "value": "E538",
        "label": "Deficiency of other specified B group vitamins"
    },
    {
        "value": "C61",
        "label": "Malignant neoplasm of prostate"
    },
    {
        "value": "R51",
        "label": "Headache"
    },
    {
        "value": "I952",
        "label": "Hypotension due to drugs"
    },
    {
        "value": "V454",
        "label": "Arthrodesis status"
    },
    {
        "value": "V454",
        "label": "Person boarding or alighting a car injured in collision with railway train or railway vehicle"
    },
    {
        "value": "6827",
        "label": "Cellulitis and abscess of foot, except toes"
    },
    {
        "value": "V1272",
        "label": "Personal history of colonic polyps"
    },
    {
        "value": "340",
        "label": "Multiple sclerosis"
    },
    {
        "value": "5920",
        "label": "Calculus of kidney"
    },
    {
        "value": "7837",
        "label": "Adult failure to thrive"
    },
    {
        "value": "J80",
        "label": "Acute respiratory distress syndrome"
    },
    {
        "value": "K5090",
        "label": "Crohn's disease, unspecified, without complications"
    },
    {
        "value": "Z96651",
        "label": "Presence of right artificial knee joint"
    },
    {
        "value": "E162",
        "label": "Hypoglycemia, unspecified"
    },
    {
        "value": "99674",
        "label": "Other complications due to other vascular device, implant, and graft"
    },
    {
        "value": "53550",
        "label": "Unspecified gastritis and gastroduodenitis, without mention of hemorrhage"
    },
    {
        "value": "N1330",
        "label": "Unspecified hydronephrosis"
    },
    {
        "value": "K922",
        "label": "Gastrointestinal hemorrhage, unspecified"
    },
    {
        "value": "Z96641",
        "label": "Presence of right artificial hip joint"
    },
    {
        "value": "3320",
        "label": "Paralysis agitans"
    },
    {
        "value": "V4983",
        "label": "Awaiting organ transplant status"
    },
    {
        "value": "D473",
        "label": "Essential (hemorrhagic) thrombocythemia"
    },
    {
        "value": "J811",
        "label": "Chronic pulmonary edema"
    },
    {
        "value": "N12",
        "label": "Tubulo-interstitial nephritis, not specified as acute or chronic"
    },
    {
        "value": "R45851",
        "label": "Suicidal ideations"
    },
    {
        "value": "G309",
        "label": "Alzheimer's disease, unspecified"
    },
    {
        "value": "K5903",
        "label": "Drug induced constipation"
    },
    {
        "value": "58881",
        "label": "Secondary hyperparathyroidism (of renal origin)"
    },
    {
        "value": "2948",
        "label": "Other persistent mental disorders due to conditions classified elsewhere"
    },
    {
        "value": "K651",
        "label": "Peritoneal abscess"
    },
    {
        "value": "R21",
        "label": "Rash and other nonspecific skin eruption"
    },
    {
        "value": "78097",
        "label": "Altered mental status"
    },
    {
        "value": "B20",
        "label": "Human immunodeficiency virus [HIV] disease"
    },
    {
        "value": "K830",
        "label": "Cholangitis"
    },
    {
        "value": "C7800",
        "label": "Secondary malignant neoplasm of unspecified lung"
    },
    {
        "value": "B964",
        "label": "Proteus (mirabilis) (morganii) as the cause of diseases classified elsewhere"
    },
    {
        "value": "K2970",
        "label": "Gastritis, unspecified, without bleeding"
    },
    {
        "value": "E1143",
        "label": "Type 2 diabetes mellitus with diabetic autonomic (poly)neuropathy"
    },
    {
        "value": "D801",
        "label": "Nonfamilial hypogammaglobulinemia"
    },
    {
        "value": "72989",
        "label": "Other musculoskeletal symptoms referable to limbs"
    },
    {
        "value": "D500",
        "label": "Iron deficiency anemia secondary to blood loss (chronic)"
    },
    {
        "value": "25041",
        "label": "Diabetes with renal manifestations, type I [juvenile type], not stated as uncontrolled"
    },
    {
        "value": "T368X5A",
        "label": "Adverse effect of other systemic antibiotics, initial encounter"
    },
    {
        "value": "I495",
        "label": "Sick sinus syndrome"
    },
    {
        "value": "5768",
        "label": "Other specified disorders of biliary tract"
    },
    {
        "value": "D6832",
        "label": "Hemorrhagic disorder due to extrinsic circulating anticoagulants"
    },
    {
        "value": "78009",
        "label": "Other alteration of consciousness"
    },
    {
        "value": "Z953",
        "label": "Presence of xenogenic heart valve"
    },
    {
        "value": "K2270",
        "label": "Barrett's esophagus without dysplasia"
    },
    {
        "value": "I330",
        "label": "Acute and subacute infective endocarditis"
    },
    {
        "value": "Z85528",
        "label": "Personal history of other malignant neoplasm of kidney"
    },
    {
        "value": "V427",
        "label": "Liver replaced by transplant"
    },
    {
        "value": "V427",
        "label": "Person on outside of car injured in collision with two- or three-wheeled motor vehicle in traffic accident"
    },
    {
        "value": "V4972",
        "label": "Other toe(s) amputation status"
    },
    {
        "value": "V422",
        "label": "Heart valve replaced by transplant"
    },
    {
        "value": "V422",
        "label": "Person on outside of car injured in collision with two- or three-wheeled motor vehicle in nontraffic accident"
    },
    {
        "value": "R05",
        "label": "Cough"
    },
    {
        "value": "R42",
        "label": "Dizziness and giddiness"
    },
    {
        "value": "R8271",
        "label": "Bacteriuria"
    },
    {
        "value": "C7989",
        "label": "Secondary malignant neoplasm of other specified sites"
    },
    {
        "value": "V1051",
        "label": "Personal history of malignant neoplasm of bladder"
    },
    {
        "value": "E1152",
        "label": "Type 2 diabetes mellitus with diabetic peripheral angiopathy with gangrene"
    },
    {
        "value": "E1065",
        "label": "Type 1 diabetes mellitus with hyperglycemia"
    },
    {
        "value": "Z936",
        "label": "Other artificial openings of urinary tract status"
    },
    {
        "value": "T8612",
        "label": "Kidney transplant failure"
    },
    {
        "value": "C7931",
        "label": "Secondary malignant neoplasm of brain"
    },
    {
        "value": "Z6823",
        "label": "Body mass index [BMI] 23.0-23.9, adult"
    },
    {
        "value": "Z6822",
        "label": "Body mass index [BMI] 22.0-22.9, adult"
    },
    {
        "value": "5781",
        "label": "Blood in stool"
    },
    {
        "value": "43820",
        "label": "Late effects of cerebrovascular disease, hemiplegia affecting unspecified side"
    },
    {
        "value": "N200",
        "label": "Calculus of kidney"
    },
    {
        "value": "F17200",
        "label": "Nicotine dependence, unspecified, uncomplicated"
    },
    {
        "value": "R634",
        "label": "Abnormal weight loss"
    },
    {
        "value": "L97519",
        "label": "Non-pressure chronic ulcer of other part of right foot with unspecified severity"
    },
    {
        "value": "30981",
        "label": "Posttraumatic stress disorder"
    },
    {
        "value": "3970",
        "label": "Diseases of tricuspid valve"
    },
    {
        "value": "41189",
        "label": "Other acute and subacute forms of ischemic heart disease, other"
    },
    {
        "value": "I4581",
        "label": "Long QT syndrome"
    },
    {
        "value": "J918",
        "label": "Pleural effusion in other conditions classified elsewhere"
    },
    {
        "value": "6822",
        "label": "Cellulitis and abscess of trunk"
    },
    {
        "value": "G8220",
        "label": "Paraplegia, unspecified"
    },
    {
        "value": "25541",
        "label": "Glucocorticoid deficiency"
    },
    {
        "value": "Z89511",
        "label": "Acquired absence of right leg below knee"
    },
    {
        "value": "D84821",
        "label": "Immunodeficiency due to drugs"
    },
    {
        "value": "L89152",
        "label": "Pressure ulcer of sacral region, stage 2"
    },
    {
        "value": "30391",
        "label": "Other and unspecified alcohol dependence, continuous"
    },
    {
        "value": "T814XXA",
        "label": "Infection following a procedure, initial encounter"
    },
    {
        "value": "I442",
        "label": "Atrioventricular block, complete"
    },
    {
        "value": "R9431",
        "label": "Abnormal electrocardiogram [ECG] [EKG]"
    },
    {
        "value": "N182",
        "label": "Chronic kidney disease, stage 2 (mild)"
    },
    {
        "value": "Z981",
        "label": "Arthrodesis status"
    },
    {
        "value": "R040",
        "label": "Epistaxis"
    },
    {
        "value": "T8619",
        "label": "Other complication of kidney transplant"
    },
    {
        "value": "V600",
        "label": "Lack of housing"
    },
    {
        "value": "V600",
        "label": "Driver of heavy transport vehicle injured in collision with pedestrian or animal in nontraffic accident"
    },
    {
        "value": "Z905",
        "label": "Acquired absence of kidney"
    },
    {
        "value": "Z6824",
        "label": "Body mass index [BMI] 24.0-24.9, adult"
    },
    {
        "value": "L97529",
        "label": "Non-pressure chronic ulcer of other part of left foot with unspecified severity"
    },
    {
        "value": "2841",
        "label": "Pancytopenia"
    },
    {
        "value": "D469",
        "label": "Myelodysplastic syndrome, unspecified"
    },
    {
        "value": "E780",
        "label": "Pure hypercholesterolemia"
    },
    {
        "value": "Z930",
        "label": "Tracheostomy status"
    },
    {
        "value": "Z85820",
        "label": "Personal history of malignant melanoma of skin"
    },
    {
        "value": "I69351",
        "label": "Hemiplegia and hemiparesis following cerebral infarction affecting right dominant side"
    },
    {
        "value": "Z6820",
        "label": "Body mass index [BMI] 20.0-20.9, adult"
    },
    {
        "value": "7862",
        "label": "Cough"
    },
    {
        "value": "L89154",
        "label": "Pressure ulcer of sacral region, stage 4"
    },
    {
        "value": "Z9861",
        "label": "Coronary angioplasty status"
    },
    {
        "value": "43310",
        "label": "Occlusion and stenosis of carotid artery without mention of cerebral infarction"
    },
    {
        "value": "53789",
        "label": "Other specified disorders of stomach and duodenum"
    },
    {
        "value": "C220",
        "label": "Liver cell carcinoma"
    },
    {
        "value": "03811",
        "label": "Methicillin susceptible Staphylococcus aureus septicemia"
    },
    {
        "value": "D472",
        "label": "Monoclonal gammopathy"
    },
    {
        "value": "Z6821",
        "label": "Body mass index [BMI] 21.0-21.9, adult"
    },
    {
        "value": "F0150",
        "label": "Vascular dementia, unspecified severity, without behavioral disturbance, psychotic disturbance, mood disturbance, and anxiety"
    },
    {
        "value": "E8796",
        "label": "Urinary catheterization as the cause of abnormal reaction of patient, or of later complication, without mention of misadventure at time of procedure"
    },
    {
        "value": "V0481",
        "label": "Need for prophylactic vaccination and inoculation against influenza"
    },
    {
        "value": "78039",
        "label": "Other convulsions"
    },
    {
        "value": "I890",
        "label": "Lymphedema, not elsewhere classified"
    },
    {
        "value": "T361X5A",
        "label": "Adverse effect of cephalosporins and other beta-lactam antibiotics, initial encounter"
    },
    {
        "value": "27541",
        "label": "Hypocalcemia"
    },
    {
        "value": "41519",
        "label": "Other pulmonary embolism and infarction"
    },
    {
        "value": "I96",
        "label": "Gangrene, not elsewhere classified"
    },
    {
        "value": "515",
        "label": "Postinflammatory pulmonary fibrosis"
    },
    {
        "value": "V8801",
        "label": "Acquired absence of both cervix and uterus"
    },
    {
        "value": "F1011",
        "label": "Alcohol abuse, in remission"
    },
    {
        "value": "N2581",
        "label": "Secondary hyperparathyroidism of renal origin"
    },
    {
        "value": "K9189",
        "label": "Other postprocedural complications and disorders of digestive system"
    },
    {
        "value": "20300",
        "label": "Multiple myeloma, without mention of having achieved remission"
    },
    {
        "value": "C250",
        "label": "Malignant neoplasm of head of pancreas"
    },
    {
        "value": "20500",
        "label": "Acute myeloid leukemia, without mention of having achieved remission"
    },
    {
        "value": "R451",
        "label": "Restlessness and agitation"
    },
    {
        "value": "7821",
        "label": "Rash and other nonspecific skin eruption"
    },
    {
        "value": "59080",
        "label": "Pyelonephritis, unspecified"
    },
    {
        "value": "2867",
        "label": "Acquired coagulation factor deficiency"
    },
    {
        "value": "99931",
        "label": "Other and unspecified infection due to central venous catheter"
    },
    {
        "value": "J810",
        "label": "Acute pulmonary edema"
    },
    {
        "value": "3899",
        "label": "Unspecified hearing loss"
    },
    {
        "value": "28522",
        "label": "Anemia in neoplastic disease"
    },
    {
        "value": "K8689",
        "label": "Other specified diseases of pancreas"
    },
    {
        "value": "5609",
        "label": "Unspecified intestinal obstruction"
    },
    {
        "value": "78609",
        "label": "Other respiratory abnormalities"
    },
    {
        "value": "Y9289",
        "label": "Other specified places as the place of occurrence of the external cause"
    },
    {
        "value": "Z6832",
        "label": "Body mass index [BMI] 32.0-32.9, adult"
    },
    {
        "value": "7812",
        "label": "Abnormality of gait"
    },
    {
        "value": "I9589",
        "label": "Other hypotension"
    },
    {
        "value": "Z96652",
        "label": "Presence of left artificial knee joint"
    },
    {
        "value": "I420",
        "label": "Dilated cardiomyopathy"
    },
    {
        "value": "V851",
        "label": "Body Mass Index between 19-24, adult"
    },
    {
        "value": "V851",
        "label": "Passenger of special construction vehicle injured in traffic accident"
    },
    {
        "value": "44023",
        "label": "Atherosclerosis of native arteries of the extremities with ulceration"
    },
    {
        "value": "E9308",
        "label": "Other specified antibiotics causing adverse effects in therapeutic use"
    },
    {
        "value": "T83511A",
        "label": "Infection and inflammatory reaction due to indwelling urethral catheter, initial encounter"
    },
    {
        "value": "L409",
        "label": "Psoriasis, unspecified"
    },
    {
        "value": "Z803",
        "label": "Family history of malignant neoplasm of breast"
    },
    {
        "value": "V8541",
        "label": "Body Mass Index 40.0-44.9, adult"
    },
    {
        "value": "W1830XA",
        "label": "Fall on same level, unspecified, initial encounter"
    },
    {
        "value": "I5020",
        "label": "Unspecified systolic (congestive) heart failure"
    },
    {
        "value": "V1011",
        "label": "Personal history of malignant neoplasm of bronchus and lung"
    },
    {
        "value": "R748",
        "label": "Abnormal levels of other serum enzymes"
    },
    {
        "value": "6961",
        "label": "Other psoriasis"
    },
    {
        "value": "99812",
        "label": "Hematoma complicating a procedure"
    },
    {
        "value": "2764",
        "label": "Mixed acid-base balance disorder"
    },
    {
        "value": "04185",
        "label": "Other specified bacterial infections in conditions classified elsewhere and of unspecified site, other gram-negative organisms"
    },
    {
        "value": "53085",
        "label": "Barrett's esophagus"
    },
    {
        "value": "V5863",
        "label": "Long-term (current) use of antiplatelet/antithrombotic"
    },
    {
        "value": "42830",
        "label": "Diastolic heart failure, unspecified"
    },
    {
        "value": "V1052",
        "label": "Personal history of malignant neoplasm of kidney"
    },
    {
        "value": "Y92234",
        "label": "Operating room of hospital as the place of occurrence of the external cause"
    },
    {
        "value": "185",
        "label": "Malignant neoplasm of prostate"
    },
    {
        "value": "H548",
        "label": "Legal blindness, as defined in USA"
    },
    {
        "value": "I4510",
        "label": "Unspecified right bundle-branch block"
    },
    {
        "value": "5589",
        "label": "Other and unspecified noninfectious gastroenteritis and colitis"
    },
    {
        "value": "44020",
        "label": "Atherosclerosis of native arteries of the extremities, unspecified"
    },
    {
        "value": "I313",
        "label": "Pericardial effusion (noninflammatory)"
    },
    {
        "value": "78551",
        "label": "Cardiogenic shock"
    },
    {
        "value": "J9622",
        "label": "Acute and chronic respiratory failure with hypercapnia"
    },
    {
        "value": "R042",
        "label": "Hemoptysis"
    },
    {
        "value": "L299",
        "label": "Pruritus, unspecified"
    },
    {
        "value": "Z8505",
        "label": "Personal history of malignant neoplasm of liver"
    },
    {
        "value": "R29810",
        "label": "Facial weakness"
    },
    {
        "value": "I071",
        "label": "Rheumatic tricuspid insufficiency"
    },
    {
        "value": "2536",
        "label": "Other disorders of neurohypophysis"
    },
    {
        "value": "V4573",
        "label": "Acquired absence of kidney"
    },
    {
        "value": "Y92129",
        "label": "Unspecified place in nursing home as the place of occurrence of the external cause"
    },
    {
        "value": "7318",
        "label": "Other bone involvement in diseases classified elsewhere"
    },
    {
        "value": "56722",
        "label": "Peritoneal abscess"
    },
    {
        "value": "Z9119",
        "label": "Patient's noncompliance with other medical treatment and regimen"
    },
    {
        "value": "59971",
        "label": "Gross hematuria"
    },
    {
        "value": "99664",
        "label": "Infection and inflammatory reaction due to indwelling urinary catheter"
    },
    {
        "value": "L270",
        "label": "Generalized skin eruption due to drugs and medicaments taken internally"
    },
    {
        "value": "30560",
        "label": "Cocaine abuse, unspecified"
    },
    {
        "value": "4829",
        "label": "Bacterial pneumonia, unspecified"
    },
    {
        "value": "25063",
        "label": "Diabetes with neurological manifestations, type I [juvenile type], uncontrolled"
    },
    {
        "value": "E806",
        "label": "Other disorders of bilirubin metabolism"
    },
    {
        "value": "4139",
        "label": "Other and unspecified angina pectoris"
    },
    {
        "value": "79029",
        "label": "Other abnormal glucose"
    },
    {
        "value": "99811",
        "label": "Hemorrhage complicating a procedure"
    },
    {
        "value": "V440",
        "label": "Tracheostomy status"
    },
    {
        "value": "V440",
        "label": "Car driver injured in collision with heavy transport vehicle or bus in nontraffic accident"
    },
    {
        "value": "T865",
        "label": "Complications of stem cell transplant"
    },
    {
        "value": "1983",
        "label": "Secondary malignant neoplasm of brain and spinal cord"
    },
    {
        "value": "I4820",
        "label": "Chronic atrial fibrillation, unspecified"
    },
    {
        "value": "G936",
        "label": "Cerebral edema"
    },
    {
        "value": "J1289",
        "label": "Other viral pneumonia"
    },
    {
        "value": "I714",
        "label": "Abdominal aortic aneurysm, without rupture"
    },
    {
        "value": "99731",
        "label": "Ventilator associated pneumonia"
    },
    {
        "value": "71690",
        "label": "Arthropathy, unspecified, site unspecified"
    },
    {
        "value": "99673",
        "label": "Other complications due to renal dialysis device, implant, and graft"
    },
    {
        "value": "23875",
        "label": "Myelodysplastic syndrome, unspecified"
    },
    {
        "value": "E1040",
        "label": "Type 1 diabetes mellitus with diabetic neuropathy, unspecified"
    },
    {
        "value": "V850",
        "label": "Body Mass Index less than 19, adult"
    },
    {
        "value": "V850",
        "label": "Driver of special construction vehicle injured in traffic accident"
    },
    {
        "value": "J910",
        "label": "Malignant pleural effusion"
    },
    {
        "value": "R4182",
        "label": "Altered mental status, unspecified"
    },
    {
        "value": "0088",
        "label": "Intestinal infection due to other organism, not elsewhere classified"
    },
    {
        "value": "D6489",
        "label": "Other specified anemias"
    },
    {
        "value": "5641",
        "label": "Irritable bowel syndrome"
    },
    {
        "value": "I5021",
        "label": "Acute systolic (congestive) heart failure"
    },
    {
        "value": "R310",
        "label": "Gross hematuria"
    },
    {
        "value": "Z89512",
        "label": "Acquired absence of left leg below knee"
    },
    {
        "value": "Z1621",
        "label": "Resistance to vancomycin"
    },
    {
        "value": "F39",
        "label": "Unspecified mood [affective] disorder"
    },
    {
        "value": "K750",
        "label": "Abscess of liver"
    },
    {
        "value": "Y836",
        "label": "Removal of other organ (partial) (total) as the cause of abnormal reaction of the patient, or of later complication, without mention of misadventure at the time of the procedure"
    },
    {
        "value": "72400",
        "label": "Spinal stenosis, unspecified region"
    },
    {
        "value": "G35",
        "label": "Multiple sclerosis"
    },
    {
        "value": "E9289",
        "label": "Unspecified accident"
    },
    {
        "value": "R571",
        "label": "Hypovolemic shock"
    },
    {
        "value": "V4282",
        "label": "Peripheral stem cells replaced by transplant"
    },
    {
        "value": "Z6831",
        "label": "Body mass index [BMI] 31.0-31.9, adult"
    },
    {
        "value": "K8590",
        "label": "Acute pancreatitis without necrosis or infection, unspecified"
    },
    {
        "value": "57420",
        "label": "Calculus of gallbladder without mention of cholecystitis, without mention of obstruction"
    },
    {
        "value": "E1043",
        "label": "Type 1 diabetes mellitus with diabetic autonomic (poly)neuropathy"
    },
    {
        "value": "27542",
        "label": "Hypercalcemia"
    },
    {
        "value": "44024",
        "label": "Atherosclerosis of native arteries of the extremities with gangrene"
    },
    {
        "value": "70724",
        "label": "Pressure ulcer, stage IV"
    },
    {
        "value": "3694",
        "label": "Legal blindness, as defined in U.S.A."
    },
    {
        "value": "K652",
        "label": "Spontaneous bacterial peritonitis"
    },
    {
        "value": "7210",
        "label": "Cervical spondylosis without myelopathy"
    },
    {
        "value": "F10239",
        "label": "Alcohol dependence with withdrawal, unspecified"
    },
    {
        "value": "R7303",
        "label": "Prediabetes"
    },
    {
        "value": "Z6835",
        "label": "Body mass index [BMI] 35.0-35.9, adult"
    },
    {
        "value": "Z96642",
        "label": "Presence of left artificial hip joint"
    },
    {
        "value": "E8791",
        "label": "Kidney dialysis as the cause of abnormal reaction of patient, or of later complication, without mention of misadventure at time of procedure"
    },
    {
        "value": "25042",
        "label": "Diabetes with renal manifestations, type II or unspecified type, uncontrolled"
    },
    {
        "value": "J9600",
        "label": "Acute respiratory failure, unspecified whether with hypoxia or hypercapnia"
    },
    {
        "value": "99749",
        "label": "Other digestive system complications"
    },
    {
        "value": "F909",
        "label": "Attention-deficit hyperactivity disorder, unspecified type"
    },
    {
        "value": "29181",
        "label": "Alcohol withdrawal"
    },
    {
        "value": "79311",
        "label": "Solitary pulmonary nodule"
    },
    {
        "value": "N10",
        "label": "Acute pyelonephritis"
    },
    {
        "value": "7804",
        "label": "Dizziness and giddiness"
    },
    {
        "value": "B181",
        "label": "Chronic viral hepatitis B without delta-agent"
    },
    {
        "value": "K920",
        "label": "Hematemesis"
    },
    {
        "value": "70705",
        "label": "Pressure ulcer, buttock"
    },
    {
        "value": "V1082",
        "label": "Personal history of malignant melanoma of skin"
    },
    {
        "value": "28850",
        "label": "Leukocytopenia, unspecified"
    },
    {
        "value": "725",
        "label": "Polymyalgia rheumatica"
    },
    {
        "value": "L89150",
        "label": "Pressure ulcer of sacral region, unstageable"
    },
    {
        "value": "73313",
        "label": "Pathologic fracture of vertebrae"
    },
    {
        "value": "5569",
        "label": "Ulcerative colitis, unspecified"
    },
    {
        "value": "N141",
        "label": "Nephropathy induced by other drugs, medicaments and biological substances"
    },
    {
        "value": "F209",
        "label": "Schizophrenia, unspecified"
    },
    {
        "value": "C9200",
        "label": "Acute myeloblastic leukemia, not having achieved remission"
    },
    {
        "value": "I69398",
        "label": "Other sequelae of cerebral infarction"
    },
    {
        "value": "E213",
        "label": "Hyperparathyroidism, unspecified"
    },
    {
        "value": "K589",
        "label": "Irritable bowel syndrome without diarrhea"
    },
    {
        "value": "K5190",
        "label": "Ulcerative colitis, unspecified, without complications"
    },
    {
        "value": "4928",
        "label": "Other emphysema"
    },
    {
        "value": "Z9641",
        "label": "Presence of insulin pump (external) (internal)"
    },
    {
        "value": "Z85048",
        "label": "Personal history of other malignant neoplasm of rectum, rectosigmoid junction, and anus"
    },
    {
        "value": "42843",
        "label": "Acute on chronic combined systolic and diastolic heart failure"
    },
    {
        "value": "K7040",
        "label": "Alcoholic hepatic failure without coma"
    },
    {
        "value": "70707",
        "label": "Pressure ulcer, heel"
    },
    {
        "value": "J1282",
        "label": "Pneumonia due to coronavirus disease 2019"
    },
    {
        "value": "H9190",
        "label": "Unspecified hearing loss, unspecified ear"
    },
    {
        "value": "C772",
        "label": "Secondary and unspecified malignant neoplasm of intra-abdominal lymph nodes"
    },
    {
        "value": "B1910",
        "label": "Unspecified viral hepatitis B without hepatic coma"
    },
    {
        "value": "4414",
        "label": "Abdominal aneurysm without mention of rupture"
    },
    {
        "value": "Z8572",
        "label": "Personal history of non-Hodgkin lymphomas"
    },
    {
        "value": "L97429",
        "label": "Non-pressure chronic ulcer of left heel and midfoot with unspecified severity"
    },
    {
        "value": "V1301",
        "label": "Personal history of urinary calculi"
    },
    {
        "value": "J069",
        "label": "Acute upper respiratory infection, unspecified"
    },
    {
        "value": "7994",
        "label": "Cachexia"
    },
    {
        "value": "V1271",
        "label": "Personal history of peptic ulcer disease"
    },
    {
        "value": "Z6836",
        "label": "Body mass index [BMI] 36.0-36.9, adult"
    },
    {
        "value": "B957",
        "label": "Other staphylococcus as the cause of diseases classified elsewhere"
    },
    {
        "value": "Z89421",
        "label": "Acquired absence of other right toe(s)"
    },
    {
        "value": "I080",
        "label": "Rheumatic disorders of both mitral and aortic valves"
    },
    {
        "value": "4275",
        "label": "Cardiac arrest"
    },
    {
        "value": "J9611",
        "label": "Chronic respiratory failure with hypoxia"
    },
    {
        "value": "I4819",
        "label": "Other persistent atrial fibrillation"
    },
    {
        "value": "5680",
        "label": "Peritoneal adhesions (postoperative) (postinfection)"
    },
    {
        "value": "K660",
        "label": "Peritoneal adhesions (postprocedural) (postinfection)"
    },
    {
        "value": "G894",
        "label": "Chronic pain syndrome"
    },
    {
        "value": "135",
        "label": "Sarcoidosis"
    },
    {
        "value": "D89811",
        "label": "Chronic graft-versus-host disease"
    },
    {
        "value": "Z6833",
        "label": "Body mass index [BMI] 33.0-33.9, adult"
    },
    {
        "value": "Z6830",
        "label": "Body mass index [BMI] 30.0-30.9, adult"
    },
    {
        "value": "5939",
        "label": "Unspecified disorder of kidney and ureter"
    },
    {
        "value": "K632",
        "label": "Fistula of intestine"
    },
    {
        "value": "Z6837",
        "label": "Body mass index [BMI] 37.0-37.9, adult"
    },
    {
        "value": "R0600",
        "label": "Dyspnea, unspecified"
    },
    {
        "value": "59970",
        "label": "Hematuria, unspecified"
    },
    {
        "value": "71536",
        "label": "Osteoarthrosis, localized, not specified whether primary or secondary, lower leg"
    },
    {
        "value": "Z6834",
        "label": "Body mass index [BMI] 34.0-34.9, adult"
    },
    {
        "value": "F1020",
        "label": "Alcohol dependence, uncomplicated"
    },
    {
        "value": "78909",
        "label": "Abdominal pain, other specified site"
    },
    {
        "value": "C221",
        "label": "Intrahepatic bile duct carcinoma"
    },
    {
        "value": "A4102",
        "label": "Sepsis due to Methicillin resistant Staphylococcus aureus"
    },
    {
        "value": "4659",
        "label": "Acute upper respiratory infections of unspecified site"
    },
    {
        "value": "F10129",
        "label": "Alcohol abuse with intoxication, unspecified"
    },
    {
        "value": "99662",
        "label": "Infection and inflammatory reaction due to other vascular device, implant, and graft"
    },
    {
        "value": "J398",
        "label": "Other specified diseases of upper respiratory tract"
    },
    {
        "value": "25082",
        "label": "Diabetes with other specified manifestations, type II or unspecified type, uncontrolled"
    },
    {
        "value": "51919",
        "label": "Other diseases of trachea and bronchus"
    },
    {
        "value": "F259",
        "label": "Schizoaffective disorder, unspecified"
    },
    {
        "value": "K767",
        "label": "Hepatorenal syndrome"
    },
    {
        "value": "70719",
        "label": "Ulcer of other part of lower limb"
    },
    {
        "value": "R471",
        "label": "Dysarthria and anarthria"
    },
    {
        "value": "R4701",
        "label": "Aphasia"
    },
    {
        "value": "30503",
        "label": "Alcohol abuse, in remission"
    },
    {
        "value": "F418",
        "label": "Other specified anxiety disorders"
    },
    {
        "value": "Z6826",
        "label": "Body mass index [BMI] 26.0-26.9, adult"
    },
    {
        "value": "T827XXA",
        "label": "Infection and inflammatory reaction due to other cardiac and vascular devices, implants and grafts, initial encounter"
    },
    {
        "value": "71941",
        "label": "Pain in joint, shoulder region"
    },
    {
        "value": "07032",
        "label": "Chronic viral hepatitis B without mention of hepatic coma without mention of hepatitis delta"
    },
    {
        "value": "Z89422",
        "label": "Acquired absence of other left toe(s)"
    },
    {
        "value": "28981",
        "label": "Primary hypercoagulable state"
    },
    {
        "value": "7919",
        "label": "Other nonspecific findings on examination of urine"
    },
    {
        "value": "Z6825",
        "label": "Body mass index [BMI] 25.0-25.9, adult"
    },
    {
        "value": "D72819",
        "label": "Decreased white blood cell count, unspecified"
    },
    {
        "value": "Z95828",
        "label": "Presence of other vascular implants and grafts"
    },
    {
        "value": "C7801",
        "label": "Secondary malignant neoplasm of right lung"
    },
    {
        "value": "V1006",
        "label": "Personal history of malignant neoplasm of rectum, rectosigmoid junction, and anus"
    },
    {
        "value": "6929",
        "label": "Contact dermatitis and other eczema, unspecified cause"
    },
    {
        "value": "E662",
        "label": "Morbid (severe) obesity with alveolar hypoventilation"
    },
    {
        "value": "2113",
        "label": "Benign neoplasm of colon"
    },
    {
        "value": "29590",
        "label": "Unspecified schizophrenia, unspecified"
    },
    {
        "value": "R34",
        "label": "Anuria and oliguria"
    },
    {
        "value": "M4800",
        "label": "Spinal stenosis, site unspecified"
    },
    {
        "value": "Z87442",
        "label": "Personal history of urinary calculi"
    },
    {
        "value": "Z8701",
        "label": "Personal history of pneumonia (recurrent)"
    },
    {
        "value": "Z85850",
        "label": "Personal history of malignant neoplasm of thyroid"
    },
    {
        "value": "C259",
        "label": "Malignant neoplasm of pancreas, unspecified"
    },
    {
        "value": "78906",
        "label": "Abdominal pain, epigastric"
    },
    {
        "value": "Z87820",
        "label": "Personal history of traumatic brain injury"
    },
    {
        "value": "3669",
        "label": "Unspecified cataract"
    },
    {
        "value": "A084",
        "label": "Viral intestinal infection, unspecified"
    },
    {
        "value": "3559",
        "label": "Mononeuritis of unspecified site"
    },
    {
        "value": "I9581",
        "label": "Postprocedural hypotension"
    },
    {
        "value": "Z7289",
        "label": "Other problems related to lifestyle"
    },
    {
        "value": "Z6838",
        "label": "Body mass index [BMI] 38.0-38.9, adult"
    },
    {
        "value": "Y833",
        "label": "Surgical operation with formation of external stoma as the cause of abnormal reaction of the patient, or of later complication, without mention of misadventure at the time of the procedure"
    },
    {
        "value": "0416",
        "label": "Proteus (mirabilis) (morganii) infection in conditions classified elsewhere and of unspecified site"
    },
    {
        "value": "Z8542",
        "label": "Personal history of malignant neoplasm of other parts of uterus"
    },
    {
        "value": "E8786",
        "label": "Removal of other organ (partial) (total) causing abnormal patient reaction, or later complication, without mention of misadventure at time of operation"
    },
    {
        "value": "27650",
        "label": "Volume depletion, unspecified"
    },
    {
        "value": "78829",
        "label": "Other specified retention of urine"
    },
    {
        "value": "49322",
        "label": "Chronic obstructive asthma with (acute) exacerbation"
    },
    {
        "value": "7905",
        "label": "Other nonspecific abnormal serum enzyme levels"
    },
    {
        "value": "1976",
        "label": "Secondary malignant neoplasm of retroperitoneum and peritoneum"
    },
    {
        "value": "E10649",
        "label": "Type 1 diabetes mellitus with hypoglycemia without coma"
    },
    {
        "value": "G3184",
        "label": "Mild cognitive impairment of uncertain or unknown etiology"
    },
    {
        "value": "Z6827",
        "label": "Body mass index [BMI] 27.0-27.9, adult"
    },
    {
        "value": "T508X5A",
        "label": "Adverse effect of diagnostic agents, initial encounter"
    },
    {
        "value": "K648",
        "label": "Other hemorrhoids"
    },
    {
        "value": "71596",
        "label": "Osteoarthrosis, unspecified whether generalized or localized, lower leg"
    },
    {
        "value": "3383",
        "label": "Neoplasm related pain (acute) (chronic)"
    },
    {
        "value": "30401",
        "label": "Opioid type dependence, continuous"
    },
    {
        "value": "M6282",
        "label": "Rhabdomyolysis"
    },
    {
        "value": "25052",
        "label": "Diabetes with ophthalmic manifestations, type II or unspecified type, uncontrolled"
    },
    {
        "value": "R6510",
        "label": "Systemic inflammatory response syndrome (SIRS) of non-infectious origin without acute organ dysfunction"
    },
    {
        "value": "Z86010",
        "label": "Personal history of colonic polyps"
    },
    {
        "value": "40310",
        "label": "Hypertensive chronic kidney disease, benign, with chronic kidney disease stage I through stage IV, or unspecified"
    },
    {
        "value": "Y92019",
        "label": "Unspecified place in single-family (private) house as the place of occurrence of the external cause"
    },
    {
        "value": "E9352",
        "label": "Other opiates and related narcotics causing adverse effects in therapeutic use"
    },
    {
        "value": "42842",
        "label": "Chronic combined systolic and diastolic heart failure"
    },
    {
        "value": "L97419",
        "label": "Non-pressure chronic ulcer of right heel and midfoot with unspecified severity"
    },
    {
        "value": "M7989",
        "label": "Other specified soft tissue disorders"
    },
    {
        "value": "T3695XA",
        "label": "Adverse effect of unspecified systemic antibiotic, initial encounter"
    },
    {
        "value": "30501",
        "label": "Alcohol abuse, continuous"
    },
    {
        "value": "2883",
        "label": "Eosinophilia"
    },
    {
        "value": "G4730",
        "label": "Sleep apnea, unspecified"
    },
    {
        "value": "F1110",
        "label": "Opioid abuse, uncomplicated"
    },
    {
        "value": "N185",
        "label": "Chronic kidney disease, stage 5"
    },
    {
        "value": "51189",
        "label": "Other specified forms of effusion, except tuberculous"
    },
    {
        "value": "V180",
        "label": "Family history of diabetes mellitus"
    },
    {
        "value": "V180",
        "label": "Pedal cycle driver injured in noncollision transport accident in nontraffic accident"
    },
    {
        "value": "E11610",
        "label": "Type 2 diabetes mellitus with diabetic neuropathic arthropathy"
    },
    {
        "value": "4210",
        "label": "Acute and subacute bacterial endocarditis"
    },
    {
        "value": "452",
        "label": "Portal vein thrombosis"
    },
    {
        "value": "99682",
        "label": "Complications of transplanted liver"
    },
    {
        "value": "5711",
        "label": "Acute alcoholic hepatitis"
    },
    {
        "value": "E041",
        "label": "Nontoxic single thyroid nodule"
    },
    {
        "value": "C7802",
        "label": "Secondary malignant neoplasm of left lung"
    },
    {
        "value": "M869",
        "label": "Osteomyelitis, unspecified"
    },
    {
        "value": "V1209",
        "label": "Personal history of other infectious and parasitic diseases"
    },
    {
        "value": "Y842",
        "label": "Radiological procedure and radiotherapy as the cause of abnormal reaction of the patient, or of later complication, without mention of misadventure at the time of the procedure"
    },
    {
        "value": "261",
        "label": "Nutritional marasmus"
    },
    {
        "value": "59010",
        "label": "Acute pyelonephritis without lesion of renal medullary necrosis"
    },
    {
        "value": "I5031",
        "label": "Acute diastolic (congestive) heart failure"
    },
    {
        "value": "G928",
        "label": "Other toxic encephalopathy"
    },
    {
        "value": "45341",
        "label": "Acute venous embolism and thrombosis of deep vessels of proximal lower extremity"
    },
    {
        "value": "Z6828",
        "label": "Body mass index [BMI] 28.0-28.9, adult"
    },
    {
        "value": "72402",
        "label": "Spinal stenosis, lumbar region, without neurogenic claudication"
    },
    {
        "value": "2819",
        "label": "Unspecified deficiency anemia"
    },
    {
        "value": "K5730",
        "label": "Diverticulosis of large intestine without perforation or abscess without bleeding"
    },
    {
        "value": "20410",
        "label": "Chronic lymphoid leukemia, without mention of having achieved remission"
    },
    {
        "value": "V0980",
        "label": "Infection with microorganisms without mention of resistance to multiple drugs"
    },
    {
        "value": "D701",
        "label": "Agranulocytosis secondary to cancer chemotherapy"
    },
    {
        "value": "78057",
        "label": "Unspecified sleep apnea"
    },
    {
        "value": "R1013",
        "label": "Epigastric pain"
    },
    {
        "value": "Z95820",
        "label": "Peripheral vascular angioplasty status with implants and grafts"
    },
    {
        "value": "F411",
        "label": "Generalized anxiety disorder"
    },
    {
        "value": "E8792",
        "label": "Radiological procedure and radiotherapy as the cause of abnormal reaction of patient, or of later complication, without mention of misadventure at time of procedure"
    },
    {
        "value": "7135",
        "label": "Arthropathy associated with neurological disorders"
    },
    {
        "value": "V4571",
        "label": "Acquired absence of breast and nipple"
    },
    {
        "value": "D688",
        "label": "Other specified coagulation defects"
    },
    {
        "value": "42831",
        "label": "Acute diastolic heart failure"
    },
    {
        "value": "5852",
        "label": "Chronic kidney disease, Stage II (mild)"
    },
    {
        "value": "23871",
        "label": "Essential thrombocythemia"
    },
    {
        "value": "Q211",
        "label": "Atrial septal defect"
    },
    {
        "value": "73027",
        "label": "Unspecified osteomyelitis, ankle and foot"
    },
    {
        "value": "E9478",
        "label": "Other drugs and medicinal substances causing adverse effects in therapeutic use"
    },
    {
        "value": "J849",
        "label": "Interstitial pulmonary disease, unspecified"
    },
    {
        "value": "V163",
        "label": "Family history of malignant neoplasm of breast"
    },
    {
        "value": "V163",
        "label": "Person boarding or alighting a pedal cycle injured in collision with other nonmotor vehicle in nontraffic accident"
    },
    {
        "value": "E878",
        "label": "Other disorders of electrolyte and fluid balance, not elsewhere classified"
    },
    {
        "value": "W010XXA",
        "label": "Fall on same level from slipping, tripping and stumbling without subsequent striking against object, initial encounter"
    },
    {
        "value": "E8498",
        "label": "Accidents occurring in other specified places"
    },
    {
        "value": "71945",
        "label": "Pain in joint, pelvic region and thigh"
    },
    {
        "value": "C771",
        "label": "Secondary and unspecified malignant neoplasm of intrathoracic lymph nodes"
    },
    {
        "value": "7824",
        "label": "Jaundice, unspecified, not of newborn"
    },
    {
        "value": "7856",
        "label": "Enlargement of lymph nodes"
    },
    {
        "value": "N138",
        "label": "Other obstructive and reflux uropathy"
    },
    {
        "value": "Z8711",
        "label": "Personal history of peptic ulcer disease"
    },
    {
        "value": "R5383",
        "label": "Other fatigue"
    },
    {
        "value": "5793",
        "label": "Other and unspecified postsurgical nonabsorption"
    },
    {
        "value": "K8020",
        "label": "Calculus of gallbladder without cholecystitis without obstruction"
    },
    {
        "value": "03812",
        "label": "Methicillin resistant Staphylococcus aureus septicemia"
    },
    {
        "value": "7213",
        "label": "Lumbosacral spondylosis without myelopathy"
    },
    {
        "value": "Z96643",
        "label": "Presence of artificial hip joint, bilateral"
    },
    {
        "value": "70725",
        "label": "Pressure ulcer, unstageable"
    },
    {
        "value": "G8918",
        "label": "Other acute postprocedural pain"
    },
    {
        "value": "04119",
        "label": "Staphylococcus infection in conditions classified elsewhere and of unspecified site, other staphylococcus"
    },
    {
        "value": "C9110",
        "label": "Chronic lymphocytic leukemia of B-cell type not having achieved remission"
    },
    {
        "value": "R161",
        "label": "Splenomegaly, not elsewhere classified"
    },
    {
        "value": "I469",
        "label": "Cardiac arrest, cause unspecified"
    },
    {
        "value": "3485",
        "label": "Cerebral edema"
    },
    {
        "value": "J479",
        "label": "Bronchiectasis, uncomplicated"
    },
    {
        "value": "51884",
        "label": "Acute and chronic respiratory failure"
    },
    {
        "value": "I160",
        "label": "Hypertensive urgency"
    },
    {
        "value": "M353",
        "label": "Polymyalgia rheumatica"
    },
    {
        "value": "R579",
        "label": "Shock, unspecified"
    },
    {
        "value": "K7011",
        "label": "Alcoholic hepatitis with ascites"
    },
    {
        "value": "Z6829",
        "label": "Body mass index [BMI] 29.0-29.9, adult"
    },
    {
        "value": "D735",
        "label": "Infarction of spleen"
    },
    {
        "value": "Z6839",
        "label": "Body mass index [BMI] 39.0-39.9, adult"
    },
    {
        "value": "B954",
        "label": "Other streptococcus as the cause of diseases classified elsewhere"
    },
    {
        "value": "V1009",
        "label": "Personal history of malignant neoplasm of other gastrointestinal tract"
    },
    {
        "value": "R159",
        "label": "Full incontinence of feces"
    },
    {
        "value": "56981",
        "label": "Fistula of intestine, excluding rectum and anus"
    },
    {
        "value": "71946",
        "label": "Pain in joint, lower leg"
    },
    {
        "value": "B3789",
        "label": "Other sites of candidiasis"
    },
    {
        "value": "9971",
        "label": "Cardiac complications, not elsewhere classified"
    },
    {
        "value": "J9809",
        "label": "Other diseases of bronchus, not elsewhere classified"
    },
    {
        "value": "99659",
        "label": "Mechanical complication due to other implant and internal device, not elsewhere classified"
    },
    {
        "value": "G620",
        "label": "Drug-induced polyneuropathy"
    },
    {
        "value": "T8144XA",
        "label": "Sepsis following a procedure, initial encounter"
    },
    {
        "value": "4571",
        "label": "Other lymphedema"
    },
    {
        "value": "V1551",
        "label": "Personal history of traumatic fracture"
    },
    {
        "value": "1629",
        "label": "Malignant neoplasm of bronchus and lung, unspecified"
    },
    {
        "value": "C679",
        "label": "Malignant neoplasm of bladder, unspecified"
    },
    {
        "value": "28803",
        "label": "Drug induced neutropenia"
    },
    {
        "value": "V446",
        "label": "Other artificial opening of urinary tract status"
    },
    {
        "value": "V446",
        "label": "Car passenger injured in collision with heavy transport vehicle or bus in traffic accident"
    },
    {
        "value": "I871",
        "label": "Compression of vein"
    },
    {
        "value": "2866",
        "label": "Defibrination syndrome"
    },
    {
        "value": "42821",
        "label": "Acute systolic heart failure"
    },
    {
        "value": "56211",
        "label": "Diverticulitis of colon (without mention of hemorrhage)"
    },
    {
        "value": "1550",
        "label": "Malignant neoplasm of liver, primary"
    },
    {
        "value": "K209",
        "label": "Esophagitis, unspecified"
    },
    {
        "value": "K222",
        "label": "Esophageal obstruction"
    },
    {
        "value": "25200",
        "label": "Hyperparathyroidism, unspecified"
    },
    {
        "value": "70723",
        "label": "Pressure ulcer, stage III"
    },
    {
        "value": "5724",
        "label": "Hepatorenal syndrome"
    },
    {
        "value": "F1290",
        "label": "Cannabis use, unspecified, uncomplicated"
    },
    {
        "value": "Z801",
        "label": "Family history of malignant neoplasm of trachea, bronchus and lung"
    },
    {
        "value": "Z9081",
        "label": "Acquired absence of spleen"
    },
    {
        "value": "33818",
        "label": "Other acute postoperative pain"
    },
    {
        "value": "M329",
        "label": "Systemic lupus erythematosus, unspecified"
    },
    {
        "value": "3558",
        "label": "Mononeuritis of lower limb, unspecified"
    },
    {
        "value": "H3530",
        "label": "Unspecified macular degeneration"
    },
    {
        "value": "M7981",
        "label": "Nontraumatic hematoma of soft tissue"
    },
    {
        "value": "I69320",
        "label": "Aphasia following cerebral infarction"
    },
    {
        "value": "J45901",
        "label": "Unspecified asthma with (acute) exacerbation"
    },
    {
        "value": "56723",
        "label": "Spontaneous bacterial peritonitis"
    },
    {
        "value": "4370",
        "label": "Cerebral atherosclerosis"
    },
    {
        "value": "Z45018",
        "label": "Encounter for adjustment and management of other part of cardiac pacemaker"
    },
    {
        "value": "70720",
        "label": "Pressure ulcer, unspecified stage"
    },
    {
        "value": "C3490",
        "label": "Malignant neoplasm of unspecified part of unspecified bronchus or lung"
    },
    {
        "value": "M542",
        "label": "Cervicalgia"
    },
    {
        "value": "D721",
        "label": "Eosinophilia"
    },
    {
        "value": "Z833",
        "label": "Family history of diabetes mellitus"
    },
    {
        "value": "E869",
        "label": "Volume depletion, unspecified"
    },
    {
        "value": "25070",
        "label": "Diabetes with peripheral circulatory disorders, type II or unspecified type, not stated as uncontrolled"
    },
    {
        "value": "5778",
        "label": "Other specified diseases of pancreas"
    },
    {
        "value": "D65",
        "label": "Disseminated intravascular coagulation [defibrination syndrome]"
    },
    {
        "value": "E8783",
        "label": "Surgical operation with formation of external stoma causing abnormal patient reaction, or later complication, without mention of misadventure at time of operation"
    },
    {
        "value": "4263",
        "label": "Other left bundle branch block"
    },
    {
        "value": "72981",
        "label": "Swelling of limb"
    },
    {
        "value": "R180",
        "label": "Malignant ascites"
    },
    {
        "value": "99932",
        "label": "Bloodstream infection due to central venous catheter"
    },
    {
        "value": "5772",
        "label": "Cyst and pseudocyst of pancreas"
    },
    {
        "value": "H269",
        "label": "Unspecified cataract"
    },
    {
        "value": "36250",
        "label": "Macular degeneration (senile), unspecified"
    },
    {
        "value": "7885",
        "label": "Oliguria and anuria"
    },
    {
        "value": "M48061",
        "label": "Spinal stenosis, lumbar region without neurogenic claudication"
    },
    {
        "value": "7847",
        "label": "Epistaxis"
    },
    {
        "value": "R778",
        "label": "Other specified abnormalities of plasma proteins"
    },
    {
        "value": "34839",
        "label": "Other encephalopathy"
    },
    {
        "value": "4111",
        "label": "Intermediate coronary syndrome"
    },
    {
        "value": "E1051",
        "label": "Type 1 diabetes mellitus with diabetic peripheral angiopathy without gangrene"
    },
    {
        "value": "E8779",
        "label": "Other fluid overload"
    },
    {
        "value": "9974",
        "label": "Digestive system complications, not elsewhere classified"
    },
    {
        "value": "19889",
        "label": "Secondary malignant neoplasm of other specified sites"
    },
    {
        "value": "C7889",
        "label": "Secondary malignant neoplasm of other digestive organs"
    },
    {
        "value": "A4152",
        "label": "Sepsis due to Pseudomonas"
    },
    {
        "value": "6823",
        "label": "Cellulitis and abscess of upper arm and forearm"
    },
    {
        "value": "1122",
        "label": "Candidiasis of other urogenital sites"
    },
    {
        "value": "E1021",
        "label": "Type 1 diabetes mellitus with diabetic nephropathy"
    },
    {
        "value": "2853",
        "label": "Antineoplastic chemotherapy induced anemia"
    },
    {
        "value": "Z915",
        "label": "Personal history of self-harm"
    },
    {
        "value": "4940",
        "label": "Bronchiectasis without acute exacerbation"
    },
    {
        "value": "M170",
        "label": "Bilateral primary osteoarthritis of knee"
    },
    {
        "value": "78605",
        "label": "Shortness of breath"
    },
    {
        "value": "2731",
        "label": "Monoclonal paraproteinemia"
    },
    {
        "value": "5921",
        "label": "Calculus of ureter"
    },
    {
        "value": "T501X5A",
        "label": "Adverse effect of loop [high-ceiling] diuretics, initial encounter"
    },
    {
        "value": "M25511",
        "label": "Pain in right shoulder"
    },
    {
        "value": "M1A9XX0",
        "label": "Chronic gout, unspecified, without tophus (tophi)"
    },
    {
        "value": "F410",
        "label": "Panic disorder [episodic paroxysmal anxiety]"
    },
    {
        "value": "G9349",
        "label": "Other encephalopathy"
    },
    {
        "value": "25053",
        "label": "Diabetes with ophthalmic manifestations, type I [juvenile type], uncontrolled"
    },
    {
        "value": "V8542",
        "label": "Body Mass Index 45.0-49.9, adult"
    },
    {
        "value": "I5043",
        "label": "Acute on chronic combined systolic (congestive) and diastolic (congestive) heart failure"
    },
    {
        "value": "5184",
        "label": "Acute edema of lung, unspecified"
    },
    {
        "value": "5570",
        "label": "Acute vascular insufficiency of intestine"
    },
    {
        "value": "F1190",
        "label": "Opioid use, unspecified, uncomplicated"
    },
    {
        "value": "G8194",
        "label": "Hemiplegia, unspecified affecting left nondominant side"
    },
    {
        "value": "29570",
        "label": "Schizoaffective disorder, unspecified"
    },
    {
        "value": "Z8614",
        "label": "Personal history of Methicillin resistant Staphylococcus aureus infection"
    },
    {
        "value": "4430",
        "label": "Raynaud's syndrome"
    },
    {
        "value": "A408",
        "label": "Other streptococcal sepsis"
    },
    {
        "value": "K631",
        "label": "Perforation of intestine (nontraumatic)"
    },
    {
        "value": "44021",
        "label": "Atherosclerosis of native arteries of the extremities with intermittent claudication"
    },
    {
        "value": "25001",
        "label": "Diabetes mellitus without mention of complication, type I [juvenile type], not stated as uncontrolled"
    },
    {
        "value": "I083",
        "label": "Combined rheumatic disorders of mitral, aortic and tricuspid valves"
    },
    {
        "value": "F1410",
        "label": "Cocaine abuse, uncomplicated"
    },
    {
        "value": "T8131XA",
        "label": "Disruption of external operation (surgical) wound, not elsewhere classified, initial encounter"
    },
    {
        "value": "73007",
        "label": "Acute osteomyelitis, ankle and foot"
    },
    {
        "value": "V1042",
        "label": "Personal history of malignant neoplasm of other parts of uterus"
    },
    {
        "value": "L89153",
        "label": "Pressure ulcer of sacral region, stage 3"
    },
    {
        "value": "L309",
        "label": "Dermatitis, unspecified"
    },
    {
        "value": "1570",
        "label": "Malignant neoplasm of head of pancreas"
    },
    {
        "value": "1890",
        "label": "Malignant neoplasm of kidney, except pelvis"
    },
    {
        "value": "53390",
        "label": "Peptic ulcer of unspecified site, unspecified as acute or chronic, without mention of hemorrhage or perforation, without mention of obstruction"
    },
    {
        "value": "Z91128",
        "label": "Patient's intentional underdosing of medication regimen for other reason"
    },
    {
        "value": "I441",
        "label": "Atrioventricular block, second degree"
    },
    {
        "value": "K5790",
        "label": "Diverticulosis of intestine, part unspecified, without perforation or abscess without bleeding"
    },
    {
        "value": "42781",
        "label": "Sinoatrial node dysfunction"
    },
    {
        "value": "43411",
        "label": "Cerebral embolism with cerebral infarction"
    },
    {
        "value": "V161",
        "label": "Family history of malignant neoplasm of trachea, bronchus, and lung"
    },
    {
        "value": "V161",
        "label": "Pedal cycle passenger injured in collision with other nonmotor vehicle in nontraffic accident"
    },
    {
        "value": "43811",
        "label": "Late effects of cerebrovascular disease, aphasia"
    },
    {
        "value": "9975",
        "label": "Urinary complications, not elsewhere classified"
    },
    {
        "value": "G809",
        "label": "Cerebral palsy, unspecified"
    },
    {
        "value": "7455",
        "label": "Ostium secundum type atrial septal defect"
    },
    {
        "value": "27401",
        "label": "Acute gouty arthropathy"
    },
    {
        "value": "J869",
        "label": "Pyothorax without fistula"
    },
    {
        "value": "514",
        "label": "Pulmonary congestion and hypostasis"
    },
    {
        "value": "R300",
        "label": "Dysuria"
    },
    {
        "value": "Z90710",
        "label": "Acquired absence of both cervix and uterus"
    },
    {
        "value": "V1261",
        "label": "Personal history of pneumonia (recurrent)"
    },
    {
        "value": "43491",
        "label": "Cerebral artery occlusion, unspecified with cerebral infarction"
    },
    {
        "value": "2738",
        "label": "Other disorders of plasma protein metabolism"
    },
    {
        "value": "07999",
        "label": "Unspecified viral infection"
    },
    {
        "value": "I7300",
        "label": "Raynaud's syndrome without gangrene"
    },
    {
        "value": "Z888",
        "label": "Allergy status to other drugs, medicaments and biological substances"
    },
    {
        "value": "K9423",
        "label": "Gastrostomy malfunction"
    },
    {
        "value": "5855",
        "label": "Chronic kidney disease, Stage V"
    },
    {
        "value": "2630",
        "label": "Malnutrition of moderate degree"
    },
    {
        "value": "K659",
        "label": "Peritonitis, unspecified"
    },
    {
        "value": "C8338",
        "label": "Diffuse large B-cell lymphoma, lymph nodes of multiple sites"
    },
    {
        "value": "78559",
        "label": "Other shock without mention of trauma"
    },
    {
        "value": "K7010",
        "label": "Alcoholic hepatitis without ascites"
    },
    {
        "value": "E273",
        "label": "Drug-induced adrenocortical insufficiency"
    },
    {
        "value": "K810",
        "label": "Acute cholecystitis"
    },
    {
        "value": "N3090",
        "label": "Cystitis, unspecified without hematuria"
    },
    {
        "value": "44381",
        "label": "Peripheral angiopathy in diseases classified elsewhere"
    },
    {
        "value": "6989",
        "label": "Unspecified pruritic disorder"
    },
    {
        "value": "M25551",
        "label": "Pain in right hip"
    },
    {
        "value": "3371",
        "label": "Peripheral autonomic neuropathy in disorders classified elsewhere"
    },
    {
        "value": "I639",
        "label": "Cerebral infarction, unspecified"
    },
    {
        "value": "T8649",
        "label": "Other complications of liver transplant"
    },
    {
        "value": "V4976",
        "label": "Above knee amputation status"
    },
    {
        "value": "7231",
        "label": "Cervicalgia"
    },
    {
        "value": "A411",
        "label": "Sepsis due to other specified staphylococcus"
    },
    {
        "value": "56089",
        "label": "Other specified intestinal obstruction"
    },
    {
        "value": "57451",
        "label": "Calculus of bile duct without mention of cholecystitis, with obstruction"
    },
    {
        "value": "E781",
        "label": "Pure hyperglyceridemia"
    },
    {
        "value": "K8681",
        "label": "Exocrine pancreatic insufficiency"
    },
    {
        "value": "30400",
        "label": "Opioid type dependence, unspecified"
    },
    {
        "value": "C8339",
        "label": "Diffuse large B-cell lymphoma, extranodal and solid organ sites"
    },
    {
        "value": "25043",
        "label": "Diabetes with renal manifestations, type I [juvenile type], uncontrolled"
    },
    {
        "value": "K649",
        "label": "Unspecified hemorrhoids"
    },
    {
        "value": "27952",
        "label": "Chronic graft-versus-host disease"
    },
    {
        "value": "30550",
        "label": "Opioid abuse, unspecified"
    },
    {
        "value": "4550",
        "label": "Internal hemorrhoids without mention of complication"
    },
    {
        "value": "73679",
        "label": "Other acquired deformities of ankle and foot"
    },
    {
        "value": "1962",
        "label": "Secondary and unspecified malignant neoplasm of intra-abdominal lymph nodes"
    },
    {
        "value": "Z8543",
        "label": "Personal history of malignant neoplasm of ovary"
    },
    {
        "value": "I25119",
        "label": "Atherosclerotic heart disease of native coronary artery with unspecified angina pectoris"
    },
    {
        "value": "70709",
        "label": "Pressure ulcer, other site"
    },
    {
        "value": "99685",
        "label": "Complications of transplanted bone marrow"
    },
    {
        "value": "53010",
        "label": "Esophagitis, unspecified"
    },
    {
        "value": "I808",
        "label": "Phlebitis and thrombophlebitis of other sites"
    },
    {
        "value": "29040",
        "label": "Vascular dementia, uncomplicated"
    },
    {
        "value": "Z8507",
        "label": "Personal history of malignant neoplasm of pancreas"
    },
    {
        "value": "R590",
        "label": "Localized enlarged lymph nodes"
    },
    {
        "value": "J984",
        "label": "Other disorders of lung"
    },
    {
        "value": "99688",
        "label": "Complications of transplanted organ, stem cell"
    },
    {
        "value": "2440",
        "label": "Postsurgical hypothyroidism"
    },
    {
        "value": "C9201",
        "label": "Acute myeloblastic leukemia, in remission"
    },
    {
        "value": "N3289",
        "label": "Other specified disorders of bladder"
    },
    {
        "value": "M868X7",
        "label": "Other osteomyelitis, ankle and foot"
    },
    {
        "value": "R296",
        "label": "Repeated falls"
    },
    {
        "value": "I6523",
        "label": "Occlusion and stenosis of bilateral carotid arteries"
    },
    {
        "value": "M4802",
        "label": "Spinal stenosis, cervical region"
    },
    {
        "value": "T426X5A",
        "label": "Adverse effect of other antiepileptic and sedative-hypnotic drugs, initial encounter"
    },
    {
        "value": "30590",
        "label": "Other, mixed, or unspecified drug abuse, unspecified"
    },
    {
        "value": "I953",
        "label": "Hypotension of hemodialysis"
    },
    {
        "value": "33819",
        "label": "Other acute pain"
    },
    {
        "value": "9982",
        "label": "Accidental puncture or laceration during a procedure, not elsewhere classified"
    },
    {
        "value": "T82898A",
        "label": "Other specified complication of vascular prosthetic devices, implants and grafts, initial encounter"
    },
    {
        "value": "K259",
        "label": "Gastric ulcer, unspecified as acute or chronic, without hemorrhage or perforation"
    },
    {
        "value": "V1749",
        "label": "Family history of other cardiovascular diseases"
    },
    {
        "value": "K838",
        "label": "Other specified diseases of biliary tract"
    },
    {
        "value": "5780",
        "label": "Hematemesis"
    },
    {
        "value": "319",
        "label": "Unspecified intellectual disabilities"
    },
    {
        "value": "I712",
        "label": "Thoracic aortic aneurysm, without rupture"
    },
    {
        "value": "7906",
        "label": "Other abnormal blood chemistry"
    },
    {
        "value": "K625",
        "label": "Hemorrhage of anus and rectum"
    },
    {
        "value": "R2681",
        "label": "Unsteadiness on feet"
    },
    {
        "value": "7921",
        "label": "Nonspecific abnormal findings in stool contents"
    },
    {
        "value": "24900",
        "label": "Secondary diabetes mellitus without mention of complication, not stated as uncontrolled, or unspecified"
    },
    {
        "value": "Z9111",
        "label": "Patient's noncompliance with dietary regimen"
    },
    {
        "value": "R630",
        "label": "Anorexia"
    },
    {
        "value": "5720",
        "label": "Abscess of liver"
    },
    {
        "value": "K863",
        "label": "Pseudocyst of pancreas"
    },
    {
        "value": "70713",
        "label": "Ulcer of ankle"
    },
    {
        "value": "4239",
        "label": "Unspecified disease of pericardium"
    },
    {
        "value": "78901",
        "label": "Abdominal pain, right upper quadrant"
    },
    {
        "value": "K754",
        "label": "Autoimmune hepatitis"
    },
    {
        "value": "49392",
        "label": "Asthma, unspecified type, with (acute) exacerbation"
    },
    {
        "value": "I481",
        "label": "Persistent atrial fibrillation"
    },
    {
        "value": "Z8541",
        "label": "Personal history of malignant neoplasm of cervix uteri"
    },
    {
        "value": "29620",
        "label": "Major depressive affective disorder, single episode, unspecified"
    },
    {
        "value": "I5181",
        "label": "Takotsubo syndrome"
    },
    {
        "value": "R680",
        "label": "Hypothermia, not associated with low environmental temperature"
    },
    {
        "value": "Z8589",
        "label": "Personal history of malignant neoplasm of other organs and systems"
    },
    {
        "value": "72887",
        "label": "Muscle weakness (generalized)"
    },
    {
        "value": "N131",
        "label": "Hydronephrosis with ureteral stricture, not elsewhere classified"
    },
    {
        "value": "J948",
        "label": "Other specified pleural conditions"
    },
    {
        "value": "9072",
        "label": "Late effect of spinal cord injury"
    },
    {
        "value": "R5381",
        "label": "Other malaise"
    },
    {
        "value": "V8543",
        "label": "Body Mass Index 50.0-59.9, adult"
    },
    {
        "value": "2825",
        "label": "Sickle-cell trait"
    },
    {
        "value": "2410",
        "label": "Nontoxic uninodular goiter"
    },
    {
        "value": "Z982",
        "label": "Presence of cerebrospinal fluid drainage device"
    },
    {
        "value": "V4283",
        "label": "Pancreas replaced by transplant"
    },
    {
        "value": "71535",
        "label": "Osteoarthrosis, localized, not specified whether primary or secondary, pelvic region and thigh"
    },
    {
        "value": "7843",
        "label": "Aphasia"
    },
    {
        "value": "7830",
        "label": "Anorexia"
    },
    {
        "value": "J309",
        "label": "Allergic rhinitis, unspecified"
    },
    {
        "value": "29281",
        "label": "Drug-induced delirium"
    },
    {
        "value": "V5862",
        "label": "Long-term (current) use of antibiotics"
    },
    {
        "value": "I25110",
        "label": "Atherosclerotic heart disease of native coronary artery with unstable angina pectoris"
    },
    {
        "value": "G8250",
        "label": "Quadriplegia, unspecified"
    },
    {
        "value": "4821",
        "label": "Pneumonia due to Pseudomonas"
    },
    {
        "value": "I2722",
        "label": "Pulmonary hypertension due to left heart disease"
    },
    {
        "value": "07030",
        "label": "Viral hepatitis B without mention of hepatic coma, acute or unspecified, without mention of hepatitis delta"
    },
    {
        "value": "5790",
        "label": "Celiac disease"
    },
    {
        "value": "N281",
        "label": "Cyst of kidney, acquired"
    },
    {
        "value": "K559",
        "label": "Vascular disorder of intestine, unspecified"
    },
    {
        "value": "72888",
        "label": "Rhabdomyolysis"
    },
    {
        "value": "G8191",
        "label": "Hemiplegia, unspecified affecting right dominant side"
    },
    {
        "value": "Z980",
        "label": "Intestinal bypass and anastomosis status"
    },
    {
        "value": "K7689",
        "label": "Other specified diseases of liver"
    },
    {
        "value": "Z9483",
        "label": "Pancreas transplant status"
    },
    {
        "value": "I82621",
        "label": "Acute embolism and thrombosis of deep veins of right upper extremity"
    },
    {
        "value": "28411",
        "label": "Antineoplastic chemotherapy induced pancytopenia"
    },
    {
        "value": "V1253",
        "label": "Personal history of sudden cardiac arrest"
    },
    {
        "value": "E9444",
        "label": "Other diuretics causing adverse effects in therapeutic use"
    },
    {
        "value": "B349",
        "label": "Viral infection, unspecified"
    },
    {
        "value": "29690",
        "label": "Unspecified episodic mood disorder"
    },
    {
        "value": "E10621",
        "label": "Type 1 diabetes mellitus with foot ulcer"
    },
    {
        "value": "7820",
        "label": "Disturbance of skin sensation"
    },
    {
        "value": "70721",
        "label": "Pressure ulcer, stage I"
    },
    {
        "value": "0549",
        "label": "Herpes simplex without mention of complication"
    },
    {
        "value": "D693",
        "label": "Immune thrombocytopenic purpura"
    },
    {
        "value": "M25512",
        "label": "Pain in left shoulder"
    },
    {
        "value": "5728",
        "label": "Other sequelae of chronic liver disease"
    },
    {
        "value": "4264",
        "label": "Right bundle branch block"
    },
    {
        "value": "K429",
        "label": "Umbilical hernia without obstruction or gangrene"
    },
    {
        "value": "53019",
        "label": "Other esophagitis"
    },
    {
        "value": "N2889",
        "label": "Other specified disorders of kidney and ureter"
    },
    {
        "value": "F17290",
        "label": "Nicotine dependence, other tobacco product, uncomplicated"
    },
    {
        "value": "A0471",
        "label": "Enterocolitis due to Clostridium difficile, recurrent"
    },
    {
        "value": "E1110",
        "label": "Type 2 diabetes mellitus with ketoacidosis without coma"
    },
    {
        "value": "L03311",
        "label": "Cellulitis of abdominal wall"
    },
    {
        "value": "27803",
        "label": "Obesity hypoventilation syndrome"
    },
    {
        "value": "4588",
        "label": "Other specified hypotension"
    },
    {
        "value": "K5289",
        "label": "Other specified noninfective gastroenteritis and colitis"
    },
    {
        "value": "Z808",
        "label": "Family history of malignant neoplasm of other organs or systems"
    },
    {
        "value": "K439",
        "label": "Ventral hernia without obstruction or gangrene"
    },
    {
        "value": "R0602",
        "label": "Shortness of breath"
    },
    {
        "value": "K761",
        "label": "Chronic passive congestion of liver"
    },
    {
        "value": "Z954",
        "label": "Presence of other heart-valve replacement"
    },
    {
        "value": "W1839XA",
        "label": "Other fall on same level, initial encounter"
    },
    {
        "value": "Z4502",
        "label": "Encounter for adjustment and management of automatic implantable cardiac defibrillator"
    },
    {
        "value": "5121",
        "label": "Iatrogenic pneumothorax"
    },
    {
        "value": "V0254",
        "label": "Carrier or suspected carrier of Methicillin resistant Staphylococcus aureus"
    },
    {
        "value": "E1042",
        "label": "Type 1 diabetes mellitus with diabetic polyneuropathy"
    },
    {
        "value": "Z9911",
        "label": "Dependence on respirator [ventilator] status"
    },
    {
        "value": "R519",
        "label": "Headache, unspecified"
    },
    {
        "value": "E2749",
        "label": "Other adrenocortical insufficiency"
    },
    {
        "value": "73017",
        "label": "Chronic osteomyelitis, ankle and foot"
    },
    {
        "value": "R1011",
        "label": "Right upper quadrant pain"
    },
    {
        "value": "G931",
        "label": "Anoxic brain damage, not elsewhere classified"
    },
    {
        "value": "Z934",
        "label": "Other artificial openings of gastrointestinal tract status"
    },
    {
        "value": "I440",
        "label": "Atrioventricular block, first degree"
    },
    {
        "value": "C20",
        "label": "Malignant neoplasm of rectum"
    },
    {
        "value": "73028",
        "label": "Unspecified osteomyelitis, other specified sites"
    },
    {
        "value": "K635",
        "label": "Polyp of colon"
    },
    {
        "value": "25013",
        "label": "Diabetes with ketoacidosis, type I [juvenile type], uncontrolled"
    },
    {
        "value": "07044",
        "label": "Chronic hepatitis C with hepatic coma"
    },
    {
        "value": "L7632",
        "label": "Postprocedural hematoma of skin and subcutaneous tissue following other procedure"
    },
    {
        "value": "2512",
        "label": "Hypoglycemia, unspecified"
    },
    {
        "value": "D6861",
        "label": "Antiphospholipid syndrome"
    },
    {
        "value": "3384",
        "label": "Chronic pain syndrome"
    },
    {
        "value": "1551",
        "label": "Malignant neoplasm of intrahepatic bile ducts"
    },
    {
        "value": "I4821",
        "label": "Permanent atrial fibrillation"
    },
    {
        "value": "B3781",
        "label": "Candidal esophagitis"
    },
    {
        "value": "M25561",
        "label": "Pain in right knee"
    },
    {
        "value": "V1007",
        "label": "Personal history of malignant neoplasm of liver"
    },
    {
        "value": "2989",
        "label": "Unspecified psychosis"
    },
    {
        "value": "78062",
        "label": "Postprocedural fever"
    },
    {
        "value": "K279",
        "label": "Peptic ulcer, site unspecified, unspecified as acute or chronic, without hemorrhage or perforation"
    },
    {
        "value": "48242",
        "label": "Methicillin resistant pneumonia due to Staphylococcus aureus"
    },
    {
        "value": "I76",
        "label": "Septic arterial embolism"
    },
    {
        "value": "G061",
        "label": "Intraspinal abscess and granuloma"
    },
    {
        "value": "M25562",
        "label": "Pain in left knee"
    },
    {
        "value": "56969",
        "label": "Other colostomy and enterostomy complication"
    },
    {
        "value": "7078",
        "label": "Chronic ulcer of other specified sites"
    },
    {
        "value": "42820",
        "label": "Systolic heart failure, unspecified"
    },
    {
        "value": "K224",
        "label": "Dyskinesia of esophagus"
    },
    {
        "value": "I5042",
        "label": "Chronic combined systolic (congestive) and diastolic (congestive) heart failure"
    },
    {
        "value": "6960",
        "label": "Psoriatic arthropathy"
    },
    {
        "value": "M86172",
        "label": "Other acute osteomyelitis, left ankle and foot"
    },
    {
        "value": "V4577",
        "label": "Acquired absence of organ, genital organs"
    },
    {
        "value": "Z8719",
        "label": "Personal history of other diseases of the digestive system"
    },
    {
        "value": "Z6844",
        "label": "Body mass index [BMI] 60.0-69.9, adult"
    },
    {
        "value": "56983",
        "label": "Perforation of intestine"
    },
    {
        "value": "K311",
        "label": "Adult hypertrophic pyloric stenosis"
    },
    {
        "value": "7854",
        "label": "Gangrene"
    },
    {
        "value": "K254",
        "label": "Chronic or unspecified gastric ulcer with hemorrhage"
    },
    {
        "value": "Z9079",
        "label": "Acquired absence of other genital organ(s)"
    },
    {
        "value": "K269",
        "label": "Duodenal ulcer, unspecified as acute or chronic, without hemorrhage or perforation"
    },
    {
        "value": "4404",
        "label": "Chronic total occlusion of artery of the extremities"
    },
    {
        "value": "7810",
        "label": "Abnormal involuntary movements"
    },
    {
        "value": "79431",
        "label": "Nonspecific abnormal electrocardiogram [ECG] [EKG]"
    },
    {
        "value": "Y835",
        "label": "Amputation of limb(s) as the cause of abnormal reaction of the patient, or of later complication, without mention of misadventure at the time of the procedure"
    },
    {
        "value": "A4150",
        "label": "Gram-negative sepsis, unspecified"
    },
    {
        "value": "B3749",
        "label": "Other urogenital candidiasis"
    },
    {
        "value": "J151",
        "label": "Pneumonia due to Pseudomonas"
    },
    {
        "value": "D573",
        "label": "Sickle-cell trait"
    },
    {
        "value": "27900",
        "label": "Hypogammaglobulinemia, unspecified"
    },
    {
        "value": "I351",
        "label": "Nonrheumatic aortic (valve) insufficiency"
    },
    {
        "value": "N3281",
        "label": "Overactive bladder"
    },
    {
        "value": "R350",
        "label": "Frequency of micturition"
    },
    {
        "value": "V1079",
        "label": "Personal history of other lymphatic and hematopoietic neoplasms"
    },
    {
        "value": "J15211",
        "label": "Pneumonia due to Methicillin susceptible Staphylococcus aureus"
    },
    {
        "value": "E9305",
        "label": "Cephalosporin group causing adverse effects in therapeutic use"
    },
    {
        "value": "57450",
        "label": "Calculus of bile duct without mention of cholecystitis, without mention of obstruction"
    },
    {
        "value": "I2782",
        "label": "Chronic pulmonary embolism"
    },
    {
        "value": "E1010",
        "label": "Type 1 diabetes mellitus with ketoacidosis without coma"
    },
    {
        "value": "C9202",
        "label": "Acute myeloblastic leukemia, in relapse"
    },
    {
        "value": "41072",
        "label": "Subendocardial infarction, subsequent episode of care"
    },
    {
        "value": "5185",
        "label": "Pulmonary insufficiency following trauma and surgery"
    },
    {
        "value": "T82858A",
        "label": "Stenosis of other vascular prosthetic devices, implants and grafts, initial encounter"
    },
    {
        "value": "L4050",
        "label": "Arthropathic psoriasis, unspecified"
    },
    {
        "value": "R195",
        "label": "Other fecal abnormalities"
    },
    {
        "value": "2766",
        "label": "Fluid overload disorder"
    },
    {
        "value": "20501",
        "label": "Acute myeloid leukemia, in remission"
    },
    {
        "value": "1961",
        "label": "Secondary and unspecified malignant neoplasm of intrathoracic lymph nodes"
    },
    {
        "value": "99832",
        "label": "Disruption of external operation (surgical) wound"
    },
    {
        "value": "V1087",
        "label": "Personal history of malignant neoplasm of thyroid"
    },
    {
        "value": "4592",
        "label": "Compression of vein"
    },
    {
        "value": "M419",
        "label": "Scoliosis, unspecified"
    },
    {
        "value": "2721",
        "label": "Pure hyperglyceridemia"
    },
    {
        "value": "M25552",
        "label": "Pain in left hip"
    },
    {
        "value": "73730",
        "label": "Scoliosis [and kyphoscoliosis], idiopathic"
    },
    {
        "value": "K5720",
        "label": "Diverticulitis of large intestine with perforation and abscess without bleeding"
    },
    {
        "value": "0388",
        "label": "Other specified septicemias"
    },
    {
        "value": "79001",
        "label": "Precipitous drop in hematocrit"
    },
    {
        "value": "L89159",
        "label": "Pressure ulcer of sacral region, unspecified stage"
    },
    {
        "value": "Z1611",
        "label": "Resistance to penicillins"
    },
    {
        "value": "9961",
        "label": "Mechanical complication of other vascular device, implant, and graft"
    },
    {
        "value": "R400",
        "label": "Somnolence"
    },
    {
        "value": "I493",
        "label": "Ventricular premature depolarization"
    },
    {
        "value": "E854",
        "label": "Organ-limited amyloidosis"
    },
    {
        "value": "I82411",
        "label": "Acute embolism and thrombosis of right femoral vein"
    },
    {
        "value": "K264",
        "label": "Chronic or unspecified duodenal ulcer with hemorrhage"
    },
    {
        "value": "V1041",
        "label": "Personal history of malignant neoplasm of cervix uteri"
    },
    {
        "value": "5750",
        "label": "Acute cholecystitis"
    },
    {
        "value": "T360X5A",
        "label": "Adverse effect of penicillins, initial encounter"
    },
    {
        "value": "3331",
        "label": "Essential and other specified forms of tremor"
    },
    {
        "value": "03843",
        "label": "Septicemia due to pseudomonas"
    },
    {
        "value": "70712",
        "label": "Ulcer of calf"
    },
    {
        "value": "E8785",
        "label": "Amputation of limb(s) causing abnormal patient reaction, or later complication, without mention of misadventure at time of operation"
    },
    {
        "value": "M3500",
        "label": "Sjogren syndrome, unspecified"
    },
    {
        "value": "5738",
        "label": "Other specified disorders of liver"
    },
    {
        "value": "25081",
        "label": "Diabetes with other specified manifestations, type I [juvenile type], not stated as uncontrolled"
    },
    {
        "value": "N132",
        "label": "Hydronephrosis with renal and ureteral calculous obstruction"
    },
    {
        "value": "Z89611",
        "label": "Acquired absence of right leg above knee"
    },
    {
        "value": "68110",
        "label": "Cellulitis and abscess of toe, unspecified"
    },
    {
        "value": "K912",
        "label": "Postsurgical malabsorption, not elsewhere classified"
    },
    {
        "value": "51882",
        "label": "Other pulmonary insufficiency, not elsewhere classified"
    },
    {
        "value": "78451",
        "label": "Dysarthria"
    },
    {
        "value": "V113",
        "label": "Personal history of alcoholism"
    },
    {
        "value": "V113",
        "label": "Person boarding or alighting a pedal cycle injured in collision with other pedal cycle"
    },
    {
        "value": "T451X5S",
        "label": "Adverse effect of antineoplastic and immunosuppressive drugs, sequela"
    },
    {
        "value": "F1123",
        "label": "Opioid dependence with withdrawal"
    },
    {
        "value": "5693",
        "label": "Hemorrhage of rectum and anus"
    },
    {
        "value": "V1043",
        "label": "Personal history of malignant neoplasm of ovary"
    },
    {
        "value": "R609",
        "label": "Edema, unspecified"
    },
    {
        "value": "H538",
        "label": "Other visual disturbances"
    },
    {
        "value": "E9300",
        "label": "Penicillins causing adverse effects in therapeutic use"
    },
    {
        "value": "V0382",
        "label": "Other specified vaccinations against streptococcus pneumoniae [pneumococcus]"
    },
    {
        "value": "99762",
        "label": "Infection (chronic) of amputation stump"
    },
    {
        "value": "28731",
        "label": "Immune thrombocytopenic purpura"
    },
    {
        "value": "I82412",
        "label": "Acute embolism and thrombosis of left femoral vein"
    },
    {
        "value": "R030",
        "label": "Elevated blood-pressure reading, without diagnosis of hypertension"
    },
    {
        "value": "Y828",
        "label": "Other medical devices associated with adverse incidents"
    },
    {
        "value": "J8410",
        "label": "Pulmonary fibrosis, unspecified"
    },
    {
        "value": "Z170",
        "label": "Estrogen receptor positive status [ER+]"
    },
    {
        "value": "55321",
        "label": "Incisional hernia without mention of obstruction or gangrene"
    },
    {
        "value": "Z79891",
        "label": "Long term (current) use of opiate analgesic"
    },
    {
        "value": "J329",
        "label": "Chronic sinusitis, unspecified"
    },
    {
        "value": "T8143XA",
        "label": "Infection following a procedure, organ and space surgical site, initial encounter"
    },
    {
        "value": "K644",
        "label": "Residual hemorrhoidal skin tags"
    },
    {
        "value": "Y834",
        "label": "Other reconstructive surgery as the cause of abnormal reaction of the patient, or of later complication, without mention of misadventure at the time of the procedure"
    },
    {
        "value": "I513",
        "label": "Intracardiac thrombosis, not elsewhere classified"
    },
    {
        "value": "7243",
        "label": "Sciatica"
    },
    {
        "value": "E0500",
        "label": "Thyrotoxicosis with diffuse goiter without thyrotoxic crisis or storm"
    },
    {
        "value": "5839",
        "label": "Nephritis and nephropathy, not specified as acute or chronic, with unspecified pathological lesion in kidney"
    },
    {
        "value": "3439",
        "label": "Infantile cerebral palsy, unspecified"
    },
    {
        "value": "T424X5A",
        "label": "Adverse effect of benzodiazepines, initial encounter"
    },
    {
        "value": "I25118",
        "label": "Atherosclerotic heart disease of native coronary artery with other forms of angina pectoris"
    },
    {
        "value": "1623",
        "label": "Malignant neoplasm of upper lobe, bronchus or lung"
    },
    {
        "value": "I2582",
        "label": "Chronic total occlusion of coronary artery"
    },
    {
        "value": "Y92018",
        "label": "Other place in single-family (private) house as the place of occurrence of the external cause"
    },
    {
        "value": "Z8042",
        "label": "Family history of malignant neoplasm of prostate"
    },
    {
        "value": "V140",
        "label": "Personal history of allergy to penicillin"
    },
    {
        "value": "V140",
        "label": "Pedal cycle driver injured in collision with heavy transport vehicle or bus in nontraffic accident"
    },
    {
        "value": "R251",
        "label": "Tremor, unspecified"
    },
    {
        "value": "R200",
        "label": "Anesthesia of skin"
    },
    {
        "value": "E11622",
        "label": "Type 2 diabetes mellitus with other skin ulcer"
    },
    {
        "value": "60784",
        "label": "Impotence of organic origin"
    },
    {
        "value": "431",
        "label": "Intracerebral hemorrhage"
    },
    {
        "value": "1179",
        "label": "Other and unspecified mycoses"
    },
    {
        "value": "V5864",
        "label": "Long-term (current) use of non-steroidal anti-inflammatories (NSAID)"
    },
    {
        "value": "Z8501",
        "label": "Personal history of malignant neoplasm of esophagus"
    },
    {
        "value": "C3411",
        "label": "Malignant neoplasm of upper lobe, right bronchus or lung"
    },
    {
        "value": "K2980",
        "label": "Duodenitis without bleeding"
    },
    {
        "value": "99666",
        "label": "Infection and inflammatory reaction due to internal joint prosthesis"
    },
    {
        "value": "V4585",
        "label": "Insulin pump status"
    },
    {
        "value": "K661",
        "label": "Hemoperitoneum"
    },
    {
        "value": "45381",
        "label": "Acute venous embolism and thrombosis of superficial veins of upper extremity"
    },
    {
        "value": "M3214",
        "label": "Glomerular disease in systemic lupus erythematosus"
    },
    {
        "value": "Z5329",
        "label": "Procedure and treatment not carried out because of patient's decision for other reasons"
    },
    {
        "value": "B951",
        "label": "Streptococcus, group B, as the cause of diseases classified elsewhere"
    },
    {
        "value": "F1490",
        "label": "Cocaine use, unspecified, uncomplicated"
    },
    {
        "value": "56081",
        "label": "Intestinal or peritoneal adhesions with obstruction (postoperative) (postinfection)"
    },
    {
        "value": "E790",
        "label": "Hyperuricemia without signs of inflammatory arthritis and tophaceous disease"
    },
    {
        "value": "I69391",
        "label": "Dysphagia following cerebral infarction"
    },
    {
        "value": "M4626",
        "label": "Osteomyelitis of vertebra, lumbar region"
    },
    {
        "value": "3481",
        "label": "Anoxic brain damage"
    },
    {
        "value": "F603",
        "label": "Borderline personality disorder"
    },
    {
        "value": "2874",
        "label": "Secondary thrombocytopenia"
    },
    {
        "value": "9092",
        "label": "Late effect of radiation"
    },
    {
        "value": "N1339",
        "label": "Other hydronephrosis"
    },
    {
        "value": "V453",
        "label": "Intestinal bypass or anastomosis status"
    },
    {
        "value": "V453",
        "label": "Unspecified car occupant injured in collision with railway train or railway vehicle in nontraffic accident"
    },
    {
        "value": "J156",
        "label": "Pneumonia due to other Gram-negative bacteria"
    },
    {
        "value": "J4520",
        "label": "Mild intermittent asthma, uncomplicated"
    },
    {
        "value": "I6340",
        "label": "Cerebral infarction due to embolism of unspecified cerebral artery"
    },
    {
        "value": "K31819",
        "label": "Angiodysplasia of stomach and duodenum without bleeding"
    },
    {
        "value": "M726",
        "label": "Necrotizing fasciitis"
    },
    {
        "value": "04109",
        "label": "Streptococcus infection in conditions classified elsewhere and of unspecified site, other streptococcus"
    },
    {
        "value": "V641",
        "label": "Surgical or other procedure not carried out because of contraindication"
    },
    {
        "value": "V641",
        "label": "Passenger in heavy transport vehicle injured in collision with heavy transport vehicle or bus in nontraffic accident"
    },
    {
        "value": "Z5309",
        "label": "Procedure and treatment not carried out because of other contraindication"
    },
    {
        "value": "72210",
        "label": "Displacement of lumbar intervertebral disc without myelopathy"
    },
    {
        "value": "D89813",
        "label": "Graft-versus-host disease, unspecified"
    },
    {
        "value": "0785",
        "label": "Cytomegaloviral disease"
    },
    {
        "value": "51883",
        "label": "Chronic respiratory failure"
    },
    {
        "value": "4260",
        "label": "Atrioventricular block, complete"
    },
    {
        "value": "T40605A",
        "label": "Adverse effect of unspecified narcotics, initial encounter"
    },
    {
        "value": "J9692",
        "label": "Respiratory failure, unspecified with hypercapnia"
    },
    {
        "value": "M86171",
        "label": "Other acute osteomyelitis, right ankle and foot"
    },
    {
        "value": "C799",
        "label": "Secondary malignant neoplasm of unspecified site"
    },
    {
        "value": "J9690",
        "label": "Respiratory failure, unspecified, unspecified whether with hypoxia or hypercapnia"
    },
    {
        "value": "1125",
        "label": "Disseminated candidiasis"
    },
    {
        "value": "M4806",
        "label": "Spinal stenosis, lumbar region"
    },
    {
        "value": "R1110",
        "label": "Vomiting, unspecified"
    },
    {
        "value": "T8611",
        "label": "Kidney transplant rejection"
    },
    {
        "value": "K56609",
        "label": "Unspecified intestinal obstruction, unspecified as to partial versus complete obstruction"
    },
    {
        "value": "41402",
        "label": "Coronary atherosclerosis of autologous vein bypass graft"
    },
    {
        "value": "20400",
        "label": "Acute lymphoid leukemia, without mention of having achieved remission"
    },
    {
        "value": "K029",
        "label": "Dental caries, unspecified"
    },
    {
        "value": "8670",
        "label": "Injury to bladder and urethra, without mention of open wound into cavity"
    },
    {
        "value": "M5416",
        "label": "Radiculopathy, lumbar region"
    },
    {
        "value": "78760",
        "label": "Full incontinence of feces"
    },
    {
        "value": "4561",
        "label": "Esophageal varices without mention of bleeding"
    },
    {
        "value": "N39498",
        "label": "Other specified urinary incontinence"
    },
    {
        "value": "53560",
        "label": "Duodenitis, without mention of hemorrhage"
    },
    {
        "value": "L03113",
        "label": "Cellulitis of right upper limb"
    },
    {
        "value": "D839",
        "label": "Common variable immunodeficiency, unspecified"
    },
    {
        "value": "5303",
        "label": "Stricture and stenosis of esophagus"
    },
    {
        "value": "I4901",
        "label": "Ventricular fibrillation"
    },
    {
        "value": "4142",
        "label": "Chronic total occlusion of coronary artery"
    },
    {
        "value": "34290",
        "label": "Hemiplegia, unspecified, affecting unspecified side"
    },
    {
        "value": "03819",
        "label": "Other staphylococcal septicemia"
    },
    {
        "value": "31401",
        "label": "Attention deficit disorder with hyperactivity"
    },
    {
        "value": "Z91138",
        "label": "Patient's unintentional underdosing of medication regimen for other reason"
    },
    {
        "value": "N289",
        "label": "Disorder of kidney and ureter, unspecified"
    },
    {
        "value": "D6851",
        "label": "Activated protein C resistance"
    },
    {
        "value": "30520",
        "label": "Cannabis abuse, unspecified"
    },
    {
        "value": "51181",
        "label": "Malignant pleural effusion"
    },
    {
        "value": "G935",
        "label": "Compression of brain"
    },
    {
        "value": "4739",
        "label": "Unspecified sinusitis (chronic)"
    },
    {
        "value": "W06XXXA",
        "label": "Fall from bed, initial encounter"
    },
    {
        "value": "D869",
        "label": "Sarcoidosis, unspecified"
    },
    {
        "value": "Y95",
        "label": "Nosocomial condition"
    },
    {
        "value": "T502X5A",
        "label": "Adverse effect of carbonic-anhydrase inhibitors, benzothiadiazides and other diuretics, initial encounter"
    },
    {
        "value": "2858",
        "label": "Other specified anemias"
    },
    {
        "value": "K658",
        "label": "Other peritonitis"
    },
    {
        "value": "78194",
        "label": "Facial weakness"
    },
    {
        "value": "D6859",
        "label": "Other primary thrombophilia"
    },
    {
        "value": "M1711",
        "label": "Unilateral primary osteoarthritis, right knee"
    },
    {
        "value": "E7849",
        "label": "Other hyperlipidemia"
    },
    {
        "value": "V1552",
        "label": "Personal history of traumatic brain injury"
    },
    {
        "value": "E042",
        "label": "Nontoxic multinodular goiter"
    },
    {
        "value": "45821",
        "label": "Hypotension of hemodialysis"
    },
    {
        "value": "57410",
        "label": "Calculus of gallbladder with other cholecystitis, without mention of obstruction"
    },
    {
        "value": "33182",
        "label": "Dementia with lewy bodies"
    },
    {
        "value": "36960",
        "label": "Profound impairment, one eye, impairment level not further specified"
    },
    {
        "value": "D61811",
        "label": "Other drug-induced pancytopenia"
    },
    {
        "value": "5934",
        "label": "Other ureteric obstruction"
    },
    {
        "value": "L02211",
        "label": "Cutaneous abscess of abdominal wall"
    },
    {
        "value": "78841",
        "label": "Urinary frequency"
    },
    {
        "value": "30301",
        "label": "Acute alcoholic intoxication in alcoholism, continuous"
    },
    {
        "value": "T8579XA",
        "label": "Infection and inflammatory reaction due to other internal prosthetic devices, implants and grafts, initial encounter"
    },
    {
        "value": "T447X5A",
        "label": "Adverse effect of beta-adrenoreceptor antagonists, initial encounter"
    },
    {
        "value": "F0391",
        "label": "Unspecified dementia, unspecified severity, with behavioral disturbance"
    },
    {
        "value": "K860",
        "label": "Alcohol-induced chronic pancreatitis"
    },
    {
        "value": "K862",
        "label": "Cyst of pancreas"
    },
    {
        "value": "53190",
        "label": "Gastric ulcer, unspecified as acute or chronic, without mention of hemorrhage or perforation, without mention of obstruction"
    },
    {
        "value": "5109",
        "label": "Empyema without mention of fistula"
    },
    {
        "value": "F200",
        "label": "Paranoid schizophrenia"
    },
    {
        "value": "K743",
        "label": "Primary biliary cirrhosis"
    },
    {
        "value": "B377",
        "label": "Candidal sepsis"
    },
    {
        "value": "51851",
        "label": "Acute respiratory failure following trauma and surgery"
    },
    {
        "value": "W19XXXD",
        "label": "Unspecified fall, subsequent encounter"
    },
    {
        "value": "I82622",
        "label": "Acute embolism and thrombosis of deep veins of left upper extremity"
    },
    {
        "value": "T8089XA",
        "label": "Other complications following infusion, transfusion and therapeutic injection, initial encounter"
    },
    {
        "value": "1579",
        "label": "Malignant neoplasm of pancreas, part unspecified"
    },
    {
        "value": "I161",
        "label": "Hypertensive emergency"
    },
    {
        "value": "V444",
        "label": "Status of other artificial opening of gastrointestinal tract"
    },
    {
        "value": "V444",
        "label": "Person boarding or alighting a car injured in collision with heavy transport vehicle or bus"
    },
    {
        "value": "4871",
        "label": "Influenza with other respiratory manifestations"
    },
    {
        "value": "5531",
        "label": "Umbilical hernia without mention of obstruction or gangrene"
    },
    {
        "value": "J15212",
        "label": "Pneumonia due to Methicillin resistant Staphylococcus aureus"
    },
    {
        "value": "L98499",
        "label": "Non-pressure chronic ulcer of skin of other sites with unspecified severity"
    },
    {
        "value": "36900",
        "label": "Profound impairment, both eyes, impairment level not further specified"
    },
    {
        "value": "G253",
        "label": "Myoclonus"
    },
    {
        "value": "I864",
        "label": "Gastric varices"
    },
    {
        "value": "K769",
        "label": "Liver disease, unspecified"
    },
    {
        "value": "V551",
        "label": "Attention to gastrostomy"
    },
    {
        "value": "V551",
        "label": "Passenger in pick-up truck or van injured in collision with railway train or railway vehicle in nontraffic accident"
    },
    {
        "value": "F4320",
        "label": "Adjustment disorder, unspecified"
    },
    {
        "value": "I452",
        "label": "Bifascicular block"
    },
    {
        "value": "4568",
        "label": "Varices of other sites"
    },
    {
        "value": "G250",
        "label": "Essential tremor"
    },
    {
        "value": "V1201",
        "label": "Personal history of tuberculosis"
    },
    {
        "value": "V6441",
        "label": "Laparoscopic surgical procedure converted to open procedure"
    },
    {
        "value": "Z89412",
        "label": "Acquired absence of left great toe"
    },
    {
        "value": "K432",
        "label": "Incisional hernia without obstruction or gangrene"
    },
    {
        "value": "K317",
        "label": "Polyp of stomach and duodenum"
    },
    {
        "value": "A09",
        "label": "Infectious gastroenteritis and colitis, unspecified"
    },
    {
        "value": "T85590A",
        "label": "Other mechanical complication of bile duct prosthesis, initial encounter"
    },
    {
        "value": "24200",
        "label": "Toxic diffuse goiter without mention of thyrotoxic crisis or storm"
    },
    {
        "value": "K7210",
        "label": "Chronic hepatic failure without coma"
    },
    {
        "value": "45182",
        "label": "Phlebitis and thrombophlebitis of superficial veins of upper extremities"
    },
    {
        "value": "N529",
        "label": "Male erectile dysfunction, unspecified"
    },
    {
        "value": "F10229",
        "label": "Alcohol dependence with intoxication, unspecified"
    },
    {
        "value": "43330",
        "label": "Occlusion and stenosis of multiple and bilateral precerebral arteries without mention of cerebral infarction"
    },
    {
        "value": "Z98890",
        "label": "Other specified postprocedural states"
    },
    {
        "value": "T50995A",
        "label": "Adverse effect of other drugs, medicaments and biological substances, initial encounter"
    },
    {
        "value": "99769",
        "label": "Other amputation stump complication"
    },
    {
        "value": "Z89411",
        "label": "Acquired absence of right great toe"
    },
    {
        "value": "G9389",
        "label": "Other specified disorders of brain"
    },
    {
        "value": "V090",
        "label": "Infection with microorganisms resistant to penicillins"
    },
    {
        "value": "V090",
        "label": "Pedestrian injured in nontraffic accident involving other and unspecified motor vehicles"
    },
    {
        "value": "30183",
        "label": "Borderline personality disorder"
    },
    {
        "value": "B373",
        "label": "Candidiasis of vulva and vagina"
    },
    {
        "value": "C784",
        "label": "Secondary malignant neoplasm of small intestine"
    },
    {
        "value": "I8511",
        "label": "Secondary esophageal varices with bleeding"
    },
    {
        "value": "2572",
        "label": "Other testicular hypofunction"
    },
    {
        "value": "M479",
        "label": "Spondylosis, unspecified"
    },
    {
        "value": "B379",
        "label": "Candidiasis, unspecified"
    },
    {
        "value": "K31811",
        "label": "Angiodysplasia of stomach and duodenum with bleeding"
    },
    {
        "value": "C778",
        "label": "Secondary and unspecified malignant neoplasm of lymph nodes of multiple regions"
    },
    {
        "value": "Z95811",
        "label": "Presence of heart assist device"
    },
    {
        "value": "V552",
        "label": "Attention to ileostomy"
    },
    {
        "value": "V552",
        "label": "Person on outside of pick-up truck or van injured in collision with railway train or railway vehicle in nontraffic accident"
    },
    {
        "value": "3379",
        "label": "Unspecified disorder of autonomic nervous system"
    },
    {
        "value": "I69392",
        "label": "Facial weakness following cerebral infarction"
    },
    {
        "value": "Z902",
        "label": "Acquired absence of lung [part of]"
    },
    {
        "value": "T8132XA",
        "label": "Disruption of internal operation (surgical) wound, not elsewhere classified, initial encounter"
    },
    {
        "value": "V4971",
        "label": "Great toe amputation status"
    },
    {
        "value": "T8119XA",
        "label": "Other postprocedural shock, initial encounter"
    },
    {
        "value": "G7000",
        "label": "Myasthenia gravis without (acute) exacerbation"
    },
    {
        "value": "262",
        "label": "Other severe protein-calorie malnutrition"
    },
    {
        "value": "E9309",
        "label": "Unspecified antibiotic causing adverse effects in therapeutic use"
    },
    {
        "value": "4556",
        "label": "Unspecified hemorrhoids without mention of complication"
    },
    {
        "value": "J95811",
        "label": "Postprocedural pneumothorax"
    },
    {
        "value": "K900",
        "label": "Celiac disease"
    },
    {
        "value": "B372",
        "label": "Candidiasis of skin and nail"
    },
    {
        "value": "Z8571",
        "label": "Personal history of Hodgkin lymphoma"
    },
    {
        "value": "1173",
        "label": "Aspergillosis"
    },
    {
        "value": "I82C11",
        "label": "Acute embolism and thrombosis of right internal jugular vein"
    },
    {
        "value": "1123",
        "label": "Candidiasis of skin and nails"
    },
    {
        "value": "R7611",
        "label": "Nonspecific reaction to tuberculin skin test without active tuberculosis"
    },
    {
        "value": "K8050",
        "label": "Calculus of bile duct without cholangitis or cholecystitis without obstruction"
    },
    {
        "value": "1749",
        "label": "Malignant neoplasm of breast (female), unspecified"
    },
    {
        "value": "F1910",
        "label": "Other psychoactive substance abuse, uncomplicated"
    },
    {
        "value": "78722",
        "label": "Dysphagia, oropharyngeal phase"
    },
    {
        "value": "M79604",
        "label": "Pain in right leg"
    },
    {
        "value": "7881",
        "label": "Dysuria"
    },
    {
        "value": "1991",
        "label": "Other malignant neoplasm without specification of site"
    },
    {
        "value": "J9612",
        "label": "Chronic respiratory failure with hypercapnia"
    },
    {
        "value": "48241",
        "label": "Methicillin susceptible pneumonia due to Staphylococcus aureus"
    },
    {
        "value": "I2690",
        "label": "Septic pulmonary embolism without acute cor pulmonale"
    },
    {
        "value": "D563",
        "label": "Thalassemia minor"
    },
    {
        "value": "I671",
        "label": "Cerebral aneurysm, nonruptured"
    },
    {
        "value": "5305",
        "label": "Dyskinesia of esophagus"
    },
    {
        "value": "C782",
        "label": "Secondary malignant neoplasm of pleura"
    },
    {
        "value": "T8641",
        "label": "Liver transplant rejection"
    },
    {
        "value": "45382",
        "label": "Acute venous embolism and thrombosis of deep veins of upper extremity"
    },
    {
        "value": "L271",
        "label": "Localized skin eruption due to drugs and medicaments taken internally"
    },
    {
        "value": "T17990A",
        "label": "Other foreign object in respiratory tract, part unspecified in causing asphyxiation, initial encounter"
    },
    {
        "value": "K8510",
        "label": "Biliary acute pancreatitis without necrosis or infection"
    },
    {
        "value": "B9789",
        "label": "Other viral agents as the cause of diseases classified elsewhere"
    },
    {
        "value": "7098",
        "label": "Other specified disorders of skin"
    },
    {
        "value": "55320",
        "label": "Ventral, unspecified, hernia without mention of obstruction or gangrene"
    },
    {
        "value": "C3412",
        "label": "Malignant neoplasm of upper lobe, left bronchus or lung"
    },
    {
        "value": "57400",
        "label": "Calculus of gallbladder with acute cholecystitis, without mention of obstruction"
    },
    {
        "value": "K6289",
        "label": "Other specified diseases of anus and rectum"
    },
    {
        "value": "R0781",
        "label": "Pleurodynia"
    },
    {
        "value": "56729",
        "label": "Other suppurative peritonitis"
    },
    {
        "value": "99672",
        "label": "Other complications due to other cardiac device, implant, and graft"
    },
    {
        "value": "7197",
        "label": "Difficulty in walking"
    },
    {
        "value": "F79",
        "label": "Unspecified intellectual disabilities"
    },
    {
        "value": "71106",
        "label": "Pyogenic arthritis, lower leg"
    },
    {
        "value": "F0281",
        "label": "Dementia in other diseases classified elsewhere, unspecified severity, with behavioral disturbance"
    },
    {
        "value": "K5660",
        "label": "Unspecified intestinal obstruction"
    },
    {
        "value": "K6389",
        "label": "Other specified diseases of intestine"
    },
    {
        "value": "I69322",
        "label": "Dysarthria following cerebral infarction"
    },
    {
        "value": "5579",
        "label": "Unspecified vascular insufficiency of intestine"
    },
    {
        "value": "K551",
        "label": "Chronic vascular disorders of intestine"
    },
    {
        "value": "04102",
        "label": "Streptococcus infection in conditions classified elsewhere and of unspecified site, streptococcus, group B"
    },
    {
        "value": "1987",
        "label": "Secondary malignant neoplasm of adrenal gland"
    },
    {
        "value": "K91840",
        "label": "Postprocedural hemorrhage of a digestive system organ or structure following a digestive system procedure"
    },
    {
        "value": "Z89612",
        "label": "Acquired absence of left leg above knee"
    },
    {
        "value": "0383",
        "label": "Septicemia due to anaerobes"
    },
    {
        "value": "K1231",
        "label": "Oral mucositis (ulcerative) due to antineoplastic therapy"
    },
    {
        "value": "I341",
        "label": "Nonrheumatic mitral (valve) prolapse"
    },
    {
        "value": "27549",
        "label": "Other disorders of calcium metabolism"
    },
    {
        "value": "Z8611",
        "label": "Personal history of tuberculosis"
    },
    {
        "value": "Z370",
        "label": "Single live birth"
    },
    {
        "value": "J9610",
        "label": "Chronic respiratory failure, unspecified whether with hypoxia or hypercapnia"
    },
    {
        "value": "M62838",
        "label": "Other muscle spasm"
    },
    {
        "value": "Z431",
        "label": "Encounter for attention to gastrostomy"
    },
    {
        "value": "78903",
        "label": "Abdominal pain, right lower quadrant"
    },
    {
        "value": "M5430",
        "label": "Sciatica, unspecified side"
    },
    {
        "value": "H547",
        "label": "Unspecified visual loss"
    },
    {
        "value": "E118",
        "label": "Type 2 diabetes mellitus with unspecified complications"
    },
    {
        "value": "L03114",
        "label": "Cellulitis of left upper limb"
    },
    {
        "value": "1561",
        "label": "Malignant neoplasm of extrahepatic bile ducts"
    },
    {
        "value": "72190",
        "label": "Spondylosis of unspecified site, without mention of myelopathy"
    },
    {
        "value": "V0259",
        "label": "Carrier or suspected carrier of other specified bacterial diseases"
    },
    {
        "value": "I498",
        "label": "Other specified cardiac arrhythmias"
    },
    {
        "value": "J188",
        "label": "Other pneumonia, unspecified organism"
    },
    {
        "value": "V451",
        "label": "Renal dialysis status"
    },
    {
        "value": "V451",
        "label": "Car passenger injured in collision with railway train or railway vehicle in nontraffic accident"
    },
    {
        "value": "317",
        "label": "Mild intellectual disabilities"
    },
    {
        "value": "D72828",
        "label": "Other elevated white blood cell count"
    },
    {
        "value": "K2090",
        "label": "Esophagitis, unspecified without bleeding"
    },
    {
        "value": "Z9115",
        "label": "Patient's noncompliance with renal dialysis"
    },
    {
        "value": "L298",
        "label": "Other pruritus"
    },
    {
        "value": "I82612",
        "label": "Acute embolism and thrombosis of superficial veins of left upper extremity"
    },
    {
        "value": "Z2239",
        "label": "Carrier of other specified bacterial diseases"
    },
    {
        "value": "4779",
        "label": "Allergic rhinitis, cause unspecified"
    },
    {
        "value": "J302",
        "label": "Other seasonal allergic rhinitis"
    },
    {
        "value": "C641",
        "label": "Malignant neoplasm of right kidney, except renal pelvis"
    },
    {
        "value": "5716",
        "label": "Biliary cirrhosis"
    },
    {
        "value": "R269",
        "label": "Unspecified abnormalities of gait and mobility"
    },
    {
        "value": "3241",
        "label": "Intraspinal abscess"
    },
    {
        "value": "I9789",
        "label": "Other postprocedural complications and disorders of the circulatory system, not elsewhere classified"
    },
    {
        "value": "Z1629",
        "label": "Resistance to other single specified antibiotic"
    },
    {
        "value": "A401",
        "label": "Sepsis due to streptococcus, group B"
    },
    {
        "value": "K4090",
        "label": "Unilateral inguinal hernia, without obstruction or gangrene, not specified as recurrent"
    },
    {
        "value": "4660",
        "label": "Acute bronchitis"
    },
    {
        "value": "E9290",
        "label": "Late effects of motor vehicle accident"
    },
    {
        "value": "E1069",
        "label": "Type 1 diabetes mellitus with other specified complication"
    },
    {
        "value": "73342",
        "label": "Aseptic necrosis of head and neck of femur"
    },
    {
        "value": "Z432",
        "label": "Encounter for attention to ileostomy"
    },
    {
        "value": "T85628A",
        "label": "Displacement of other specified internal prosthetic devices, implants and grafts, initial encounter"
    },
    {
        "value": "Y92002",
        "label": "Bathroom of unspecified non-institutional (private) residence as the place of occurrence of the external cause"
    },
    {
        "value": "9986",
        "label": "Persistent postoperative fistula"
    },
    {
        "value": "7101",
        "label": "Systemic sclerosis"
    },
    {
        "value": "Z856",
        "label": "Personal history of leukemia"
    },
    {
        "value": "I6529",
        "label": "Occlusion and stenosis of unspecified carotid artery"
    },
    {
        "value": "5178",
        "label": "Lung involvement in other diseases classified elsewhere"
    },
    {
        "value": "C8330",
        "label": "Diffuse large B-cell lymphoma, unspecified site"
    },
    {
        "value": "2811",
        "label": "Other vitamin B12 deficiency anemia"
    },
    {
        "value": "7892",
        "label": "Splenomegaly"
    },
    {
        "value": "K1230",
        "label": "Oral mucositis (ulcerative), unspecified"
    },
    {
        "value": "E782",
        "label": "Mixed hyperlipidemia"
    },
    {
        "value": "I2721",
        "label": "Secondary pulmonary arterial hypertension"
    },
    {
        "value": "R490",
        "label": "Dysphonia"
    },
    {
        "value": "N318",
        "label": "Other neuromuscular dysfunction of bladder"
    },
    {
        "value": "R066",
        "label": "Hiccough"
    },
    {
        "value": "25083",
        "label": "Diabetes with other specified manifestations, type I [juvenile type], uncontrolled"
    },
    {
        "value": "2411",
        "label": "Nontoxic multinodular goiter"
    },
    {
        "value": "7813",
        "label": "Lack of coordination"
    },
    {
        "value": "3962",
        "label": "Mitral valve insufficiency and aortic valve stenosis"
    },
    {
        "value": "11289",
        "label": "Other candidiasis of other specified sites"
    },
    {
        "value": "3079",
        "label": "Other and unspecified special symptoms or syndromes, not elsewhere classified"
    },
    {
        "value": "5368",
        "label": "Dyspepsia and other specified disorders of function of stomach"
    },
    {
        "value": "34400",
        "label": "Quadriplegia, unspecified"
    },
    {
        "value": "B259",
        "label": "Cytomegaloviral disease, unspecified"
    },
    {
        "value": "I2723",
        "label": "Pulmonary hypertension due to lung diseases and hypoxia"
    },
    {
        "value": "2920",
        "label": "Drug withdrawal"
    },
    {
        "value": "Z8521",
        "label": "Personal history of malignant neoplasm of larynx"
    },
    {
        "value": "N3000",
        "label": "Acute cystitis without hematuria"
    },
    {
        "value": "72992",
        "label": "Nontraumatic hematoma of soft tissue"
    },
    {
        "value": "2189",
        "label": "Leiomyoma of uterus, unspecified"
    },
    {
        "value": "30001",
        "label": "Panic disorder without agoraphobia"
    },
    {
        "value": "52801",
        "label": "Mucositis (ulcerative) due to antineoplastic therapy"
    },
    {
        "value": "4552",
        "label": "Internal hemorrhoids with other complication"
    },
    {
        "value": "99883",
        "label": "Non-healing surgical wound"
    },
    {
        "value": "T4275XA",
        "label": "Adverse effect of unspecified antiepileptic and sedative-hypnotic drugs, initial encounter"
    },
    {
        "value": "J9819",
        "label": "Other pulmonary collapse"
    },
    {
        "value": "G7281",
        "label": "Critical illness myopathy"
    },
    {
        "value": "I361",
        "label": "Nonrheumatic tricuspid (valve) insufficiency"
    },
    {
        "value": "V4281",
        "label": "Bone marrow replaced by transplant"
    },
    {
        "value": "N139",
        "label": "Obstructive and reflux uropathy, unspecified"
    },
    {
        "value": "4270",
        "label": "Paroxysmal supraventricular tachycardia"
    },
    {
        "value": "E9363",
        "label": "Other and unspecified anticonvulsants causing adverse effects in therapeutic use"
    },
    {
        "value": "72889",
        "label": "Other disorders of muscle, ligament, and fascia"
    },
    {
        "value": "R252",
        "label": "Cramp and spasm"
    },
    {
        "value": "45342",
        "label": "Acute venous embolism and thrombosis of deep vessels of distal lower extremity"
    },
    {
        "value": "I468",
        "label": "Cardiac arrest due to other underlying condition"
    },
    {
        "value": "40311",
        "label": "Hypertensive chronic kidney disease, benign, with chronic kidney disease stage V or end stage renal disease"
    },
    {
        "value": "E8844",
        "label": "Accidental fall from bed"
    },
    {
        "value": "E915",
        "label": "Foreign body accidentally entering other orifice"
    },
    {
        "value": "K315",
        "label": "Obstruction of duodenum"
    },
    {
        "value": "70704",
        "label": "Pressure ulcer, hip"
    },
    {
        "value": "V8539",
        "label": "Body Mass Index 39.0-39.9, adult"
    },
    {
        "value": "R3129",
        "label": "Other microscopic hematuria"
    },
    {
        "value": "F4321",
        "label": "Adjustment disorder with depressed mood"
    },
    {
        "value": "K5731",
        "label": "Diverticulosis of large intestine without perforation or abscess with bleeding"
    },
    {
        "value": "D519",
        "label": "Vitamin B12 deficiency anemia, unspecified"
    },
    {
        "value": "X58XXXD",
        "label": "Exposure to other specified factors, subsequent encounter"
    },
    {
        "value": "40491",
        "label": "Hypertensive heart and chronic kidney disease, unspecified, with heart failure and with chronic kidney disease stage I through stage IV, or unspecified"
    },
    {
        "value": "M4856XA",
        "label": "Collapsed vertebra, not elsewhere classified, lumbar region, initial encounter for fracture"
    },
    {
        "value": "Y731",
        "label": "Therapeutic (nonsurgical) and rehabilitative gastroenterology and urology devices associated with adverse incidents"
    },
    {
        "value": "T50905A",
        "label": "Adverse effect of unspecified drugs, medicaments and biological substances, initial encounter"
    },
    {
        "value": "L304",
        "label": "Erythema intertrigo"
    },
    {
        "value": "K210",
        "label": "Gastro-esophageal reflux disease with esophagitis"
    },
    {
        "value": "K8301",
        "label": "Primary sclerosing cholangitis"
    },
    {
        "value": "53290",
        "label": "Duodenal ulcer, unspecified as acute or chronic, without hemorrhage or perforation, without mention of obstruction"
    },
    {
        "value": "2769",
        "label": "Electrolyte and fluid disorders not elsewhere classified"
    },
    {
        "value": "20502",
        "label": "Acute myeloid leukemia, in relapse"
    },
    {
        "value": "2384",
        "label": "Polycythemia vera"
    },
    {
        "value": "D259",
        "label": "Leiomyoma of uterus, unspecified"
    },
    {
        "value": "Z880",
        "label": "Allergy status to penicillin"
    },
    {
        "value": "79551",
        "label": "Nonspecific reaction to tuberculin skin test without active tuberculosis"
    },
    {
        "value": "G4089",
        "label": "Other seizures"
    },
    {
        "value": "R591",
        "label": "Generalized enlarged lymph nodes"
    },
    {
        "value": "K5732",
        "label": "Diverticulitis of large intestine without perforation or abscess without bleeding"
    },
    {
        "value": "T82524A",
        "label": "Displacement of infusion catheter, initial encounter"
    },
    {
        "value": "R945",
        "label": "Abnormal results of liver function studies"
    },
    {
        "value": "1889",
        "label": "Malignant neoplasm of bladder, part unspecified"
    },
    {
        "value": "K8000",
        "label": "Calculus of gallbladder with acute cholecystitis without obstruction"
    },
    {
        "value": "V4611",
        "label": "Dependence on respirator, status"
    },
    {
        "value": "1121",
        "label": "Candidiasis of vulva and vagina"
    },
    {
        "value": "E9323",
        "label": "Insulins and antidiabetic agents causing adverse effects in therapeutic use"
    },
    {
        "value": "25012",
        "label": "Diabetes with ketoacidosis, type II or unspecified type, uncontrolled"
    },
    {
        "value": "99661",
        "label": "Infection and inflammatory reaction due to cardiac device, implant, and graft"
    },
    {
        "value": "M79605",
        "label": "Pain in left leg"
    },
    {
        "value": "H9193",
        "label": "Unspecified hearing loss, bilateral"
    },
    {
        "value": "G3183",
        "label": "Neurocognitive disorder with Lewy bodies"
    },
    {
        "value": "D703",
        "label": "Neutropenia due to infection"
    },
    {
        "value": "R2689",
        "label": "Other abnormalities of gait and mobility"
    },
    {
        "value": "I82432",
        "label": "Acute embolism and thrombosis of left popliteal vein"
    },
    {
        "value": "L732",
        "label": "Hidradenitis suppurativa"
    },
    {
        "value": "4538",
        "label": "Venous thrombosis nec"
    },
    {
        "value": "V270",
        "label": "Outcome of delivery, single liveborn"
    },
    {
        "value": "V270",
        "label": "Motorcycle driver injured in collision with fixed or stationary object in nontraffic accident"
    },
    {
        "value": "V1279",
        "label": "Personal history of other diseases of digestive system"
    },
    {
        "value": "2252",
        "label": "Benign neoplasm of cerebral meninges"
    },
    {
        "value": "E11628",
        "label": "Type 2 diabetes mellitus with other skin complications"
    },
    {
        "value": "J029",
        "label": "Acute pharyngitis, unspecified"
    },
    {
        "value": "V0991",
        "label": "Infection with drug-resistant microorganisms, unspecified, with multiple drug resistance"
    },
    {
        "value": "L988",
        "label": "Other specified disorders of the skin and subcutaneous tissue"
    },
    {
        "value": "29650",
        "label": "Bipolar I disorder, most recent episode (or current) depressed, unspecified"
    },
    {
        "value": "L089",
        "label": "Local infection of the skin and subcutaneous tissue, unspecified"
    },
    {
        "value": "R809",
        "label": "Proteinuria, unspecified"
    },
    {
        "value": "T8141XA",
        "label": "Infection following a procedure, superficial incisional surgical site, initial encounter"
    },
    {
        "value": "I82611",
        "label": "Acute embolism and thrombosis of superficial veins of right upper extremity"
    },
    {
        "value": "Z960",
        "label": "Presence of urogenital implants"
    },
    {
        "value": "E883",
        "label": "Tumor lysis syndrome"
    },
    {
        "value": "27739",
        "label": "Other amyloidosis"
    },
    {
        "value": "Z5331",
        "label": "Laparoscopic surgical procedure converted to open procedure"
    },
    {
        "value": "D702",
        "label": "Other drug-induced agranulocytosis"
    },
    {
        "value": "R601",
        "label": "Generalized edema"
    },
    {
        "value": "Z1619",
        "label": "Resistance to other specified beta lactam antibiotics"
    },
    {
        "value": "T826XXA",
        "label": "Infection and inflammatory reaction due to cardiac valve prosthesis, initial encounter"
    },
    {
        "value": "11284",
        "label": "Candidal esophagitis"
    },
    {
        "value": "53642",
        "label": "Mechanical complication of gastrostomy"
    },
    {
        "value": "7102",
        "label": "Sicca syndrome"
    },
    {
        "value": "E8881",
        "label": "Fall resulting in striking against other object"
    },
    {
        "value": "E8881",
        "label": "Metabolic syndrome"
    },
    {
        "value": "R1031",
        "label": "Right lower quadrant pain"
    },
    {
        "value": "E0590",
        "label": "Thyrotoxicosis, unspecified without thyrotoxic crisis or storm"
    },
    {
        "value": "V1003",
        "label": "Personal history of malignant neoplasm of esophagus"
    },
    {
        "value": "44422",
        "label": "Arterial embolism and thrombosis of lower extremity"
    },
    {
        "value": "R441",
        "label": "Visual hallucinations"
    },
    {
        "value": "E9479",
        "label": "Unspecified drug or medicinal substance causing adverse effects in therapeutic use"
    },
    {
        "value": "D849",
        "label": "Immunodeficiency, unspecified"
    },
    {
        "value": "K30",
        "label": "Functional dyspepsia"
    },
    {
        "value": "E210",
        "label": "Primary hyperparathyroidism"
    },
    {
        "value": "J150",
        "label": "Pneumonia due to Klebsiella pneumoniae"
    },
    {
        "value": "28959",
        "label": "Other diseases of spleen"
    },
    {
        "value": "I748",
        "label": "Embolism and thrombosis of other arteries"
    },
    {
        "value": "V148",
        "label": "Personal history of allergy to other specified medicinal agents"
    },
    {
        "value": "920",
        "label": "Contusion of face, scalp, and neck except eye(s)"
    },
    {
        "value": "D7582",
        "label": "Heparin induced thrombocytopenia (HIT)"
    },
    {
        "value": "V1351",
        "label": "Personal history of pathologic fracture"
    },
    {
        "value": "99669",
        "label": "Infection and inflammatory reaction due to other internal prosthetic device, implant, and graft"
    },
    {
        "value": "I314",
        "label": "Cardiac tamponade"
    },
    {
        "value": "C801",
        "label": "Malignant (primary) neoplasm, unspecified"
    },
    {
        "value": "04186",
        "label": "Helicobacter pylori [H. pylori]"
    },
    {
        "value": "Q613",
        "label": "Polycystic kidney, unspecified"
    },
    {
        "value": "V4973",
        "label": "Foot amputation status"
    },
    {
        "value": "43883",
        "label": "Other late effects of cerebrovascular disease, facial weakness"
    },
    {
        "value": "V4576",
        "label": "Acquired absence of organ, lung"
    },
    {
        "value": "E8790",
        "label": "Cardiac catheterization as the cause of abnormal reaction of patient, or of later complication, without mention of misadventure at time of procedure"
    },
    {
        "value": "C169",
        "label": "Malignant neoplasm of stomach, unspecified"
    },
    {
        "value": "78093",
        "label": "Memory loss"
    },
    {
        "value": "R5082",
        "label": "Postprocedural fever"
    },
    {
        "value": "J101",
        "label": "Influenza due to other identified influenza virus with other respiratory manifestations"
    },
    {
        "value": "V8537",
        "label": "Body Mass Index 37.0-37.9, adult"
    },
    {
        "value": "43813",
        "label": "Late effects of cerebrovascular disease, dysarthria"
    },
    {
        "value": "I82431",
        "label": "Acute embolism and thrombosis of right popliteal vein"
    },
    {
        "value": "K580",
        "label": "Irritable bowel syndrome with diarrhea"
    },
    {
        "value": "78703",
        "label": "Vomiting alone"
    },
    {
        "value": "E9310",
        "label": "Sulfonamides causing adverse effects in therapeutic use"
    },
    {
        "value": "Z6845",
        "label": "Body mass index [BMI] 70 or greater, adult"
    },
    {
        "value": "1978",
        "label": "Secondary malignant neoplasm of other digestive organs and spleen"
    },
    {
        "value": "58281",
        "label": "Chronic glomerulonephritis in diseases classified elsewhere"
    },
    {
        "value": "4464",
        "label": "Wegener's granulomatosis"
    },
    {
        "value": "3453",
        "label": "Grand mal status"
    },
    {
        "value": "C3431",
        "label": "Malignant neoplasm of lower lobe, right bronchus or lung"
    },
    {
        "value": "M5450",
        "label": "Low back pain, unspecified"
    },
    {
        "value": "E9394",
        "label": "Benzodiazepine-based tranquilizers causing adverse effects in therapeutic use"
    },
    {
        "value": "T43595A",
        "label": "Adverse effect of other antipsychotics and neuroleptics, initial encounter"
    },
    {
        "value": "C7982",
        "label": "Secondary malignant neoplasm of genital organs"
    },
    {
        "value": "33183",
        "label": "Mild cognitive impairment, so stated"
    },
    {
        "value": "C779",
        "label": "Secondary and unspecified malignant neoplasm of lymph node, unspecified"
    },
    {
        "value": "K8031",
        "label": "Calculus of bile duct with cholangitis, unspecified, with obstruction"
    },
    {
        "value": "Z89432",
        "label": "Acquired absence of left foot"
    },
    {
        "value": "72252",
        "label": "Degeneration of lumbar or lumbosacral intervertebral disc"
    },
    {
        "value": "T8613",
        "label": "Kidney transplant infection"
    },
    {
        "value": "F1111",
        "label": "Opioid abuse, in remission"
    },
    {
        "value": "Z90411",
        "label": "Acquired partial absence of pancreas"
    },
    {
        "value": "I868",
        "label": "Varicose veins of other specified sites"
    },
    {
        "value": "L89156",
        "label": "Pressure-induced deep tissue damage of sacral region"
    },
    {
        "value": "7200",
        "label": "Ankylosing spondylitis"
    },
    {
        "value": "55090",
        "label": "Inguinal hernia, without mention of obstruction or gangrene, unilateral or unspecified (not specified as recurrent)"
    },
    {
        "value": "M4854XA",
        "label": "Collapsed vertebra, not elsewhere classified, thoracic region, initial encounter for fracture"
    },
    {
        "value": "T383X6A",
        "label": "Underdosing of insulin and oral hypoglycemic [antidiabetic] drugs, initial encounter"
    },
    {
        "value": "78550",
        "label": "Shock, unspecified"
    },
    {
        "value": "L97829",
        "label": "Non-pressure chronic ulcer of other part of left lower leg with unspecified severity"
    },
    {
        "value": "C9002",
        "label": "Multiple myeloma in relapse"
    },
    {
        "value": "I701",
        "label": "Atherosclerosis of renal artery"
    },
    {
        "value": "27950",
        "label": "Graft-versus-host disease, unspecified"
    },
    {
        "value": "E8784",
        "label": "Other restorative surgery causing abnormal patient reaction, or later complication, without mention of misadventure at time of operation"
    },
    {
        "value": "24290",
        "label": "Thyrotoxicosis without mention of goiter or other cause, and without mention of thyrotoxic crisis or storm"
    },
    {
        "value": "I43",
        "label": "Cardiomyopathy in diseases classified elsewhere"
    },
    {
        "value": "07071",
        "label": "Unspecified viral hepatitis C with hepatic coma"
    },
    {
        "value": "78652",
        "label": "Painful respiration"
    },
    {
        "value": "Z906",
        "label": "Acquired absence of other parts of urinary tract"
    },
    {
        "value": "C569",
        "label": "Malignant neoplasm of unspecified ovary"
    },
    {
        "value": "Z96649",
        "label": "Presence of unspecified artificial hip joint"
    },
    {
        "value": "N1832",
        "label": "Chronic kidney disease, stage 3b"
    },
    {
        "value": "L97929",
        "label": "Non-pressure chronic ulcer of unspecified part of left lower leg with unspecified severity"
    },
    {
        "value": "T8112XA",
        "label": "Postprocedural septic shock, initial encounter"
    },
    {
        "value": "H8110",
        "label": "Benign paroxysmal vertigo, unspecified ear"
    },
    {
        "value": "R419",
        "label": "Unspecified symptoms and signs involving cognitive functions and awareness"
    },
    {
        "value": "78907",
        "label": "Abdominal pain, generalized"
    },
    {
        "value": "7851",
        "label": "Palpitations"
    },
    {
        "value": "K2210",
        "label": "Ulcer of esophagus without bleeding"
    },
    {
        "value": "I728",
        "label": "Aneurysm of other specified arteries"
    },
    {
        "value": "7211",
        "label": "Cervical spondylosis with myelopathy"
    },
    {
        "value": "L89151",
        "label": "Pressure ulcer of sacral region, stage 1"
    },
    {
        "value": "0382",
        "label": "Pneumococcal septicemia [Streptococcus pneumoniae septicemia]"
    },
    {
        "value": "K56600",
        "label": "Partial intestinal obstruction, unspecified as to cause"
    },
    {
        "value": "D508",
        "label": "Other iron deficiency anemias"
    },
    {
        "value": "V8534",
        "label": "Body Mass Index 34.0-34.9, adult"
    },
    {
        "value": "F1411",
        "label": "Cocaine abuse, in remission"
    },
    {
        "value": "71595",
        "label": "Osteoarthrosis, unspecified whether generalized or localized, pelvic region and thigh"
    },
    {
        "value": "B49",
        "label": "Unspecified mycosis"
    },
    {
        "value": "C775",
        "label": "Secondary and unspecified malignant neoplasm of intrapelvic lymph nodes"
    },
    {
        "value": "M4628",
        "label": "Osteomyelitis of vertebra, sacral and sacrococcygeal region"
    },
    {
        "value": "Z823",
        "label": "Family history of stroke"
    },
    {
        "value": "5932",
        "label": "Cyst of kidney, acquired"
    },
    {
        "value": "Z807",
        "label": "Family history of other malignant neoplasms of lymphoid, hematopoietic and related tissues"
    },
    {
        "value": "3540",
        "label": "Carpal tunnel syndrome"
    },
    {
        "value": "T83518A",
        "label": "Infection and inflammatory reaction due to other urinary catheter, initial encounter"
    },
    {
        "value": "52800",
        "label": "Stomatitis and mucositis, unspecified"
    },
    {
        "value": "0539",
        "label": "Herpes zoster without mention of complication"
    },
    {
        "value": "N178",
        "label": "Other acute kidney failure"
    },
    {
        "value": "04189",
        "label": "Other specified bacterial infections in conditions classified elsewhere and of unspecified site, other specified bacteria"
    },
    {
        "value": "J13",
        "label": "Pneumonia due to Streptococcus pneumoniae"
    },
    {
        "value": "79319",
        "label": "Other nonspecific abnormal finding of lung field"
    },
    {
        "value": "J111",
        "label": "Influenza due to unidentified influenza virus with other respiratory manifestations"
    },
    {
        "value": "Z9689",
        "label": "Presence of other specified functional implants"
    },
    {
        "value": "M868X8",
        "label": "Other osteomyelitis, other site"
    },
    {
        "value": "3332",
        "label": "Myoclonus"
    },
    {
        "value": "G9529",
        "label": "Other cord compression"
    },
    {
        "value": "V4361",
        "label": "Shoulder joint replacement"
    },
    {
        "value": "V4361",
        "label": "Car passenger injured in collision with sport utility vehicle in traffic accident"
    },
    {
        "value": "N321",
        "label": "Vesicointestinal fistula"
    },
    {
        "value": "H532",
        "label": "Diplopia"
    },
    {
        "value": "20190",
        "label": "Hodgkin's disease, unspecified type, unspecified site, extranodal and solid organ sites"
    },
    {
        "value": "Z89431",
        "label": "Acquired absence of right foot"
    },
    {
        "value": "99667",
        "label": "Infection and inflammatory reaction due to other internal orthopedic device, implant, and graft"
    },
    {
        "value": "F339",
        "label": "Major depressive disorder, recurrent, unspecified"
    },
    {
        "value": "D320",
        "label": "Benign neoplasm of cerebral meninges"
    },
    {
        "value": "59972",
        "label": "Microscopic hematuria"
    },
    {
        "value": "C785",
        "label": "Secondary malignant neoplasm of large intestine and rectum"
    },
    {
        "value": "4160",
        "label": "Primary pulmonary hypertension"
    },
    {
        "value": "E282",
        "label": "Polycystic ovarian syndrome"
    },
    {
        "value": "R1032",
        "label": "Left lower quadrant pain"
    },
    {
        "value": "H109",
        "label": "Unspecified conjunctivitis"
    },
    {
        "value": "78951",
        "label": "Malignant ascites"
    },
    {
        "value": "V8535",
        "label": "Body Mass Index 35.0-35.9, adult"
    },
    {
        "value": "K9413",
        "label": "Enterostomy malfunction"
    },
    {
        "value": "S065X0A",
        "label": "Traumatic subdural hemorrhage without loss of consciousness, initial encounter"
    },
    {
        "value": "T83022A",
        "label": "Displacement of nephrostomy catheter, initial encounter"
    },
    {
        "value": "K6812",
        "label": "Psoas muscle abscess"
    },
    {
        "value": "R414",
        "label": "Neurologic neglect syndrome"
    },
    {
        "value": "35800",
        "label": "Myasthenia gravis without (acute) exacerbation"
    },
    {
        "value": "Y738",
        "label": "Miscellaneous gastroenterology and urology devices associated with adverse incidents, not elsewhere classified"
    },
    {
        "value": "V452",
        "label": "Presence of cerebrospinal fluid drainage device"
    },
    {
        "value": "V452",
        "label": "Person on outside of car injured in collision with railway train or railway vehicle in nontraffic accident"
    },
    {
        "value": "B258",
        "label": "Other cytomegaloviral diseases"
    },
    {
        "value": "2564",
        "label": "Polycystic ovaries"
    },
    {
        "value": "7230",
        "label": "Spinal stenosis in cervical region"
    },
    {
        "value": "4401",
        "label": "Atherosclerosis of renal artery"
    },
    {
        "value": "Z881",
        "label": "Allergy status to other antibiotic agents"
    },
    {
        "value": "E83119",
        "label": "Hemochromatosis, unspecified"
    },
    {
        "value": "I2729",
        "label": "Other secondary pulmonary hypertension"
    },
    {
        "value": "I25810",
        "label": "Atherosclerosis of coronary artery bypass graft(s) without angina pectoris"
    },
    {
        "value": "E109",
        "label": "Type 1 diabetes mellitus without complications"
    },
    {
        "value": "42741",
        "label": "Ventricular fibrillation"
    },
    {
        "value": "43882",
        "label": "Other late effects of cerebrovascular disease, dysphagia"
    },
    {
        "value": "V4561",
        "label": "Cataract extraction status"
    },
    {
        "value": "C773",
        "label": "Secondary and unspecified malignant neoplasm of axilla and upper limb lymph nodes"
    },
    {
        "value": "C541",
        "label": "Malignant neoplasm of endometrium"
    },
    {
        "value": "56949",
        "label": "Other specified disorders of rectum and anus"
    },
    {
        "value": "B0229",
        "label": "Other postherpetic nervous system involvement"
    },
    {
        "value": "Z903",
        "label": "Acquired absence of stomach [part of]"
    },
    {
        "value": "S2242XA",
        "label": "Multiple fractures of ribs, left side, initial encounter for closed fracture"
    },
    {
        "value": "M1611",
        "label": "Unilateral primary osteoarthritis, right hip"
    },
    {
        "value": "B009",
        "label": "Herpesviral infection, unspecified"
    },
    {
        "value": "4400",
        "label": "Atherosclerosis of aorta"
    },
    {
        "value": "I8500",
        "label": "Esophageal varices without bleeding"
    },
    {
        "value": "2949",
        "label": "Unspecified persistent mental disorders due to conditions classified elsewhere"
    },
    {
        "value": "A414",
        "label": "Sepsis due to anaerobes"
    },
    {
        "value": "5733",
        "label": "Hepatitis, unspecified"
    },
    {
        "value": "5779",
        "label": "Unspecified disease of pancreas"
    },
    {
        "value": "E441",
        "label": "Mild protein-calorie malnutrition"
    },
    {
        "value": "T8351XA",
        "label": "Infection and inflammatory reaction due to indwelling urinary catheter, initial encounter"
    },
    {
        "value": "M8458XA",
        "label": "Pathological fracture in neoplastic disease, other specified site, initial encounter for fracture"
    },
    {
        "value": "J939",
        "label": "Pneumothorax, unspecified"
    },
    {
        "value": "Y840",
        "label": "Cardiac catheterization as the cause of abnormal reaction of the patient, or of later complication, without mention of misadventure at the time of the procedure"
    },
    {
        "value": "R502",
        "label": "Drug induced fever"
    },
    {
        "value": "Q059",
        "label": "Spina bifida, unspecified"
    },
    {
        "value": "9331",
        "label": "Foreign body in larynx"
    },
    {
        "value": "45340",
        "label": "Acute venous embolism and thrombosis of unspecified deep vessels of lower extremity"
    },
    {
        "value": "53140",
        "label": "Chronic or unspecified gastric ulcer with hemorrhage, without mention of obstruction"
    },
    {
        "value": "F1510",
        "label": "Other stimulant abuse, uncomplicated"
    },
    {
        "value": "27906",
        "label": "Common variable immunodeficiency"
    },
    {
        "value": "C50912",
        "label": "Malignant neoplasm of unspecified site of left female breast"
    },
    {
        "value": "V168",
        "label": "Family history of other specified malignant neoplasm"
    },
    {
        "value": "7806",
        "label": "Fever"
    },
    {
        "value": "25092",
        "label": "Diabetes with unspecified complication, type II or unspecified type, uncontrolled"
    },
    {
        "value": "M21371",
        "label": "Foot drop, right foot"
    },
    {
        "value": "R8281",
        "label": "Pyuria"
    },
    {
        "value": "L03032",
        "label": "Cellulitis of left toe"
    },
    {
        "value": "Y92199",
        "label": "Unspecified place in other specified residential institution as the place of occurrence of the external cause"
    },
    {
        "value": "C50911",
        "label": "Malignant neoplasm of unspecified site of right female breast"
    }
]

export default diagnosisOptions;