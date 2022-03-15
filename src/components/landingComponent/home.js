import React from 'react';
import Header from '../headerComponent/header';
import Footer from '../footerComponent/footer';
import './home.scss';
import movies from './movies.png';
import series from './series.png';

const Home = () => {
  return (
    <div className="main-container">
      <div>
        < Header />
      </div>
      <div className='img-container'>
        <div className='movie-container'>
          <img src={movies} alt="movie" />
        </div>
        <div className='series-container'>
          <img src={series} alt="tv series" />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
