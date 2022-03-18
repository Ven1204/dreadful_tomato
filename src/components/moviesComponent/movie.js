import React, { useState, useEffect } from 'react';
import HeaderSearch from '../headerComponent/headerSearch';
import './movie.scss';
import Footer from '../footerComponent/footer';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import '@progress/kendo-theme-default/dist/all.css';
import SearchBar from '../searchBarComponent/searchBar';
import api from '../../common/api/api';
import axios from 'axios';

const MoviePage = () => {
  const [movieData, setMovieData] = useState([]);
  // const [movie, setMovie] = useState([]);

  // const initialMovie = () => {
  //   var movie = movieData.map((movie) =>{
  //     if(movie.programType === "movie"){
  //       console.log(movie)
  //       setMovie(movie.title)
  //       // movie.title
  //       // movie.description
  //       // movie.images.PosterArt.url
  //       }
  //     })}



  useEffect(() =>{

    const getApi = async () => {
      try {
        const response = await api.get('/entries');
        const isMovie = response.data
        setMovieData(isMovie);

        // console.log(isMovie)
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
    // initialMovie();
    getApi();
  }, [])



  return(
    <div>
      <div>
        <div>
          <HeaderSearch />
          </div>

          <div className='date-search-container'>
            <div className='search-bar'>
              <SearchBar placeholder={"Name"} data={movieData}/>
            </div>
            <div className='date-container'>
              <DatePicker />
            </div>
        </div>
      </div>

      {/* <div className='container'>
        <div className='movie-card-container' >

          {movieData.map(movie => movie.programType === 'movie' &&
            <div className='movie-card'key={movie.title}>
                <div className='movie-image-card' >
                  <img src={movie.images.PosterArt.url } alt="poster"/>
                </div>
                <div className='description-card'>
                  <div className='card-info'>
                    <h1 >{movie.title}</h1>
                    <h2>{movie.releaseYear}</h2>
                    <p>{movie.description}</p>
                  </div>
                </div>
            </div>
          )}
        </div>
      </div> */}


    </div>
  )
}

export default MoviePage;
