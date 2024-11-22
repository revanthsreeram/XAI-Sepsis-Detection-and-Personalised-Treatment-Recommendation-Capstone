import React, {useState} from 'react';
import axios from 'axios';
import Select from "react-select";
import {Form, Button, Spinner, Container, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
import renderMedications from "./Components/renderMedications";
import diagnosisOptions from "./Components/diagnosisOptions";
import procedureOptions from "./Components/procedureOptions";

function App() {

  const [subjectId, setSubjectId] = useState('');
  const [hadmId, setHadmId] = useState('');
  const [icdCodes, setIcdCodes] = useState([]);
  const [procCodes, setProcCodes] = useState([]);
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api', {
        subject_id: subjectId,
        hadm_id: hadmId,
        icd_codes: icdCodes,
        proc_codes: procCodes
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
          <Form onSubmit={handleSubmit}>
            <div className="form-group-container">
                <h5 className="form-group-heading">Patient Information</h5>
                <Form.Group className="mb-3">
                  <Form.Label>Subject ID:</Form.Label>
                  <Form.Control type="text" value={subjectId} onChange={(e) => setSubjectId(e.target.value)}
                                placeholder="Enter Subject ID" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Admission ID:</Form.Label>
                    <Form.Control type="text" value={hadmId} onChange={(e) => setHadmId(e.target.value)}
                                  placeholder="Enter Admission ID" required></Form.Control>
                </Form.Group>
            </div>
            <div className="form-group-container">
                <h5 className="form-group-heading">Diagnosis and Procedures</h5>
                <Form.Group className="mb-3">
                <Form.Label>Select Diagnosis ICD Codes:</Form.Label>
                <Select isMulti name="icdCodes" options={diagnosisOptions} value={icdCodes}
                        onChange={setIcdCodes} className="mb-3" placeholder="Select all the Diagnosis ICD Codes" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Select Procedure ICD Codes:</Form.Label>
                    <Select isMulti name="procCodes" options={procedureOptions} value={procCodes}
                    onChange={setProcCodes} className="mb-3" placeholder="Select all the Procedure ICD Codes" required />
                </Form.Group>
            </div>
            <Button variant="success" type="submit" className="wb-100">Submit</Button>
          </Form>

            {isLoading && (
                <div className="text-center mt-3">
                    <Spinner animation="border" role="status" variant="primary" />
                </div>
            )}

            {response && response.classification && !isLoading && (
                <Alert
                    style={{
                        backgroundColor: response.classification === 'Positive' ? '#f8d7da' : '#d4edda', // Light red for Positive, Light green for Negative
                        color: response.classification === 'Positive' ? '#721c24' : '#155724', // Darker text color for contrast
                    }}
                    variant={response.classification === "Positive" ? "danger" : "success"}
                className="mt-4">
                    <h5>
                        {response.classification === "Positive"
                        ? "Sepsis Suspected: Medical Attention Required"
                        : "Sepsis Not Suspected: Medical Attention May Not Be Required"}
                    </h5>
                </Alert>
            )}

            {response && response.medications && (
                <div className="medication-list-container">
                    <h5>Recommended Medications:</h5>
                    {renderMedications(response.medications)}
                </div>
            )}

            {response && response.report && (
                <div className="report-container">
                    <h5>Medical Report:</h5>
                    <p>{response.report}</p>
                </div>
            )}
        </Col>
        </Row>
      </Container>
  )
}

export default App;
