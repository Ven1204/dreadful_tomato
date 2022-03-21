import React, { useState, useEffect } from 'react';
import HeaderSearch from '../headerComponent/headerSearch';
import './movie.scss';
import MovieSearchBar from '../searchBarComponent/movieSearchBar';
import Date from '../dateComponent/date';

const MoviePage = () => {

  return(
    <div>
      <div>

        <div>
          <HeaderSearch />
          </div>

          <div className='date-search-container'>
            <div className='search-bar'>
              <MovieSearchBar
                placeholder={"Type to filter..."}

              />
            </div>

            <div className='date-container'>
              {/* <Date /> */}
            </div>
        </div>

      </div>

    </div>
  )
}

export default MoviePage;
