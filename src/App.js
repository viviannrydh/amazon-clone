import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Switch, Route, Link} from 'react-router-dom';
import Checkout from './components/checkout/Checkout';
import SignIn from './components/signIn/SignIn';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Subheader from './components/header/Subheader';
import Payment from './components/payment/Payment';
import Orders from './components/orders/Orders';

function App() {
  const [{ }, dispatch] = useStateValue();
  const [email, setEmail] = useState('')


  useEffect(() => { 
    auth.onAuthStateChanged(authUser => { 
      if (authUser) {
        // to check if there is a user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser  
        })
        setEmail(authUser.email)
      } else { 
        // no user was logged in
        dispatch({
          type: 'SET_USER',
          user: null
        })
        setEmail('friend')
      }
    })
  }, [])
  
  return (
    <Router>
      <div className="app">
        <Header email={email} />
        {/*<Subheader />*/}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/checkout" exact element={<Checkout />} email={email}/>
          <Route path="/signin" exact element={<SignIn />} />
          <Route path="/payment" exact element={<Payment />} />
          <Route path="/orders" exact element={<Orders />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
