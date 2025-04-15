import React, { useState, useEffect } from 'react'
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function PatientChartPanel() {

    const data = [
        { name: "Jan", uv: 4000, pv: 2400 },
        { name: "Feb", uv: 3000, pv: 1398 },
        { name: "May", uv: 1890, pv: 4800 },
        { name: "Jun", uv: 2390, pv: 3800 }
    ];


    return (
        <div className="right-div">
            <div className="chart-div">
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />

                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default PatientChartPanel