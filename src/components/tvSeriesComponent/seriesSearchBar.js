import React, { useState } from 'react';
import './seriesSearchBar.scss';
import SearchIcon from '@mui/icons-material/Search';


const SeriesSearchBar = ({placeholder, data}) => {
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
        <div className='series-search-card-container' >
          {filteredData.map((series,key) => (
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
    </div>
  );
}
export default SeriesSearchBar;
