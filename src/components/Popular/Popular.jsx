import React from 'react'
import './Popular.css'
import data_product from '../Assets/all_product'
import Item from '../Item/Item'


const Popular = () => {
  const shuffledProducts = data_product.sort(() => Math.random() - 0.5);
  
  return (
    <div className='popular'>
        <h1>Popular</h1>
        <hr />
        <div className="popular-item">
            {shuffledProducts.map((item,i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
            })}
        </div>
    </div>
  )
}

export default Popular