import React from 'react';
import { useStateValue } from '../../StateProvider';

const CheckoutProduct = ({ id, image, title, rating, price, description }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id

    })
  }
  return (
    <div>
      <>
        <div className="singelItem">
          <img src={image} alt="" className="checkout-list-image" />
          <hr />
          <div className="product-detail">
            <h4>{title}</h4>
            <div className="product-rating">
              {Array(rating).fill().map(() => (<p>⭐</p>))}
            </div>
            <strong> $ {price}</strong>
            <p>{description}</p>
            <button
              className="remove-btn"
              onClick={removeFromCart}
            >
              Remove from cart
                    </button>
          </div>
        </div>

        <hr />
      </>
    </div>
  )
}

export default CheckoutProduct
