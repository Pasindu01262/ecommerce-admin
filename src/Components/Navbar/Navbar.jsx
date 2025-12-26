import React from 'react'
import './Navbar.css'
import navlogo from "../../assets/logo.png"
//import navProfile from "../../assets/nav-profile.svg"


function Navbar() {
  return (
    <div className='navbar'>
        
        <div className='topic'><img src={navlogo} alt="" className='nav-logo'/><span className='topic'>Gleam & Beads</span></div>
        
    </div>
  )
}

export default Navbar