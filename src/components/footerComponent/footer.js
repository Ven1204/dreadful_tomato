import React from 'react';
import logo from '../../common/imagesAndIcons/logo.png';
import apple from '../../common/imagesAndIcons/app store.png';
import google from '../../common/imagesAndIcons/google-play.png';
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
       <a href="https://www.apple.com/app-store/"><img src={apple} alt="app store" target="_blank" /></a>
        <img src={google} alt="google play" />
      </div>
      <div className='copyright'>
        <h2>Copyright 2020 Dreadful Tomato Streaming. All Rights Reserved</h2>
      </div>
    </div>
  )
}

export default Footer;
