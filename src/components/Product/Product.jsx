import React from 'react'
import "./Product.scss"

const Product = ({img, title, rating, price}) => {
  return (
    <div className='product'>
        <img src={img} alt="" />
        <h3>{title}</h3>
        <p>{rating}</p>
        <p>{price}</p>
        <div className="buttons">
            <button>ADD TO CART</button>
            <button><img src="img/heart.svg" alt="" /></button>
        </div>
        
    </div>
  )
}

export default Product