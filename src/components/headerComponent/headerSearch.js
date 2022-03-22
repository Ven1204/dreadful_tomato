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

      {/* <div className='container-log-btn'> */}


        <div className='container-btn'>
           <button className='btn-freeTrial'>Start your free trial</button>
        </div>

      {/* </div> */}
    </div>
  );
}

export default HeaderSearch;
