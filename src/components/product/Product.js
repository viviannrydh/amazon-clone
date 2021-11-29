import React from 'react';
import './Product.css'
import { useStateValue } from '../../StateProvider'

 
const Product = ({ id, title,image,price,rating,description}) => {
  const [{ basket }, dispatch] = useStateValue();
   console.log(basket)
  const addToBasket = () => { 
      //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        description:description
      }
    })
  
  }
  
  return (
    <div className="product">
      <div className="product-info">
        <div className="product-info-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <p className="product-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map(
              () => (
                <p>⭐</p>
              )
            )}
        </div>
        <img
          src={image}
          alt="" 
          className="product-img"
        />
        <button
          className="add-to-cart"
          onClick={addToBasket}
        >Add to cart</button>
      </div>

    </div>
  )
}

export default Product
