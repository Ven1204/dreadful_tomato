import React from 'react';
import './searchBar.scss';
import logo from './logo.png';
import login from './icon-login.png';
import movieIcon from './icon-movies.png';
import seriesIcon from './icon-series.png';
import filter from './icon-filter.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <div className='container-header'>
      <Link to='/'>
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>
      </Link>

      <div className='icon-container'>
        <div className='movie-search'>
          <img src={movieIcon} alt="movie-icon" />
          <h2>Movies</h2>
        </div>
        <div className='series-search'>
          <img src={seriesIcon} alt="series-icon" />
          <h2>Series</h2>
        </div>
      </div>

      <div className='container-log-btn'>
        <div className='filter'>
          <img src={filter} alt="filter" />
          <h2>Filters</h2>
        </div>
        <div className='container-login'>
          |
          <h2> Login </h2>
          <img src={login} alt="login icon" />
          |
        </div>
        <div className='container-btn'>
           <button className='btn-freeTrial'>Start your free trial</button>
        </div>

      </div>

    </div>
  );
}

export default Header;