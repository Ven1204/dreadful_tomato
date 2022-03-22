import React, { useState } from 'react';
import Calendar from 'react-calendar';
  import 'react-calendar/dist/Calendar.css';


function Date({data}) {
  const [value, setValue] = useState(null);

  const handleOnclick = (event) => {
    event.preventDefault();
    const searchWord = event.target.value
    console.log(searchWord)
    const newFilter = data.map((value) => {
      return value.releaseYear === (searchWord);
    });
      setValue(newFilter);

  }

  return (
    <div>
      <div>
        <Calendar
          onChange={handleOnclick}
          value={value}
          defaultView={"decade"}
          maxDetail={"decade"}
        />
        <div className='container-search'>
          {value && (
          <div className='movie-search-card-container' >
            {value.map((movie,key) => movie.programType === 'movie' &&
              <div className='movie-search-card'key={movie.title}>

                <div className='movie-search-image-card' >
                  {/* <img src={movie.images.PosterArt.url } alt="poster"/> */}
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
      </div>

    </div>
  );
}
export default Date;
