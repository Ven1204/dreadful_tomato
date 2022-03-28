import React from 'react';
import './pagination.scss';

const Pagination = ({ totalPages, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map(num => num + 1);
  console.log(pages)
  return (
    <div className='page-container'>
      <button className='page-btn'> &lt; </button>
      {pages.map(num => (
        <button className='page-btn' onClick={()=> handleClick(num)}>
          {num}
        </button>
        )
      )}
      <button className='page-btn'> &gt; </button>
    </div>
  );
};

export default Pagination;
