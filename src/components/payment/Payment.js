import React from 'react';
import { basket, user } from '../../StateProvider';
import { useStateValue } from '../../StateProvider';
import Subtotal from '../checkout/Subtotal';
import CheckoutProduct from '../checkout/CheckoutProduct';
import './Payment.css'
import PaymentProduct from './PaymentProduct';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  let totalPrice = 0;
  for (let item of basket) {
    totalPrice = totalPrice + item.price
  }
  const handleBuynow = (e) => {
    e.preventDefault();
    dispatch({
      type: "EMPTY_BASKET"
    })
    navigate('/orders')
    console.log('hello')
  }
  return (
    <div className="payment-wrapper">
      <h1 className="payment-title">Check out {basket.length} item</h1>
      <div className="payment-form-wrapper">
          <div className="payment-block">
            <strong>Delivery Address:</strong>
            <p>Seira de Grazalema 33, bloque 5, 1A, 29016, Malaga</p>
          </div> 
          <div className="payment-block">
            <strong>Review items and delivery:</strong>
            <div className="cards-wrapper">
            {
              basket.map(item => (
                <PaymentProduct 
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  description={item.description}
                  rating={item.rating}
                />))
              }
            </div>
          </div>
          <div className="payment-block">
            <strong>Payment Method: </strong>
            
            <div className="payment-card-detail">  
              <strong>Card Details</strong>
              <br/>
              <div className="card-detail">           
                <span>Card number</span>
                <span>MM/YY</span>
                <span>CVC</span> 
              </div>
              <div className="buy-btn">
                <strong>Order Total: $ {totalPrice}</strong>
              <button type="submit" onClick={(e)=>handleBuynow(e)}>Buy now</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Payment

