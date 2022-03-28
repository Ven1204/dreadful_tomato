import React from 'react';
import Home from './landingComponent/home';
import { BrowserRouter as Router, Route, Routes }  from  'react-router-dom';
import MoviePage from './moviesComponent/moviePage';
import SeriesPage from './tvSeriesComponent/seriesPage';
import PageNotFound from './pageNotFoundComponent/pageNotFound';
import Terms from '../utils/terms';
import Notice from '../utils/notice';
import Help from '../utils/help';
import Account from '../utils/account';

const App = () => {

  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/tv-series" element={<SeriesPage />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/terms-of-use" element={<Terms/>} />
        <Route path="/legal-Notice" element={<Notice/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/manage-account" element={<Account/>} />
      </Routes>
    </Router>

  )
}
export default App;
