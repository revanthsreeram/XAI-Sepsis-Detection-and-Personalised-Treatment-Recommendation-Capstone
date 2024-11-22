import {Col, ListGroup, Row} from "react-bootstrap";
import React from "react";

const splitMedicationsByContent = (medications) => {
    const column1 = [];
    const column2 = [];

    let length1 = 0;
    let length2 = 0;

    medications.forEach((medication) => {
        const medLength = medication.length;

        if (length1 <= length2) {
            column1.push(medication);
            length1 += medLength;
        }
        else {
            column2.push(medication);
            length2 += medLength;
        }
    });

    return [column1, column2];
}


const renderMedications = (medications) => {
    if (!medications) return null;

    const [column1, column2] = splitMedicationsByContent(medications);

    return (
        <Row>
            <Col md={6}>
                <ListGroup>
                    {column1.map((med, index) => (
                        <ListGroup.Item key={index}>{med}</ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
            <Col md={6}>
                <ListGroup>
                    {column2.map((med, index) => (
                        <ListGroup.Item key={index}>{med}</ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
        </Row>
    );
}

export default renderMedications;