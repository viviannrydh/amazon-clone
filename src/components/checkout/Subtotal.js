import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import { getTotalPrice } from '../../reducer'
import { useNavigate } from 'react-router-dom';

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  const navigate = useNavigate();
  //let totalPrice = 0;
  //for (let item of basket) { 
   // totalPrice=totalPrice+item.price
  //}

  return (
    <div className="subtotal">
      <CurrencyFormat 
        renderText={
          (value) => (
            <>
              <p>
                Subtotal ({basket.length} items): <strong> {value}</strong>
              </p>
              <small className="subtotal-gift">
                <input type="checkbox" />This order contains a gift
              </small>
            </>
          )}
        decimalScale={2}
        value={getTotalPrice(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e=>navigate('/payment')}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal
