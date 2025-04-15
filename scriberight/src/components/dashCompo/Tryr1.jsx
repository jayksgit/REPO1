import React from 'react'
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Tryr2 from './Tryr2';
import Tryr3 from './Tryr3';
import Tryr4 from './Tryr4';

export default function Tryr1() {
    const router = createBrowserRouter(
        [
            {
                path:'/',
                element:<Tryr2/>
            },
            {
                path:'/a',
                element:<Tryr3/>
            },
        ]
    )
  return (
    <div>
        {/* <Tryr4/> */}
        <Outlet/>
      <RouterProvider router={router}/>
    </div>
  )
}
