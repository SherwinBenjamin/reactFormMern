import React from 'react'
import { Link } from 'react-router-dom'
import './VidStyles2.css'
import Video from '../assets/room.mp4'



const Vid = () => {
    return (
        <div className="hero2">
            <video autoPlay loop muted id='Video2'>
                <source src={Video} type='Video/mp4' />
            </video>
        </div>
            
        
    )
}

export default Vid