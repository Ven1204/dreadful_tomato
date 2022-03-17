import React, { useState } from 'react';
import './headerSearch.scss';
import logo from './logo.png';
import login from './icon-login.png';
import movieIcon from './icon-movies.png';
import seriesIcon from './icon-series.png';
import filter from './icon-filter.png';
import { Link } from 'react-router-dom';

const HeaderSearch= () => {
  const [style1, setStyle1] = useState("div-style1");
  const [style2, setStyle2] = useState("div-style2");

  const changeColor = (color) => {
    switch (color){
      case 'movie-id':
        setStyle1("div-style3");
      break;
      case  'series-id':
        setStyle2("div-style4")
    }

  }

  return(
    <div className='container-header'>
      <Link to='/'>
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>
      </Link>

      <div className='icon-container'>
        <Link to='/movies' >
          <div className={style1} id='movie-id'>
            <img src={movieIcon} alt="movie-icon" />
            <h2>Movies</h2>
          </div>
        </Link>
        <Link to='/tv-series' id='series-id'>
          <div className={style2} >
            <img src={seriesIcon} alt="series-icon" />
            <h2>Series</h2>
          </div>
        </Link>
      </div>

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
