import React, { useState, useEffect } from 'react';
import SearchBar from '../headerComponent/searchbar';
import './movie.scss';
import Footer from '../footerComponent/footer';
import axios from 'axios';

const MoviePage = () => {
  const [data, setData] = useState([]);

  const getData = axios.get(`https://gitlab.com/-/snippets/2041384/raw/master/data.json`)

    .then((res) => console.log(res))




  return(
    <div>
      <div className='moviePage-container'>
        <div>
        <SearchBar />
        </div>

        <div className='movie-cards-container'>
          <div className='movie-card'>
            <div className='movie-card-image'>
              image
            </div>
            <div className='movie-card-title'>
              movie title
              {/* expands with movie details when hover */}
            </div>
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
