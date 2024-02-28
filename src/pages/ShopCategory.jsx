import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item'

const formatCategoryName = (category) => {
  const words = category.split(/(?=[A-Z])/);
  const formattedCategory = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return formattedCategory.join(' ');
}

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  const category = all_product.find(item => props.category === item.category)?.category
  const formattedCategory = category ? formatCategoryName(category) : '';
  const displayImage = category === 'snowRemoval';
  return (
    <div className="shop-category">
      <div className="shopcategory-banner">
        {formattedCategory}
        <div className="shopcategory-banner-img">
        {displayImage && <img src={props.banner} alt="Snow Removal" />}
        </div>
      </div>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{formattedCategory}</span> out of 14 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id}  name={item.name} image={item.image} new_price={item.new_price}/>
          }
          else {
            return null;
          }
        })}
      </div>
    </div>
  )
}
export default ShopCategory