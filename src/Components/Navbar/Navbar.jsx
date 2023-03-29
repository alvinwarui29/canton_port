import './Navbar.css'
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa';

const Navbar = () => {
  const [click,setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <header>
      <div className="header">
        <Link to='/'><h1 className='logo'>Canton</h1></Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
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
        <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{background: '#13274F' ,color:'#fff'}}/>):(<FaBars size={20} style={{background: '#13274F' ,color:'#fff'}}/>)}

          
          
        </div>
        </div>
      </header>
    </div>
  )
  
}

export default Navbar