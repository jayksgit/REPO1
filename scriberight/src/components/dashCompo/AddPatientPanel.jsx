import React from 'react'

export default function AddPatientPanel() {
    return (
        <div className="right-div">
            <div className="right-addpatient-panel">
                <div className="generate-code-div">
                    <span>GENERATE REFERENCE CODE</span>
                    <span><button className="generate-btn">create</button></span>
                </div>
                <div className="generater-code">
                    <span>46df-sdf4-f454</span>
                    <span><button className="generater-cpy-btn">copy</button></span>
                </div>

            </div>
        </div>
    )
}
