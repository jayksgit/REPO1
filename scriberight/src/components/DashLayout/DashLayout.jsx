import React from 'react'
import LeftNav from '../dashCompo/LeftNav'
import { Outlet } from 'react-router-dom'
function DashLayout() {
  return (
    <>
      <LeftNav/>
      <Outlet/>
    </>
  )
}

export default DashLayout
