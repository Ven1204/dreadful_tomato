import React from 'react';
import Home from './landingComponent/home';
import { BrowserRouter as Router, Route, Routes }  from  'react-router-dom';
import MoviePage from './moviesComponent/movie';
import SeriesPage from './tvSeriesComponent/series';
import PageNotFound from './pageNotFoundComponent/pageNotFound';
import axios from 'axios';

const App = () => {

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
