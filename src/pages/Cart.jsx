import React, { useState } from 'react';
import '../components/CartItems/CartItems.css'
import CartItems from '../components/CartItems/CartItems';
import CartForm from '../components/CartForm/CartForm';

const Cart = () => {
  const [formData, setFormData] = useState({});
  const [cartData, setCartData] = useState([]);

  // Callback function to update form data
  const updateFormData = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  };

  // Callback function to update cart data
  const updateCartData = (data) => {
    setCartData(data);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Combine form data and cart data for submission
    const combinedData = {
      formData,
      cartData,
    };

    // Perform submission logic here, such as sending data to an API
    console.log('Submitted data:', combinedData);
  };

  return (
    <div>
      <CartForm setFormData={updateFormData} />
      <CartItems setCartData={updateCartData} />
      <div className="button-container">
        <button className='cartitems-button' onClick={handleSubmit}>Submit</button>
        </div>
      
    </div>
  );
};

export default Cart;
