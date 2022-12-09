import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navcontainer">
            <span className="logo">Ticket booking</span>
            <button className="navbutton">Register</button>
            <button className="navbutton">Login</button>
        </div>
    </div>
  )
}

export default Navbar