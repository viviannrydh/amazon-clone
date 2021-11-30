import React, { useState, useEffect } from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../../firebase';

const Header = ({ email }) => {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => { 
    if (user) { 
      auth.signOut();
    } 
  }
  
  return (
    <div className="header">
      <Link to="/">
        <img
        src="https://thumbs.dreamstime.com/b/logotyp-f%C3%B6r-amazon-ikonen-amazoncom-inc-%C3%A4r-ett-amerikanskt-multinationellt-teknikf%C3%B6retag-baserat-i-seattle-wash-ington-som-204759332.jpg"
        alt="" 
        className="header_logo"
      /></Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />  
        <SearchIcon style={{color:'white'}}/>
      </div>
      <div className="header_nav">
        <Link to={!user && '/signin'}>
          <div className="header_option" onClick={handleAuthentication}>
            <span className="header_optionLineOne">Hello {email.substring(0, email.indexOf('@'))}</span>
            <span className="header_optionLineTwo">{user ? 'Sign Out' :'Sign In'}</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Return</span>
          <span className="header_optionLineTwo">Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <div className="header_optionBasket">
          <Link to="/checkout"><LocalMallIcon style={{ color: 'white' }} /></Link>
          <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
        </div>
      </div>
    </div>
  )
}

export default Header
