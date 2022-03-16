import React from 'react';
import Home from './landingComponent/home';
import { BrowserRouter as Router, Route, Routes }  from  'react-router-dom';
import MoviePage from './moviesComponent/movie';
import SeriesPage from './tvSeriesComponent/series';
import PageNotFound from './pageNotFoundComponent/pageNotFound';
import axios from 'axios';

const App = () => {

  const data = fetch('data.json')
  console.log(data)

// fetch (`data.json`, {
//       method: 'GET'
//     })
//     .then(res => res.json())
//     .then(res => {
//       var response = []
//       if (res.success) {
//         res = response
//       }
//     })
//     .catch(function() {
//       alert("Can't connect to backend try latter");
//     });

	// const getData = async () => {
	// 	axios.get(`data.json`)
  //   .then((res) => {
	// 		var data = [];
	// 		data = res.data;
  //   console.log(data)
	// 	});
  // }

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/tv-series" element={<SeriesPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>

  )
}
export default App;
