import React from 'react';
import './Product.css'

 
const Product = ({ title,image,price,rating}) => {
  return (
    <div className="product">
      <div className="product-info">
        <div className="product-info-content">
          <h3>{title}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quae? Placeat natus dolores, sit quibusdam hic commodi, enim harum exercitationem minima</p>
          <p className="product-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map(
              (_, i) => (
                <p>⭐</p>
              )
            )}
        </div>
        <img
          src={image}
          alt="" 
          className="product-img"
        />
        <button className="add-to-cart">Add to cart</button>
      </div>

    </div>
  )
}

export default Product
