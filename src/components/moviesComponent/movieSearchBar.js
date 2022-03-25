import React, { useState } from 'react';
import './movieSearchBar.scss';
import SearchIcon from '@mui/icons-material/Search';
import DateComponent from '../dateComponent/date';

const MovieSearchBar = ({placeholder, data}) => {
  const [filteredData, setFilteredData] = useState(data);


  const handleFilter = (event) => {
    event.preventDefault();
    const searchWord = event.target.value
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
      setFilteredData(newFilter);
  }




  return(
    <div className='search'>
      <div className='search-input'>
        <div className='search-icon'><SearchIcon /></div>
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
        />
      </div>



      <div className='container-search'>
        {filteredData && (
        <div className='movie-search-card-container' >
          {filteredData.map((movie,key) => movie.programType === 'movie' &&
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


    </div>
  );
}
export default MovieSearchBar;
