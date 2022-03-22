import React, { useState, useEffect } from 'react';
import HeaderSearch from '../headerComponent/headerSearch';
import './moviePage.scss';
import movieIcon from '../../common/imagesAndIcons/icon-movies.png';
import seriesIcon from '../../common/imagesAndIcons/icon-series.png';
import MovieSearchBar from './movieSearchBar';
import Date from '../dateComponent/date';
import api from '../../common/api/api';
import { Link } from 'react-router-dom';

function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  // console.log(movies)

  useEffect(() => {
    const getApi = async () => {
      const response = await api.get('/entries');
      const isMovie = response.data
      setMovies(isMovie);
    };
    getApi();
  }, [])
  const handleFilter = (event) => {
    event.preventDefault();
    const searchWord = event.target.value
    const newFilter = movies.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
      setSearchTerm(newFilter);
  }



  return(

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

          <header>
            <form >
            <input
              className='movie-search'
              type="text"
              placeholder='Type to filter...'
              value={searchTerm}
              onChange={handleFilter}
            />
            </form>
          </header>
        <div className='movie-card-container'>
          {movies.length > 0 &&
          movies.map((movie) => movie.programType === 'movie' &&
          <MovieSearchBar
            key={movie.title}
            {...movie}
            page = {page}
          />)
          }
        </div>




    </div>
  )
}

export default MoviePage;
