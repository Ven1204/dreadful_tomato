import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './date.scss';

function DateComponent({data}) {
  const [selectedDate, setSelectedDate] = useState(null);
  const  [dateFilter, setDateFilter] = useState([])

  const handleDateFilter = () => {
    const newFilter = data.filter((value) => {
      return value.releaseYear === 2019;
    });
      setDateFilter(newFilter);
      console.log(newFilter)
  }


  return (
    <div>
      <div>
        <DatePicker
          placeholderText="Filter by date"
          className='date-picker'
          onChange={date => setSelectedDate(date)}
          onSelect={handleDateFilter}
          selected={selectedDate}
          dateFormat='yyyy'
          showYearPicker
          maxDate={new Date}
        />
      </div>


      <div className='container-search'>
        {dateFilter && (
        <div className='movie-search-card-container' >
          {dateFilter.map((movie,key) => movie.programType === 'movie' &&
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
export default DateComponent;
