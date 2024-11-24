import React, {useState} from 'react';
import axios from 'axios';
import {Button, Spinner, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import PatientInfoForm from "./Components/patientInfoForm";
import DiagAndProcForm from "./Components/diagAndProcForm";
import HourlyVitalsTable from "./Components/hourlyVitalsTable";
import Results from "./Components/results";

function App() {

  const [subjectId, setSubjectId] = useState('');
  const [hadmId, setHadmId] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [icuLoc, setIcuLoc] = useState('');
  const [hospAdmTime, setHospAdmTime] = useState('');
  const [icdCodes, setIcdCodes] = useState([]);
  const [procCodes, setProcCodes] = useState([]);
  const [response, setResponse] = useState('');
  const [vitalsData, setVitalsData] = useState([
      {
          HR:"",O2Sat:"",Temp:"",SBP:"",MAP:"",DBP:"",Resp:"",EtCO2:"",BaseExcess:"",HCO3:"",FiO2:"",pH:"",PaCO2:"",SaO2:"",
          AST:"",BUN:"",Alkalinephos:"",Calcium:"", Chloride:"", Creatinine:"", Bilirubin_direct:"", Glucose:"", Lactate:"",
          Magnesium:"", Phosphate:"", Potassium:"", Bilirubin_total:"", TroponinI:"", Hct:"", Hgb:"", PTT:"", WBC:"",  Fibrinogen:"",
          Platelets:"", timestamp:1
      }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api', {
        subject_id: subjectId,
        hadm_id: hadmId,
        age: age,
        gender: gender,
        icuLoc: icuLoc,
        hospAdmTime: hospAdmTime,
        icd_codes: icdCodes,
        proc_codes: procCodes,
        vitals_data: vitalsData
      });

      setResponse(res.data);
    }
    catch(err) {
      setResponse({classification : "Error", report: "Unable to fetch results from server."});
    }
    finally {
      setIsLoading(false);
    }
  };

  return (
      <Container className="App">
        <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="text-center mb-4"> Personalised Sepsis Care</h1>
              <PatientInfoForm subjectId={subjectId} setSubjectId={setSubjectId} hadmId={hadmId} setHadmId={setHadmId} age={age} setAge={setAge} gender={gender} setGender={setGender} icuLoc={icuLoc} setIcuLoc={setIcuLoc} hospAdmTime={hospAdmTime} setHospAdmTime={setHospAdmTime}/>

              <HourlyVitalsTable vitalsData={vitalsData} setVitalsData={setVitalsData}/>

              <DiagAndProcForm icdCodes={icdCodes} setIcdCodes={setIcdCodes} procCodes={procCodes} setProcCodes={setProcCodes} />

                <Button variant="success" className="wb-100" onClick={handleSubmit}>Submit</Button>

                {isLoading && (
                    <div className="text-center mt-3">
                        <Spinner animation="border" role="status" variant="primary" />
                    </div>
                )}

                <Results response={response} isLoading={isLoading} />
            </Col>
        </Row>
      </Container>
  )
}

export default App;
