import React from 'react'
import Nav from '../Rassets/Nav'
import { Outlet } from 'react-router-dom'

function Rlayout() {
  return (
    <div>
      <Nav/>
      {/* outlet will render child components */}
      <Outlet/>
    </div>
  )
}

export default Rlayout
