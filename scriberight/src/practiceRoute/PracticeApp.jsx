import React from 'react'
import Nav from './Rassets/Nav'
import Home from './Rcompo/Home'
import About from './Rcompo/About'

import { Routes , Route , Router, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Rlayout from './Rlayout/Rlayout'

export default function PracticeApp() {

    // new method
    // {/* way - 2 */}  // using layout
    
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Rlayout/>}>
                {/* this all run due to Outlet */}
                <Route index element={<Home/>} />
                <Route path='about' element={<About/>} />    
            </Route>        
        )
    )

  return (
    <div>
        {/* <Nav/> */}
        {/* 
        <Home/>
        <About/>
        */}
        {/* replace this with routes */}
        
        {/* way - 1 */}
        {/*
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
        </Routes> 
        */}

        {/* way - 2 */}
        {/* new method from line 10  and copy way-1 line as it is and no need to use BrowserRouter*/} 
        <RouterProvider router={router} />
    </div>
  )
}
