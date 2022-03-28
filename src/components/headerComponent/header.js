import React from 'react';
import './header.scss';
import logo from '../../common/imagesAndIcons/logo.png';
import login from '../../common/imagesAndIcons/icon-login.png';

const Header = () => {
  const handleAlert = () => {
    alert("We are still working on this function... thankyou for your support ")
  }

  return(
    <div className='container-header'>
      <div className='logo'>
      <img src={logo} alt="logo" />
      </div>
      <div className='container-log-btn'>
        <div className='container-login'>
          <h2>|</h2>
          <h2 onClick={handleAlert}> Login </h2>
          <img src={login} alt="login icon" />
          <h2>|</h2>
        </div>
        <div className='container-btn'>
           <button className='btn-freeTrial' onClick={handleAlert}>Start your free trial</button>
        </div>

      </div>

    </div>
  );
}

export default Header;
