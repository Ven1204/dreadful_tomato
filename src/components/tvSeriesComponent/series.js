import React, { useState, useEffect } from 'react';
import SearchBar from '../headerComponent/headerSearch';
import './series.scss';
import Footer from '../footerComponent/footer';
import axios from 'axios';
import { DatePicker } from '@progress/kendo-react-dateinputs';

const SeriesPage = () => {
  const [data, setData] = useState([]);

	const getData = async () => {
		axios.get(`data.json`)
    .then((res) => {
			var data = [];
			data = res.data;
    setData(data)
		});
    console.log(data)
  }


  return(
    <div>
      <div className='seriesPage-container'>
        <div>
        <SearchBar />
        </div>
        <div className='search-bar-container'>
          this will  be hidden
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
