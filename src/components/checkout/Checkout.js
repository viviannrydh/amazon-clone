import React from 'react'
import Product from '../product/Product'
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from '../../StateProvider';

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
        <div className="checkout-left">
          <div>
            <h2 className="checkout-title">
                Your shopping Basket
            </h2>
          <div className="checkout-list">
            {basket.map(item => (
              <>
                <div className="singelItem">
                  <img src={item.image} alt="" className="checkout-list-image" />
                  <hr />
                  <div className="product-detail">
                    <h4>{item.title}</h4>
                    <strong> $ {item.price}</strong>
                    <p>{item.description}</p>
                  </div>
                </div>
                <hr />
              </>
                
              ))}
            </div>
          </div>
        </div>
        <div className="checkout-right">
          <Subtotal />
        </div>     
    </div>
  )
}

export default Checkout
