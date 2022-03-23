import React, { useState, useEffect } from 'react';
import HeaderSearch from '../headerComponent/headerSearch';
import './seriesPage.scss';
import Footer from '../footerComponent/footer';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import '@progress/kendo-theme-default/dist/all.css';
import api from '../../common/api/api';
import SeriesSearchBar from './seriesSearchBar';
import { Link } from 'react-router-dom';
import movieIcon from '../../common/imagesAndIcons/icon-movies.png';
import seriesIcon from '../../common/imagesAndIcons/icon-series.png';
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
          <Link to='/movies' >
            <div  className="movie-icon2">
              <img src={movieIcon} alt="movie-icon" />
              <h2>Movies</h2>
            </div>
          </Link>

          <Link to='/tv-series' id='series-id'>
            <div className='series-icon2'>
              <img src={seriesIcon} alt="series-icon" />
              <h2>Series</h2>
            </div>
          </Link>
          </div>

          <div className='date-search-container'>
            <div className='search-bar'>
              <SeriesSearchBar
                placeholder={"Type to filter..."}
                data={seriesData}

              />
            </div>
            <div className='date-container'>
              <DatePicker

              />
            </div>
        </div>

       <div className='container'>
        <div className='movie-card-container' >
        </div>
      </div>

      </div>

    </div>
  )
}

export default SeriesPage;
