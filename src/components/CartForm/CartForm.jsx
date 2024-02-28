import React from 'react'
import './CartForm.css'

const CartForm = ({ setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className='cartForm'>
      <div className="cartForm-container">
        <h1>Fill in the Form and Proceed to Checkout to receive a Free Estimate!!!</h1>
        <div className="cartForm-signup">
          <label>Name:</label>
          <input type="text" name='name' placeholder='Ex: John Doe' required onChange={handleInputChange} />
          <label>Address:</label>
          <input type="text" name='address' placeholder='Ex: 123 abc st. Tampa Fl. 61234' required onChange={handleInputChange} />
          <label>Phone:</label>
          <input type="text" name='phone' placeholder='Ex: 123-456-7890' required onChange={handleInputChange} />
          <label>Best Date Available:</label>
          <input type="date" name='date' placeholder='Ex: 1/1/2024' required onChange={handleInputChange} />
          <label>Best Time Available:</label>
          <input type="time" name='time' placeholder='Ex: 12:00 pm' required onChange={handleInputChange} />
        </div>
      </div>
    </div>
  )
}

export default CartForm