import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider'
const Header = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="header">
      <Link to="/"><img
        src="https://thumbs.dreamstime.com/b/logotyp-f%C3%B6r-amazon-ikonen-amazoncom-inc-%C3%A4r-ett-amerikanskt-multinationellt-teknikf%C3%B6retag-baserat-i-seattle-wash-ington-som-204759332.jpg"
        alt="" 
        className="header_logo"
      /></Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />  
        <SearchIcon style={{color:'white'}}/>
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello Viviann</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
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
