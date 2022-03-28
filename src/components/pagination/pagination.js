import React from 'react';
import './pagination.scss';

const Pagination = ({ totalPages, handleClick, handleNext, handlePrev }) => {
  const pages = [...Array(totalPages).keys()].map(num => num + 1);
  console.log(pages)

  return (
    <div className='page-container'>
      {pages.map(num => (
        <button className='page-btn' onClick={() => handleClick(num)}>
          {num}
        </button>
        )
      )}
    </div>
  );
};

export default Pagination;
