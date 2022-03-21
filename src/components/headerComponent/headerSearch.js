import React, { useState } from 'react';
import './headerSearch.scss';
import logo from '../../common/imagesAndIcons/logo.png';
import login from '../../common/imagesAndIcons/icon-login.png';
// import seriesIcon from './icon-series.png';
import filter from '../../common/imagesAndIcons/icon-filter.png';
import { Link } from 'react-router-dom';

const HeaderSearch= () => {


  return(
    <div className='container-header'>
      <Link to='/'>
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>
      </Link>

      <div className='container-log-btn'>
        <h2>|</h2>
          <div className='filter'>
            <img src={filter} alt="filter" />
            <h2>Filters</h2>
          </div>
        <h2>|</h2>
          <div className='container-login'>
            <h2> Login </h2>
            <img src={login} alt="login icon" />
          </div>
        <h2>|</h2>

        <div className='container-btn'>
           <button className='btn-freeTrial'>Start your free trial</button>
        </div>

      </div>
    </div>
  );
}

export default HeaderSearch;
