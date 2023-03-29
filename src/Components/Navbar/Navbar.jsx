import './Navbar.css'
import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <header>
        <Link><h1>Canton</h1></Link>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='about' >About</Link>
          </li>
          <li>
            <Link to='/services'>Services</Link>
          </li>
          <li>
            <Link to='/contact' >Contact</Link>
          </li>
        </ul>
      </header>
    </div>
  )
  
}

export default Navbar