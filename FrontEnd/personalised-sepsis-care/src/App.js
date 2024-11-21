import React, {useState} from 'react';
import axios from 'axios';
import Select from "react-select";
import {Form, Button, Spinner, Container, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"

function App() {

  const [subjectId, setSubjectId] = useState('');
  const [hadmId, setHadmId] = useState('');
  const [icdCodes, setIcdCodes] = useState([]);
  const [procCodes, setProcCodes] = useState([]);
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const icdCodeOptions = [
      {value: 'I10', label: 'I10'},
      {value: 'D259', label: 'D259'},
      {value: 'Z87891', label: 'Z87891'},
      {value: 'E785', label: 'E785'},
      {value: 'E890', label: 'E890'}
  ]

  const procCodeOptions = [
      {value: '0TTB4ZZ', label: '0TTB4ZZ'},
      {value: '07BC4ZX', label: '07BC4ZX'},
      {value: '8E0W4CZ', label: '8E0W4CZ'}
  ]

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

      setResponse(res.data.message);
    }
    catch(err) {
      setResponse("Error: " + err.message);
    }
    finally {
      setIsLoading(false);
    }
  };

  return (
      <Container className="App">
        <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center mb-4"> Personalised Sepsis Care</h1>
          <Form onSubmit={handleSubmit}>
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

            <Form.Group className="mb-3">
            <Form.Label>Select ICD Codes:</Form.Label>
            <Select isMulti name="icdCodes" options={icdCodeOptions} value={icdCodes}
                    onChange={setIcdCodes} className="mb-3" placeholder="Select all the ICD Codes" value={icdCodes} required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Select Procedure Codes:</Form.Label>
                <Select isMulti name="procCodes" options={procCodeOptions} value={procCodes}
                onChange={setProcCodes} className="mb-3" placeholder="Select all the procCodes" value={procCodes} required />
            </Form.Group>

            <Button variant="success" type="submit" className="wb-100">Submit</Button>
          </Form>

            {isLoading && (
                <div className="text-center mt-3">
                    <Spinner animation="border" role="status" variant="primary" />
                </div>
            )}

            {response && !isLoading && (
                <Alert variant="info" className="mt-3">
                    <h2>Sepsis Report:</h2>
                    <p>{response}</p>
                </Alert>
            )

            }
        </Col>
        </Row>
      </Container>
  )
}

export default App;
