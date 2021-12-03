import React from 'react';
import { Card } from 'rebass';
import PropTypes from 'prop-types';

const ListItem = ({ name, height, mass, hair_color, eye_color, gender }) => (
  <Card
    sx={{
      height: 300,
      width: 250,
      backgroundColor: eye_color,
      color: eye_color === 'black' ? 'white' : 'black',
      boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      margin: 25,
    }}
  >
    <h2>{name}</h2>
    <p>Height: {height}</p>
    <p>Mass: {mass}</p>
    <p>Hair Color: {hair_color}</p>
    <p>Eye Color: {eye_color}</p>
    <p>Gender: {gender}</p>
  </Card>
);

ListItem.propTypes = { 
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  mass: PropTypes.string.isRequired,
  hair_color: PropTypes.string.isRequired, 
  eye_color: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
};

export default ListItem;
