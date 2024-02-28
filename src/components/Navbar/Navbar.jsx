import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from "../Assets/Green-Aria's-logo2.png"
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

export const Navbar = () => {

    const [menu, setMenu] =useState("home")
    const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className='navbar'>
        <div className="nav-logo">
        <Link style={{textDecoration: 'none'}} to="/"><img src={logo} alt="" onClick={()=>{setMenu("home")}} to="/home"/></Link>
            
            <p></p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to="/">Home</Link>{menu === "home" ? <hr /> : <></>}</li>
            <li onClick={()=>{setMenu("landscaping")}}><Link style={{textDecoration: 'none'}}  to="/landscaping">Landscaping</Link>{menu === "landscaping" ? <hr /> : <></>}</li>
            <li onClick={()=>{setMenu("snowRemoval")}}><Link style={{textDecoration: 'none'}}  to="/snowRemoval">Snow Removal</Link>{menu === "snowRemoval" ? <hr /> : <></>}</li>
            <li onClick={()=>{setMenu("contact")}}><Link style={{textDecoration: 'none'}}  to="/contact">Contact Us</Link>{menu === "contact" ? <hr /> : <></>}</li>
        </ul>
        <div className="nav-cart">
            <Link to="/cart"><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar