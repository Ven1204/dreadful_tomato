import React, { useState } from 'react';
import './searchBar.scss';
import SearchIcon from '@mui/icons-material/Search';
import '../moviesComponent/movie.scss';


const SearchBar = ({placeholder, data}) => {
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (event) =>{
    const searchWord = event.target.value
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilteredData(newFilter)
  }
  return(
    <div className='search'>
      <div className='search-input'>
        <div className='search-icon'><SearchIcon /></div>
        <input type="text" placeholder={placeholder} onChange={handleFilter}/>
      </div>

       <div className='container'>
        <div className='movie-card-container' >

          {filteredData.map(movie => movie.programType === 'movie' &&
            <div className='movie-card'key={movie.title}>

                <div className='movie-image-card' >
                  <img src={movie.images.PosterArt.url } alt="poster"/>
                </div>
                <div>

                <div className='description-card'>
                  <div className='initial-title'>
                    <h1>{movie.title}</h1>
                  </div>

                  <div className='card-info'>
                    <h1 >{movie.title}</h1>
                    <h2>{movie.releaseYear}</h2>
                    <p>{movie.description}</p>
                  </div>
                </div>

                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default SearchBar;
