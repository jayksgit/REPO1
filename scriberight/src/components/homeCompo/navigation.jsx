import React from 'react'

function Navigation() {
    return (

            <header className="header">
                <div className="logo-div">
                    <img src="logo.png" alt="Logo" className="logo-image" />
                    {/* <img src="image/Logo_Name.png" alt="Logo" className="logo-image" />  */}
                </div>
                <div className="nav-div">
                    <nav className="nav">
                        <button className="nav-button">About Us</button>
                        <button className="nav-button">Contact Us</button>
                        <button className="nav-button">References</button>
                        <button className="login-button">LOG IN</button> 
                    </nav>
                </div>
            </header>
    )
}

export default Navigation
