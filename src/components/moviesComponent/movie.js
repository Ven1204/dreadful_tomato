import React, { useState, useEffect } from 'react';
import HeaderSearch from '../headerComponent/headerSearch';
import './movie.scss';
import Footer from '../footerComponent/footer';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import '@progress/kendo-theme-default/dist/all.css';
import SearchBar from '../searchBarComponent/searchBar';


const MoviePage = () => {
 const [startDate, setStartDate] = useState(new Date());

  return(
    <div>
      <div className='moviePage-container'>
        <div>
        <HeaderSearch />
        </div>

        <div className='date-search-container'>
          <div className='search-bar'>
            <SearchBar placeholder={"Name"}/>
          </div>
          <div className='date-container'>
            <DatePicker />
          </div>
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
