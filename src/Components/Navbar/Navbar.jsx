import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll'
import Portfolio from '../Portfolio/Portfolio'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            {/* <div className="n-name">Milton</div> */}
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul  style={{listStyleType: 'none'}}>
                    <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} activeClass="activeClass">
                    <li>Services</li>
                    </Link>
                    <Link spy={true} to='Education' smooth={true} activeClass="activeClass">
                    <li>Education</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true} activeClass="activeClass">
                    <li>Portfolio</li>
                    </Link>
                    {/* <Link spy={true} to='Testimonials' smooth={true} activeClass="activeClass">
                    <li>Testimonials</li>
                    </Link>     */}
                    
                </ul>
            </div>
            <Link to="contact" spy={true} smooth={true}>
                <button className="button n-button">Contact</button>
            </Link>
        </div>

    </div>
    
  )
}

export default Navbar
