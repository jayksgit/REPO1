import React from 'react'
import Navigation from '../homeCompo/navigation'
import LeftNav from './LeftNav'

import DashBoard from './DashBoard'
import PatientChartPanel from './PatientChartPanel'
import AddPatientPanel from './AddPatientPanel'
import PatientPanel from './PatientPanel'


import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider,} from "react-router-dom";
import DashLayout from '../DashLayout/DashLayout'


function Maindash() {
        const router = createBrowserRouter(
        //     // [
        //     //     {
        //     //         path:"/",
        //     //         element:<DashBoard/>
        //     //     },
        //     //     {
        //     //         path:"/PatientChartPanel",
        //     //         element:<PatientChartPanel/>
        //     //     },
        //     //     {
        //     //         path:"/DashBoard",
        //     //         element:<DashBoard/>
        //     //     },
        //     // ]

            createRoutesFromElements(
                <Route path='/' element={<DashLayout/>}>
                    <Route index element={<DashBoard/>}></Route>
                    <Route path='AddPatientPanel' element={<AddPatientPanel/>}></Route>
                    <Route path='PatientPanel' element={<PatientPanel/>}></Route>
                </Route>
            )
        )
    return (
        
        <div>
            <Navigation />
            <section className="dash-sec">
                <div className="dash-div">

                    {/* <LeftNav/>this contain all nav link for DashBoard  AddPatientPanel  PatientChartPanel */}

                    {/* lets comment this */}
                    {/* <div className="right-div"> */}
                        {/* <!-- place new component from here --> */}
                        <RouterProvider router={router}/>
                        {/* <DashBoard/> */}
                        {/* <PatientPanel/> */}
                        {/* <AddPatientPanel/> */}

                        {/* <PatientChartPanel/> */}
                    {/* </div> */}
                </div>

            </section>
        </div>
    )
}

export default Maindash
