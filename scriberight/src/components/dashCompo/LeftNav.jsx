import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function LeftNav() {
    return (
        <aside className='left-div'>
            <div className="menu-name">MENU</div>
            <div className="dash-list">
                <ul className="dash-elements">
                        <NavLink className={({ isActive }) => isActive ? "dash-item dash-item-selected" : "dash-item"} to={'/'}>Dashboard</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "dash-item dash-item-selected" : "dash-item"} to={'/AddPatientPanel'}>Add Patient</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "dash-item dash-item-selected" : "dash-item"} to={'/PatientPanel'}>My Patient</NavLink>
                    <li className="dash-item">Schedules</li>
                </ul>

                <div className="dash-setting">
                    <ul className="dash-elements">
                        <li className="dash-item">Setting</li>
                        <li className="dash-item">
                            <NavLink to={'/'}>Sign out</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}
