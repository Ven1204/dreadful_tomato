import React from 'react';
import './header.scss';
import logo from './logo.png';
import login from './icon-login.png';

const Header = () => {
  return(
    <div className='container-header'>
      <div className='logo'>
      <img src={logo} alt="logo" />
      </div>
      <div className='container-log-btn'>
        <div className='container-login'>
          <h2>| Login <img src={login} alt="login icon" /> |</h2>
        </div>
        <div className='container-btn'>
           <button className='btn-freeTrial'>Start your free trial</button>
        </div>

      </div>

    </div>
  );
}

export default Header;
