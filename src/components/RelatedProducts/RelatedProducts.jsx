import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const RelatedProducts = (props) => {
    const {mainProductId} = props;
    const relatedProducts = data_product.filter(item => item.id !== mainProductId);
    const shuffledProducts = relatedProducts.sort(() => Math.random() - 0.5);
  return (
    <div className='relatedproduct'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {shuffledProducts.map((item, i) => {
                return <Item key={i} id={item.id}  name={item.name} image={item.image} new_price={item.new_price}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts