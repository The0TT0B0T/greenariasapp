import React, { useContext, useEffect } from 'react'
import './CartItems.css'
import { ShopContext } from '../../context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = ({setCartData}) => {
    const { getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);

    useEffect(() => {
        // Convert cart items to array and pass to parent component
        const cartDataArray = all_product.filter((e) => cartItems[e.id] > 0);
        setCartData(cartDataArray);
      }, [all_product, cartItems, setCartData]);

  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quanity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if (cartItems[e.id] > 0) {
                return <div>
                    <div className="cartitems-format cartitems-format-main">
                        <img src={e.image} alt="" className='carticon-product-icon'/>
                        <p>{e.name}</p>
                        <p>{e.new_price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>{e.new_price * cartItems[e.id]}</p>
                        <img className='cartitems-remove-icon' src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt="" />
                    </div>
                    <hr />
                </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>cart totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>subtotal</p>
                        <p>{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">

                    </div>
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>{getTotalCartAmount()}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems