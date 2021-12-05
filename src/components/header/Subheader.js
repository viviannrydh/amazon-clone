import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './Subheader.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Subheader = () => {
  return (
    <div className="subheader-wrapper">
      <div className="sub-wrapper">
        <MenuIcon style={{ color: 'white' }} />
        <h4>All</h4>
      </div>
      
      <div className="sub-wrapper">
        <LocationOnIcon style={{ color: 'red' }} />
        <h4>Your location</h4>
      </div>
      <div className="sub-wrapper">
        <h4>Today's Deals</h4>
      </div>
      <div className="sub-wrapper">
        <h4>Customer Service</h4>
      </div>
      <div className="sub-wrapper">
        <h4>Sell</h4>
      </div>
    </div>
  )
}

export default Subheader
