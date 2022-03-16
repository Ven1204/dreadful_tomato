import React from 'react';
import SearchBar from '../headerComponent/searchbar';
import './movie.scss';
import Footer from '../footerComponent/footer';

const MoviePage = () => {
  return(
    <div>
      <div className='movie-container'>
        <div>
        <SearchBar />
        </div>

        <div className='movie-cards-container'>
          <div>

          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default MoviePage;
