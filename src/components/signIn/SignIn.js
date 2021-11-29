import React, { useState } from 'react';
import './SignIn.css';
import { auth } from '../../firebase';
import { Link, useNavigate  } from 'react-router-dom';

const SignIn = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmail = (e) => { 
    console.log(e.target.value);
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  }
  
  const handleSignIn = (e) => { 
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth => { 
        if (auth) {
          navigate('/')
        } 
      }))
      .catch(error=>alert(error.message))
  }

  const handleRegister = (e) => { 
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth => {
        console.log(auth);
        if (auth) { 
          navigate('/')
        }
      })) 
      .catch(error=>alert(error.message))
  }

  return (
    <>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
        alt="" 
        className="amazon-logo-signin"
        />
      <div className="signIn-container">
          <h1>Sign-In</h1>
          <input className="email" type="text" placeholder="E-mail" onChange={(e)=>handleEmail(e)}/>
          <input className="password" type="text" placeholder="Password" onChange={(e)=>handlePassword(e)}/>
          <button
            className="continue-btn"
            onClick={e=>handleSignIn(e)}
            type="submit"
          >
            Sign In
          </button>
          <small className="policy-text">By signing in you agree to the AMAZON FAKE CLONE conditions of Use and Sale. Please see our Privacy Notice.Our Cookies Notice and our interest-based Ads Notice.</small>
          <small>New to Amazon?</small>
        <button
          className="signUp-btn"
          onClick={e=>handleRegister(e)}
        >Create your Amazon account</button>
      </div>
    </>
  )
}

export default SignIn
