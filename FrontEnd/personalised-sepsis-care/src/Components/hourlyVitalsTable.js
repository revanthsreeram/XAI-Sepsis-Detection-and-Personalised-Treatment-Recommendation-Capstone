import {Button, Form, Accordion} from "react-bootstrap";
import React from "react";

const HourlyVitalsTable = ({vitalsData, setVitalsData}) => {
    const columnGroups = [
        { title: "Vitals", keys: ["HR", "O2Sat", "Temp", "SBP", "MAP", "DBP", "Resp", "EtCO2"] },
        { title: "Blood Chemistry", keys: ["BaseExcess", "HCO3", "FiO2", "pH", "PaCO2", "SaO2", "AST", "BUN","WBC","Fibrinogen","Hct","Hgb","PTT","Platelets"] },
        { title: "Others", keys: ["Alkalinephos", "Calcium", "Chloride", "Creatinine", "Bilirubin_direct", "Glucose","Lactate","Magnesium","Phosphate","Potassium", "Bilirubin_total","TroponinI","icuLos"] }
    ];

    const handleInputChange = (index, field, value) => {
        const updatedData = [...vitalsData];
        updatedData[index][field] = value;
        setVitalsData(updatedData);
    };

    const addNewRow = () => {
        const newData = [
            ...vitalsData,
            columnGroups.reduce(
                (acc, group) => ({
                    ...acc,
                    ...Object.fromEntries(group.keys.map((key) => [key, ""])),
                    timestamp: vitalsData.length + 1,
                }),
                {}
            ),
        ];
        setVitalsData(newData);
    };

    const splitIntoTwoRows = (arr) => {
        const middle = Math.ceil(arr.length / 2);
        return [arr.slice(0, middle), arr.slice(middle)];
    };

    const styles = {
        accordionBody: {
            overflowX: 'auto',
        },
        table: {
            width: '100%',
            marginBottom: '20px',
        },
        column: {
            width: 'auto',
            padding: '5px 5px',
        },
        timestampColumn: {
            width: '100px',
            padding: '0 5px',
        },
        headerCell: {
            textAlign: 'center',
            marginBottom: '10px',
        }
    };

    return (
        <div className="form-group-container">
            <h5 className="form-group-heading">Hourly Vitals</h5>
            <Accordion defaultActiveKey="0">
                {columnGroups.map((group, groupIndex) => {
                    const [firstRowKeys, secondRowKeys] = splitIntoTwoRows(group.keys);

                    return (
                        <Accordion.Item eventKey={groupIndex.toString()} key={groupIndex}>
                            <Accordion.Header>{group.title}</Accordion.Header>
                            <Accordion.Body style={styles.accordionBody}>
                                {[firstRowKeys, secondRowKeys].map((rowKeys, rowIndex) => (
                                    <table style={styles.table} key={rowIndex}>
                                        <thead>
                                        <tr>
                                            <th style={styles.timestampColumn}>
                                                <div style={styles.headerCell}>
                                                    Timestamp
                                                </div>
                                            </th>
                                            {rowKeys.map(key => (
                                                <th key={key} style={styles.column}>
                                                    <div style={styles.headerCell}>{key}</div>
                                                </th>
                                            ))}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {vitalsData.map((dataRow, dataRowIndex) => (
                                            <tr key={dataRowIndex}>
                                                <td style={styles.timestampColumn}>
                                                    <div style={{textAlign: 'center'}}>
                                                        {dataRow.timestamp}
                                                    </div>
                                                </td>
                                                {rowKeys.map(key => (
                                                    <td key={key} style={styles.column}>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter value or NaN"
                                                            value={dataRow[key]}
                                                            onChange={(e) => handleInputChange(dataRowIndex, key, e.target.value)}
                                                            size="sm"
                                                        />
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>
                    );
                })}
            </Accordion>
            <Button variant="primary" onClick={addNewRow} className="mt-3">
                Add Row
            </Button>
        </div>
    );
};

export default HourlyVitalsTable;