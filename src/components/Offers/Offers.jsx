import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/SnowTruck.jpeg'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Snow</h1>
            <h1>Removal Services</h1>
            <p>ONLY OUR BEST SERVICES</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers