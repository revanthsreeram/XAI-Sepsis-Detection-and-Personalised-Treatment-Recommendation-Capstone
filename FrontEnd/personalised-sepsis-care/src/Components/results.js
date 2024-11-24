import {Alert} from "react-bootstrap";
import renderMedications from "./renderMedications";
import ReactMarkdown from "react-markdown";
import React from "react";

const Results = ({response, isLoading})=>{

    return (
        <div className="results-container">
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

            {response && response.medications && !isLoading && (
                <div className="medication-list-container">
                    <h5>Recommended Medications:</h5>
                    {renderMedications(response.medications)}
                </div>
            )}

            {response && response.report && !isLoading && (
                <div className="report-container">
                    <h1 className="underline">Medical Report:</h1>
                    <ReactMarkdown>{response.report}</ReactMarkdown>
                </div>
            )}
        </div>
        )
};

export default Results;