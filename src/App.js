import { useEffect } from 'react';
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

  useEffect(() => { 
    auth.onAuthStateChanged(authUser => { 
      console.log('the user is >>', authUser)
      if (authUser) {
        // to check if there is a user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser  
        })
      } else { 
        // no user was logged in
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
        <Header />
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
