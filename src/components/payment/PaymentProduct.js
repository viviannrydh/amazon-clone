import React from 'react';
import './Payment.css'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useStateValue } from '../../StateProvider';

const PaymentProduct = ({ id, image, title, rating, price, description }) => {
  const [{ basket }, dispatch] = useStateValue();
  
  const handleRemoveFromPayment = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    })
  };
  return (
        <div>
            <div className="payment-card">
              <img src={image} alt="" className="payment-img" />
              <div className="payment-info">
                <p>{description}</p>
                <strong>${price}</strong>
                <div className="payment-rating">
                  {Array(rating).fill().map(() => (<p>⭐</p>))}
                </div>
              </div>
              <DeleteForeverIcon className="delete-btn" onClick={handleRemoveFromPayment} />
            </div>
            <hr />
        </div>
  )
}

export default PaymentProduct
