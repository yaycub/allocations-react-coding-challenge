import React from 'react';
import PropTypes from 'prop-types';

const getAverages = (data) => data.reduce((acc, curr, i) => {
  let mass = 0;
  let height = 0;

  if(curr.mass !== 'unknown') mass = Number(curr.mass.replace(',', ''));
  if(curr.height !== 'unknown') height = Number(curr.height.replace(',', ''));
  
  height += acc.height;
  mass += acc.mass;

  if(i === data.length - 1) {
    return {
      height: height / data.length,
      mass: mass / data.length,
    };
  }

  return {
    height,
    mass
  };
}, {
  height: 0,
  mass: 0,
});

const Averages = ({ people }) => {
  const { height, mass } = getAverages(people);

  return (
    <div style={{ flexDirection: 'row' }}>
      <h4>Height Avg: {height}</h4>
      <h4>Mass Avg: {mass}</h4>
    </div>
  );
};

Averages.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    mass: PropTypes.string.isRequired,
    hair_color: PropTypes.string.isRequired, 
    eye_color: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }))
};

export default Averages;
