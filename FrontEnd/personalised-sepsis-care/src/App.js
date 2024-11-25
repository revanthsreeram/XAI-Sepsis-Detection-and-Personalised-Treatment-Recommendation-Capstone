import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Button, Spinner, Container, Row, Col, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import PatientInfoForm from "./Components/patientInfoForm";
import DiagAndProcForm from "./Components/diagAndProcForm";
import HourlyVitalsTable from "./Components/hourlyVitalsTable";
import Results from "./Components/results";
import Papa from "papaparse";

function App() {
    const initialVitalsData = [
        {
            HR: "", O2Sat: "", Temp: "", SBP: "", MAP: "", DBP: "", Resp: "", EtCO2: "", BaseExcess: "", HCO3: "", FiO2: "", pH: "", PaCO2: "", SaO2: "",
            AST: "", BUN: "", Alkalinephos: "", Calcium: "", Chloride: "", Creatinine: "", Bilirubin_direct: "", Glucose: "", Lactate: "",
            Magnesium: "", Phosphate: "", Potassium: "", Bilirubin_total: "", TroponinI: "", Hct: "", Hgb: "", PTT: "", WBC: "", Fibrinogen: "",
            Platelets: "", icuLos: "", timestamp: 1
        }
    ];

    const loadSavedState = (key, defaultValue) => {
        const savedData = localStorage.getItem(key);
        if (savedData) {
            try {
                return JSON.parse(savedData);
            } catch (error) {
                console.error(`Error parsing saved ${key}:`, error);
            }
        }
        return defaultValue;
    };

    // Initialize states with either localStorage or default values
    const [subjectId, setSubjectId] = useState("");
    const [hadmId, setHadmId] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [hospAdmTime, setHospAdmTime] = useState("");
    const [icdCodes, setIcdCodes] = useState([]);
    const [procCodes, setProcCodes] = useState([]);
    const [response, setResponse] = useState('');
    const [vitalsData, setVitalsData] = useState(initialVitalsData);
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    // Compare current vitalsData with initialVitalsData to detect any changes
    const hasVitalsDataChanged = JSON.stringify(vitalsData) !== JSON.stringify(initialVitalsData);

    // Save form data only if any meaningful data has been entered or changed
    useEffect(() => {
        const allFormData = {
            subjectId,
            hadmId,
            age,
            gender,
            hospAdmTime,
            icdCodes,
            procCodes,
            vitalsData
        };

        const isFormDataUpdated = subjectId || hadmId || age || gender || hospAdmTime ||
            icdCodes.length > 0 || procCodes.length > 0 || hasVitalsDataChanged;

        // Save to localStorage only if there's updated data
        if (isFormDataUpdated) {
            localStorage.setItem('allFormData', JSON.stringify(allFormData));
        }
    }, [subjectId, hadmId, age, gender, hospAdmTime, icdCodes, procCodes, vitalsData]);

    // Load all saved form data when component mounts
    useEffect(() => {
        const savedData = localStorage.getItem('allFormData');
        if (savedData) {
            try {
                const parsedData = JSON.parse(savedData);
                setSubjectId(parsedData.subjectId || '');
                setHadmId(parsedData.hadmId || '');
                setAge(parsedData.age || '');
                setGender(parsedData.gender || '');
                setHospAdmTime(parsedData.hospAdmTime || '');
                setIcdCodes(parsedData.icdCodes || []);
                setProcCodes(parsedData.procCodes || []);
                setVitalsData(parsedData.vitalsData || initialVitalsData);
                console.log('Loaded formData from localStorage:', parsedData); // Debugging log
            } catch (error) {
                console.error('Error loading saved form data:', error);
            }
        }
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);

        if (file) {
            // Use PapaParse to parse the .psv file
            Papa.parse(file, {
                delimiter: "|", // PSV uses pipe as a delimiter
                complete: (result) => {
                    const data = result.data; // Parsed data from PSV

                    // Check if we have any data in the file
                    if (data.length > 0) {
                        // Map through the data rows and prepare vitals data with auto-generated timestamps
                        const updatedVitalsData = data.map((row, index) => ({
                            HR: row.HR || "",
                            O2Sat: row.O2Sat || "",
                            Temp: row.Temp || "",
                            SBP: row.SBP || "",
                            MAP: row.MAP || "",
                            DBP: row.DBP || "",
                            Resp: row.Resp || "",
                            EtCO2: row.EtCO2 || "",
                            BaseExcess: row.BaseExcess || "",
                            HCO3: row.HCO3 || "",
                            FiO2: row.FiO2 || "",
                            pH: row.pH || "",
                            PaCO2: row.PaCO2 || "",
                            SaO2: row.SaO2 || "",
                            AST: row.AST || "",
                            BUN: row.BUN || "",
                            Alkalinephos: row.Alkalinephos || "",
                            Calcium: row.Calcium || "",
                            Chloride: row.Chloride || "",
                            Creatinine: row.Creatinine || "",
                            Bilirubin_direct: row.Bilirubin_direct || "",
                            Glucose: row.Glucose || "",
                            Lactate: row.Lactate || "",
                            Magnesium: row.Magnesium || "",
                            Phosphate: row.Phosphate || "",
                            Potassium: row.Potassium || "",
                            Bilirubin_total: row.Bilirubin_total || "",
                            TroponinI: row.TroponinI || "",
                            Hct: row.Hct || "",
                            Hgb: row.Hgb || "",
                            PTT: row.PTT || "",
                            WBC: row.WBC || "",
                            Fibrinogen: row.Fibrinogen || "",
                            Platelets: row.Platelets || "",
                            icuLos: row.ICULOS,
                            timestamp: index + 1
                        }));

                        // Update vitals data state with the new data
                        setVitalsData(updatedVitalsData);
                    }
                },
                header: true, // Assuming the first row contains column headers
                skipEmptyLines: true, // Skip empty lines
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await axios.post('http://localhost:5000/api', {
                subject_id: subjectId,
                hadm_id: hadmId,
                age: age,
                gender: gender,
                hosp_adm_time: hospAdmTime,
                icd_codes: icdCodes,
                proc_codes: procCodes,
                vitals_data: vitalsData
            });

            setResponse(res.data);
        }
        catch (err) {
            setResponse({ classification: "Error", report: "Unable to fetch results from server." });
        }
        finally {
            setIsLoading(false);
        }
    };

    // Clear all form data
    const clearAllData = () => {
        // Clear all state
        setSubjectId('');
        setHadmId('');
        setAge('');
        setGender('');
        setHospAdmTime('');
        setIcdCodes([]);
        setProcCodes([]);
        setVitalsData(initialVitalsData);
        setResponse('');
        setFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }

        // Clear localStorage
        localStorage.removeItem('allFormData');
    };

    return (
        <Container className="App">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h1 className="text-center mb-4">Personalised Sepsis Care</h1>
                    <PatientInfoForm
                        subjectId={subjectId}
                        setSubjectId={setSubjectId}
                        hadmId={hadmId}
                        setHadmId={setHadmId}
                        age={age}
                        setAge={setAge}
                        gender={gender}
                        setGender={setGender}
                        hospAdmTime={hospAdmTime}
                        setHospAdmTime={setHospAdmTime}
                    />

                    <HourlyVitalsTable
                        vitalsData={vitalsData}
                        setVitalsData={setVitalsData}
                    />
                    <div className="form-group-container">
                        <Form.Group>
                            <h2 className="form-group-heading">Upload PSV File for vitals:</h2>
                            <Form.Control
                                type="file"
                                accept=".psv"
                                onChange={handleFileChange}
                                ref={fileInputRef}
                            />
                        </Form.Group>
                    </div>

                    <DiagAndProcForm
                        icdCodes={icdCodes}
                        setIcdCodes={setIcdCodes}
                        procCodes={procCodes}
                        setProcCodes={setProcCodes}
                    />

                    <Button variant="danger" onClick={clearAllData}>Clear All Data</Button>
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
    );
}

export default App;
