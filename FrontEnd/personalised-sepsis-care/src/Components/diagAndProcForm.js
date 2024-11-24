import {Form} from "react-bootstrap";
import Select from "react-select";
import diagnosisOptions from "./diagnosisOptions";
import procedureOptions from "./procedureOptions";
import React from "react";

const diagAndProcForm = ({icdCodes, setIcdCodes, procCodes, setProcCodes}) => (

    <div className="form-group-container">
        <h5 className="form-group-heading">Diagnosis and Procedures</h5>
        <Form.Group className="mb-3">
            <Form.Label>Select Diagnosis ICD Codes:</Form.Label>
            <Select isMulti name="icdCodes" options={diagnosisOptions} value={icdCodes}
                    onChange={setIcdCodes} className="mb-3" placeholder="Select all the Diagnosis ICD Codes" required/>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Select Procedure ICD Codes:</Form.Label>
            <Select isMulti name="procCodes" options={procedureOptions} value={procCodes}
                    onChange={setProcCodes} className="mb-3" placeholder="Select all the Procedure ICD Codes" required/>
        </Form.Group>
    </div>
);

export default diagAndProcForm;