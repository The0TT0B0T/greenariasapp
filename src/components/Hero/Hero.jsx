import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import home_tree from '../Assets/newTree.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals Only</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collection</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
        <img src={home_tree} alt="" />
        </div>
        
    </div>
  )
}

export default Hero