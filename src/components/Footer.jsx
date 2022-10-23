import React from 'react'
import './FooterStyles.css'
import { FaLinkedin, FaMailBulk, FaInstagram } from 'react-icons/fa'
import dude from '../assets/dude.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div>
                        <h4>About</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatum a est tempore,
                            quasi accusantium itaque sint atque facere modi dicta facilis, pariatur repellendus, nemo saepe 
                            quos eius et doloribus!
                        </p>
                    </div>
                    <div className="socials">
                        <FaInstagram size={30} style={{ color: '#ffffff', marginRight: '2rem'}}/>
                        <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '2rem'}}/>
                        <FaMailBulk size={30} style={{ color: '#ffffff', marginRight: '2rem'}}/>
                    </div>

                </div>
                <div className="right">
                    <img src={dude} alt="dude" className='dud' />
                                 
                </div>
            </div>
        </div>
    )
}

export default Footer