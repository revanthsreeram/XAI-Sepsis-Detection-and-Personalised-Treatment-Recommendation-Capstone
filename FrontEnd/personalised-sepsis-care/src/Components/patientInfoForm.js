import React from "react";
import {Form} from "react-bootstrap";

const PatientInfoForm = (
    {subjectId, setSubjectId, hadmId, setHadmId, age, setAge, gender, setGender, hospAdmTime, setHospAdmTime}
) => (

    <div className="form-group-container">
        <h5 className="form-group-heading">Patient Information</h5>
        <Form.Group className="mb-3">
            <Form.Label>Subject ID:</Form.Label>
            <Form.Control type="text" value={subjectId} onChange={(e) => setSubjectId(e.target.value)}
                          placeholder="Enter Subject ID" required/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Admission ID:</Form.Label>
            <Form.Control type="text" value={hadmId} onChange={(e) => setHadmId(e.target.value)}
                          placeholder="Enter Admission ID" required></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label> Age:</Form.Label>
            <Form.Control type="number" value={age} onChange={(e) => setAge(e.target.value)}
                          placeholder="Enter age" required></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label> Gender:</Form.Label>
            <Form.Control type="text" value={gender} onChange={(e) => setGender(e.target.value)}
                          placeholder="Enter gender" required></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Hospital Admission Time:</Form.Label>
            <Form.Control type="text" value={hospAdmTime} onChange={(e) => setHospAdmTime(e.target.value)}
                          placeholder="Enter Hospital Admission Time" required></Form.Control>
        </Form.Group>
    </div>
);

export default PatientInfoForm;

