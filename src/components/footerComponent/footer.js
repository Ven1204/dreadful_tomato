import React from 'react';
import logo from '../../common/imagesAndIcons/logo.png';
import apple from '../../common/imagesAndIcons/app store.png';
import google from '../../common/imagesAndIcons/google-play.png';
import './footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='container-footer'>
      <div className='logo-footer'>
        <img src={logo} alt="logo" />
      </div>
      <div className='links'>
        <Link to='/'>
          <h2>Home</h2>
        </Link>

        <Link to='/terms-of-use'>
          <h2>Terms of Use</h2>
        </Link>

        <Link to='legal-notice'>
          <h2>Legal Notices</h2>
        </Link>

        <Link to='help'>
          <h2>Help</h2>
        </Link>

        <Link to='manage-account'>
          <h2>Manage Account</h2>
        </Link>

      </div>
      <div className='store'>
       <a href="https://www.apple.com/app-store/"target="_blank"><img src={apple} alt="app store" /></a>
        <a href="https://play.google.com/store/" target="_blank"><img src={google} alt="google play" /></a>
      </div>
      <div className='copyright'>
        <h2>Copyright 2020 Dreadful Tomato Streaming. All Rights Reserved</h2>
      </div>
    </div>
  )
}

export default Footer;
