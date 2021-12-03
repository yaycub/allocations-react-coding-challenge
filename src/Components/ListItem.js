import React from 'react';
import { Card } from 'rebass';
import PropTypes from 'prop-types';

const ListItem = ({ name, height, mass, hair_color, eye_color }) => (
  <Card
    sx={{
      height: 300,
      width: 250,
      backgroundColor: eye_color,
    }}
  >
    <h2>{name}</h2>
    <p>Height: {height}</p>
    <p>Mass: {mass}</p>
    <p>Hair Color: {hair_color}</p>
  </Card>
);

ListItem.propTypes = { 
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  mass: PropTypes.string.isRequired,
  hair_color: PropTypes.string.isRequired, 
  eye_color: PropTypes.string.isRequired,
};

export default ListItem;
