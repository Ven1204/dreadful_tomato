import React, { useState } from 'react';
import './movieSearchBar.scss';
import SearchIcon from '@mui/icons-material/Search';
import { MOVIE_PER_PAGE } from '../../utils/constants'
import MovieData from './movieData';

const MovieSearchBar = ({data,title, description, releaseYear, images, page}) => {
  const startIndex = (page -1) * MOVIE_PER_PAGE
  const [filteredData, setFilteredData] = useState("");
  // const selectedMovies = data.slice(startIndex, startIndex + MOVIE_PER_PAGE);
  const handleFilter = (event) => {
    event.preventDefault();
    const searchWord = event.target.value
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
      setFilteredData(newFilter);
  }

  return(
    <div className='movie-card'>
      <img src={images.PosterArt.url}alt={title}/>
      <div className='movie-title'>
        <h2>{title}</h2>
      </div>
      <div className='movie-card-info'>
        <h2>{title}</h2>
        <h3>{releaseYear}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default MovieSearchBar;
