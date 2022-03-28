import React from 'react';
import { MOVIE_PER_PAGE } from '../../utils/constants';

function Series ({data, page}) {

  const startIndex = (page - 1) * MOVIE_PER_PAGE;
  const selectedSeries = data.slice(startIndex, startIndex + MOVIE_PER_PAGE);

  // console.log(selectedMovie)
  return (
    <div className='container-search1'>
      {selectedSeries && (
      <div className='series-search-card-container' >
        {selectedSeries.map((series,key) =>(
          <div className='series-search-card'key={series.title}>

            <div className='series-search-image-card' >
              <img src={series.images.PosterArt.url } alt="poster"/>
            </div>
            <div>
              <div className='description-search-card'>
                <div className='initial-search-title'>
                  <h1>{series.title}</h1>
                </div>

                <div className='card-search-info'>
                  <h1 >{series.title}</h1>
                  <h2>{series.releaseYear}</h2>
                  <p>{series.description}</p>
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

export default Series;
