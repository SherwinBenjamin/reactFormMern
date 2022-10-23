import React, { useState } from 'react'
import './NavbarStyles.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import corn from '../assets/corn.png'
const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)



    return (
        <div className='header'>
            <Link to='/'><h1>LANDING PAGE</h1></Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/task'>Task</Link>
                </li>

            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) : <FaBars size={20} style={{ color: '#fff' }} />}

            </div>
        </div>
    )
}

export default Navbar