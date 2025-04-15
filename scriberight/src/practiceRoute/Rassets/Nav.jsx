import React from 'react'
import { Link,NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
        nav
      <ul>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>about</NavLink>
      </ul>
    </div>
  )
}
