import React, { useState, useEffect } from 'react';
import HeaderSearch from '../headerComponent/headerSearch';
import './moviePage.scss';
import Footer from '../footerComponent/footer';
import DateComponent from '../dateComponent/date';
import api from '../../common/api/api';
import MovieSearchBar from './movieSearchBar';
import { Link } from 'react-router-dom';
import movieIcon from '../../common/imagesAndIcons/icon-movies.png';
import seriesIcon from '../../common/imagesAndIcons/icon-series.png';
import login from '../../common/imagesAndIcons/icon-login.png';
import filter from '../../common/imagesAndIcons/icon-filter.png';
import Movie from './movie';
import Pagination from '../pagination/pagination';
import { MOVIE_PER_PAGE } from '../../utils/constants';

const MoviePage = () => {
  const [movieData, setMovieData] = useState([]);
  const [hideSearchBar, setHideSearchBar] = useState(false);
  const [hideList, setHideList] = useState(true);

  // pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() =>{
    const getApi = async () => {
      try {
        const response = await api.get('/entries');
        const isMovie = response.data

          const movieList = [];
          const x = isMovie.map(movie =>{
            if(movie.programType === 'movie'){
              movieList.push(movie)
            }
          })
        setMovieData(movieList);
        setTotalPages(Math.ceil(movieList.length / MOVIE_PER_PAGE));

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

  const hideItems = () => {
    setHideSearchBar(true);
    setHideList(false);
  }

  const handleClick = num  => {
    setPage(num);
  }

  return(
    <div>
        <div>
          <HeaderSearch />
          <div className='icon-container'>
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

          <div className='filter-container'>
            <h2>|</h2>
            <div className='filter' onClick={hideItems}>
              <img src={filter} alt="filter" />
              <h2>Filters</h2>
            </div>
            <h2>|</h2>
            <div className='container-login'>
              <h2> Login </h2>
              <img src={login} alt="login icon" />
            </div>
            <h2>|</h2>
          </div>
        </div>


        <div className='date-search-container'>
        {hideSearchBar?
        <>
          <div>
            <div className='search-bar'>
              <MovieSearchBar
                placeholder={"Type to filter..."}
                data={movieData}
              />
            </div>

          </div>
            <div className='date-container' onClick={hideItems}>
              <DateComponent
                data={movieData}

              />
            </div>
        </>
        : null}

        </div>
        <div className='movie-header'>
          <h1>Popular Movies</h1>
        </div>

      {hideList?
      <div className="cont">
        <Movie
          data={movieData}
          page={page}
        />
        < Pagination
          totalPages={totalPages}
          handleClick={handleClick}
        />
      </div>
      : null}
      {hideList?
      <div className='footer-ctn'>
        <Footer/>
      </div>
      : null}
    </div>
  )
}

export default MoviePage;
