const procedureOptions = [
    {
        "value": "02HV33Z",
        "label": "Insertion of Infusion Device into Superior Vena Cava, Percutaneous Approach"
    },
    {
        "value": "3893",
        "label": "Venous catheterization, not elsewhere classified"
    },
    {
        "value": "3897",
        "label": "Central venous catheter placement with guidance"
    },
    {
        "value": "3E0G76Z",
        "label": "Introduction of Nutritional Substance into Upper GI, Via Natural or Artificial Opening"
    },
    {
        "value": "3995",
        "label": "Hemodialysis"
    },
    {
        "value": "966",
        "label": "Enteral infusion of concentrated nutritional substances"
    },
    {
        "value": "0BH17EZ",
        "label": "Insertion of Endotracheal Airway into Trachea, Via Natural or Artificial Opening"
    },
    {
        "value": "5A1955Z",
        "label": "Respiratory Ventilation, Greater than 96 Consecutive Hours"
    },
    {
        "value": "9604",
        "label": "Insertion of endotracheal tube"
    },
    {
        "value": "5A1D70Z",
        "label": "Performance of Urinary Filtration, Intermittent, Less than 6 Hours Per Day"
    },
    {
        "value": "9671",
        "label": "Continuous invasive mechanical ventilation for less than 96 consecutive hours"
    },
    {
        "value": "5A1945Z",
        "label": "Respiratory Ventilation, 24-96 Consecutive Hours"
    },
    {
        "value": "9672",
        "label": "Continuous invasive mechanical ventilation for 96 consecutive hours or more"
    },
    {
        "value": "0DJ08ZZ",
        "label": "Inspection of Upper Intestinal Tract, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "5491",
        "label": "Percutaneous abdominal drainage"
    },
    {
        "value": "02H633Z",
        "label": "Insertion of Infusion Device into Right Atrium, Percutaneous Approach"
    },
    {
        "value": "9925",
        "label": "Injection or infusion of cancer chemotherapeutic substance"
    },
    {
        "value": "9915",
        "label": "Parenteral infusion of concentrated nutritional substances"
    },
    {
        "value": "3891",
        "label": "Arterial catheterization"
    },
    {
        "value": "4513",
        "label": "Other endoscopy of small intestine"
    },
    {
        "value": "3324",
        "label": "Closed [endoscopic] biopsy of bronchus"
    },
    {
        "value": "03HY32Z",
        "label": "Insertion of Monitoring Device into Upper Artery, Percutaneous Approach"
    },
    {
        "value": "3895",
        "label": "Venous catheterization for renal dialysis"
    },
    {
        "value": "0W9G3ZZ",
        "label": "Drainage of Peritoneal Cavity, Percutaneous Approach"
    },
    {
        "value": "3E0436Z",
        "label": "Introduction of Nutritional Substance into Central Vein, Percutaneous Approach"
    },
    {
        "value": "8856",
        "label": "Coronary arteriography using two catheters"
    },
    {
        "value": "3E04305",
        "label": "Introduction of Other Antineoplastic into Central Vein, Percutaneous Approach"
    },
    {
        "value": "8872",
        "label": "Diagnostic ultrasound of heart"
    },
    {
        "value": "0040",
        "label": "Procedure on single vessel"
    },
    {
        "value": "5A1D90Z",
        "label": "Performance of Urinary Filtration, Continuous, Greater than 18 hours Per Day"
    },
    {
        "value": "0W9G3ZX",
        "label": "Drainage of Peritoneal Cavity, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "5A1D60Z",
        "label": "Performance of Urinary Filtration, Multiple"
    },
    {
        "value": "8938",
        "label": "Other nonoperative respiratory measurements"
    },
    {
        "value": "0331",
        "label": "Spinal tap"
    },
    {
        "value": "0F798DZ",
        "label": "Dilation of Common Bile Duct with Intraluminal Device, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0DJD8ZZ",
        "label": "Inspection of Lower Intestinal Tract, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "3950",
        "label": "Angioplasty of other non-coronary vessel(s)"
    },
    {
        "value": "5A1935Z",
        "label": "Respiratory Ventilation, Less than 24 Consecutive Hours"
    },
    {
        "value": "0W9930Z",
        "label": "Drainage of Right Pleural Cavity with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "3491",
        "label": "Thoracentesis"
    },
    {
        "value": "009U3ZX",
        "label": "Drainage of Spinal Canal, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "9904",
        "label": "Transfusion of packed cells"
    },
    {
        "value": "0DH63UZ",
        "label": "Insertion of Feeding Device into Stomach, Percutaneous Approach"
    },
    {
        "value": "5187",
        "label": "Endoscopic insertion of stent (tube) into bile duct"
    },
    {
        "value": "4516",
        "label": "Esophagogastroduodenoscopy [EGD] with closed biopsy"
    },
    {
        "value": "3722",
        "label": "Left heart cardiac catheterization"
    },
    {
        "value": "8952",
        "label": "Electrocardiogram"
    },
    {
        "value": "8848",
        "label": "Arteriography of femoral and other lower extremity arteries"
    },
    {
        "value": "3899",
        "label": "Other puncture of vein"
    },
    {
        "value": "0JH63XZ",
        "label": "Insertion of Tunneled Vascular Access Device into Chest Subcutaneous Tissue and Fascia, Percutaneous Approach"
    },
    {
        "value": "B211YZZ",
        "label": "Fluoroscopy of Multiple Coronary Arteries using Other Contrast"
    },
    {
        "value": "5185",
        "label": "Endoscopic sphincterotomy and papillotomy"
    },
    {
        "value": "3404",
        "label": "Insertion of intercostal catheter for drainage"
    },
    {
        "value": "8744",
        "label": "Routine chest x-ray, so described"
    },
    {
        "value": "0045",
        "label": "Insertion of one vascular stent"
    },
    {
        "value": "0066",
        "label": "Percutaneous transluminal coronary angioplasty [PTCA]"
    },
    {
        "value": "B24BZZ4",
        "label": "Ultrasonography of Heart with Aorta, Transesophageal"
    },
    {
        "value": "0W9B30Z",
        "label": "Drainage of Left Pleural Cavity with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "8191",
        "label": "Arthrocentesis"
    },
    {
        "value": "0FC98ZZ",
        "label": "Extirpation of Matter from Common Bile Duct, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "3E0H76Z",
        "label": "Introduction of Nutritional Substance into Lower GI, Via Natural or Artificial Opening"
    },
    {
        "value": "4131",
        "label": "Biopsy of bone marrow"
    },
    {
        "value": "07DR3ZX",
        "label": "Extraction of Iliac Bone Marrow, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "8842",
        "label": "Aortography"
    },
    {
        "value": "5A2204Z",
        "label": "Restoration of Cardiac Rhythm, Single"
    },
    {
        "value": "0BJ08ZZ",
        "label": "Inspection of Tracheobronchial Tree, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "4A023N6",
        "label": "Measurement of Cardiac Sampling and Pressure, Right Heart, Percutaneous Approach"
    },
    {
        "value": "8604",
        "label": "Other incision with drainage of skin and subcutaneous tissue"
    },
    {
        "value": "8622",
        "label": "Excisional debridement of wound, infection, or burn"
    },
    {
        "value": "311",
        "label": "Temporary tracheostomy"
    },
    {
        "value": "4311",
        "label": "Percutaneous [endoscopic] gastrostomy [PEG]"
    },
    {
        "value": "5A1221Z",
        "label": "Performance of Cardiac Output, Continuous"
    },
    {
        "value": "5459",
        "label": "Other lysis of peritoneal adhesions"
    },
    {
        "value": "0B113F4",
        "label": "Bypass Trachea to Cutaneous with Tracheostomy Device, Percutaneous Approach"
    },
    {
        "value": "4523",
        "label": "Colonoscopy"
    },
    {
        "value": "0W9G30Z",
        "label": "Drainage of Peritoneal Cavity with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "5188",
        "label": "Endoscopic removal of stone(s) from biliary tract"
    },
    {
        "value": "0014",
        "label": "Injection or infusion of oxazolidinone class of antibiotics"
    },
    {
        "value": "3961",
        "label": "Extracorporeal circulation auxiliary to open heart surgery"
    },
    {
        "value": "4525",
        "label": "Closed [endoscopic] biopsy of large intestine"
    },
    {
        "value": "B548ZZA",
        "label": "Ultrasonography of Superior Vena Cava, Guidance"
    },
    {
        "value": "5A12012",
        "label": "Performance of Cardiac Output, Single, Manual"
    },
    {
        "value": "3E03305",
        "label": "Introduction of Other Antineoplastic into Peripheral Vein, Percutaneous Approach"
    },
    {
        "value": "8628",
        "label": "Nonexcisional debridement of wound, infection or burn"
    },
    {
        "value": "5198",
        "label": "Other percutaneous procedures on biliary tract"
    },
    {
        "value": "0DB68ZX",
        "label": "Excision of Stomach, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "0W3P8ZZ",
        "label": "Control Bleeding in Gastrointestinal Tract, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "5110",
        "label": "Endoscopic retrograde cholangiopancreatography [ERCP]"
    },
    {
        "value": "9705",
        "label": "Replacement of stent (tube) in biliary or pancreatic duct"
    },
    {
        "value": "3990",
        "label": "Insertion of non-drug-eluting peripheral (non-coronary) vessel stent(s)"
    },
    {
        "value": "8611",
        "label": "Closed biopsy of skin and subcutaneous tissue"
    },
    {
        "value": "3607",
        "label": "Insertion of drug-eluting coronary artery stent(s)"
    },
    {
        "value": "0DH67UZ",
        "label": "Insertion of Feeding Device into Stomach, Via Natural or Artificial Opening"
    },
    {
        "value": "BF10YZZ",
        "label": "Fluoroscopy of Bile Ducts using Other Contrast"
    },
    {
        "value": "0FPB8DZ",
        "label": "Removal of Intraluminal Device from Hepatobiliary Duct, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0T25X0Z",
        "label": "Change Drainage Device in Kidney, External Approach"
    },
    {
        "value": "0CJS8ZZ",
        "label": "Inspection of Larynx, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "3723",
        "label": "Combined right and left heart cardiac catheterization"
    },
    {
        "value": "8847",
        "label": "Arteriography of other intra-abdominal arteries"
    },
    {
        "value": "B2111ZZ",
        "label": "Fluoroscopy of Multiple Coronary Arteries using Low Osmolar Contrast"
    },
    {
        "value": "598",
        "label": "Ureteral catheterization"
    },
    {
        "value": "0F2BX0Z",
        "label": "Change Drainage Device in Hepatobiliary Duct, External Approach"
    },
    {
        "value": "0F9430Z",
        "label": "Drainage of Gallbladder with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "0BH18EZ",
        "label": "Insertion of Endotracheal Airway into Trachea, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "5011",
        "label": "Closed (percutaneous) [needle] biopsy of liver"
    },
    {
        "value": "0B9D8ZX",
        "label": "Drainage of Right Middle Lung Lobe, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "0041",
        "label": "Procedure on two vessels"
    },
    {
        "value": "9914",
        "label": "Injection or infusion of immunoglobulin"
    },
    {
        "value": "8605",
        "label": "Incision with removal of foreign body or device from skin and subcutaneous tissue"
    },
    {
        "value": "4A023N7",
        "label": "Measurement of Cardiac Sampling and Pressure, Left Heart, Percutaneous Approach"
    },
    {
        "value": "0DB98ZX",
        "label": "Excision of Duodenum, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "0B9J8ZX",
        "label": "Drainage of Left Lower Lung Lobe, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "3323",
        "label": "Other bronchoscopy"
    },
    {
        "value": "3721",
        "label": "Right heart cardiac catheterization"
    },
    {
        "value": "0B9F8ZX",
        "label": "Drainage of Right Lower Lung Lobe, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "9962",
        "label": "Other electric countershock of heart"
    },
    {
        "value": "8411",
        "label": "Amputation of toe"
    },
    {
        "value": "9229",
        "label": "Other radiotherapeutic procedure"
    },
    {
        "value": "30233S1",
        "label": "Transfusion of Nonautologous Globulin into Peripheral Vein, Percutaneous Approach"
    },
    {
        "value": "8754",
        "label": "Other cholangiogram"
    },
    {
        "value": "5122",
        "label": "Cholecystectomy"
    },
    {
        "value": "3E0336Z",
        "label": "Introduction of Nutritional Substance into Peripheral Vein, Percutaneous Approach"
    },
    {
        "value": "3322",
        "label": "Fiber-optic bronchoscopy"
    },
    {
        "value": "05HM33Z",
        "label": "Insertion of Infusion Device into Right Internal Jugular Vein, Percutaneous Approach"
    },
    {
        "value": "9390",
        "label": "Non-invasive mechanical ventilation"
    },
    {
        "value": "0FT40ZZ",
        "label": "Resection of Gallbladder, Open Approach"
    },
    {
        "value": "0046",
        "label": "Insertion of two vascular stents"
    },
    {
        "value": "5498",
        "label": "Peritoneal dialysis"
    },
    {
        "value": "4443",
        "label": "Endoscopic control of gastric or duodenal bleeding"
    },
    {
        "value": "0DBN8ZX",
        "label": "Excision of Sigmoid Colon, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "06HY33Z",
        "label": "Insertion of Infusion Device into Lower Vein, Percutaneous Approach"
    },
    {
        "value": "9960",
        "label": "Cardiopulmonary resuscitation, not otherwise specified"
    },
    {
        "value": "5732",
        "label": "Other cystoscopy"
    },
    {
        "value": "5503",
        "label": "Percutaneous nephrostomy without fragmentation"
    },
    {
        "value": "0390",
        "label": "Insertion of catheter into spinal canal for infusion of therapeutic or palliative substances"
    },
    {
        "value": "9910",
        "label": "Injection or infusion of thrombolytic agent"
    },
    {
        "value": "0DBB0ZZ",
        "label": "Excision of Ileum, Open Approach"
    },
    {
        "value": "3979",
        "label": "Other endovascular procedures on other vessels"
    },
    {
        "value": "0W993ZZ",
        "label": "Drainage of Right Pleural Cavity, Percutaneous Approach"
    },
    {
        "value": "5A1D00Z",
        "label": "Performance of Urinary Filtration, Single"
    },
    {
        "value": "0D1B0Z4",
        "label": "Bypass Ileum to Cutaneous, Open Approach"
    },
    {
        "value": "0WQF0ZZ",
        "label": "Repair Abdominal Wall, Open Approach"
    },
    {
        "value": "9755",
        "label": "Removal of T-tube, other bile duct tube, or liver tube"
    },
    {
        "value": "4562",
        "label": "Other partial resection of small intestine"
    },
    {
        "value": "0F9930Z",
        "label": "Drainage of Common Bile Duct with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "0FT44ZZ",
        "label": "Resection of Gallbladder, Percutaneous Endoscopic Approach"
    },
    {
        "value": "3615",
        "label": "Single internal mammary-coronary artery bypass"
    },
    {
        "value": "0B21XFZ",
        "label": "Change Tracheostomy Device in Trachea, External Approach"
    },
    {
        "value": "8751",
        "label": "Percutaneous hepatic cholangiogram"
    },
    {
        "value": "9702",
        "label": "Replacement of gastrostomy tube"
    },
    {
        "value": "02HP32Z",
        "label": "Insertion of Monitoring Device into Pulmonary Trunk, Percutaneous Approach"
    },
    {
        "value": "8154",
        "label": "Total knee replacement"
    },
    {
        "value": "0JBQ0ZZ",
        "label": "Excision of Right Foot Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "0WUF0JZ",
        "label": "Supplement Abdominal Wall with Synthetic Substitute, Open Approach"
    },
    {
        "value": "30283B1",
        "label": "Transfusion of Nonautologous 4-Factor Prothrombin Complex Concentrate into Vein, Percutaneous Approach"
    },
    {
        "value": "0DHA3UZ",
        "label": "Insertion of Feeding Device into Jejunum, Percutaneous Approach"
    },
    {
        "value": "0JBR0ZZ",
        "label": "Excision of Left Foot Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "3E1M39Z",
        "label": "Irrigation of Peritoneal Cavity using Dialysate, Percutaneous Approach"
    },
    {
        "value": "02HK3JZ",
        "label": "Insertion of Pacemaker Lead into Right Ventricle, Percutaneous Approach"
    },
    {
        "value": "5101",
        "label": "Percutaneous aspiration of gallbladder"
    },
    {
        "value": "0FB13ZX",
        "label": "Excision of Right Lobe Liver, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "387",
        "label": "Interruption of the vena cava"
    },
    {
        "value": "02100Z9",
        "label": "Bypass Coronary Artery, One Artery from Left Internal Mammary, Open Approach"
    },
    {
        "value": "3606",
        "label": "Insertion of non-drug-eluting coronary artery stent(s)"
    },
    {
        "value": "4011",
        "label": "Biopsy of lymphatic structure"
    },
    {
        "value": "0D20XUZ",
        "label": "Change Feeding Device in Upper Intestinal Tract, External Approach"
    },
    {
        "value": "0D2DXUZ",
        "label": "Change Feeding Device in Lower Intestinal Tract, External Approach"
    },
    {
        "value": "0FB03ZX",
        "label": "Excision of Liver, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "8849",
        "label": "Arteriography of other specified sites"
    },
    {
        "value": "0T9030Z",
        "label": "Drainage of Right Kidney with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "XW033E5",
        "label": "Introduction of Remdesivir Anti-infective into Peripheral Vein, Percutaneous Approach, New Technology Group 5"
    },
    {
        "value": "0T9130Z",
        "label": "Drainage of Left Kidney with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "9907",
        "label": "Transfusion of other serum"
    },
    {
        "value": "0W9J30Z",
        "label": "Drainage of Pelvic Cavity with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "5123",
        "label": "Laparoscopic cholecystectomy"
    },
    {
        "value": "04HY32Z",
        "label": "Insertion of Monitoring Device into Lower Artery, Percutaneous Approach"
    },
    {
        "value": "5114",
        "label": "Other closed [endoscopic] biopsy of biliary duct or sphincter of Oddi"
    },
    {
        "value": "8162",
        "label": "Fusion or refusion of 2-3 vertebrae"
    },
    {
        "value": "0DN80ZZ",
        "label": "Release Small Intestine, Open Approach"
    },
    {
        "value": "0309",
        "label": "Other exploration and decompression of spinal canal"
    },
    {
        "value": "8E0W4CZ",
        "label": "Robotic Assisted Procedure of Trunk Region, Percutaneous Endoscopic Approach"
    },
    {
        "value": "9929",
        "label": "Injection or infusion of other therapeutic or prophylactic substance"
    },
    {
        "value": "02PYX3Z",
        "label": "Removal of Infusion Device from Great Vessel, External Approach"
    },
    {
        "value": "027034Z",
        "label": "Dilation of Coronary Artery, One Artery with Drug-eluting Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "3949",
        "label": "Other revision of vascular procedure"
    },
    {
        "value": "4639",
        "label": "Other enterostomy"
    },
    {
        "value": "0DBP8ZX",
        "label": "Excision of Rectum, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "8607",
        "label": "Insertion of totally implantable vascular access device [VAD]"
    },
    {
        "value": "9605",
        "label": "Other intubation of respiratory tract"
    },
    {
        "value": "8855",
        "label": "Coronary arteriography using a single catheter"
    },
    {
        "value": "9920",
        "label": "Injection or infusion of platelet inhibitor"
    },
    {
        "value": "06H03DZ",
        "label": "Insertion of Intraluminal Device into Inferior Vena Cava, Percutaneous Approach"
    },
    {
        "value": "3783",
        "label": "Initial insertion of dual-chamber device"
    },
    {
        "value": "9607",
        "label": "Insertion of other (naso-)gastric tube"
    },
    {
        "value": "02H63JZ",
        "label": "Insertion of Pacemaker Lead into Right Atrium, Percutaneous Approach"
    },
    {
        "value": "3772",
        "label": "Initial insertion of transvenous leads [electrodes] into atrium and ventricle"
    },
    {
        "value": "4524",
        "label": "Flexible sigmoidoscopy"
    },
    {
        "value": "403",
        "label": "Regional lymph node excision"
    },
    {
        "value": "02RF38Z",
        "label": "Replacement of Aortic Valve with Zooplastic Tissue, Percutaneous Approach"
    },
    {
        "value": "4542",
        "label": "Endoscopic polypectomy of large intestine"
    },
    {
        "value": "0DB80ZZ",
        "label": "Excision of Small Intestine, Open Approach"
    },
    {
        "value": "0JH606Z",
        "label": "Insertion of Pacemaker, Dual Chamber into Chest Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "0093",
        "label": "Transplant from cadaver"
    },
    {
        "value": "7749",
        "label": "Biopsy of bone, other bones"
    },
    {
        "value": "0DJ07ZZ",
        "label": "Inspection of Upper Intestinal Tract, Via Natural or Artificial Opening"
    },
    {
        "value": "8339",
        "label": "Excision of lesion of other soft tissue"
    },
    {
        "value": "3734",
        "label": "Excision or destruction of other lesion or tissue of heart, endovascular approach"
    },
    {
        "value": "3E0L3GC",
        "label": "Introduction of Other Therapeutic Substance into Pleural Cavity, Percutaneous Approach"
    },
    {
        "value": "4A133B3",
        "label": "Monitoring of Arterial Pressure, Pulmonary, Percutaneous Approach"
    },
    {
        "value": "9301",
        "label": "Functional evaluation"
    },
    {
        "value": "8659",
        "label": "Closure of skin and subcutaneous tissue of other sites"
    },
    {
        "value": "0B9C8ZX",
        "label": "Drainage of Right Upper Lung Lobe, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "3929",
        "label": "Other (peripheral) vascular shunt or bypass"
    },
    {
        "value": "5412",
        "label": "Reopening of recent laparotomy site"
    },
    {
        "value": "02HQ32Z",
        "label": "Insertion of Monitoring Device into Right Pulmonary Artery, Percutaneous Approach"
    },
    {
        "value": "3E0R305",
        "label": "Introduction of Other Antineoplastic into Spinal Canal, Percutaneous Approach"
    },
    {
        "value": "5523",
        "label": "Closed [percutaneous] [needle] biopsy of kidney"
    },
    {
        "value": "3142",
        "label": "Laryngoscopy and other tracheoscopy"
    },
    {
        "value": "8874",
        "label": "Diagnostic ultrasound of digestive system"
    },
    {
        "value": "7769",
        "label": "Local excision of lesion or tissue of bone, other bones"
    },
    {
        "value": "5593",
        "label": "Replacement of nephrostomy tube"
    },
    {
        "value": "4573",
        "label": "Open and other right hemicolectomy"
    },
    {
        "value": "5361",
        "label": "Other open incisional hernia repair with graft or prosthesis"
    },
    {
        "value": "8964",
        "label": "Pulmonary artery wedge monitoring"
    },
    {
        "value": "3521",
        "label": "Open and other replacement of aortic valve with tissue graft"
    },
    {
        "value": "0S9C3ZX",
        "label": "Drainage of Right Knee Joint, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "8415",
        "label": "Other amputation below knee"
    },
    {
        "value": "9961",
        "label": "Atrial cardioversion"
    },
    {
        "value": "8838",
        "label": "Other computerized axial tomography"
    },
    {
        "value": "3321",
        "label": "Bronchoscopy through artificial stoma"
    },
    {
        "value": "0DBN0ZZ",
        "label": "Excision of Sigmoid Colon, Open Approach"
    },
    {
        "value": "8703",
        "label": "Computerized axial tomography of head"
    },
    {
        "value": "0JPT0PZ",
        "label": "Removal of Cardiac Rhythm Related Device from Trunk Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "4824",
        "label": "Closed [endoscopic] biopsy of rectum"
    },
    {
        "value": "0W9B3ZZ",
        "label": "Drainage of Left Pleural Cavity, Percutaneous Approach"
    },
    {
        "value": "05HY33Z",
        "label": "Insertion of Infusion Device into Upper Vein, Percutaneous Approach"
    },
    {
        "value": "0B110F4",
        "label": "Bypass Trachea to Cutaneous with Tracheostomy Device, Open Approach"
    },
    {
        "value": "9723",
        "label": "Replacement of tracheostomy tube"
    },
    {
        "value": "5569",
        "label": "Other kidney transplantation"
    },
    {
        "value": "00JU3ZZ",
        "label": "Inspection of Spinal Canal, Percutaneous Approach"
    },
    {
        "value": "7779",
        "label": "Excision of bone for graft, other bones"
    },
    {
        "value": "0F798ZZ",
        "label": "Dilation of Common Bile Duct, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "8051",
        "label": "Excision of intervertebral disc"
    },
    {
        "value": "5411",
        "label": "Exploratory laparotomy"
    },
    {
        "value": "0QBN0ZZ",
        "label": "Excision of Right Metatarsal, Open Approach"
    },
    {
        "value": "7788",
        "label": "Other partial ostectomy, tarsals and metatarsals"
    },
    {
        "value": "0S9D3ZX",
        "label": "Drainage of Left Knee Joint, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "7935",
        "label": "Open reduction of fracture with internal fixation, femur"
    },
    {
        "value": "9905",
        "label": "Transfusion of platelets"
    },
    {
        "value": "0JB70ZZ",
        "label": "Excision of Back Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "0DBA0ZZ",
        "label": "Excision of Jejunum, Open Approach"
    },
    {
        "value": "8774",
        "label": "Retrograde pyelogram"
    },
    {
        "value": "0392",
        "label": "Injection of other agent into spinal canal"
    },
    {
        "value": "0W993ZX",
        "label": "Drainage of Right Pleural Cavity, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "4A1239Z",
        "label": "Monitoring of Cardiac Output, Percutaneous Approach"
    },
    {
        "value": "8775",
        "label": "Percutaneous pyelogram"
    },
    {
        "value": "7768",
        "label": "Local excision of lesion or tissue of bone, tarsals and metatarsals"
    },
    {
        "value": "06BQ4ZZ",
        "label": "Excision of Left Saphenous Vein, Percutaneous Endoscopic Approach"
    },
    {
        "value": "0DB78ZX",
        "label": "Excision of Stomach, Pylorus, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "4A023N8",
        "label": "Measurement of Cardiac Sampling and Pressure, Bilateral, Percutaneous Approach"
    },
    {
        "value": "8841",
        "label": "Arteriography of cerebral arteries"
    },
    {
        "value": "5A02210",
        "label": "Assistance with Cardiac Output using Balloon Pump, Continuous"
    },
    {
        "value": "0WJG0ZZ",
        "label": "Inspection of Peritoneal Cavity, Open Approach"
    },
    {
        "value": "5A1223Z",
        "label": "Performance of Cardiac Pacing, Continuous"
    },
    {
        "value": "0DB38ZX",
        "label": "Excision of Lower Esophagus, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "5421",
        "label": "Laparoscopy"
    },
    {
        "value": "3727",
        "label": "Cardiac mapping"
    },
    {
        "value": "3927",
        "label": "Arteriovenostomy for renal dialysis"
    },
    {
        "value": "0T768DZ",
        "label": "Dilation of Right Ureter with Intraluminal Device, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "5184",
        "label": "Endoscopic dilation of ampulla and biliary duct"
    },
    {
        "value": "5091",
        "label": "Percutaneous aspiration of liver"
    },
    {
        "value": "0FY00Z0",
        "label": "Transplantation of Liver, Allogeneic, Open Approach"
    },
    {
        "value": "B41FYZZ",
        "label": "Fluoroscopy of Right Lower Extremity Arteries using Other Contrast"
    },
    {
        "value": "8853",
        "label": "Angiocardiography of left heart structures"
    },
    {
        "value": "BF101ZZ",
        "label": "Fluoroscopy of Bile Ducts using Low Osmolar Contrast"
    },
    {
        "value": "4A133B1",
        "label": "Monitoring of Arterial Pressure, Peripheral, Percutaneous Approach"
    },
    {
        "value": "8669",
        "label": "Other skin graft to other sites"
    },
    {
        "value": "0DHA8UZ",
        "label": "Insertion of Feeding Device into Jejunum, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0B9G8ZX",
        "label": "Drainage of Left Upper Lung Lobe, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "0FJB8ZZ",
        "label": "Inspection of Hepatobiliary Duct, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "4233",
        "label": "Endoscopic excision or destruction of lesion or tissue of esophagus"
    },
    {
        "value": "3E0G8GC",
        "label": "Introduction of Other Therapeutic Substance into Upper GI, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "9749",
        "label": "Removal of other device from thorax"
    },
    {
        "value": "0FD98ZX",
        "label": "Extraction of Common Bile Duct, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "8801",
        "label": "Computerized axial tomography of abdomen"
    },
    {
        "value": "02PA3MZ",
        "label": "Removal of Cardiac Lead from Heart, Percutaneous Approach"
    },
    {
        "value": "B41GYZZ",
        "label": "Fluoroscopy of Left Lower Extremity Arteries using Other Contrast"
    },
    {
        "value": "0D9670Z",
        "label": "Drainage of Stomach with Drainage Device, Via Natural or Artificial Opening"
    },
    {
        "value": "3E03317",
        "label": "Introduction of Other Thrombolytic into Peripheral Vein, Percutaneous Approach"
    },
    {
        "value": "4A133J1",
        "label": "Monitoring of Arterial Pulse, Peripheral, Percutaneous Approach"
    },
    {
        "value": "B410YZZ",
        "label": "Fluoroscopy of Abdominal Aorta using Other Contrast"
    },
    {
        "value": "8451",
        "label": "Insertion of interbody spinal fusion device"
    },
    {
        "value": "0JB80ZZ",
        "label": "Excision of Abdomen Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "0CJY8ZZ",
        "label": "Inspection of Mouth and Throat, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0TJB8ZZ",
        "label": "Inspection of Bladder, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0DNW0ZZ",
        "label": "Release Peritoneum, Open Approach"
    },
    {
        "value": "3942",
        "label": "Revision of arteriovenous shunt for renal dialysis"
    },
    {
        "value": "0JH60XZ",
        "label": "Insertion of Tunneled Vascular Access Device into Chest Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "0F9530Z",
        "label": "Drainage of Right Hepatic Duct with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "5749",
        "label": "Other transurethral excision or destruction of lesion or tissue of bladder"
    },
    {
        "value": "0W9G0ZZ",
        "label": "Drainage of Peritoneal Cavity, Open Approach"
    },
    {
        "value": "8345",
        "label": "Other myectomy"
    },
    {
        "value": "00HU33Z",
        "label": "Insertion of Infusion Device into Spinal Canal, Percutaneous Approach"
    },
    {
        "value": "06HM33Z",
        "label": "Insertion of Infusion Device into Right Femoral Vein, Percutaneous Approach"
    },
    {
        "value": "8674",
        "label": "Attachment of pedicle or flap graft to other sites"
    },
    {
        "value": "02RF08Z",
        "label": "Replacement of Aortic Valve with Zooplastic Tissue, Open Approach"
    },
    {
        "value": "8163",
        "label": "Fusion or refusion of 4-8 vertebrae"
    },
    {
        "value": "06L38CZ",
        "label": "Occlusion of Esophageal Vein with Extraluminal Device, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0T2BX0Z",
        "label": "Change Drainage Device in Bladder, External Approach"
    },
    {
        "value": "8151",
        "label": "Total hip replacement"
    },
    {
        "value": "560",
        "label": "Transurethral removal of obstruction from ureter and renal pelvis"
    },
    {
        "value": "0047",
        "label": "Insertion of three vascular stents"
    },
    {
        "value": "4823",
        "label": "Rigid proctosigmoidoscopy"
    },
    {
        "value": "0W9D30Z",
        "label": "Drainage of Pericardial Cavity with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "0WJG4ZZ",
        "label": "Inspection of Peritoneal Cavity, Percutaneous Endoscopic Approach"
    },
    {
        "value": "0B978ZZ",
        "label": "Drainage of Left Main Bronchus, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "3E033XZ",
        "label": "Introduction of Vasopressor into Peripheral Vein, Percutaneous Approach"
    },
    {
        "value": "0B968ZX",
        "label": "Drainage of Right Lower Lobe Bronchus, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "05HN33Z",
        "label": "Insertion of Infusion Device into Left Internal Jugular Vein, Percutaneous Approach"
    },
    {
        "value": "4319",
        "label": "Other gastrostomy"
    },
    {
        "value": "0BC78ZZ",
        "label": "Extirpation of Matter from Left Main Bronchus, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "4651",
        "label": "Closure of stoma of small intestine"
    },
    {
        "value": "4576",
        "label": "Open and other sigmoidectomy"
    },
    {
        "value": "0JH60WZ",
        "label": "Insertion of Totally Implantable Vascular Access Device into Chest Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "0F7D8DZ",
        "label": "Dilation of Pancreatic Duct with Intraluminal Device, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0QBP0ZZ",
        "label": "Excision of Left Metatarsal, Open Approach"
    },
    {
        "value": "0DBM8ZX",
        "label": "Excision of Descending Colon, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "8851",
        "label": "Angiocardiography of venae cavae"
    },
    {
        "value": "0DTF0ZZ",
        "label": "Resection of Right Large Intestine, Open Approach"
    },
    {
        "value": "0JPT3XZ",
        "label": "Removal of Tunneled Vascular Access Device from Trunk Subcutaneous Tissue and Fascia, Percutaneous Approach"
    },
    {
        "value": "8152",
        "label": "Partial hip replacement"
    },
    {
        "value": "0B9B8ZX",
        "label": "Drainage of Left Lower Lobe Bronchus, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "0B958ZX",
        "label": "Drainage of Right Middle Lobe Bronchus, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "5794",
        "label": "Insertion of indwelling urinary catheter"
    },
    {
        "value": "0F9630Z",
        "label": "Drainage of Left Hepatic Duct with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "0FB98ZX",
        "label": "Excision of Common Bile Duct, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "06183J4",
        "label": "Bypass Portal Vein to Hepatic Vein with Synthetic Substitute, Percutaneous Approach"
    },
    {
        "value": "0FBG0ZZ",
        "label": "Excision of Pancreas, Open Approach"
    },
    {
        "value": "0DTN0ZZ",
        "label": "Resection of Sigmoid Colon, Open Approach"
    },
    {
        "value": "2Y41X5Z",
        "label": "Packing of Nasal Region using Packing Material"
    },
    {
        "value": "02PAX3Z",
        "label": "Removal of Infusion Device from Heart, External Approach"
    },
    {
        "value": "0T778DZ",
        "label": "Dilation of Left Ureter with Intraluminal Device, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0DB28ZX",
        "label": "Excision of Middle Esophagus, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "0QBM0ZZ",
        "label": "Excision of Left Tarsal, Open Approach"
    },
    {
        "value": "863",
        "label": "Other local excision or destruction of lesion or tissue of skin and subcutaneous tissue"
    },
    {
        "value": "3409",
        "label": "Other incision of pleura"
    },
    {
        "value": "9462",
        "label": "Alcohol detoxification"
    },
    {
        "value": "8076",
        "label": "Synovectomy, knee"
    },
    {
        "value": "3761",
        "label": "Implant of pulsation balloon"
    },
    {
        "value": "0F9030Z",
        "label": "Drainage of Liver with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "0DBE8ZX",
        "label": "Excision of Large Intestine, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "0F793DZ",
        "label": "Dilation of Common Bile Duct with Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "0W9B3ZX",
        "label": "Drainage of Left Pleural Cavity, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "0DBL8ZX",
        "label": "Excision of Transverse Colon, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "1742",
        "label": "Laparoscopic robotic assisted procedure"
    },
    {
        "value": "3220",
        "label": "Thoracoscopic excision of lesion or tissue of lung"
    },
    {
        "value": "0DBK8ZX",
        "label": "Excision of Ascending Colon, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "3794",
        "label": "Implantation or replacement of automatic cardioverter/defibrillator, total system [AICD]"
    },
    {
        "value": "0T9430Z",
        "label": "Drainage of Left Kidney Pelvis with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "9359",
        "label": "Other immobilization, pressure, and attention to wound"
    },
    {
        "value": "9921",
        "label": "Injection of antibiotic"
    },
    {
        "value": "0HBJXZZ",
        "label": "Excision of Left Upper Leg Skin, External Approach"
    },
    {
        "value": "8456",
        "label": "Insertion or replacement of (cement) spacer"
    },
    {
        "value": "544",
        "label": "Excision or destruction of peritoneal tissue"
    },
    {
        "value": "8843",
        "label": "Arteriography of pulmonary arteries"
    },
    {
        "value": "6A551Z3",
        "label": "Pheresis of Plasma, Multiple"
    },
    {
        "value": "0F9130Z",
        "label": "Drainage of Right Lobe Liver with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "0B9H8ZX",
        "label": "Drainage of Lung Lingula, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "0DHA0UZ",
        "label": "Insertion of Feeding Device into Jejunum, Open Approach"
    },
    {
        "value": "0D1L0Z4",
        "label": "Bypass Transverse Colon to Cutaneous, Open Approach"
    },
    {
        "value": "05PYX3Z",
        "label": "Removal of Infusion Device from Upper Vein, External Approach"
    },
    {
        "value": "3726",
        "label": "Catheter based invasive electrophysiologic testing"
    },
    {
        "value": "9703",
        "label": "Replacement of tube or enterostomy device of small intestine"
    },
    {
        "value": "527",
        "label": "Radical pancreaticoduodenectomy"
    },
    {
        "value": "7936",
        "label": "Open reduction of fracture with internal fixation, tibia and fibula"
    },
    {
        "value": "0B9M8ZX",
        "label": "Drainage of Bilateral Lungs, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "370",
        "label": "Pericardiocentesis"
    },
    {
        "value": "B218YZZ",
        "label": "Fluoroscopy of Left Internal Mammary Bypass Graft using Other Contrast"
    },
    {
        "value": "0042",
        "label": "Procedure on three vessels"
    },
    {
        "value": "10E0XZZ",
        "label": "Delivery of Products of Conception, External Approach"
    },
    {
        "value": "01NB0ZZ",
        "label": "Release Lumbar Nerve, Open Approach"
    },
    {
        "value": "3E04317",
        "label": "Introduction of Other Thrombolytic into Central Vein, Percutaneous Approach"
    },
    {
        "value": "3612",
        "label": "(Aorto)coronary bypass of two coronary arteries"
    },
    {
        "value": "0DBB8ZX",
        "label": "Excision of Ileum, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "9977",
        "label": "Application or administration of an adhesion barrier substance"
    },
    {
        "value": "DP0C1ZZ",
        "label": "Beam Radiation of Other Bone using Photons 1 - 10 MeV"
    },
    {
        "value": "0HBHXZZ",
        "label": "Excision of Right Upper Leg Skin, External Approach"
    },
    {
        "value": "8601",
        "label": "Aspiration of skin and subcutaneous tissue"
    },
    {
        "value": "0JQ80ZZ",
        "label": "Repair Abdomen Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "0DBL0ZZ",
        "label": "Excision of Transverse Colon, Open Approach"
    },
    {
        "value": "843",
        "label": "Revision of amputation stump"
    },
    {
        "value": "8867",
        "label": "Phlebography of other specified sites using contrast material"
    },
    {
        "value": "8949",
        "label": "Automatic implantable cardioverter/defibrillator (AICD) check"
    },
    {
        "value": "5425",
        "label": "Peritoneal lavage"
    },
    {
        "value": "8945",
        "label": "Artificial pacemaker rate check"
    },
    {
        "value": "4105",
        "label": "Allogeneic hematopoietic stem cell transpant without purging"
    },
    {
        "value": "0B938ZZ",
        "label": "Drainage of Right Main Bronchus, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0TP98DZ",
        "label": "Removal of Intraluminal Device from Ureter, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "B246ZZ4",
        "label": "Ultrasonography of Right and Left Heart, Transesophageal"
    },
    {
        "value": "8452",
        "label": "Insertion of recombinant bone morphogenetic protein"
    },
    {
        "value": "8852",
        "label": "Angiocardiography of right heart structures"
    },
    {
        "value": "5462",
        "label": "Delayed closure of granulating abdominal wound"
    },
    {
        "value": "0JPT0WZ",
        "label": "Removal of Totally Implantable Vascular Access Device from Trunk Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "009630Z",
        "label": "Drainage of Cerebral Ventricle with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "9608",
        "label": "Insertion of (naso-)intestinal tube"
    },
    {
        "value": "0BC38ZZ",
        "label": "Extirpation of Matter from Right Main Bronchus, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "3E05317",
        "label": "Introduction of Other Thrombolytic into Peripheral Artery, Percutaneous Approach"
    },
    {
        "value": "391",
        "label": "Intra-abdominal venous shunt"
    },
    {
        "value": "021109W",
        "label": "Bypass Coronary Artery, Two Arteries from Aorta with Autologous Venous Tissue, Open Approach"
    },
    {
        "value": "9971",
        "label": "Therapeutic plasmapheresis"
    },
    {
        "value": "5A0221D",
        "label": "Assistance with Cardiac Output using Impeller Pump, Continuous"
    },
    {
        "value": "0FJ44ZZ",
        "label": "Inspection of Gallbladder, Percutaneous Endoscopic Approach"
    },
    {
        "value": "5293",
        "label": "Endoscopic insertion of stent (tube) into pancreatic duct"
    },
    {
        "value": "0BCB8ZZ",
        "label": "Extirpation of Matter from Left Lower Lobe Bronchus, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "02583ZZ",
        "label": "Destruction of Conduction Mechanism, Percutaneous Approach"
    },
    {
        "value": "0T9330Z",
        "label": "Drainage of Right Kidney Pelvis with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "0SRC0J9",
        "label": "Replacement of Right Knee Joint with Synthetic Substitute, Cemented, Open Approach"
    },
    {
        "value": "4601",
        "label": "Exteriorization of small intestine"
    },
    {
        "value": "0D1N0Z4",
        "label": "Bypass Sigmoid Colon to Cutaneous, Open Approach"
    },
    {
        "value": "5A09357",
        "label": "Assistance with Respiratory Ventilation, Less than 24 Consecutive Hours, Continuous Positive Airway Pressure"
    },
    {
        "value": "0TY00Z0",
        "label": "Transplantation of Right Kidney, Allogeneic, Open Approach"
    },
    {
        "value": "0DBP0ZZ",
        "label": "Excision of Rectum, Open Approach"
    },
    {
        "value": "05H533Z",
        "label": "Insertion of Infusion Device into Right Subclavian Vein, Percutaneous Approach"
    },
    {
        "value": "540",
        "label": "Incision of abdominal wall"
    },
    {
        "value": "0F768DZ",
        "label": "Dilation of Left Hepatic Duct with Intraluminal Device, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0044",
        "label": "Procedure on vessel bifurcation"
    },
    {
        "value": "0JH608Z",
        "label": "Insertion of Defibrillator Generator into Chest Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "0DB60ZZ",
        "label": "Excision of Stomach, Open Approach"
    },
    {
        "value": "4610",
        "label": "Colostomy, not otherwise specified"
    },
    {
        "value": "8321",
        "label": "Open biopsy of soft tissue"
    },
    {
        "value": "0W9F30Z",
        "label": "Drainage of Abdominal Wall with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "4439",
        "label": "Other gastroenterostomy without gastrectomy"
    },
    {
        "value": "8919",
        "label": "Video and radio-telemetered electroencephalographic monitoring"
    },
    {
        "value": "5059",
        "label": "Other transplant of liver"
    },
    {
        "value": "0D1M0Z4",
        "label": "Bypass Descending Colon to Cutaneous, Open Approach"
    },
    {
        "value": "3613",
        "label": "(Aorto)coronary bypass of three coronary arteries"
    },
    {
        "value": "0B718ZZ",
        "label": "Dilation of Trachea, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0015",
        "label": "High-dose infusion interleukin-2 [IL-2]"
    },
    {
        "value": "06BP4ZZ",
        "label": "Excision of Right Saphenous Vein, Percutaneous Endoscopic Approach"
    },
    {
        "value": "3812",
        "label": "Endarterectomy, other vessels of head and neck"
    },
    {
        "value": "02PY33Z",
        "label": "Removal of Infusion Device from Great Vessel, Percutaneous Approach"
    },
    {
        "value": "06H033Z",
        "label": "Insertion of Infusion Device into Inferior Vena Cava, Percutaneous Approach"
    },
    {
        "value": "570",
        "label": "Transurethral clearance of bladder"
    },
    {
        "value": "0UT90ZZ",
        "label": "Resection of Uterus, Open Approach"
    },
    {
        "value": "4652",
        "label": "Closure of stoma of large intestine"
    },
    {
        "value": "30243S1",
        "label": "Transfusion of Nonautologous Globulin into Central Vein, Percutaneous Approach"
    },
    {
        "value": "0TB13ZX",
        "label": "Excision of Left Kidney, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "7789",
        "label": "Other partial ostectomy, other bones"
    },
    {
        "value": "04L33DZ",
        "label": "Occlusion of Hepatic Artery with Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "8105",
        "label": "Dorsal and dorsolumbar fusion of the posterior column, posterior technique"
    },
    {
        "value": "0W9H30Z",
        "label": "Drainage of Retroperitoneum with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "0KNL0ZZ",
        "label": "Release Left Abdomen Muscle, Open Approach"
    },
    {
        "value": "4620",
        "label": "Ileostomy, not otherwise specified"
    },
    {
        "value": "8857",
        "label": "Other and unspecified coronary arteriography"
    },
    {
        "value": "415",
        "label": "Total splenectomy"
    },
    {
        "value": "0KNK0ZZ",
        "label": "Release Right Abdomen Muscle, Open Approach"
    },
    {
        "value": "4593",
        "label": "Other small-to-large intestinal anastomosis"
    },
    {
        "value": "0UT70ZZ",
        "label": "Resection of Bilateral Fallopian Tubes, Open Approach"
    },
    {
        "value": "8864",
        "label": "Phlebography of the portal venous system using contrast material"
    },
    {
        "value": "8876",
        "label": "Diagnostic ultrasound of abdomen and retroperitoneum"
    },
    {
        "value": "0159",
        "label": "Other excision or destruction of lesion or tissue of brain"
    },
    {
        "value": "02HK3KZ",
        "label": "Insertion of Defibrillator Lead into Right Ventricle, Percutaneous Approach"
    },
    {
        "value": "0S993ZX",
        "label": "Drainage of Right Hip Joint, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "0WJP0ZZ",
        "label": "Inspection of Gastrointestinal Tract, Open Approach"
    },
    {
        "value": "3E1M38Z",
        "label": "Irrigation of Peritoneal Cavity using Irrigating Substance, Percutaneous Approach"
    },
    {
        "value": "B213YZZ",
        "label": "Fluoroscopy of Multiple Coronary Artery Bypass Grafts using Other Contrast"
    },
    {
        "value": "021009W",
        "label": "Bypass Coronary Artery, One Artery from Aorta with Autologous Venous Tissue, Open Approach"
    },
    {
        "value": "6029",
        "label": "Other transurethral prostatectomy"
    },
    {
        "value": "5451",
        "label": "Laparoscopic lysis of peritoneal adhesions"
    },
    {
        "value": "0UT20ZZ",
        "label": "Resection of Bilateral Ovaries, Open Approach"
    },
    {
        "value": "0QBL0ZZ",
        "label": "Excision of Right Tarsal, Open Approach"
    },
    {
        "value": "8107",
        "label": "Lumbar and lumbosacral fusion of the posterior column, posterior technique"
    },
    {
        "value": "5419",
        "label": "Other laparotomy"
    },
    {
        "value": "4673",
        "label": "Suture of laceration of small intestine, except duodenum"
    },
    {
        "value": "4632",
        "label": "Percutaneous (endoscopic) jejunostomy [PEJ]"
    },
    {
        "value": "0092",
        "label": "Transplant from live non-related donor"
    },
    {
        "value": "4591",
        "label": "Small-to-small intestinal anastomosis"
    },
    {
        "value": "0F758DZ",
        "label": "Dilation of Right Hepatic Duct with Intraluminal Device, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0SRD0J9",
        "label": "Replacement of Left Knee Joint with Synthetic Substitute, Cemented, Open Approach"
    },
    {
        "value": "10D00Z1",
        "label": "Extraction of Products of Conception, Low, Open Approach"
    },
    {
        "value": "8845",
        "label": "Arteriography of renal arteries"
    },
    {
        "value": "3818",
        "label": "Endarterectomy, lower limb arteries"
    },
    {
        "value": "0B938ZX",
        "label": "Drainage of Right Main Bronchus, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "0DB90ZZ",
        "label": "Excision of Duodenum, Open Approach"
    },
    {
        "value": "0B978ZX",
        "label": "Drainage of Left Main Bronchus, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "0DB48ZX",
        "label": "Excision of Esophagogastric Junction, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "4685",
        "label": "Dilation of intestine"
    },
    {
        "value": "8412",
        "label": "Amputation through foot"
    },
    {
        "value": "9762",
        "label": "Removal of ureterostomy tube and ureteral catheter"
    },
    {
        "value": "B214YZZ",
        "label": "Fluoroscopy of Right Heart using Other Contrast"
    },
    {
        "value": "8769",
        "label": "Other digestive tract x-ray"
    },
    {
        "value": "04CL0ZZ",
        "label": "Extirpation of Matter from Left Femoral Artery, Open Approach"
    },
    {
        "value": "5551",
        "label": "Nephroureterectomy"
    },
    {
        "value": "0481",
        "label": "Injection of anesthetic into peripheral nerve for analgesia"
    },
    {
        "value": "0Y6M0Z9",
        "label": "Detachment at Right Foot, Partial 1st Ray, Open Approach"
    },
    {
        "value": "0KBN0ZZ",
        "label": "Excision of Right Hip Muscle, Open Approach"
    },
    {
        "value": "5012",
        "label": "Open biopsy of liver"
    },
    {
        "value": "02RG08Z",
        "label": "Replacement of Mitral Valve with Zooplastic Tissue, Open Approach"
    },
    {
        "value": "741",
        "label": "Low cervical cesarean section"
    },
    {
        "value": "3E0T3BZ",
        "label": "Introduction of Anesthetic Agent into Peripheral Nerves and Plexi, Percutaneous Approach"
    },
    {
        "value": "0FPB30Z",
        "label": "Removal of Drainage Device from Hepatobiliary Duct, Percutaneous Approach"
    },
    {
        "value": "B518YZA",
        "label": "Fluoroscopy of Superior Vena Cava using Other Contrast, Guidance"
    },
    {
        "value": "8309",
        "label": "Other incision of soft tissue"
    },
    {
        "value": "0WPF0JZ",
        "label": "Removal of Synthetic Substitute from Abdominal Wall, Open Approach"
    },
    {
        "value": "5351",
        "label": "Incisional hernia repair"
    },
    {
        "value": "8395",
        "label": "Aspiration of other soft tissue"
    },
    {
        "value": "8879",
        "label": "Other diagnostic ultrasound"
    },
    {
        "value": "4575",
        "label": "Open and other left hemicolectomy"
    },
    {
        "value": "4543",
        "label": "Endoscopic destruction of other lesion or tissue of large intestine"
    },
    {
        "value": "047P3ZZ",
        "label": "Dilation of Right Anterior Tibial Artery, Percutaneous Approach"
    },
    {
        "value": "0CDWXZ1",
        "label": "Extraction of Upper Tooth, Multiple, External Approach"
    },
    {
        "value": "0FBG8ZX",
        "label": "Excision of Pancreas, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "0DH98UZ",
        "label": "Insertion of Feeding Device into Duodenum, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "3420",
        "label": "Thoracoscopic pleural biopsy"
    },
    {
        "value": "0SBC0ZZ",
        "label": "Excision of Right Knee Joint, Open Approach"
    },
    {
        "value": "8102",
        "label": "Other cervical fusion of the anterior column, anterior technique"
    },
    {
        "value": "04CK0ZZ",
        "label": "Extirpation of Matter from Right Femoral Artery, Open Approach"
    },
    {
        "value": "4104",
        "label": "Autologous hematopoietic stem cell transplant without purging"
    },
    {
        "value": "9923",
        "label": "Injection of steroid"
    },
    {
        "value": "0BC68ZZ",
        "label": "Extirpation of Matter from Right Lower Lobe Bronchus, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0HB7XZX",
        "label": "Excision of Abdomen Skin, External Approach, Diagnostic"
    },
    {
        "value": "0084",
        "label": "Revision of total knee replacement, tibial insert (liner)"
    },
    {
        "value": "05HC33Z",
        "label": "Insertion of Infusion Device into Left Basilic Vein, Percutaneous Approach"
    },
    {
        "value": "6849",
        "label": "Other and unspecified total abdominal hysterectomy"
    },
    {
        "value": "0W9G00Z",
        "label": "Drainage of Peritoneal Cavity with Drainage Device, Open Approach"
    },
    {
        "value": "4292",
        "label": "Dilation of esophagus"
    },
    {
        "value": "0F793ZZ",
        "label": "Dilation of Common Bile Duct, Percutaneous Approach"
    },
    {
        "value": "7915",
        "label": "Closed reduction of fracture with internal fixation, femur"
    },
    {
        "value": "0DBU0ZZ",
        "label": "Excision of Omentum, Open Approach"
    },
    {
        "value": "0TP5X0Z",
        "label": "Removal of Drainage Device from Kidney, External Approach"
    },
    {
        "value": "0DB58ZX",
        "label": "Excision of Esophagus, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "02K83ZZ",
        "label": "Map Conduction Mechanism, Percutaneous Approach"
    },
    {
        "value": "0S9B3ZX",
        "label": "Drainage of Left Hip Joint, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "7869",
        "label": "Removal of implanted devices from bone, other bones"
    },
    {
        "value": "6561",
        "label": "Other removal of both ovaries and tubes at same operative episode"
    },
    {
        "value": "30233N1",
        "label": "Transfusion of Nonautologous Red Blood Cells into Peripheral Vein, Percutaneous Approach"
    },
    {
        "value": "3452",
        "label": "Thoracoscopic decortication of lung"
    },
    {
        "value": "8086",
        "label": "Other local excision or destruction of lesion of joint, knee"
    },
    {
        "value": "0091",
        "label": "Transplant from live related donor"
    },
    {
        "value": "0B778ZZ",
        "label": "Dilation of Left Main Bronchus, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0131",
        "label": "Incision of cerebral meninges"
    },
    {
        "value": "9205",
        "label": "Cardiovascular and hematopoietic scan and radioisotope function study"
    },
    {
        "value": "0Y6N0ZD",
        "label": "Detachment at Left Foot, Partial 4th Ray, Open Approach"
    },
    {
        "value": "4621",
        "label": "Temporary ileostomy"
    },
    {
        "value": "0DTJ0ZZ",
        "label": "Resection of Appendix, Open Approach"
    },
    {
        "value": "0DH60UZ",
        "label": "Insertion of Feeding Device into Stomach, Open Approach"
    },
    {
        "value": "0JBM0ZZ",
        "label": "Excision of Left Upper Leg Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "0D798DZ",
        "label": "Dilation of Duodenum with Intraluminal Device, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0DH68UZ",
        "label": "Insertion of Feeding Device into Stomach, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "8609",
        "label": "Other incision of skin and subcutaneous tissue"
    },
    {
        "value": "0BC18ZZ",
        "label": "Extirpation of Matter from Trachea, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0B948ZX",
        "label": "Drainage of Right Upper Lobe Bronchus, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "8382",
        "label": "Graft of muscle or fascia"
    },
    {
        "value": "B41DYZZ",
        "label": "Fluoroscopy of Aorta and Bilateral Lower Extremity Arteries using Other Contrast"
    },
    {
        "value": "0DBH8ZX",
        "label": "Excision of Cecum, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "XW0DXR5",
        "label": "Introduction of Venetoclax Antineoplastic into Mouth and Pharynx, External Approach, New Technology Group 5"
    },
    {
        "value": "5349",
        "label": "Other open umbilical herniorrhaphy"
    },
    {
        "value": "0KBP0ZZ",
        "label": "Excision of Left Hip Muscle, Open Approach"
    },
    {
        "value": "0TCB8ZZ",
        "label": "Extirpation of Matter from Bladder, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "5137",
        "label": "Anastomosis of hepatic duct to gastrointestinal tract"
    },
    {
        "value": "02HA3RZ",
        "label": "Insertion of Short-term External Heart Assist System into Heart, Percutaneous Approach"
    },
    {
        "value": "3201",
        "label": "Endoscopic excision or destruction of lesion or tissue of bronchus"
    },
    {
        "value": "0WCG0ZZ",
        "label": "Extirpation of Matter from Peritoneal Cavity, Open Approach"
    },
    {
        "value": "9427",
        "label": "Other electroshock therapy"
    },
    {
        "value": "0Y6N0Z9",
        "label": "Detachment at Left Foot, Partial 1st Ray, Open Approach"
    },
    {
        "value": "027035Z",
        "label": "Dilation of Coronary Artery, One Artery with Two Drug-eluting Intraluminal Devices, Percutaneous Approach"
    },
    {
        "value": "3492",
        "label": "Injection into thoracic cavity"
    },
    {
        "value": "5423",
        "label": "Biopsy of peritoneum"
    },
    {
        "value": "3522",
        "label": "Open and other replacement of aortic valve"
    },
    {
        "value": "0Y6N0ZC",
        "label": "Detachment at Left Foot, Partial 3rd Ray, Open Approach"
    },
    {
        "value": "543",
        "label": "Excision or destruction of lesion or tissue of abdominal wall or umbilicus"
    },
    {
        "value": "0HBHXZX",
        "label": "Excision of Right Upper Leg Skin, External Approach, Diagnostic"
    },
    {
        "value": "3E043XZ",
        "label": "Introduction of Vasopressor into Central Vein, Percutaneous Approach"
    },
    {
        "value": "09JK8ZZ",
        "label": "Inspection of Nasal Mucosa and Soft Tissue, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0353",
        "label": "Repair of vertebral fracture"
    },
    {
        "value": "0TB03ZX",
        "label": "Excision of Right Kidney, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "8103",
        "label": "Other cervical fusion of the posterior column, posterior technique"
    },
    {
        "value": "7569",
        "label": "Repair of other current obstetric laceration"
    },
    {
        "value": "4611",
        "label": "Temporary colostomy"
    },
    {
        "value": "0Y6N0ZF",
        "label": "Detachment at Left Foot, Partial 5th Ray, Open Approach"
    },
    {
        "value": "3778",
        "label": "Insertion of temporary transvenous pacemaker system"
    },
    {
        "value": "BF13YZZ",
        "label": "Fluoroscopy of Gallbladder and Bile Ducts using Other Contrast"
    },
    {
        "value": "0Y6M0ZF",
        "label": "Detachment at Right Foot, Partial 5th Ray, Open Approach"
    },
    {
        "value": "BF11YZZ",
        "label": "Fluoroscopy of Biliary and Pancreatic Ducts using Other Contrast"
    },
    {
        "value": "0JBP0ZZ",
        "label": "Excision of Left Lower Leg Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "0VT04ZZ",
        "label": "Resection of Prostate, Percutaneous Endoscopic Approach"
    },
    {
        "value": "0CDXXZ1",
        "label": "Extraction of Lower Tooth, Multiple, External Approach"
    },
    {
        "value": "4623",
        "label": "Other permanent ileostomy"
    },
    {
        "value": "3327",
        "label": "Closed endoscopic biopsy of lung"
    },
    {
        "value": "2911",
        "label": "Pharyngoscopy"
    },
    {
        "value": "0HBKXZX",
        "label": "Excision of Right Lower Leg Skin, External Approach, Diagnostic"
    },
    {
        "value": "0096",
        "label": "Infusion of 4-Factor Prothrombin Complex Concentrate"
    },
    {
        "value": "0HB7XZZ",
        "label": "Excision of Abdomen Skin, External Approach"
    },
    {
        "value": "057Y3ZZ",
        "label": "Dilation of Upper Vein, Percutaneous Approach"
    },
    {
        "value": "00C40ZZ",
        "label": "Extirpation of Matter from Intracranial Subdural Space, Open Approach"
    },
    {
        "value": "0D160ZA",
        "label": "Bypass Stomach to Jejunum, Open Approach"
    },
    {
        "value": "0J9R0ZZ",
        "label": "Drainage of Left Foot Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "5013",
        "label": "Transjugular liver biopsy"
    },
    {
        "value": "3406",
        "label": "Thoracoscopic drainage of pleural cavity"
    },
    {
        "value": "B51WYZZ",
        "label": "Fluoroscopy of Dialysis Shunt/Fistula using Other Contrast"
    },
    {
        "value": "0KBV0ZZ",
        "label": "Excision of Right Foot Muscle, Open Approach"
    },
    {
        "value": "5112",
        "label": "Percutaneous biopsy of gallbladder or bile ducts"
    },
    {
        "value": "8192",
        "label": "Injection of therapeutic substance into joint or ligament"
    },
    {
        "value": "3611",
        "label": "(Aorto)coronary bypass of one coronary artery"
    },
    {
        "value": "7855",
        "label": "Internal fixation of bone without fracture reduction, femur"
    },
    {
        "value": "0051",
        "label": "Implantation of cardiac resynchronization defibrillator, total system [CRT-D]"
    },
    {
        "value": "0DW0XUZ",
        "label": "Revision of Feeding Device in Upper Intestinal Tract, External Approach"
    },
    {
        "value": "05HB33Z",
        "label": "Insertion of Infusion Device into Right Basilic Vein, Percutaneous Approach"
    },
    {
        "value": "2101",
        "label": "Control of epistaxis by anterior nasal packing"
    },
    {
        "value": "8344",
        "label": "Other fasciectomy"
    },
    {
        "value": "0JBL0ZZ",
        "label": "Excision of Right Upper Leg Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "3777",
        "label": "Removal of lead(s) [electrode] without replacement"
    },
    {
        "value": "4514",
        "label": "Closed [endoscopic] biopsy of small intestine"
    },
    {
        "value": "B543ZZA",
        "label": "Ultrasonography of Right Jugular Veins, Guidance"
    },
    {
        "value": "0QB03ZX",
        "label": "Excision of Lumbar Vertebra, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "9928",
        "label": "Injection or infusion of biological response modifier [BRM] as an antineoplastic agent"
    },
    {
        "value": "9357",
        "label": "Application of other wound dressing"
    },
    {
        "value": "0F9G30Z",
        "label": "Drainage of Pancreas with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "0SBD0ZZ",
        "label": "Excision of Left Knee Joint, Open Approach"
    },
    {
        "value": "0RG2071",
        "label": "Fusion of 2 or more Cervical Vertebral Joints with Autologous Tissue Substitute, Posterior Approach, Posterior Column, Open Approach"
    },
    {
        "value": "02UG0JZ",
        "label": "Supplement Mitral Valve with Synthetic Substitute, Open Approach"
    },
    {
        "value": "4B02XSZ",
        "label": "Measurement of Cardiac Pacemaker, External Approach"
    },
    {
        "value": "021209W",
        "label": "Bypass Coronary Artery, Three Arteries from Aorta with Autologous Venous Tissue, Open Approach"
    },
    {
        "value": "0HBLXZX",
        "label": "Excision of Left Lower Leg Skin, External Approach, Diagnostic"
    },
    {
        "value": "02UJ0JZ",
        "label": "Supplement Tricuspid Valve with Synthetic Substitute, Open Approach"
    },
    {
        "value": "10907ZC",
        "label": "Drainage of Amniotic Fluid, Therapeutic from Products of Conception, Via Natural or Artificial Opening"
    },
    {
        "value": "4582",
        "label": "Open total intra-abdominal colectomy"
    },
    {
        "value": "2319",
        "label": "Other surgical extraction of tooth"
    },
    {
        "value": "DW061ZZ",
        "label": "Beam Radiation of Pelvic Region using Photons 1 - 10 MeV"
    },
    {
        "value": "0JB90ZZ",
        "label": "Excision of Buttock Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "2309",
        "label": "Extraction of other tooth"
    },
    {
        "value": "0Y6M0ZC",
        "label": "Detachment at Right Foot, Partial 3rd Ray, Open Approach"
    },
    {
        "value": "0Y6N0ZB",
        "label": "Detachment at Left Foot, Partial 2nd Ray, Open Approach"
    },
    {
        "value": "05H633Z",
        "label": "Insertion of Infusion Device into Left Subclavian Vein, Percutaneous Approach"
    },
    {
        "value": "3391",
        "label": "Bronchial dilation"
    },
    {
        "value": "5211",
        "label": "Closed [aspiration] [needle] [percutaneous] biopsy of pancreas"
    },
    {
        "value": "0J2TXYZ",
        "label": "Change Other Device in Trunk Subcutaneous Tissue and Fascia, External Approach"
    },
    {
        "value": "0JBN0ZZ",
        "label": "Excision of Right Lower Leg Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "06183DY",
        "label": "Bypass Portal Vein to Lower Vein with Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "0B918ZZ",
        "label": "Drainage of Trachea, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0FPD8DZ",
        "label": "Removal of Intraluminal Device from Pancreatic Duct, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0JBB0ZZ",
        "label": "Excision of Perineum Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "4029",
        "label": "Simple excision of other lymphatic structure"
    },
    {
        "value": "0B9L8ZX",
        "label": "Drainage of Left Lung, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "0Y6M0ZD",
        "label": "Detachment at Right Foot, Partial 4th Ray, Open Approach"
    },
    {
        "value": "9656",
        "label": "Other lavage of bronchus and trachea"
    },
    {
        "value": "3E053GC",
        "label": "Introduction of Other Therapeutic Substance into Peripheral Artery, Percutaneous Approach"
    },
    {
        "value": "3E0U33Z",
        "label": "Introduction of Anti-inflammatory into Joints, Percutaneous Approach"
    },
    {
        "value": "07D78ZX",
        "label": "Extraction of Thorax Lymphatic, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "8873",
        "label": "Diagnostic ultrasound of other sites of thorax"
    },
    {
        "value": "06L34CZ",
        "label": "Occlusion of Esophageal Vein with Extraluminal Device, Percutaneous Endoscopic Approach"
    },
    {
        "value": "8457",
        "label": "Removal of (cement) spacer"
    },
    {
        "value": "0TY10Z0",
        "label": "Transplantation of Left Kidney, Allogeneic, Open Approach"
    },
    {
        "value": "0B968ZZ",
        "label": "Drainage of Right Lower Lobe Bronchus, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "8417",
        "label": "Amputation above knee"
    },
    {
        "value": "0KBQ0ZZ",
        "label": "Excision of Right Upper Leg Muscle, Open Approach"
    },
    {
        "value": "0W3G0ZZ",
        "label": "Control Bleeding in Peritoneal Cavity, Open Approach"
    },
    {
        "value": "04V33DZ",
        "label": "Restriction of Hepatic Artery with Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "0Y6J0Z2",
        "label": "Detachment at Left Lower Leg, Mid, Open Approach"
    },
    {
        "value": "0T788DZ",
        "label": "Dilation of Bilateral Ureters with Intraluminal Device, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "07TP0ZZ",
        "label": "Resection of Spleen, Open Approach"
    },
    {
        "value": "06C83ZZ",
        "label": "Extirpation of Matter from Portal Vein, Percutaneous Approach"
    },
    {
        "value": "3E0G36Z",
        "label": "Introduction of Nutritional Substance into Upper GI, Percutaneous Approach"
    },
    {
        "value": "5994",
        "label": "Replacement of cystostomy tube"
    },
    {
        "value": "02RX0JZ",
        "label": "Replacement of Thoracic Aorta, Ascending/Arch with Synthetic Substitute, Open Approach"
    },
    {
        "value": "0W2GX0Z",
        "label": "Change Drainage Device in Peritoneal Cavity, External Approach"
    },
    {
        "value": "0Y6M0ZB",
        "label": "Detachment at Right Foot, Partial 2nd Ray, Open Approach"
    },
    {
        "value": "06HN33Z",
        "label": "Insertion of Infusion Device into Left Femoral Vein, Percutaneous Approach"
    },
    {
        "value": "0B738DZ",
        "label": "Dilation of Right Main Bronchus with Intraluminal Device, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "8E0ZXY6",
        "label": "Isolation"
    },
    {
        "value": "05H933Z",
        "label": "Insertion of Infusion Device into Right Brachial Vein, Percutaneous Approach"
    },
    {
        "value": "0DJ68ZZ",
        "label": "Inspection of Stomach, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "3931",
        "label": "Suture of artery"
    },
    {
        "value": "0TTB4ZZ",
        "label": "Resection of Bladder, Percutaneous Endoscopic Approach"
    },
    {
        "value": "0T9B30Z",
        "label": "Drainage of Bladder with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "0Y6H0Z2",
        "label": "Detachment at Right Lower Leg, Mid, Open Approach"
    },
    {
        "value": "0WQFXZZ",
        "label": "Repair Abdominal Wall, External Approach"
    },
    {
        "value": "B2181ZZ",
        "label": "Fluoroscopy of Left Internal Mammary Bypass Graft using Low Osmolar Contrast"
    },
    {
        "value": "0DHA7UZ",
        "label": "Insertion of Feeding Device into Jejunum, Via Natural or Artificial Opening"
    },
    {
        "value": "8741",
        "label": "Computerized axial tomography of thorax"
    },
    {
        "value": "0KBT0ZZ",
        "label": "Excision of Left Lower Leg Muscle, Open Approach"
    },
    {
        "value": "B2131ZZ",
        "label": "Fluoroscopy of Multiple Coronary Artery Bypass Grafts using Low Osmolar Contrast"
    },
    {
        "value": "0DQB0ZZ",
        "label": "Repair Ileum, Open Approach"
    },
    {
        "value": "047R3ZZ",
        "label": "Dilation of Right Posterior Tibial Artery, Percutaneous Approach"
    },
    {
        "value": "027V3ZZ",
        "label": "Dilation of Superior Vena Cava, Percutaneous Approach"
    },
    {
        "value": "0D1B4Z4",
        "label": "Bypass Ileum to Cutaneous, Percutaneous Endoscopic Approach"
    },
    {
        "value": "4B02XTZ",
        "label": "Measurement of Cardiac Defibrillator, External Approach"
    },
    {
        "value": "0DH97UZ",
        "label": "Insertion of Feeding Device into Duodenum, Via Natural or Artificial Opening"
    },
    {
        "value": "0FB23ZX",
        "label": "Excision of Left Lobe Liver, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "8753",
        "label": "Intraoperative cholangiogram"
    },
    {
        "value": "0DQ80ZZ",
        "label": "Repair Small Intestine, Open Approach"
    },
    {
        "value": "07B74ZX",
        "label": "Excision of Thorax Lymphatic, Percutaneous Endoscopic Approach, Diagnostic"
    },
    {
        "value": "8819",
        "label": "Other x-ray of abdomen"
    },
    {
        "value": "5022",
        "label": "Partial hepatectomy"
    },
    {
        "value": "047N3ZZ",
        "label": "Dilation of Left Popliteal Artery, Percutaneous Approach"
    },
    {
        "value": "7745",
        "label": "Biopsy of bone, femur"
    },
    {
        "value": "B41F1ZZ",
        "label": "Fluoroscopy of Right Lower Extremity Arteries using Low Osmolar Contrast"
    },
    {
        "value": "8827",
        "label": "Skeletal x-ray of thigh, knee, and lower leg"
    },
    {
        "value": "6563",
        "label": "Laparoscopic removal of both ovaries and tubes at same operative episode"
    },
    {
        "value": "0Y6H0Z1",
        "label": "Detachment at Right Lower Leg, High, Open Approach"
    },
    {
        "value": "047L3ZZ",
        "label": "Dilation of Left Femoral Artery, Percutaneous Approach"
    },
    {
        "value": "0JPT0XZ",
        "label": "Removal of Tunneled Vascular Access Device from Trunk Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "3403",
        "label": "Reopening of recent thoracotomy site"
    },
    {
        "value": "8006",
        "label": "Arthrotomy for removal of prosthesis without replacement, knee"
    },
    {
        "value": "8106",
        "label": "Lumbar and lumbosacral fusion of the anterior column, anterior technique"
    },
    {
        "value": "047M3ZZ",
        "label": "Dilation of Right Popliteal Artery, Percutaneous Approach"
    },
    {
        "value": "0D568ZZ",
        "label": "Destruction of Stomach, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0BC48ZZ",
        "label": "Extirpation of Matter from Right Upper Lobe Bronchus, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0B9B8ZZ",
        "label": "Drainage of Left Lower Lobe Bronchus, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "3845",
        "label": "Resection of vessel with replacement, thoracic vessels"
    },
    {
        "value": "3998",
        "label": "Control of hemorrhage, not otherwise specified"
    },
    {
        "value": "0FPBX0Z",
        "label": "Removal of Drainage Device from Hepatobiliary Duct, External Approach"
    },
    {
        "value": "8108",
        "label": "Lumbar and lumbosacral fusion of the anterior column, posterior technique"
    },
    {
        "value": "02PA3RZ",
        "label": "Removal of Short-term External Heart Assist System from Heart, Percutaneous Approach"
    },
    {
        "value": "4444",
        "label": "Transcatheter embolization for gastric or duodenal bleeding"
    },
    {
        "value": "0QS604Z",
        "label": "Reposition Right Upper Femur with Internal Fixation Device, Open Approach"
    },
    {
        "value": "00NX0ZZ",
        "label": "Release Thoracic Spinal Cord, Open Approach"
    },
    {
        "value": "0WBF0ZZ",
        "label": "Excision of Abdominal Wall, Open Approach"
    },
    {
        "value": "0JD80ZZ",
        "label": "Extraction of Abdomen Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "4413",
        "label": "Other gastroscopy"
    },
    {
        "value": "02BK3ZX",
        "label": "Excision of Right Ventricle, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "3523",
        "label": "Open and other replacement of mitral valve with tissue graft"
    },
    {
        "value": "0DBM0ZZ",
        "label": "Excision of Descending Colon, Open Approach"
    },
    {
        "value": "0HQ1XZZ",
        "label": "Repair Face Skin, External Approach"
    },
    {
        "value": "3771",
        "label": "Initial insertion of transvenous lead [electrode] into ventricle"
    },
    {
        "value": "034",
        "label": "Excision or destruction of lesion of spinal cord or spinal meninges"
    },
    {
        "value": "0FC68ZZ",
        "label": "Extirpation of Matter from Left Hepatic Duct, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0QBH0ZZ",
        "label": "Excision of Left Tibia, Open Approach"
    },
    {
        "value": "00NY0ZZ",
        "label": "Release Lumbar Spinal Cord, Open Approach"
    },
    {
        "value": "06BP0ZZ",
        "label": "Excision of Right Saphenous Vein, Open Approach"
    },
    {
        "value": "734",
        "label": "Medical induction of labor"
    },
    {
        "value": "06WY3JZ",
        "label": "Revision of Synthetic Substitute in Lower Vein, Percutaneous Approach"
    },
    {
        "value": "0SB20ZZ",
        "label": "Excision of Lumbar Vertebral Disc, Open Approach"
    },
    {
        "value": "9394",
        "label": "Respiratory medication administered by nebulizer"
    },
    {
        "value": "057F3ZZ",
        "label": "Dilation of Left Cephalic Vein, Percutaneous Approach"
    },
    {
        "value": "05JY3ZZ",
        "label": "Inspection of Upper Vein, Percutaneous Approach"
    },
    {
        "value": "0QBQ0ZZ",
        "label": "Excision of Right Toe Phalanx, Open Approach"
    },
    {
        "value": "BT12YZZ",
        "label": "Fluoroscopy of Left Kidney using Other Contrast"
    },
    {
        "value": "5631",
        "label": "Ureteroscopy"
    },
    {
        "value": "0212",
        "label": "Other repair of cerebral meninges"
    },
    {
        "value": "B414YZZ",
        "label": "Fluoroscopy of Superior Mesenteric Artery using Other Contrast"
    },
    {
        "value": "0WPG03Z",
        "label": "Removal of Infusion Device from Peritoneal Cavity, Open Approach"
    },
    {
        "value": "0Y6H0Z3",
        "label": "Detachment at Right Lower Leg, Low, Open Approach"
    },
    {
        "value": "9659",
        "label": "Other irrigation of wound"
    },
    {
        "value": "0PB43ZX",
        "label": "Excision of Thoracic Vertebra, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "02RF0JZ",
        "label": "Replacement of Aortic Valve with Synthetic Substitute, Open Approach"
    },
    {
        "value": "04V03DZ",
        "label": "Restriction of Abdominal Aorta with Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "0KBW0ZZ",
        "label": "Excision of Left Foot Muscle, Open Approach"
    },
    {
        "value": "0QS704Z",
        "label": "Reposition Left Upper Femur with Internal Fixation Device, Open Approach"
    },
    {
        "value": "0SG1071",
        "label": "Fusion of 2 or more Lumbar Vertebral Joints with Autologous Tissue Substitute, Posterior Approach, Posterior Column, Open Approach"
    },
    {
        "value": "8085",
        "label": "Other local excision or destruction of lesion of joint, hip"
    },
    {
        "value": "8099",
        "label": "Other excision of joint, other specified sites"
    },
    {
        "value": "7867",
        "label": "Removal of implanted devices from bone, tibia and fibula"
    },
    {
        "value": "02PA33Z",
        "label": "Removal of Infusion Device from Heart, Percutaneous Approach"
    },
    {
        "value": "0DU907Z",
        "label": "Supplement Duodenum with Autologous Tissue Substitute, Open Approach"
    },
    {
        "value": "07BD3ZX",
        "label": "Excision of Aortic Lymphatic, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "D0001ZZ",
        "label": "Beam Radiation of Brain using Photons 1 - 10 MeV"
    },
    {
        "value": "00U20KZ",
        "label": "Supplement Dura Mater with Nonautologous Tissue Substitute, Open Approach"
    },
    {
        "value": "BT1FYZZ",
        "label": "Fluoroscopy of Left Kidney, Ureter and Bladder using Other Contrast"
    },
    {
        "value": "8385",
        "label": "Other change in muscle or tendon length"
    },
    {
        "value": "0S9C3ZZ",
        "label": "Drainage of Right Knee Joint, Percutaneous Approach"
    },
    {
        "value": "0R9K3ZX",
        "label": "Drainage of Left Shoulder Joint, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "0F998ZZ",
        "label": "Drainage of Common Bile Duct, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "3E033VJ",
        "label": "Introduction of Other Hormone into Peripheral Vein, Percutaneous Approach"
    },
    {
        "value": "2W03X6Z",
        "label": "Change Pressure Dressing on Abdominal Wall"
    },
    {
        "value": "0F20X0Z",
        "label": "Change Drainage Device in Liver, External Approach"
    },
    {
        "value": "4223",
        "label": "Other esophagoscopy"
    },
    {
        "value": "0BC88ZZ",
        "label": "Extirpation of Matter from Left Upper Lobe Bronchus, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0DW07UZ",
        "label": "Revision of Feeding Device in Upper Intestinal Tract, Via Natural or Artificial Opening"
    },
    {
        "value": "9952",
        "label": "Prophylactic vaccination against influenza"
    },
    {
        "value": "0JPTXXZ",
        "label": "Removal of Tunneled Vascular Access Device from Trunk Subcutaneous Tissue and Fascia, External Approach"
    },
    {
        "value": "04L43DZ",
        "label": "Occlusion of Splenic Artery with Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "05PY33Z",
        "label": "Removal of Infusion Device from Upper Vein, Percutaneous Approach"
    },
    {
        "value": "0F753DZ",
        "label": "Dilation of Right Hepatic Duct with Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "7767",
        "label": "Local excision of lesion or tissue of bone, tibia and fibula"
    },
    {
        "value": "B41BYZZ",
        "label": "Fluoroscopy of Other Intra-Abdominal Arteries using Other Contrast"
    },
    {
        "value": "02UG3JZ",
        "label": "Supplement Mitral Valve with Synthetic Substitute, Percutaneous Approach"
    },
    {
        "value": "0D598ZZ",
        "label": "Destruction of Duodenum, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "4579",
        "label": "Other and unspecified partial excision of large intestine"
    },
    {
        "value": "B244ZZZ",
        "label": "Ultrasonography of Right Heart"
    },
    {
        "value": "B41G1ZZ",
        "label": "Fluoroscopy of Left Lower Extremity Arteries using Low Osmolar Contrast"
    },
    {
        "value": "0T9B70Z",
        "label": "Drainage of Bladder with Drainage Device, Via Natural or Artificial Opening"
    },
    {
        "value": "0B9F8ZZ",
        "label": "Drainage of Right Lower Lung Lobe, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0FC58ZZ",
        "label": "Extirpation of Matter from Right Hepatic Duct, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "3596",
        "label": "Percutaneous balloon valvuloplasty"
    },
    {
        "value": "3512",
        "label": "Open heart valvuloplasty of mitral valve without replacement"
    },
    {
        "value": "0RG7071",
        "label": "Fusion of 2 to 7 Thoracic Vertebral Joints with Autologous Tissue Substitute, Posterior Approach, Posterior Column, Open Approach"
    },
    {
        "value": "0113",
        "label": "Closed [percutaneous] [needle] biopsy of brain"
    },
    {
        "value": "3614",
        "label": "(Aorto)coronary bypass of four or more coronary arteries"
    },
    {
        "value": "4881",
        "label": "Incision of perirectal tissue"
    },
    {
        "value": "BT11YZZ",
        "label": "Fluoroscopy of Right Kidney using Other Contrast"
    },
    {
        "value": "0QB10ZZ",
        "label": "Excision of Sacrum, Open Approach"
    },
    {
        "value": "047K3ZZ",
        "label": "Dilation of Right Femoral Artery, Percutaneous Approach"
    },
    {
        "value": "05HA33Z",
        "label": "Insertion of Infusion Device into Left Brachial Vein, Percutaneous Approach"
    },
    {
        "value": "4432",
        "label": "Percutaneous [endoscopic] gastrojejunostomy"
    },
    {
        "value": "0KBS0ZZ",
        "label": "Excision of Right Lower Leg Muscle, Open Approach"
    },
    {
        "value": "047S3ZZ",
        "label": "Dilation of Left Posterior Tibial Artery, Percutaneous Approach"
    },
    {
        "value": "437",
        "label": "Partial gastrectomy with anastomosis to jejunum"
    },
    {
        "value": "03BC4ZZ",
        "label": "Excision of Left Radial Artery, Percutaneous Endoscopic Approach"
    },
    {
        "value": "0SRS0J9",
        "label": "Replacement of Left Hip Joint, Femoral Surface with Synthetic Substitute, Cemented, Open Approach"
    },
    {
        "value": "0B9J8ZZ",
        "label": "Drainage of Left Lower Lung Lobe, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "00NW0ZZ",
        "label": "Release Cervical Spinal Cord, Open Approach"
    },
    {
        "value": "0DTJ4ZZ",
        "label": "Resection of Appendix, Percutaneous Endoscopic Approach"
    },
    {
        "value": "009U3ZZ",
        "label": "Drainage of Spinal Canal, Percutaneous Approach"
    },
    {
        "value": "0SPD09Z",
        "label": "Removal of Liner from Left Knee Joint, Open Approach"
    },
    {
        "value": "8016",
        "label": "Other arthrotomy, knee"
    },
    {
        "value": "0FB00ZX",
        "label": "Excision of Liver, Open Approach, Diagnostic"
    },
    {
        "value": "0HBEXZX",
        "label": "Excision of Left Lower Arm Skin, External Approach, Diagnostic"
    },
    {
        "value": "0059",
        "label": "Intravascular pressure measurement of coronary arteries"
    },
    {
        "value": "0Y6J0Z3",
        "label": "Detachment at Left Lower Leg, Low, Open Approach"
    },
    {
        "value": "4603",
        "label": "Exteriorization of large intestine"
    },
    {
        "value": "7761",
        "label": "Local excision of lesion or tissue of bone, scapula, clavicle, and thorax [ribs and sternum]"
    },
    {
        "value": "6841",
        "label": "Laparoscopic total abdominal hysterectomy"
    },
    {
        "value": "0PB00ZZ",
        "label": "Excision of Sternum, Open Approach"
    },
    {
        "value": "0KXJ0ZZ",
        "label": "Transfer Left Thorax Muscle, Open Approach"
    },
    {
        "value": "0F763DZ",
        "label": "Dilation of Left Hepatic Duct with Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "503",
        "label": "Lobectomy of liver"
    },
    {
        "value": "3E0430M",
        "label": "Introduction of Antineoplastic, Monoclonal Antibody, into Central Vein, Percutaneous Approach"
    },
    {
        "value": "DB021ZZ",
        "label": "Beam Radiation of Lung using Photons 1 - 10 MeV"
    },
    {
        "value": "02703ZZ",
        "label": "Dilation of Coronary Artery, One Artery, Percutaneous Approach"
    },
    {
        "value": "0QBR0ZZ",
        "label": "Excision of Left Toe Phalanx, Open Approach"
    },
    {
        "value": "0W3H0ZZ",
        "label": "Control Bleeding in Retroperitoneum, Open Approach"
    },
    {
        "value": "0FJD8ZZ",
        "label": "Inspection of Pancreatic Duct, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0F778DZ",
        "label": "Dilation of Common Hepatic Duct with Intraluminal Device, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0DC68ZZ",
        "label": "Extirpation of Matter from Stomach, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0DTP0ZZ",
        "label": "Resection of Rectum, Open Approach"
    },
    {
        "value": "0SPC09Z",
        "label": "Removal of Liner from Right Knee Joint, Open Approach"
    },
    {
        "value": "0R9J3ZX",
        "label": "Drainage of Right Shoulder Joint, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "3943",
        "label": "Removal of arteriovenous shunt for renal dialysis"
    },
    {
        "value": "0B998ZX",
        "label": "Drainage of Lingula Bronchus, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "0DNU0ZZ",
        "label": "Release Omentum, Open Approach"
    },
    {
        "value": "0DJD4ZZ",
        "label": "Inspection of Lower Intestinal Tract, Percutaneous Endoscopic Approach"
    },
    {
        "value": "04L23DZ",
        "label": "Occlusion of Gastric Artery with Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "8314",
        "label": "Fasciotomy"
    },
    {
        "value": "3326",
        "label": "Closed [percutaneous] [needle] biopsy of lung"
    },
    {
        "value": "5424",
        "label": "Closed [percutaneous] [needle] biopsy of intra-abdominal mass"
    },
    {
        "value": "047K3DZ",
        "label": "Dilation of Right Femoral Artery with Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "4341",
        "label": "Endoscopic excision or destruction of lesion or tissue of stomach"
    },
    {
        "value": "0048",
        "label": "Insertion of four or more vascular stents"
    },
    {
        "value": "0DTH0ZZ",
        "label": "Resection of Cecum, Open Approach"
    },
    {
        "value": "0DNB0ZZ",
        "label": "Release Ileum, Open Approach"
    },
    {
        "value": "3533",
        "label": "Annuloplasty"
    },
    {
        "value": "4709",
        "label": "Other appendectomy"
    },
    {
        "value": "8015",
        "label": "Other arthrotomy, hip"
    },
    {
        "value": "0QSH04Z",
        "label": "Reposition Left Tibia with Internal Fixation Device, Open Approach"
    },
    {
        "value": "0KXH0ZZ",
        "label": "Transfer Right Thorax Muscle, Open Approach"
    },
    {
        "value": "0QS606Z",
        "label": "Reposition Right Upper Femur with Intramedullary Internal Fixation Device, Open Approach"
    },
    {
        "value": "047Q3ZZ",
        "label": "Dilation of Left Anterior Tibial Artery, Percutaneous Approach"
    },
    {
        "value": "30243Y0",
        "label": "Transfusion of Autologous Hematopoietic Stem Cells into Central Vein, Percutaneous Approach"
    },
    {
        "value": "0DTN4ZZ",
        "label": "Resection of Sigmoid Colon, Percutaneous Endoscopic Approach"
    },
    {
        "value": "0DBG8ZX",
        "label": "Excision of Left Large Intestine, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "XW033H5",
        "label": "Introduction of Tocilizumab into Peripheral Vein, Percutaneous Approach, New Technology Group 5"
    },
    {
        "value": "8683",
        "label": "Size reduction plastic operation"
    },
    {
        "value": "3971",
        "label": "Endovascular implantation of other graft in abdominal aorta"
    },
    {
        "value": "4A0234Z",
        "label": "Measurement of Cardiac Electrical Activity, Percutaneous Approach"
    },
    {
        "value": "0B9K8ZX",
        "label": "Drainage of Right Lung, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "0BC58ZZ",
        "label": "Extirpation of Matter from Right Middle Lobe Bronchus, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0DJD0ZZ",
        "label": "Inspection of Lower Intestinal Tract, Open Approach"
    },
    {
        "value": "02580ZZ",
        "label": "Destruction of Conduction Mechanism, Open Approach"
    },
    {
        "value": "03JY3ZZ",
        "label": "Inspection of Upper Artery, Percutaneous Approach"
    },
    {
        "value": "02100AW",
        "label": "Bypass Coronary Artery, One Artery from Aorta with Autologous Arterial Tissue, Open Approach"
    },
    {
        "value": "03HB33Z",
        "label": "Insertion of Infusion Device into Right Radial Artery, Percutaneous Approach"
    },
    {
        "value": "0B778DZ",
        "label": "Dilation of Left Main Bronchus with Intraluminal Device, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "3779",
        "label": "Revision or relocation of cardiac device pocket"
    },
    {
        "value": "0DTE0ZZ",
        "label": "Resection of Large Intestine, Open Approach"
    },
    {
        "value": "3E0F8GC",
        "label": "Introduction of Other Therapeutic Substance into Respiratory Tract, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "02L70CK",
        "label": "Occlusion of Left Atrial Appendage with Extraluminal Device, Open Approach"
    },
    {
        "value": "7865",
        "label": "Removal of implanted devices from bone, femur"
    },
    {
        "value": "0J9Q0ZZ",
        "label": "Drainage of Right Foot Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "30243Y3",
        "label": "Transfusion of Allogeneic Unrelated Hematopoietic Stem Cells into Central Vein, Percutaneous Approach"
    },
    {
        "value": "9356",
        "label": "Application of pressure dressing"
    },
    {
        "value": "0CDXXZ0",
        "label": "Extraction of Lower Tooth, Single, External Approach"
    },
    {
        "value": "9649",
        "label": "Other genitourinary instillation"
    },
    {
        "value": "3E1F88Z",
        "label": "Irrigation of Respiratory Tract using Irrigating Substance, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "8821",
        "label": "Skeletal x-ray of shoulder and upper arm"
    },
    {
        "value": "4836",
        "label": "[Endoscopic] polypectomy of rectum"
    },
    {
        "value": "5651",
        "label": "Formation of cutaneous uretero-ileostomy"
    },
    {
        "value": "0FPB3DZ",
        "label": "Removal of Intraluminal Device from Hepatobiliary Duct, Percutaneous Approach"
    },
    {
        "value": "0DP6XUZ",
        "label": "Removal of Feeding Device from Stomach, External Approach"
    },
    {
        "value": "06783ZZ",
        "label": "Dilation of Portal Vein, Percutaneous Approach"
    },
    {
        "value": "9782",
        "label": "Removal of peritoneal drainage device"
    },
    {
        "value": "0JH609Z",
        "label": "Insertion of Cardiac Resynchronization Defibrillator Pulse Generator into Chest Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "8828",
        "label": "Skeletal x-ray of ankle and foot"
    },
    {
        "value": "4023",
        "label": "Excision of axillary lymph node"
    },
    {
        "value": "0BJ18ZZ",
        "label": "Inspection of Trachea, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "4686",
        "label": "Endoscopic insertion of colonic stent(s)"
    },
    {
        "value": "07TC4ZZ",
        "label": "Resection of Pelvis Lymphatic, Percutaneous Endoscopic Approach"
    },
    {
        "value": "4574",
        "label": "Open and other resection of transverse colon"
    },
    {
        "value": "0QSB04Z",
        "label": "Reposition Right Lower Femur with Internal Fixation Device, Open Approach"
    },
    {
        "value": "0DNE0ZZ",
        "label": "Release Large Intestine, Open Approach"
    },
    {
        "value": "0QBG0ZZ",
        "label": "Excision of Right Tibia, Open Approach"
    },
    {
        "value": "0043",
        "label": "Procedure on four or more vessels"
    },
    {
        "value": "3199",
        "label": "Other operations on trachea"
    },
    {
        "value": "0SP90JZ",
        "label": "Removal of Synthetic Substitute from Right Hip Joint, Open Approach"
    },
    {
        "value": "02H63KZ",
        "label": "Insertion of Defibrillator Lead into Right Atrium, Percutaneous Approach"
    },
    {
        "value": "0KNT0ZZ",
        "label": "Release Left Lower Leg Muscle, Open Approach"
    },
    {
        "value": "0DBF8ZX",
        "label": "Excision of Right Large Intestine, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "7748",
        "label": "Biopsy of bone, tarsals and metatarsals"
    },
    {
        "value": "0SG0071",
        "label": "Fusion of Lumbar Vertebral Joint with Autologous Tissue Substitute, Posterior Approach, Posterior Column, Open Approach"
    },
    {
        "value": "3728",
        "label": "Intracardiac echocardiography"
    },
    {
        "value": "0SRR0J9",
        "label": "Replacement of Right Hip Joint, Femoral Surface with Synthetic Substitute, Cemented, Open Approach"
    },
    {
        "value": "0D9W30Z",
        "label": "Drainage of Peritoneum with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "0SB90ZZ",
        "label": "Excision of Right Hip Joint, Open Approach"
    },
    {
        "value": "0HBNXZZ",
        "label": "Excision of Left Foot Skin, External Approach"
    },
    {
        "value": "0S9F3ZX",
        "label": "Drainage of Right Ankle Joint, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "0HBJXZX",
        "label": "Excision of Left Upper Leg Skin, External Approach, Diagnostic"
    },
    {
        "value": "0W9J3ZX",
        "label": "Drainage of Pelvic Cavity, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "0HB6XZZ",
        "label": "Excision of Back Skin, External Approach"
    },
    {
        "value": "0221",
        "label": "Insertion or replacement of external ventricular drain [EVD]"
    },
    {
        "value": "0QB10ZX",
        "label": "Excision of Sacrum, Open Approach, Diagnostic"
    },
    {
        "value": "0JDQ0ZZ",
        "label": "Extraction of Right Foot Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "0B9N30Z",
        "label": "Drainage of Right Pleura with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "0LBW0ZZ",
        "label": "Excision of Left Foot Tendon, Open Approach"
    },
    {
        "value": "5504",
        "label": "Percutaneous nephrostomy with fragmentation"
    },
    {
        "value": "0DTG0ZZ",
        "label": "Resection of Left Large Intestine, Open Approach"
    },
    {
        "value": "7359",
        "label": "Other manually assisted delivery"
    },
    {
        "value": "06WY3DZ",
        "label": "Revision of Intraluminal Device in Lower Vein, Percutaneous Approach"
    },
    {
        "value": "8891",
        "label": "Magnetic resonance imaging of brain and brain stem"
    },
    {
        "value": "5014",
        "label": "Laparoscopic liver biopsy"
    },
    {
        "value": "0W9F3ZZ",
        "label": "Drainage of Abdominal Wall, Percutaneous Approach"
    },
    {
        "value": "9227",
        "label": "Implantation or insertion of radioactive elements"
    },
    {
        "value": "B310YZZ",
        "label": "Fluoroscopy of Thoracic Aorta using Other Contrast"
    },
    {
        "value": "0HRLX74",
        "label": "Replacement of Left Lower Leg Skin with Autologous Tissue Substitute, Partial Thickness, External Approach"
    },
    {
        "value": "00163J6",
        "label": "Bypass Cerebral Ventricle to Peritoneal Cavity with Synthetic Substitute, Percutaneous Approach"
    },
    {
        "value": "3808",
        "label": "Incision of vessel, lower limb arteries"
    },
    {
        "value": "3524",
        "label": "Open and other replacement of mitral valve"
    },
    {
        "value": "0B958ZZ",
        "label": "Drainage of Right Middle Lobe Bronchus, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "BT13YZZ",
        "label": "Fluoroscopy of Bilateral Kidneys using Other Contrast"
    },
    {
        "value": "0B9M8ZZ",
        "label": "Drainage of Bilateral Lungs, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "3505",
        "label": "Endovascular replacement of aortic valve"
    },
    {
        "value": "0HB5XZX",
        "label": "Excision of Chest Skin, External Approach, Diagnostic"
    },
    {
        "value": "0JDR0ZZ",
        "label": "Extraction of Left Foot Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "0SPD0JZ",
        "label": "Removal of Synthetic Substitute from Left Knee Joint, Open Approach"
    },
    {
        "value": "3E0330M",
        "label": "Introduction of Antineoplastic, Monoclonal Antibody, into Peripheral Vein, Percutaneous Approach"
    },
    {
        "value": "0BB18ZX",
        "label": "Excision of Trachea, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "3E0P7VZ",
        "label": "Introduction of Hormone into Female Reproductive, Via Natural or Artificial Opening"
    },
    {
        "value": "03LG3DZ",
        "label": "Occlusion of Intracranial Artery with Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "0FB93ZX",
        "label": "Excision of Common Bile Duct, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "3422",
        "label": "Mediastinoscopy"
    },
    {
        "value": "3249",
        "label": "Other lobectomy of lung"
    },
    {
        "value": "0W9F3ZX",
        "label": "Drainage of Abdominal Wall, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "0JB60ZZ",
        "label": "Excision of Chest Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "0Y6C0Z3",
        "label": "Detachment at Right Upper Leg, Low, Open Approach"
    },
    {
        "value": "4442",
        "label": "Suture of duodenal ulcer site"
    },
    {
        "value": "4642",
        "label": "Repair of pericolostomy hernia"
    },
    {
        "value": "3712",
        "label": "Pericardiotomy"
    },
    {
        "value": "079T3ZX",
        "label": "Drainage of Bone Marrow, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "02C03ZZ",
        "label": "Extirpation of Matter from Coronary Artery, One Artery, Percutaneous Approach"
    },
    {
        "value": "8623",
        "label": "Removal of nail, nail bed, or nail fold"
    },
    {
        "value": "8365",
        "label": "Other suture of muscle or fascia"
    },
    {
        "value": "DP081ZZ",
        "label": "Beam Radiation of Pelvic Bones using Photons 1 - 10 MeV"
    },
    {
        "value": "8968",
        "label": "Monitoring of cardiac output by other technique"
    },
    {
        "value": "8627",
        "label": "Debridement of nail, nail bed, or nail fold"
    },
    {
        "value": "02100Z8",
        "label": "Bypass Coronary Artery, One Artery from Right Internal Mammary, Open Approach"
    },
    {
        "value": "9912",
        "label": "Immunization for allergy"
    },
    {
        "value": "0D1N4Z4",
        "label": "Bypass Sigmoid Colon to Cutaneous, Percutaneous Endoscopic Approach"
    },
    {
        "value": "9729",
        "label": "Other nonoperative replacements"
    },
    {
        "value": "9761",
        "label": "Removal of pyelostomy and nephrostomy tube"
    },
    {
        "value": "0SPC0JZ",
        "label": "Removal of Synthetic Substitute from Right Knee Joint, Open Approach"
    },
    {
        "value": "5369",
        "label": "Other and open repair of other hernia of anterior abdominal wall with graft or prosthesis"
    },
    {
        "value": "0FBC8ZX",
        "label": "Excision of Ampulla of Vater, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "4701",
        "label": "Laparoscopic appendectomy"
    },
    {
        "value": "1736",
        "label": "Laparoscopic sigmoidectomy"
    },
    {
        "value": "0HBBXZX",
        "label": "Excision of Right Upper Arm Skin, External Approach, Diagnostic"
    },
    {
        "value": "06BQ0ZZ",
        "label": "Excision of Left Saphenous Vein, Open Approach"
    },
    {
        "value": "0WJG3ZZ",
        "label": "Inspection of Peritoneal Cavity, Percutaneous Approach"
    },
    {
        "value": "0K9N30Z",
        "label": "Drainage of Right Hip Muscle with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "0HQ0XZZ",
        "label": "Repair Scalp Skin, External Approach"
    },
    {
        "value": "047L3DZ",
        "label": "Dilation of Left Femoral Artery with Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "5A02216",
        "label": "Assistance with Cardiac Output using Other Pump, Continuous"
    },
    {
        "value": "0FB20ZX",
        "label": "Excision of Left Lobe Liver, Open Approach, Diagnostic"
    },
    {
        "value": "5A1522H",
        "label": "Extracorporeal Oxygenation, Membrane, Peripheral Veno-venous"
    },
    {
        "value": "610",
        "label": "Incision and drainage of scrotum and tunica vaginalis"
    },
    {
        "value": "4869",
        "label": "Other resection of rectum"
    },
    {
        "value": "7906",
        "label": "Closed reduction of fracture without internal fixation, tibia and fibula"
    },
    {
        "value": "0DBW0ZZ",
        "label": "Excision of Peritoneum, Open Approach"
    },
    {
        "value": "2W30XYZ",
        "label": "Immobilization of Head using Other Device"
    },
    {
        "value": "0JDL0ZZ",
        "label": "Extraction of Right Upper Leg Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "02HA0QZ",
        "label": "Insertion of Implantable Heart Assist System into Heart, Open Approach"
    },
    {
        "value": "047T3ZZ",
        "label": "Dilation of Right Peroneal Artery, Percutaneous Approach"
    },
    {
        "value": "0JH604Z",
        "label": "Insertion of Pacemaker, Single Chamber into Chest Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "B215YZZ",
        "label": "Fluoroscopy of Left Heart using Other Contrast"
    },
    {
        "value": "BT1DYZZ",
        "label": "Fluoroscopy of Right Kidney, Ureter and Bladder using Other Contrast"
    },
    {
        "value": "3932",
        "label": "Suture of vein"
    },
    {
        "value": "0F9230Z",
        "label": "Drainage of Left Lobe Liver with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "0TQB0ZZ",
        "label": "Repair Bladder, Open Approach"
    },
    {
        "value": "0BP1XFZ",
        "label": "Removal of Tracheostomy Device from Trachea, External Approach"
    },
    {
        "value": "0RB30ZZ",
        "label": "Excision of Cervical Vertebral Disc, Open Approach"
    },
    {
        "value": "03LY3DZ",
        "label": "Occlusion of Upper Artery with Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "B240ZZ3",
        "label": "Ultrasonography of Single Coronary Artery, Intravascular"
    },
    {
        "value": "0DBK8ZZ",
        "label": "Excision of Ascending Colon, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0JD70ZZ",
        "label": "Extraction of Back Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "0077",
        "label": "Hip bearing surface, ceramic-on-polyethylene"
    },
    {
        "value": "0FB10ZX",
        "label": "Excision of Right Lobe Liver, Open Approach, Diagnostic"
    },
    {
        "value": "0BBN4ZX",
        "label": "Excision of Right Pleura, Percutaneous Endoscopic Approach, Diagnostic"
    },
    {
        "value": "0HBMXZZ",
        "label": "Excision of Right Foot Skin, External Approach"
    },
    {
        "value": "0FB90ZZ",
        "label": "Excision of Common Bile Duct, Open Approach"
    },
    {
        "value": "0B988ZX",
        "label": "Drainage of Left Upper Lobe Bronchus, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "B212YZZ",
        "label": "Fluoroscopy of Single Coronary Artery Bypass Graft using Other Contrast"
    },
    {
        "value": "9815",
        "label": "Removal of intraluminal foreign body from trachea and bronchus without incision"
    },
    {
        "value": "B51W1ZZ",
        "label": "Fluoroscopy of Dialysis Shunt/Fistula using Low Osmolar Contrast"
    },
    {
        "value": "0B718DZ",
        "label": "Dilation of Trachea with Intraluminal Device, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "079P30Z",
        "label": "Drainage of Spleen with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "0HRKX74",
        "label": "Replacement of Right Lower Leg Skin with Autologous Tissue Substitute, Partial Thickness, External Approach"
    },
    {
        "value": "XW043B3",
        "label": "Introduction of Cytarabine and Daunorubicin Liposome Antineoplastic into Central Vein, Percutaneous Approach, New Technology Group 3"
    },
    {
        "value": "7309",
        "label": "Other artificial rupture of membranes"
    },
    {
        "value": "07BD0ZZ",
        "label": "Excision of Aortic Lymphatic, Open Approach"
    },
    {
        "value": "8543",
        "label": "Unilateral extended simple mastectomy"
    },
    {
        "value": "0JBC0ZZ",
        "label": "Excision of Pelvic Region Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "0S9G3ZX",
        "label": "Drainage of Left Ankle Joint, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "0017",
        "label": "Infusion of vasopressor agent"
    },
    {
        "value": "06PYX3Z",
        "label": "Removal of Infusion Device from Lower Vein, External Approach"
    },
    {
        "value": "864",
        "label": "Radical excision of skin lesion"
    },
    {
        "value": "0UTC0ZZ",
        "label": "Resection of Cervix, Open Approach"
    },
    {
        "value": "0DQ60ZZ",
        "label": "Repair Stomach, Open Approach"
    },
    {
        "value": "5493",
        "label": "Creation of cutaneoperitoneal fistula"
    },
    {
        "value": "8081",
        "label": "Other local excision or destruction of lesion of joint, shoulder"
    },
    {
        "value": "7868",
        "label": "Removal of implanted devices from bone, tarsals and metatarsals"
    },
    {
        "value": "01N50ZZ",
        "label": "Release Median Nerve, Open Approach"
    },
    {
        "value": "3781",
        "label": "Initial insertion of single-chamber device, not specified as rate responsive"
    },
    {
        "value": "0DBE0ZZ",
        "label": "Excision of Large Intestine, Open Approach"
    },
    {
        "value": "0B518ZZ",
        "label": "Destruction of Trachea, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0094",
        "label": "Intra-operative neurophysiologic monitoring"
    },
    {
        "value": "3451",
        "label": "Decortication of lung"
    },
    {
        "value": "0SUW09Z",
        "label": "Supplement Left Knee Joint, Tibial Surface with Liner, Open Approach"
    },
    {
        "value": "0HQ9XZZ",
        "label": "Repair Perineum Skin, External Approach"
    },
    {
        "value": "HZ2ZZZZ",
        "label": "Detoxification Services for Substance Abuse Treatment"
    },
    {
        "value": "0B738ZZ",
        "label": "Dilation of Right Main Bronchus, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0T763DZ",
        "label": "Dilation of Right Ureter with Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "1733",
        "label": "Laparoscopic right hemicolectomy"
    },
    {
        "value": "7932",
        "label": "Open reduction of fracture with internal fixation, radius and ulna"
    },
    {
        "value": "9744",
        "label": "Nonoperative removal of heart assist system"
    },
    {
        "value": "B41D1ZZ",
        "label": "Fluoroscopy of Aorta and Bilateral Lower Extremity Arteries using Low Osmolar Contrast"
    },
    {
        "value": "8914",
        "label": "Electroencephalogram"
    },
    {
        "value": "0KQM0ZZ",
        "label": "Repair Perineum Muscle, Open Approach"
    },
    {
        "value": "0W9940Z",
        "label": "Drainage of Right Pleural Cavity with Drainage Device, Percutaneous Endoscopic Approach"
    },
    {
        "value": "0DBA8ZX",
        "label": "Excision of Jejunum, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "0KBR0ZZ",
        "label": "Excision of Left Upper Leg Muscle, Open Approach"
    },
    {
        "value": "8826",
        "label": "Other skeletal x-ray of pelvis and hip"
    },
    {
        "value": "0Y6S0Z0",
        "label": "Detachment at Left 2nd Toe, Complete, Open Approach"
    },
    {
        "value": "8866",
        "label": "Phlebography of femoral and other lower extremity veins using contrast material"
    },
    {
        "value": "30243Y2",
        "label": "Transfusion of Allogeneic Related Hematopoietic Stem Cells into Central Vein, Percutaneous Approach"
    },
    {
        "value": "0F9G80Z",
        "label": "Drainage of Pancreas with Drainage Device, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0WQF4ZZ",
        "label": "Repair Abdominal Wall, Percutaneous Endoscopic Approach"
    },
    {
        "value": "0BP08DZ",
        "label": "Removal of Intraluminal Device from Tracheobronchial Tree, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0JH607Z",
        "label": "Insertion of Cardiac Resynchronization Pacemaker Pulse Generator into Chest Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "00B70ZZ",
        "label": "Excision of Cerebral Hemisphere, Open Approach"
    },
    {
        "value": "0B918ZX",
        "label": "Drainage of Trachea, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "0KNS0ZZ",
        "label": "Release Right Lower Leg Muscle, Open Approach"
    },
    {
        "value": "0B21XEZ",
        "label": "Change Endotracheal Airway in Trachea, External Approach"
    },
    {
        "value": "0H97XZZ",
        "label": "Drainage of Abdomen Skin, External Approach"
    },
    {
        "value": "0QS706Z",
        "label": "Reposition Left Upper Femur with Intramedullary Internal Fixation Device, Open Approach"
    },
    {
        "value": "07BC4ZZ",
        "label": "Excision of Pelvis Lymphatic, Percutaneous Endoscopic Approach"
    },
    {
        "value": "0DB18ZX",
        "label": "Excision of Upper Esophagus, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "0DNU4ZZ",
        "label": "Release Omentum, Percutaneous Endoscopic Approach"
    },
    {
        "value": "0DN84ZZ",
        "label": "Release Small Intestine, Percutaneous Endoscopic Approach"
    },
    {
        "value": "0F24X0Z",
        "label": "Change Drainage Device in Gallbladder, External Approach"
    },
    {
        "value": "0D9680Z",
        "label": "Drainage of Stomach with Drainage Device, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0DNW4ZZ",
        "label": "Release Peritoneum, Percutaneous Endoscopic Approach"
    },
    {
        "value": "0DQ90ZZ",
        "label": "Repair Duodenum, Open Approach"
    },
    {
        "value": "06L23DZ",
        "label": "Occlusion of Gastric Vein with Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "0S9D3ZZ",
        "label": "Drainage of Left Knee Joint, Percutaneous Approach"
    },
    {
        "value": "0QBN0ZX",
        "label": "Excision of Right Metatarsal, Open Approach, Diagnostic"
    },
    {
        "value": "3241",
        "label": "Thoracoscopic lobectomy of lung"
    },
    {
        "value": "9354",
        "label": "Application of splint"
    },
    {
        "value": "3E05305",
        "label": "Introduction of Other Antineoplastic into Peripheral Artery, Percutaneous Approach"
    },
    {
        "value": "041K0JL",
        "label": "Bypass Right Femoral Artery to Popliteal Artery with Synthetic Substitute, Open Approach"
    },
    {
        "value": "3733",
        "label": "Excision or destruction of other lesion or tissue of heart, open approach"
    },
    {
        "value": "B51TYZZ",
        "label": "Fluoroscopy of Portal and Splanchnic Veins using Other Contrast"
    },
    {
        "value": "3844",
        "label": "Resection of vessel with replacement, aorta, abdominal"
    },
    {
        "value": "3972",
        "label": "Endovascular (total) embolization or occlusion of head and neck vessels"
    },
    {
        "value": "4921",
        "label": "Anoscopy"
    },
    {
        "value": "4693",
        "label": "Revision of anastomosis of small intestine"
    },
    {
        "value": "3E0F83Z",
        "label": "Introduction of Anti-inflammatory into Respiratory Tract, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "3421",
        "label": "Transpleural thoracoscopy"
    },
    {
        "value": "4641",
        "label": "Revision of stoma of small intestine"
    },
    {
        "value": "BF111ZZ",
        "label": "Fluoroscopy of Biliary and Pancreatic Ducts using Low Osmolar Contrast"
    },
    {
        "value": "8011",
        "label": "Other arthrotomy, shoulder"
    },
    {
        "value": "3E10X8Z",
        "label": "Irrigation of Skin and Mucous Membranes using Irrigating Substance"
    },
    {
        "value": "B412YZZ",
        "label": "Fluoroscopy of Hepatic Artery using Other Contrast"
    },
    {
        "value": "7931",
        "label": "Open reduction of fracture with internal fixation, humerus"
    },
    {
        "value": "0TC78ZZ",
        "label": "Extirpation of Matter from Left Ureter, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0SUV09Z",
        "label": "Supplement Right Knee Joint, Tibial Surface with Liner, Open Approach"
    },
    {
        "value": "0T184ZC",
        "label": "Bypass Bilateral Ureters to Ileocutaneous, Percutaneous Endoscopic Approach"
    },
    {
        "value": "0050",
        "label": "Implantation of cardiac resynchronization pacemaker without mention of defibrillation, total system [CRT-P]"
    },
    {
        "value": "GZB2ZZZ",
        "label": "Electroconvulsive Therapy, Bilateral-Single Seizure"
    },
    {
        "value": "0Y6J0Z1",
        "label": "Detachment at Left Lower Leg, High, Open Approach"
    },
    {
        "value": "0Y6P0Z1",
        "label": "Detachment at Right 1st Toe, High, Open Approach"
    },
    {
        "value": "5A15223",
        "label": "Extracorporeal Membrane Oxygenation, Continuous"
    },
    {
        "value": "554",
        "label": "Partial nephrectomy"
    },
    {
        "value": "0Y6Q0Z0",
        "label": "Detachment at Left 1st Toe, Complete, Open Approach"
    },
    {
        "value": "0234",
        "label": "Ventricular shunt to abdominal cavity and organs"
    },
    {
        "value": "5472",
        "label": "Other repair of abdominal wall"
    },
    {
        "value": "3228",
        "label": "Endoscopic excision or destruction of lesion or tissue of lung"
    },
    {
        "value": "3736",
        "label": "Excision, destruction, or exclusion of left atrial appendage (LAA)"
    },
    {
        "value": "0DBK0ZZ",
        "label": "Excision of Ascending Colon, Open Approach"
    },
    {
        "value": "0Y6D0Z3",
        "label": "Detachment at Left Upper Leg, Low, Open Approach"
    },
    {
        "value": "8388",
        "label": "Other plastic operations on tendon"
    },
    {
        "value": "0FB04ZX",
        "label": "Excision of Liver, Percutaneous Endoscopic Approach, Diagnostic"
    },
    {
        "value": "0HRMX74",
        "label": "Replacement of Right Foot Skin with Autologous Tissue Substitute, Partial Thickness, External Approach"
    },
    {
        "value": "02110Z9",
        "label": "Bypass Coronary Artery, Two Arteries from Left Internal Mammary, Open Approach"
    },
    {
        "value": "8005",
        "label": "Arthrotomy for removal of prosthesis without replacement, hip"
    },
    {
        "value": "8013",
        "label": "Other arthrotomy, wrist"
    },
    {
        "value": "05CY3ZZ",
        "label": "Extirpation of Matter from Upper Vein, Percutaneous Approach"
    },
    {
        "value": "05753ZZ",
        "label": "Dilation of Right Subclavian Vein, Percutaneous Approach"
    },
    {
        "value": "0BBG4ZZ",
        "label": "Excision of Left Upper Lung Lobe, Percutaneous Endoscopic Approach"
    },
    {
        "value": "0UT74ZZ",
        "label": "Resection of Bilateral Fallopian Tubes, Percutaneous Endoscopic Approach"
    },
    {
        "value": "0Y6Y0Z0",
        "label": "Detachment at Left 5th Toe, Complete, Open Approach"
    },
    {
        "value": "8104",
        "label": "Dorsal and dorsolumbar fusion of the anterior column, anterior technique"
    },
    {
        "value": "0W3P0ZZ",
        "label": "Control Bleeding in Gastrointestinal Tract, Open Approach"
    },
    {
        "value": "9638",
        "label": "Removal of impacted feces"
    },
    {
        "value": "02BG0ZZ",
        "label": "Excision of Mitral Valve, Open Approach"
    },
    {
        "value": "07B50ZX",
        "label": "Excision of Right Axillary Lymphatic, Open Approach, Diagnostic"
    },
    {
        "value": "9648",
        "label": "Irrigation of other indwelling urinary catheter"
    },
    {
        "value": "3174",
        "label": "Revision of tracheostomy"
    },
    {
        "value": "7902",
        "label": "Closed reduction of fracture without internal fixation, radius and ulna"
    },
    {
        "value": "5771",
        "label": "Radical cystectomy"
    },
    {
        "value": "7747",
        "label": "Biopsy of bone, tibia and fibula"
    },
    {
        "value": "5A09457",
        "label": "Assistance with Respiratory Ventilation, 24-96 Consecutive Hours, Continuous Positive Airway Pressure"
    },
    {
        "value": "0QSC04Z",
        "label": "Reposition Left Lower Femur with Internal Fixation Device, Open Approach"
    },
    {
        "value": "5359",
        "label": "Repair of other hernia of anterior abdominal wall"
    },
    {
        "value": "0QSG04Z",
        "label": "Reposition Right Tibia with Internal Fixation Device, Open Approach"
    },
    {
        "value": "4502",
        "label": "Other incision of small intestine"
    },
    {
        "value": "4A023FZ",
        "label": "Measurement of Cardiac Rhythm, Percutaneous Approach"
    },
    {
        "value": "0359",
        "label": "Other repair and plastic operations on spinal cord structures"
    },
    {
        "value": "6021",
        "label": "Transurethral (ultrasound) guided laser induced prostatectomy (TULIP)"
    },
    {
        "value": "0SG3071",
        "label": "Fusion of Lumbosacral Joint with Autologous Tissue Substitute, Posterior Approach, Posterior Column, Open Approach"
    },
    {
        "value": "0T7D8ZZ",
        "label": "Dilation of Urethra, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0722",
        "label": "Unilateral adrenalectomy"
    },
    {
        "value": "0080",
        "label": "Revision of knee replacement, total (all components)"
    },
    {
        "value": "4675",
        "label": "Suture of laceration of large intestine"
    },
    {
        "value": "4674",
        "label": "Closure of fistula of small intestine, except duodenum"
    },
    {
        "value": "2103",
        "label": "Control of epistaxis by cauterization (and packing)"
    },
    {
        "value": "0061",
        "label": "Percutaneous angioplasty of extracranial vessel(s)"
    },
    {
        "value": "0F753ZZ",
        "label": "Dilation of Right Hepatic Duct, Percutaneous Approach"
    },
    {
        "value": "0W3Q8ZZ",
        "label": "Control Bleeding in Respiratory Tract, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "3775",
        "label": "Revision of lead [electrode]"
    },
    {
        "value": "835",
        "label": "Bursectomy"
    },
    {
        "value": "0DT90ZZ",
        "label": "Resection of Duodenum, Open Approach"
    },
    {
        "value": "5201",
        "label": "Drainage of pancreatic cyst by catheter"
    },
    {
        "value": "0WCQ8ZZ",
        "label": "Extirpation of Matter from Respiratory Tract, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "3725",
        "label": "Biopsy of heart"
    },
    {
        "value": "5222",
        "label": "Other excision or destruction of lesion or tissue of pancreas or pancreatic duct"
    },
    {
        "value": "047D3DZ",
        "label": "Dilation of Left Common Iliac Artery with Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "07BD0ZX",
        "label": "Excision of Aortic Lymphatic, Open Approach, Diagnostic"
    },
    {
        "value": "9756",
        "label": "Removal of pancreatic tube or drain"
    },
    {
        "value": "04PY0JZ",
        "label": "Removal of Synthetic Substitute from Lower Artery, Open Approach"
    },
    {
        "value": "315",
        "label": "Local excision or destruction of lesion or tissue of trachea"
    },
    {
        "value": "0BD18ZX",
        "label": "Extraction of Trachea, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "GZB0ZZZ",
        "label": "Electroconvulsive Therapy, Unilateral-Single Seizure"
    },
    {
        "value": "03VG3DZ",
        "label": "Restriction of Intracranial Artery with Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "0D758ZZ",
        "label": "Dilation of Esophagus, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0HB6XZX",
        "label": "Excision of Back Skin, External Approach, Diagnostic"
    },
    {
        "value": "0QBM0ZX",
        "label": "Excision of Left Tarsal, Open Approach, Diagnostic"
    },
    {
        "value": "03CG3ZZ",
        "label": "Extirpation of Matter from Intracranial Artery, Percutaneous Approach"
    },
    {
        "value": "0DBL8ZZ",
        "label": "Excision of Transverse Colon, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0FB40ZZ",
        "label": "Excision of Gallbladder, Open Approach"
    },
    {
        "value": "03HC33Z",
        "label": "Insertion of Infusion Device into Left Radial Artery, Percutaneous Approach"
    },
    {
        "value": "4041",
        "label": "Radical neck dissection, unilateral"
    },
    {
        "value": "4594",
        "label": "Large-to-large intestinal anastomosis"
    },
    {
        "value": "3E0U3BZ",
        "label": "Introduction of Anesthetic Agent into Joints, Percutaneous Approach"
    },
    {
        "value": "B4101ZZ",
        "label": "Fluoroscopy of Abdominal Aorta using Low Osmolar Contrast"
    },
    {
        "value": "0UBG0ZZ",
        "label": "Excision of Vagina, Open Approach"
    },
    {
        "value": "0UDB7ZX",
        "label": "Extraction of Endometrium, Via Natural or Artificial Opening, Diagnostic"
    },
    {
        "value": "04V43DZ",
        "label": "Restriction of Splenic Artery with Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "0DBH0ZZ",
        "label": "Excision of Cecum, Open Approach"
    },
    {
        "value": "4863",
        "label": "Other anterior resection of rectum"
    },
    {
        "value": "7765",
        "label": "Local excision of lesion or tissue of bone, femur"
    },
    {
        "value": "5495",
        "label": "Incision of peritoneum"
    },
    {
        "value": "10D17ZZ",
        "label": "Extraction of Products of Conception, Retained, Via Natural or Artificial Opening"
    },
    {
        "value": "5371",
        "label": "Laparoscopic repair of diaphragmatic hernia, abdominal approach"
    },
    {
        "value": "0WQFXZ2",
        "label": "Repair Abdominal Wall, Stoma, External Approach"
    },
    {
        "value": "02RG0JZ",
        "label": "Replacement of Mitral Valve with Synthetic Substitute, Open Approach"
    },
    {
        "value": "2W13X6Z",
        "label": "Compression of Abdominal Wall using Pressure Dressing"
    },
    {
        "value": "0DQA0ZZ",
        "label": "Repair Jejunum, Open Approach"
    },
    {
        "value": "0DQ68ZZ",
        "label": "Repair Stomach, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0Y6V0Z0",
        "label": "Detachment at Right 4th Toe, Complete, Open Approach"
    },
    {
        "value": "5795",
        "label": "Replacement of indwelling urinary catheter"
    },
    {
        "value": "0Y6U0Z0",
        "label": "Detachment at Left 3rd Toe, Complete, Open Approach"
    },
    {
        "value": "0Y6X0Z0",
        "label": "Detachment at Right 5th Toe, Complete, Open Approach"
    },
    {
        "value": "4467",
        "label": "Laparoscopic procedures for creation of esophagogastric sphincteric competence"
    },
    {
        "value": "0HBRXZZ",
        "label": "Excision of Toe Nail, External Approach"
    },
    {
        "value": "05CF3ZZ",
        "label": "Extirpation of Matter from Left Cephalic Vein, Percutaneous Approach"
    },
    {
        "value": "07B60ZX",
        "label": "Excision of Left Axillary Lymphatic, Open Approach, Diagnostic"
    },
    {
        "value": "0689",
        "label": "Other parathyroidectomy"
    },
    {
        "value": "4572",
        "label": "Open and other cecectomy"
    },
    {
        "value": "06C53ZZ",
        "label": "Extirpation of Matter from Superior Mesenteric Vein, Percutaneous Approach"
    },
    {
        "value": "047M3DZ",
        "label": "Dilation of Right Popliteal Artery with Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "4595",
        "label": "Anastomosis to anus"
    },
    {
        "value": "06713ZZ",
        "label": "Dilation of Splenic Vein, Percutaneous Approach"
    },
    {
        "value": "0F7C8DZ",
        "label": "Dilation of Ampulla of Vater with Intraluminal Device, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0DBF0ZZ",
        "label": "Excision of Right Large Intestine, Open Approach"
    },
    {
        "value": "3956",
        "label": "Repair of blood vessel with tissue patch graft"
    },
    {
        "value": "613",
        "label": "Excision or destruction of lesion or tissue of scrotum"
    },
    {
        "value": "8313",
        "label": "Other tenotomy"
    },
    {
        "value": "07B74ZZ",
        "label": "Excision of Thorax Lymphatic, Percutaneous Endoscopic Approach"
    },
    {
        "value": "3789",
        "label": "Revision or removal of pacemaker device"
    },
    {
        "value": "4A11X4G",
        "label": "Monitoring of Peripheral Nervous Electrical Activity, Intraoperative, External Approach"
    },
    {
        "value": "0F170ZB",
        "label": "Bypass Common Hepatic Duct to Small Intestine, Open Approach"
    },
    {
        "value": "0HRNX74",
        "label": "Replacement of Left Foot Skin with Autologous Tissue Substitute, Partial Thickness, External Approach"
    },
    {
        "value": "0DHA4UZ",
        "label": "Insertion of Feeding Device into Jejunum, Percutaneous Endoscopic Approach"
    },
    {
        "value": "0J973ZX",
        "label": "Drainage of Back Subcutaneous Tissue and Fascia, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "06783DZ",
        "label": "Dilation of Portal Vein with Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "0SPB0JZ",
        "label": "Removal of Synthetic Substitute from Left Hip Joint, Open Approach"
    },
    {
        "value": "00B00ZZ",
        "label": "Excision of Brain, Open Approach"
    },
    {
        "value": "0SHD08Z",
        "label": "Insertion of Spacer into Left Knee Joint, Open Approach"
    },
    {
        "value": "0WCC0ZZ",
        "label": "Extirpation of Matter from Mediastinum, Open Approach"
    },
    {
        "value": "0060",
        "label": "Insertion of drug-eluting stent(s) of superficial femoral artery"
    },
    {
        "value": "0W9J3ZZ",
        "label": "Drainage of Pelvic Cavity, Percutaneous Approach"
    },
    {
        "value": "0TC68ZZ",
        "label": "Extirpation of Matter from Right Ureter, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0TP93DZ",
        "label": "Removal of Intraluminal Device from Ureter, Percutaneous Approach"
    },
    {
        "value": "0W9J0ZZ",
        "label": "Drainage of Pelvic Cavity, Open Approach"
    },
    {
        "value": "0055",
        "label": "Insertion of drug-eluting stent(s) of other peripheral vessel(s)"
    },
    {
        "value": "0K9P30Z",
        "label": "Drainage of Left Hip Muscle with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "0BQT4ZZ",
        "label": "Repair Diaphragm, Percutaneous Endoscopic Approach"
    },
    {
        "value": "9627",
        "label": "Manual reduction of hernia"
    },
    {
        "value": "0070",
        "label": "Revision of hip replacement, both acetabular and femoral components"
    },
    {
        "value": "B4141ZZ",
        "label": "Fluoroscopy of Superior Mesenteric Artery using Low Osmolar Contrast"
    },
    {
        "value": "04UK0KZ",
        "label": "Supplement Right Femoral Artery with Nonautologous Tissue Substitute, Open Approach"
    },
    {
        "value": "0BD38ZX",
        "label": "Extraction of Right Main Bronchus, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "0BD78ZX",
        "label": "Extraction of Left Main Bronchus, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "0B538ZZ",
        "label": "Destruction of Right Main Bronchus, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "B241ZZ3",
        "label": "Ultrasonography of Multiple Coronary Arteries, Intravascular"
    },
    {
        "value": "0BBP4ZX",
        "label": "Excision of Left Pleura, Percutaneous Endoscopic Approach, Diagnostic"
    },
    {
        "value": "0SH908Z",
        "label": "Insertion of Spacer into Right Hip Joint, Open Approach"
    },
    {
        "value": "0T9B80Z",
        "label": "Drainage of Bladder with Drainage Device, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0QB20ZZ",
        "label": "Excision of Right Pelvic Bone, Open Approach"
    },
    {
        "value": "0WJP4ZZ",
        "label": "Inspection of Gastrointestinal Tract, Percutaneous Endoscopic Approach"
    },
    {
        "value": "0UT24ZZ",
        "label": "Resection of Bilateral Ovaries, Percutaneous Endoscopic Approach"
    },
    {
        "value": "BF131ZZ",
        "label": "Fluoroscopy of Gallbladder and Bile Ducts using Low Osmolar Contrast"
    },
    {
        "value": "9979",
        "label": "Other therapeutic apheresis"
    },
    {
        "value": "0WP9X0Z",
        "label": "Removal of Drainage Device from Right Pleural Cavity, External Approach"
    },
    {
        "value": "0TBB8ZZ",
        "label": "Excision of Bladder, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "7817",
        "label": "Application of external fixator device, tibia and fibula"
    },
    {
        "value": "07BB0ZZ",
        "label": "Excision of Mesenteric Lymphatic, Open Approach"
    },
    {
        "value": "3768",
        "label": "Insertion of percutaneous external heart assist device"
    },
    {
        "value": "0QS734Z",
        "label": "Reposition Left Upper Femur with Internal Fixation Device, Percutaneous Approach"
    },
    {
        "value": "027135Z",
        "label": "Dilation of Coronary Artery, Two Arteries with Two Drug-eluting Intraluminal Devices, Percutaneous Approach"
    },
    {
        "value": "0QU03JZ",
        "label": "Supplement Lumbar Vertebra with Synthetic Substitute, Percutaneous Approach"
    },
    {
        "value": "5A1522G",
        "label": "Extracorporeal Oxygenation, Membrane, Peripheral Veno-arterial"
    },
    {
        "value": "0QS634Z",
        "label": "Reposition Right Upper Femur with Internal Fixation Device, Percutaneous Approach"
    },
    {
        "value": "0HDNXZZ",
        "label": "Extraction of Left Foot Skin, External Approach"
    },
    {
        "value": "0SBB0ZZ",
        "label": "Excision of Left Hip Joint, Open Approach"
    },
    {
        "value": "3787",
        "label": "Replacement of any type pacemaker device with dual-chamber device"
    },
    {
        "value": "0TT14ZZ",
        "label": "Resection of Left Kidney, Percutaneous Endoscopic Approach"
    },
    {
        "value": "064",
        "label": "Complete thyroidectomy"
    },
    {
        "value": "9468",
        "label": "Combined alcohol and drug detoxification"
    },
    {
        "value": "0UT94ZZ",
        "label": "Resection of Uterus, Percutaneous Endoscopic Approach"
    },
    {
        "value": "3E04302",
        "label": "Introduction of High-dose Interleukin-2 into Central Vein, Percutaneous Approach"
    },
    {
        "value": "0FC93ZZ",
        "label": "Extirpation of Matter from Common Bile Duct, Percutaneous Approach"
    },
    {
        "value": "0B9M7ZX",
        "label": "Drainage of Bilateral Lungs, Via Natural or Artificial Opening, Diagnostic"
    },
    {
        "value": "0FBG3ZX",
        "label": "Excision of Pancreas, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "0H9NXZZ",
        "label": "Drainage of Left Foot Skin, External Approach"
    },
    {
        "value": "3E1U38Z",
        "label": "Irrigation of Joints using Irrigating Substance, Percutaneous Approach"
    },
    {
        "value": "03CK0ZZ",
        "label": "Extirpation of Matter from Right Internal Carotid Artery, Open Approach"
    },
    {
        "value": "3964",
        "label": "Intraoperative cardiac pacemaker"
    },
    {
        "value": "0TT04ZZ",
        "label": "Resection of Right Kidney, Percutaneous Endoscopic Approach"
    },
    {
        "value": "4399",
        "label": "Other total gastrectomy"
    },
    {
        "value": "4422",
        "label": "Endoscopic dilation of pylorus"
    },
    {
        "value": "0BBC4ZZ",
        "label": "Excision of Right Upper Lung Lobe, Percutaneous Endoscopic Approach"
    },
    {
        "value": "0BBC8ZX",
        "label": "Excision of Right Upper Lung Lobe, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "0DBU3ZX",
        "label": "Excision of Omentum, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "0BBF3ZX",
        "label": "Excision of Right Lower Lung Lobe, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "0F913ZX",
        "label": "Drainage of Right Lobe Liver, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "3E0H8GC",
        "label": "Introduction of Other Therapeutic Substance into Lower GI, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0W9F0ZZ",
        "label": "Drainage of Abdominal Wall, Open Approach"
    },
    {
        "value": "5733",
        "label": "Closed [transurethral] biopsy of bladder"
    },
    {
        "value": "0F768ZZ",
        "label": "Dilation of Left Hepatic Duct, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0DC58ZZ",
        "label": "Extirpation of Matter from Esophagus, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "4A033BC",
        "label": "Measurement of Arterial Pressure, Coronary, Percutaneous Approach"
    },
    {
        "value": "8803",
        "label": "Sinogram of abdominal wall"
    },
    {
        "value": "8088",
        "label": "Other local excision or destruction of lesion of joint, foot and toe"
    },
    {
        "value": "5103",
        "label": "Other cholecystostomy"
    },
    {
        "value": "5169",
        "label": "Excision of other bile duct"
    },
    {
        "value": "0WBH0ZZ",
        "label": "Excision of Retroperitoneum, Open Approach"
    },
    {
        "value": "8844",
        "label": "Arteriography of other intrathoracic vessels"
    },
    {
        "value": "0DNL0ZZ",
        "label": "Release Transverse Colon, Open Approach"
    },
    {
        "value": "6909",
        "label": "Other dilation and curettage"
    },
    {
        "value": "5362",
        "label": "Laparoscopic incisional hernia repair with graft or prosthesis"
    },
    {
        "value": "605",
        "label": "Radical prostatectomy"
    },
    {
        "value": "9312",
        "label": "Other active musculoskeletal exercise"
    },
    {
        "value": "0KBL0ZZ",
        "label": "Excision of Left Abdomen Muscle, Open Approach"
    },
    {
        "value": "586",
        "label": "Dilation of urethra"
    },
    {
        "value": "8724",
        "label": "Other x-ray of lumbosacral spine"
    },
    {
        "value": "DD001ZZ",
        "label": "Beam Radiation of Esophagus using Photons 1 - 10 MeV"
    },
    {
        "value": "047U3ZZ",
        "label": "Dilation of Left Peroneal Artery, Percutaneous Approach"
    },
    {
        "value": "0063",
        "label": "Percutaneous insertion of carotid artery stent(s)"
    },
    {
        "value": "03783ZZ",
        "label": "Dilation of Left Brachial Artery, Percutaneous Approach"
    },
    {
        "value": "0443",
        "label": "Release of carpal tunnel"
    },
    {
        "value": "0F903ZX",
        "label": "Drainage of Liver, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "0J9L0ZZ",
        "label": "Drainage of Right Upper Leg Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "BT111ZZ",
        "label": "Fluoroscopy of Right Kidney using Low Osmolar Contrast"
    },
    {
        "value": "0DB64Z3",
        "label": "Excision of Stomach, Percutaneous Endoscopic Approach, Vertical"
    },
    {
        "value": "0DTL0ZZ",
        "label": "Resection of Transverse Colon, Open Approach"
    },
    {
        "value": "0DTP4ZZ",
        "label": "Resection of Rectum, Percutaneous Endoscopic Approach"
    },
    {
        "value": "0QBL0ZX",
        "label": "Excision of Right Tarsal, Open Approach, Diagnostic"
    },
    {
        "value": "02Q50ZZ",
        "label": "Repair Atrial Septum, Open Approach"
    },
    {
        "value": "B318YZZ",
        "label": "Fluoroscopy of Bilateral Internal Carotid Arteries using Other Contrast"
    },
    {
        "value": "0T133JD",
        "label": "Bypass Right Kidney Pelvis to Cutaneous with Synthetic Substitute, Percutaneous Approach"
    },
    {
        "value": "0FD93ZX",
        "label": "Extraction of Common Bile Duct, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "04UL0KZ",
        "label": "Supplement Left Femoral Artery with Nonautologous Tissue Substitute, Open Approach"
    },
    {
        "value": "6497",
        "label": "Insertion or replacement of inflatable penile prosthesis"
    },
    {
        "value": "0SB40ZZ",
        "label": "Excision of Lumbosacral Disc, Open Approach"
    },
    {
        "value": "3E0L4GC",
        "label": "Introduction of Other Therapeutic Substance into Pleural Cavity, Percutaneous Endoscopic Approach"
    },
    {
        "value": "3E0T3TZ",
        "label": "Introduction of Destructive Agent into Peripheral Nerves and Plexi, Percutaneous Approach"
    },
    {
        "value": "6ABF0BZ",
        "label": "Perfusion of Hepatobiliary System and Pancreas Donor Organ, Single"
    },
    {
        "value": "0FBG4ZZ",
        "label": "Excision of Pancreas, Percutaneous Endoscopic Approach"
    },
    {
        "value": "7975",
        "label": "Closed reduction of dislocation of hip"
    },
    {
        "value": "009U0ZZ",
        "label": "Drainage of Spinal Canal, Open Approach"
    },
    {
        "value": "093K7ZZ",
        "label": "Control Bleeding in Nasal Mucosa and Soft Tissue, Via Natural or Artificial Opening"
    },
    {
        "value": "0F7C8ZZ",
        "label": "Dilation of Ampulla of Vater, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0B578ZZ",
        "label": "Destruction of Left Main Bronchus, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0DT80ZZ",
        "label": "Resection of Small Intestine, Open Approach"
    },
    {
        "value": "5136",
        "label": "Choledochoenterostomy"
    },
    {
        "value": "4512",
        "label": "Endoscopy of small intestine through artificial stoma"
    },
    {
        "value": "4281",
        "label": "Insertion of permanent tube into esophagus"
    },
    {
        "value": "0RG20A0",
        "label": "Fusion of 2 or more Cervical Vertebral Joints with Interbody Fusion Device, Anterior Approach, Anterior Column, Open Approach"
    },
    {
        "value": "04HK33Z",
        "label": "Insertion of Infusion Device into Right Femoral Artery, Percutaneous Approach"
    },
    {
        "value": "4A043B2",
        "label": "Measurement of Venous Pressure, Portal, Percutaneous Approach"
    },
    {
        "value": "0F758ZZ",
        "label": "Dilation of Right Hepatic Duct, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0B948ZZ",
        "label": "Drainage of Right Upper Lobe Bronchus, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0DBV0ZZ",
        "label": "Excision of Mesentery, Open Approach"
    },
    {
        "value": "0JH63WZ",
        "label": "Insertion of Totally Implantable Vascular Access Device into Chest Subcutaneous Tissue and Fascia, Percutaneous Approach"
    },
    {
        "value": "0Y6T0Z0",
        "label": "Detachment at Right 3rd Toe, Complete, Open Approach"
    },
    {
        "value": "0D1A0ZA",
        "label": "Bypass Jejunum to Jejunum, Open Approach"
    },
    {
        "value": "0Y6R0Z0",
        "label": "Detachment at Right 2nd Toe, Complete, Open Approach"
    },
    {
        "value": "0HBCXZX",
        "label": "Excision of Left Upper Arm Skin, External Approach, Diagnostic"
    },
    {
        "value": "05H733Z",
        "label": "Insertion of Infusion Device into Right Axillary Vein, Percutaneous Approach"
    },
    {
        "value": "0PU43JZ",
        "label": "Supplement Thoracic Vertebra with Synthetic Substitute, Percutaneous Approach"
    },
    {
        "value": "0PS43ZZ",
        "label": "Reposition Thoracic Vertebra, Percutaneous Approach"
    },
    {
        "value": "0BBF8ZX",
        "label": "Excision of Right Lower Lung Lobe, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "8773",
        "label": "Intravenous pyelogram"
    },
    {
        "value": "0LBV0ZZ",
        "label": "Excision of Right Foot Tendon, Open Approach"
    },
    {
        "value": "0JBG0ZZ",
        "label": "Excision of Right Lower Arm Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "0KXT0ZZ",
        "label": "Transfer Left Lower Leg Muscle, Open Approach"
    },
    {
        "value": "07BC0ZX",
        "label": "Excision of Pelvis Lymphatic, Open Approach, Diagnostic"
    },
    {
        "value": "2121",
        "label": "Rhinoscopy"
    },
    {
        "value": "0SHC08Z",
        "label": "Insertion of Spacer into Right Knee Joint, Open Approach"
    },
    {
        "value": "07BC4ZX",
        "label": "Excision of Pelvis Lymphatic, Percutaneous Endoscopic Approach, Diagnostic"
    },
    {
        "value": "2Y40X5Z",
        "label": "Packing of Mouth and Pharynx using Packing Material"
    },
    {
        "value": "8363",
        "label": "Rotator cuff repair"
    },
    {
        "value": "B2151ZZ",
        "label": "Fluoroscopy of Left Heart using Low Osmolar Contrast"
    },
    {
        "value": "05H433Z",
        "label": "Insertion of Infusion Device into Left Innominate Vein, Percutaneous Approach"
    },
    {
        "value": "8401",
        "label": "Amputation and disarticulation of finger"
    },
    {
        "value": "0WJH0ZZ",
        "label": "Inspection of Retroperitoneum, Open Approach"
    },
    {
        "value": "0D9630Z",
        "label": "Drainage of Stomach with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "3965",
        "label": "Extracorporeal membrane oxygenation [ECMO]"
    },
    {
        "value": "8164",
        "label": "Fusion or refusion of 9 or more vertebrae"
    },
    {
        "value": "0FP4X0Z",
        "label": "Removal of Drainage Device from Gallbladder, External Approach"
    },
    {
        "value": "062",
        "label": "Unilateral thyroid lobectomy"
    },
    {
        "value": "3E0D705",
        "label": "Introduction of Other Antineoplastic into Mouth and Pharynx, Via Natural or Artificial Opening"
    },
    {
        "value": "0BB38ZX",
        "label": "Excision of Right Main Bronchus, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "04LE3DZ",
        "label": "Occlusion of Right Internal Iliac Artery with Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "8E09XBZ",
        "label": "Computer Assisted Procedure of Head and Neck Region"
    },
    {
        "value": "0BB78ZX",
        "label": "Excision of Left Main Bronchus, Via Natural or Artificial Opening Endoscopic, Diagnostic"
    },
    {
        "value": "3E01305",
        "label": "Introduction of Other Antineoplastic into Subcutaneous Tissue, Percutaneous Approach"
    },
    {
        "value": "057D3ZZ",
        "label": "Dilation of Right Cephalic Vein, Percutaneous Approach"
    },
    {
        "value": "07T10ZZ",
        "label": "Resection of Right Neck Lymphatic, Open Approach"
    },
    {
        "value": "0H9FXZZ",
        "label": "Drainage of Right Hand Skin, External Approach"
    },
    {
        "value": "6549",
        "label": "Other unilateral salpingo-oophorectomy"
    },
    {
        "value": "5121",
        "label": "Other partial cholecystectomy"
    },
    {
        "value": "0D1L4Z4",
        "label": "Bypass Transverse Colon to Cutaneous, Percutaneous Endoscopic Approach"
    },
    {
        "value": "02HL3JZ",
        "label": "Insertion of Pacemaker Lead into Left Ventricle, Percutaneous Approach"
    },
    {
        "value": "5717",
        "label": "Percutaneous cystostomy"
    },
    {
        "value": "XW0DXT5",
        "label": "Introduction of Ruxolitinib into Mouth and Pharynx, External Approach, New Technology Group 5"
    },
    {
        "value": "0DWDXUZ",
        "label": "Revision of Feeding Device in Lower Intestinal Tract, External Approach"
    },
    {
        "value": "0D798ZZ",
        "label": "Dilation of Duodenum, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "5341",
        "label": "Other and open repair of umbilical hernia with graft or prosthesis"
    },
    {
        "value": "0BNL4ZZ",
        "label": "Release Left Lung, Percutaneous Endoscopic Approach"
    },
    {
        "value": "6839",
        "label": "Other and unspecified subtotal abdominal hysterectomy"
    },
    {
        "value": "02PA0MZ",
        "label": "Removal of Cardiac Lead from Heart, Open Approach"
    },
    {
        "value": "0F190ZB",
        "label": "Bypass Common Bile Duct to Small Intestine, Open Approach"
    },
    {
        "value": "0KBF0ZZ",
        "label": "Excision of Right Trunk Muscle, Open Approach"
    },
    {
        "value": "07T20ZZ",
        "label": "Resection of Left Neck Lymphatic, Open Approach"
    },
    {
        "value": "DW031ZZ",
        "label": "Beam Radiation of Abdomen using Photons 1 - 10 MeV"
    },
    {
        "value": "0D1A0Z4",
        "label": "Bypass Jejunum to Cutaneous, Open Approach"
    },
    {
        "value": "0S9D0ZZ",
        "label": "Drainage of Left Knee Joint, Open Approach"
    },
    {
        "value": "8777",
        "label": "Other cystogram"
    },
    {
        "value": "0S9C0ZZ",
        "label": "Drainage of Right Knee Joint, Open Approach"
    },
    {
        "value": "5102",
        "label": "Trocar cholecystostomy"
    },
    {
        "value": "0WUF4JZ",
        "label": "Supplement Abdominal Wall with Synthetic Substitute, Percutaneous Endoscopic Approach"
    },
    {
        "value": "0JC80ZZ",
        "label": "Extirpation of Matter from Abdomen Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "0VB50ZZ",
        "label": "Excision of Scrotum, Open Approach"
    },
    {
        "value": "0SPR0JZ",
        "label": "Removal of Synthetic Substitute from Right Hip Joint, Femoral Surface, Open Approach"
    },
    {
        "value": "3229",
        "label": "Other local excision or destruction of lesion or tissue of lung"
    },
    {
        "value": "0VT34ZZ",
        "label": "Resection of Bilateral Seminal Vesicles, Percutaneous Endoscopic Approach"
    },
    {
        "value": "0HB9XZZ",
        "label": "Excision of Perineum Skin, External Approach"
    },
    {
        "value": "0BB78ZZ",
        "label": "Excision of Left Main Bronchus, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "B4121ZZ",
        "label": "Fluoroscopy of Hepatic Artery using Low Osmolar Contrast"
    },
    {
        "value": "4106",
        "label": "Cord blood stem cell transplant"
    },
    {
        "value": "0W2JX0Z",
        "label": "Change Drainage Device in Pelvic Cavity, External Approach"
    },
    {
        "value": "04C50ZZ",
        "label": "Extirpation of Matter from Superior Mesenteric Artery, Open Approach"
    },
    {
        "value": "0H9MXZZ",
        "label": "Drainage of Right Foot Skin, External Approach"
    },
    {
        "value": "0TTB0ZZ",
        "label": "Resection of Bladder, Open Approach"
    },
    {
        "value": "0DNA0ZZ",
        "label": "Release Jejunum, Open Approach"
    },
    {
        "value": "3975",
        "label": "Endovascular embolization or occlusion of vessel(s) of head or neck using bare coils"
    },
    {
        "value": "3E0T3CZ",
        "label": "Introduction of Regional Anesthetic into Peripheral Nerves and Plexi, Percutaneous Approach"
    },
    {
        "value": "0FWB3DZ",
        "label": "Revision of Intraluminal Device in Hepatobiliary Duct, Percutaneous Approach"
    },
    {
        "value": "3C1ZX8Z",
        "label": "Irrigation of Indwelling Device using Irrigating Substance, External Approach"
    },
    {
        "value": "3E0R3BZ",
        "label": "Introduction of Anesthetic Agent into Spinal Canal, Percutaneous Approach"
    },
    {
        "value": "8036",
        "label": "Biopsy of joint structure, knee"
    },
    {
        "value": "0DTF4ZZ",
        "label": "Resection of Right Large Intestine, Percutaneous Endoscopic Approach"
    },
    {
        "value": "0DPDXUZ",
        "label": "Removal of Feeding Device from Lower Intestinal Tract, External Approach"
    },
    {
        "value": "07B70ZX",
        "label": "Excision of Thorax Lymphatic, Open Approach, Diagnostic"
    },
    {
        "value": "7939",
        "label": "Open reduction of fracture with internal fixation, other specified bone"
    },
    {
        "value": "3803",
        "label": "Incision of vessel, upper limb vessels"
    },
    {
        "value": "3401",
        "label": "Incision of chest wall"
    },
    {
        "value": "0J980ZZ",
        "label": "Drainage of Abdomen Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "0DB64ZZ",
        "label": "Excision of Stomach, Percutaneous Endoscopic Approach"
    },
    {
        "value": "0W9D00Z",
        "label": "Drainage of Pericardial Cavity with Drainage Device, Open Approach"
    },
    {
        "value": "0DBG0ZZ",
        "label": "Excision of Left Large Intestine, Open Approach"
    },
    {
        "value": "0W9900Z",
        "label": "Drainage of Right Pleural Cavity with Drainage Device, Open Approach"
    },
    {
        "value": "06C13ZZ",
        "label": "Extirpation of Matter from Splenic Vein, Percutaneous Approach"
    },
    {
        "value": "4530",
        "label": "Endoscopic excision or destruction of lesion of duodenum"
    },
    {
        "value": "0QB33ZX",
        "label": "Excision of Left Pelvic Bone, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "0DBP4ZZ",
        "label": "Excision of Rectum, Percutaneous Endoscopic Approach"
    },
    {
        "value": "B544ZZA",
        "label": "Ultrasonography of Left Jugular Veins, Guidance"
    },
    {
        "value": "0W3F0ZZ",
        "label": "Control Bleeding in Abdominal Wall, Open Approach"
    },
    {
        "value": "5461",
        "label": "Reclosure of postoperative disruption of abdominal wall"
    },
    {
        "value": "0011",
        "label": "Infusion of drotrecogin alfa (activated)"
    },
    {
        "value": "8342",
        "label": "Other tenonectomy"
    },
    {
        "value": "3782",
        "label": "Initial insertion of single-chamber device, rate responsive"
    },
    {
        "value": "XW043E5",
        "label": "Introduction of Remdesivir Anti-infective into Central Vein, Percutaneous Approach, New Technology Group 5"
    },
    {
        "value": "XW04351",
        "label": "Introduction of Blinatumomab Antineoplastic Immunotherapy into Central Vein, Percutaneous Approach, New Technology Group 1"
    },
    {
        "value": "XW043C3",
        "label": "Introduction of Engineered Autologous Chimeric Antigen Receptor T-cell Immunotherapy into Central Vein, Percutaneous Approach, New Technology Group 3"
    },
    {
        "value": "8039",
        "label": "Biopsy of joint structure, other specified sites"
    },
    {
        "value": "DW011ZZ",
        "label": "Beam Radiation of Head and Neck using Photons 1 - 10 MeV"
    },
    {
        "value": "02L73DK",
        "label": "Occlusion of Left Atrial Appendage with Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "9609",
        "label": "Insertion of rectal tube"
    },
    {
        "value": "8893",
        "label": "Magnetic resonance imaging of spinal canal"
    },
    {
        "value": "8823",
        "label": "Skeletal x-ray of wrist and hand"
    },
    {
        "value": "8814",
        "label": "Retroperitoneal fistulogram"
    },
    {
        "value": "0CDWXZ0",
        "label": "Extraction of Upper Tooth, Single, External Approach"
    },
    {
        "value": "8759",
        "label": "Other biliary tract x-ray"
    },
    {
        "value": "0D9600Z",
        "label": "Drainage of Stomach with Drainage Device, Open Approach"
    },
    {
        "value": "9972",
        "label": "Therapeutic leukopheresis"
    },
    {
        "value": "00B70ZX",
        "label": "Excision of Cerebral Hemisphere, Open Approach, Diagnostic"
    },
    {
        "value": "07B63ZX",
        "label": "Excision of Left Axillary Lymphatic, Percutaneous Approach, Diagnostic"
    },
    {
        "value": "8180",
        "label": "Other total shoulder replacement"
    },
    {
        "value": "B315YZZ",
        "label": "Fluoroscopy of Bilateral Common Carotid Arteries using Other Contrast"
    },
    {
        "value": "B31FYZZ",
        "label": "Fluoroscopy of Left Vertebral Artery using Other Contrast"
    },
    {
        "value": "0B9C8ZZ",
        "label": "Drainage of Right Upper Lung Lobe, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "7781",
        "label": "Other partial ostectomy, scapula, clavicle, and thorax [ribs and sternum]"
    },
    {
        "value": "BD47ZZZ",
        "label": "Ultrasonography of Gastrointestinal Tract"
    },
    {
        "value": "0B988ZZ",
        "label": "Drainage of Left Upper Lobe Bronchus, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "DP091ZZ",
        "label": "Beam Radiation of Femur using Photons 1 - 10 MeV"
    },
    {
        "value": "7109",
        "label": "Other incision of vulva and perineum"
    },
    {
        "value": "8472",
        "label": "Application of external fixator device, ring system"
    },
    {
        "value": "0F9980Z",
        "label": "Drainage of Common Bile Duct with Drainage Device, Via Natural or Artificial Opening Endoscopic"
    },
    {
        "value": "0DNN0ZZ",
        "label": "Release Sigmoid Colon, Open Approach"
    },
    {
        "value": "0JBH0ZZ",
        "label": "Excision of Left Lower Arm Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "0KN90ZZ",
        "label": "Release Right Lower Arm and Wrist Muscle, Open Approach"
    },
    {
        "value": "0HBDXZX",
        "label": "Excision of Right Lower Arm Skin, External Approach, Diagnostic"
    },
    {
        "value": "3963",
        "label": "Cardioplegia"
    },
    {
        "value": "0W9B00Z",
        "label": "Drainage of Left Pleural Cavity with Drainage Device, Open Approach"
    },
    {
        "value": "03UK0KZ",
        "label": "Supplement Right Internal Carotid Artery with Nonautologous Tissue Substitute, Open Approach"
    },
    {
        "value": "0PQ00ZZ",
        "label": "Repair Sternum, Open Approach"
    },
    {
        "value": "0QB00ZZ",
        "label": "Excision of Lumbar Vertebra, Open Approach"
    },
    {
        "value": "0QB60ZZ",
        "label": "Excision of Right Upper Femur, Open Approach"
    },
    {
        "value": "0HBNXZX",
        "label": "Excision of Left Foot Skin, External Approach, Diagnostic"
    },
    {
        "value": "0FN00ZZ",
        "label": "Release Liver, Open Approach"
    },
    {
        "value": "0QB70ZZ",
        "label": "Excision of Left Upper Femur, Open Approach"
    },
    {
        "value": "04CK3ZZ",
        "label": "Extirpation of Matter from Right Femoral Artery, Percutaneous Approach"
    },
    {
        "value": "0QPH04Z",
        "label": "Removal of Internal Fixation Device from Left Tibia, Open Approach"
    },
    {
        "value": "06753ZZ",
        "label": "Dilation of Superior Mesenteric Vein, Percutaneous Approach"
    },
    {
        "value": "0QS03ZZ",
        "label": "Reposition Lumbar Vertebra, Percutaneous Approach"
    },
    {
        "value": "3E0S3CZ",
        "label": "Introduction of Regional Anesthetic into Epidural Space, Percutaneous Approach"
    },
    {
        "value": "3821",
        "label": "Biopsy of blood vessel"
    },
    {
        "value": "3749",
        "label": "Other repair of heart and pericardium"
    },
    {
        "value": "0FBG4ZX",
        "label": "Excision of Pancreas, Percutaneous Endoscopic Approach, Diagnostic"
    },
    {
        "value": "3348",
        "label": "Other repair and plastic operations on bronchus"
    },
    {
        "value": "0JDM0ZZ",
        "label": "Extraction of Left Upper Leg Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "0JDP0ZZ",
        "label": "Extraction of Left Lower Leg Subcutaneous Tissue and Fascia, Open Approach"
    },
    {
        "value": "0Y6P0Z0",
        "label": "Detachment at Right 1st Toe, Complete, Open Approach"
    },
    {
        "value": "04753DZ",
        "label": "Dilation of Superior Mesenteric Artery with Intraluminal Device, Percutaneous Approach"
    },
    {
        "value": "0JH632Z",
        "label": "Insertion of Monitoring Device into Chest Subcutaneous Tissue and Fascia, Percutaneous Approach"
    },
    {
        "value": "057A3ZZ",
        "label": "Dilation of Left Brachial Vein, Percutaneous Approach"
    },
    {
        "value": "0WPBX0Z",
        "label": "Removal of Drainage Device from Left Pleural Cavity, External Approach"
    },
    {
        "value": "05763ZZ",
        "label": "Dilation of Left Subclavian Vein, Percutaneous Approach"
    },
    {
        "value": "0KBM0ZZ",
        "label": "Excision of Perineum Muscle, Open Approach"
    },
    {
        "value": "05743ZZ",
        "label": "Dilation of Left Innominate Vein, Percutaneous Approach"
    },
    {
        "value": "0J9830Z",
        "label": "Drainage of Abdomen Subcutaneous Tissue and Fascia with Drainage Device, Percutaneous Approach"
    },
    {
        "value": "3479",
        "label": "Other repair of chest wall"
    },
    {
        "value": "3571",
        "label": "Other and unspecified repair of atrial septal defect"
    },
    {
        "value": "0HX7XZZ",
        "label": "Transfer Abdomen Skin, External Approach"
    },
    {
        "value": "041L0JL",
        "label": "Bypass Left Femoral Artery to Popliteal Artery with Synthetic Substitute, Open Approach"
    },
    {
        "value": "0HREX74",
        "label": "Replacement of Left Lower Arm Skin with Autologous Tissue Substitute, Partial Thickness, External Approach"
    },
    {
        "value": "04CQ0ZZ",
        "label": "Extirpation of Matter from Left Anterior Tibial Artery, Open Approach"
    },
    {
        "value": "3E0DX05",
        "label": "Introduction of Other Antineoplastic into Mouth and Pharynx, External Approach"
    },
    {
        "value": "5304",
        "label": "Other and open repair of indirect inguinal hernia with graft or prosthesis"
    },
    {
        "value": "0SP908Z",
        "label": "Removal of Spacer from Right Hip Joint, Open Approach"
    },
    {
        "value": "02WY33Z",
        "label": "Revision of Infusion Device in Great Vessel, Percutaneous Approach"
    },
    {
        "value": "5252",
        "label": "Distal pancreatectomy"
    },
    {
        "value": "5259",
        "label": "Other partial pancreatectomy"
    },
    {
        "value": "0DTM0ZZ",
        "label": "Resection of Descending Colon, Open Approach"
    },
    {
        "value": "0RGA071",
        "label": "Fusion of Thoracolumbar Vertebral Joint with Autologous Tissue Substitute, Posterior Approach, Posterior Column, Open Approach"
    },
    {
        "value": "0DTK0ZZ",
        "label": "Resection of Ascending Colon, Open Approach"
    },
    {
        "value": "0RG4071",
        "label": "Fusion of Cervicothoracic Vertebral Joint with Autologous Tissue Substitute, Posterior Approach, Posterior Column, Open Approach"
    },
    {
        "value": "04R00JZ",
        "label": "Replacement of Abdominal Aorta with Synthetic Substitute, Open Approach"
    },
    {
        "value": "0F913ZZ",
        "label": "Drainage of Right Lobe Liver, Percutaneous Approach"
    }
]

export default procedureOptions;