import React from 'react';
import PropTypes from 'prop-types';

const Paging = ({ page, listLength }) => {

  return (
    <div>
      <button 
        onClick={page - 1} 
        disabled={page <= 1}>&lt;
      </button>
      <button 
        onClick={page + 1} 
        disabled={listLength < 10}>&gt;
      </button>
    </div>
  );
};

Paging.propTypes = {
  page: PropTypes.number.isRequired,
  listLength: PropTypes.number.isRequired,
};

export default Paging;
