import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './date.scss';

function initialDate (){
  return null
}

function DateComponent({data}) {
  const [selectedDate, setSelectedDate] = useState(()=> initialDate());
  const  [dateFilter, setDateFilter] = useState([]);

  // const [startDate, setStartDate] = useState(selectedDate);
  // const [endDate, setEndDate] = useState(null);


  const x = JSON.stringify(selectedDate);
  // console.log(selectedDate)
  const y = x.split("");
  const z = y.slice(1,5);
  const  a = z.join('');
  let yr = parseInt(a);
    yr += 1
    console.log(yr)

  const handleDateFilter = () => {

    const newFilter = data.filter((value) => {
      return value.releaseYear === yr
    });
      setDateFilter(newFilter);
      console.log(newFilter)
    // setSelectedDate(prevNewFilter => prevNewFilter - 1)
  }

  // const handleDate = () =>{
  //   setSelectedDate(selectedDate)
  // }

  return (
    <div>
      <div>
        <DatePicker
          placeholderText="Filter by date"
          className='date-picker'
          onChange={setSelectedDate}

          onSelect={handleDateFilter}
          selected={selectedDate}
          dateFormat='yyyy'
          showYearPicker
          maxDate={new Date}

        />
      </div>


      <div className='date-movie-container'>
        {dateFilter && (
        <div className='movie-date-card-container' >
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
