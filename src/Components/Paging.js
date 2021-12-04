import React from 'react';
import PropTypes from 'prop-types';

const Paging = ({ page, setPage, listLength }) => {
  return (
    <div>
      <button 
        onClick={() => setPage(--page)} 
        disabled={page <= 1}
      >
        &lt;
      </button>
      <button 
        onClick={() => setPage(++page)}
        disabled={listLength < 10}
      >
        &gt;
      </button>
    </div>
  );
};

Paging.propTypes = {
  page: PropTypes.number.isRequired,
  listLength: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Paging;
