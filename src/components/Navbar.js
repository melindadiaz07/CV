import React from 'react';
import logo from '../images/logo.png'
import brand from '../images/brand3.png'


const Navbar = () => {

  return(
    <div id="header-container">
      <img src={brand} alt="brand" id="brand-header"/>
      {/* <img src={logo} alt="logo" id="logo-header" /> */}
    </div>
  )
}

export default Navbar;