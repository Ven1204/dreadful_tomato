import React, { useState, useEffect } from 'react';
import './movieSearchBar.scss';
import SearchIcon from '@mui/icons-material/Search';
import '../moviesComponent/movie.scss';
import api from '../../common/api/api';

const MovieSearchBar = ({placeholder}) => {
  const [initialData, setInitialData] = useState();

  useEffect(() =>{
    const getApi = async () => {
      try {
        const response = await api.get('/entries');
        const isMovie = response.data
        setInitialData(isMovie);
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

  const handleFilter = (event) => {
    // event.preventDefault();
    // const searchWord = event.target.value
    // const newFilter = setFilteredData.filter((value) => {
    //   return value.title.toLowerCase().includes(searchWord.toLowerCase());
    // });
    //   setFilteredData(newFilter);
  }

  return(
    <div className='search'>
      <div className='search-input'>
        <div className='search-icon'><SearchIcon /></div>
        <input type="text" placeholder={placeholder} onChange={handleFilter}/>
      </div>

       <div className='container-search'>
       {initialData && (
        <div className='movie-search-card-container' >
          {initialData.map((movie,key) => movie.programType === 'movie' &&
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
