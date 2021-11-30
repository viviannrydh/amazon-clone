import React from 'react'
import Product from '../product/Product'
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from './CheckoutProduct';
import FlipMove from 'react-flip-move';


const Checkout=({ id })=>{
  const [{ basket, user }, dispatch] = useStateValue();
 
  return (
    <div className="checkout">
        <div className="checkout-left">
        <div>
          <h2 className="checkout-title">Dear {user?.email.substring(0, user?.email.indexOf('@'))}, here is your shopping Basket</h2>
          <div className="checkout-list">
            {basket.map(basketItem => (
              <CheckoutProduct 
                key={basketItem.id}
                id={basketItem.id}
                image={basketItem.image}
                title={basketItem.title}
                price={basketItem.price}
                description={basketItem.description}
                rating={basketItem.rating}
              />               
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
