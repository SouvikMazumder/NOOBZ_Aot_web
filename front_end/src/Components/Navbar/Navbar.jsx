import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo' /> 
      <ul>
        <li><h1 className='college-name'>ACADEMY OF TECHNOLOGY</h1></li>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Testimonials</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
