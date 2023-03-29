import './Hero.css'
import Pic from '../../assets/pic.jpg'
import React from 'react'
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            <h3>Hello I am Alvin Maina alias Canton</h3>
            <p>I'm a front-end developer</p>
            <p>I'm also well acquainted in front-end developer</p>
            <div className="buttons">
                <Link to='/services' className='btn'>Services</Link>
                <Link to='/contact' className='btn'>Contact</Link>
            </div>
        
        </div>
        <div className="right-h">
            <img src={Pic} alt="" />
        </div>
    </div>
  )
}

export default Hero