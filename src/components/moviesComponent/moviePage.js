import React, { useState, useEffect } from 'react';
import HeaderSearch from '../headerComponent/headerSearch';
// import Header from '../headerComponent/header';
import './moviePage.scss';
import Footer from '../footerComponent/footer';
import DateComponent from '../dateComponent/date';
import '@progress/kendo-theme-default/dist/all.css';
import api from '../../common/api/api';
import MovieSearchBar from './movieSearchBar';
import { Link } from 'react-router-dom';
import movieIcon from '../../common/imagesAndIcons/icon-movies.png';
import seriesIcon from '../../common/imagesAndIcons/icon-series.png';
import login from '../../common/imagesAndIcons/icon-login.png';
import filter from '../../common/imagesAndIcons/icon-filter.png';


const MoviePage = () => {
  const [movieData, setMovieData] = useState([]);
  const [hideSearchBar, setHideSearchBar] = useState(false);
  const [hideList, setHideList] = useState(true);
  const [btnClr, setBtnClr] = useState('transparent');

  useEffect(() =>{
    const getApi = async () => {
      try {
        const response = await api.get('/entries');
        const isMovie = response.data
        setMovieData(isMovie);

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
    setBtnClr('grey');
  }


  return(
    <div>
        <div>
          <HeaderSearch />
          {/* <Header /> */}
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
            <div className='date-container'>
              <DateComponent
                data={movieData}
              />
            </div>
        </>
        : null}

        </div>


      {/* {hideList?
       <div className='container-search1'>
        {movieData && (
        <div className='movie-search-card-container' >
          {movieData.map((movie,key) => movie.programType === 'movie' &&
            <div className='movie-search-card'key={movie.title}>

              <div className='movie-search-image-card' >
                <img src={movie.images.PosterArt.url } alt="poster"/>
              </div>
              <div>
                <div className='description-search-card'>
                  <div className='initial-search-title'>
                    <h1>{movie.title}</h1>
                  </div>

                  <div className='card-search-info'>
                    <h1 >{movie.title}</h1>
                    <h2>{movie.releaseYear}</h2>
                    <p>{movie.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        )}
      </div>
      : null} */}

    </div>
  )
}

export default MoviePage;
