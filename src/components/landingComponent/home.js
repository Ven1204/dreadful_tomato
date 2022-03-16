import React from 'react';
import Header from '../headerComponent/header';
import Footer from '../footerComponent/footer';
import './home.scss';
import movies from './movies.png';
import series from './series.png';
import MoviePage from '../moviesComponent/movie';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="main-container">
      <div>
        < Header />
      </div>
      <div className='img-container'>
        <Link to='/movies'>
          <div className='movie-container'>
            <img src={movies} alt="movie" />
            <h1>Movies</h1>
          </div>
        </Link>
        <Link to='tv-series'>
          <div className='series-container'>
            <img src={series} alt="tv series" />
            <h1>Series</h1>
          </div>
        </Link>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
