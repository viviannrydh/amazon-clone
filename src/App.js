import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Switch, Route, Link} from 'react-router-dom';
import Checkout from './components/checkout/Checkout';
import SignIn from './components/signIn/SignIn';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

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
        <Header email={email}/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/checkout" exact element={<Checkout />} />
          <Route path="/signin" exact element={<SignIn />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
