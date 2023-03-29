import './Navbar.css'
import React from 'react'
import {Link} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
      <header>
      <div className="header">
        <Link to='/'><h1 >Canton</h1></Link>
        <ul className='nav-menu'>
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
        <div className="hamburger">
          <FaBars size={20} style={{background: '#13274F' ,color:'#fff'}}
          />
          <FaTimes size={20} style={{background: '#13274F' ,color:'#fff'}}/>
        </div>
        </div>
      </header>
    </div>
  )
  
}

export default Navbar