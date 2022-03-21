import React, { useState, useEffect } from 'react';
import HeaderSearch from '../headerComponent/headerSearch';
import './series.scss';
import Footer from '../footerComponent/footer';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import '@progress/kendo-theme-default/dist/all.css';
import api from '../../common/api/api';
import SeriesSearchBar from '../searchBarComponent/seriesSearchBar';

const SeriesPage = () => {
  const [seriesData, setSeriesData] = useState([]);


  useEffect(() =>{
    const getApi = async () => {
      try {
        const response = await api.get('/entries');
        const isSeries = response.data
        setSeriesData(isSeries);

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



  return(
    <div>
      <div>
        <div>
          <HeaderSearch />
          </div>
          <div className='date-search-container'>
            <div className='search-bar'>
              <SeriesSearchBar
                placeholder={"Type to filter..."}
                data={seriesData}

              />
            </div>
            <div className='date-container'>
              <DatePicker />
            </div>
        </div>

       <div className='container'>
        <div className='movie-card-container' >

          {/* {movieData.map(movie => movie.programType === 'series' &&
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
          )} */}
        </div>
      </div>

      </div>

    </div>
  )
}

export default SeriesPage;
