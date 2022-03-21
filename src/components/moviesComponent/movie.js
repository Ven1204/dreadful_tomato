import React, { useState, useEffect } from 'react';
import HeaderSearch from '../headerComponent/headerSearch';
import './movie.scss';
import movieIcon from '../../common/imagesAndIcons/icon-movies.png';
import seriesIcon from '../../common/imagesAndIcons/icon-series.png';
import MovieSearchBar from '../searchBarComponent/movieSearchBar';
import Date from '../dateComponent/date';
import api from '../../common/api/api';
import { Link } from 'react-router-dom';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() =>{
    const getApi = async () => {
      try {
        const response = await api.get('/entries');
        const isMovie = response.data
        console.log(isMovie)
        setMovies(isMovie);
      } catch (err){
        if(err.response){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    }

    getApi();
  }, [])


  return(
    <div>
      <div>

        <div>
          <HeaderSearch />
          <Link to='/movies' >
            <div  className="movie-icon">
              <img src={movieIcon} alt="movie-icon" />
              <h2>Movies</h2>
            </div>
          </Link>

          <Link to='/tv-series' id='series-id'>
            <div className='series-icon'>
              <img src={seriesIcon} alt="series-icon" />
              <h2>Series</h2>
            </div>
          </Link>
        </div>


          <div className='date-search-container'>
            <div className='search-bar'>
              <MovieSearchBar
                placeholder={"Type to filter..."}
                data = {movies}
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
