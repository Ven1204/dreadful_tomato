import React from 'react';
import Home from './landingComponent/home';
import { BrowserRouter as Router, Route, Routes }  from  'react-router-dom';
import MoviePage from './moviesComponent/moviePage';
import SeriesPage from './tvSeriesComponent/seriesPage';
import PageNotFound from './pageNotFoundComponent/pageNotFound';


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
