import React from 'react';
import logo from '../headerComponent/logo.png';
import apple from './app store.png';
import google from './google-play.png';
import './footer.scss';

const Footer = () => {
  return (
    <div className='container-footer'>
      <div className='logo-footer'>
        <img src={logo} alt="logo" />
      </div>
      <div className='links'>
        <h2>Home</h2>
        <h2>Terms of Use</h2>
        <h2>Legal Notices</h2>
        <h2>Help</h2>
        <h2>Manage Account</h2>
      </div>
      <div className='store'>
        <img src={apple} alt="app store" />
        <img src={google} alt="google play" />
      </div>
      <div className='copyright'>
        <h2>Copyright 2020 Dreadful Tomato Streaming. All Rights Reserved</h2>
      </div>
    </div>
  )
}

export default Footer;
