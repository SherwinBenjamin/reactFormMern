import React from 'react'
import { Link } from 'react-router-dom'
import './VidStyles.css'
import Video from '../assets/room.mp4'



const VidBanner = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='Video'>
                <source src={Video} type='Video/mp4' />
            </video>
            <div className="content">
                <h1>Its CORN!</h1>
                <p>a big lump with knobs</p>

                <div>
                    <Link to='./register' className='btn'>Register</Link>
                </div>
            </div>
        </div>
    )
}

export default VidBanner