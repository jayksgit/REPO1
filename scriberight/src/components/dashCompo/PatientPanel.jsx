import React from 'react'

export default function PatientPanel() {
    return (
        <div className="right-div">
        <div className="right-patientlist-panel">
            <div className="patientlist-panel-title">
                My Patient
            </div>
            <table className="patientlist-panel-table">
                <thead>
                    <tr className="table-title">
                        <th>Patient Name</th>
                        <th>Code</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="patient-rows">
                    <tr>
                        <td>Patient 1</td>
                        <td>d54s4gf</td>
                        <td><button className="view-btn"><a href="">View</a></button></td>
                    </tr>
                    <tr>
                        <td>Patient 2</td>
                        <td>sda5afs5</td>
                        <td><button className="view-btn">View</button></td>
                    </tr>
                    <tr>
                        <td>Patient 3</td>
                        <td>asdsd3</td>
                        <td><button className="view-btn">View</button></td>
                    </tr>
                    <tr>
                        <td>Patient 4</td>
                        <td>sadda42</td>
                        <td><button className="view-btn">View</button></td>
                    </tr>
                    <tr>
                        <td>Patient 5</td>
                        <td>d54s4gf</td>
                        <td><button className="view-btn">View</button></td>
                    </tr>
                    <tr>
                        <td>Patient 6</td>
                        <td>sda5afs5</td>
                        <td><button className="view-btn">View</button></td>
                    </tr>
                    <tr>
                        <td>Patient 7</td>
                        <td>asdsd3</td>
                        <td><button className="view-btn">View</button></td>
                    </tr>
                    <tr>
                        <td>Patient 8</td>
                        <td>sadda42</td>
                        <td><button className="view-btn">View</button></td>
                    </tr>
                    <tr>
                        <td>Patient 8</td>
                        <td>sadda42</td>
                        <td><button className="view-btn">View</button></td>
                    </tr>
                </tbody>
            </table>
            {/* <!-- </div> -- > */}
            <div className="search-bar">
                <input type="text" placeholder="Search Name / Code"></input>
                <button>Search</button>
            </div>
        </div >
        </div>
    )
}
