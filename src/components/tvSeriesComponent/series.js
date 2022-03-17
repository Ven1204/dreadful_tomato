import React, { useState, useEffect } from 'react';
import HeaderSearch from '../headerComponent/headerSearch';
import './series.scss';
import Footer from '../footerComponent/footer';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import '@progress/kendo-theme-default/dist/all.css';
import SearchBar from '../searchBarComponent/searchBar';


const SeriesPage = () => {
 const [startDate, setStartDate] = useState(new Date());

  return(
    <div>
      <div className='seriesPage-container'>
        <div>
        <HeaderSearch />
        </div>

        <div className='date-search-container'>
          <div className='search-bar'>
            <SearchBar placeholder={"Name"}/>
          </div>
          <div className='date-container'>
            <DatePicker />
          </div>
        </div>

        <div className='series-cards-container'>
          <div className='series-card'>
            <div className='series-card-image'>
              image
            </div>
            <div className='series-card-title'>
              series title
              {/* expands with series details when hover */}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default SeriesPage;
