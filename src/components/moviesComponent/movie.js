import React from 'react';
import { MOVIE_PER_PAGE } from '../../utils/constants';

function Movie ({data, page}) {

  // const movieList = [];
  // const x = data.map(movie =>{
  //   if(movie.programType === 'movie'){
  //     movieList.push(movie)
  //   }
  // })
  //   // console.log(movieList);

  const startIndex = (page - 1) * MOVIE_PER_PAGE;
  const selectedMovie = data.slice(startIndex, startIndex + MOVIE_PER_PAGE);

  // console.log(selectedMovie)
  return (
    <div className='container-search1'>
      {selectedMovie && (
      <div className='movie-search-card-container' >
        {selectedMovie.map((movie,key) =>(
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
          )
        )}
      </div>

      )}
    </div>
  )

}

export default Movie;
