import React from 'react'
import './Footer.css'
import footer_logo from "../Assets/Green-Aria's-logo2.png"
import { BsFacebook, BsYelp, } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
        </div>
        <ul className="footer-links">
            <li>Landscaping</li>
            <li>Snow Removal</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
            <a className='facebook' href="https://m.facebook.com/p/Green-Arias-Landscaping-100066460255931/">
        <BsFacebook/>
        </a>
            </div>
            <div className="footer-icons-container">
            <a className='facebook' href="https://www.yelp.com/biz/green-arias-landscaping-carol-stream">
        <BsYelp/>
        </a>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved. Created By: 0TT0B0T_INDUSTRIES</p>
        </div>
    </div>
  )
}

export default Footer