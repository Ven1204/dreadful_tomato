import React from 'react';
import './searchBar.scss';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({placeholder, data}) => {
  return(
    <div className='search'>
      <div className='search-input'>
        <div className='search-icon'><SearchIcon /></div>
        <input type="text" placeholder={placeholder} />
      </div>

      <div className='data-result'></div>
    </div>
  );
}
export default SearchBar;
