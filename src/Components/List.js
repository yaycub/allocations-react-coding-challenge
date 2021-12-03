import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const List = ({ people }) => (
  <ul>
    {people.map(person => (<ListItem key={person.url} {...person} />))}
  </ul>
);

List.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    mass: PropTypes.string.isRequired,
    hair_color: PropTypes.string.isRequired, 
    eye_color: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }))
};

export default List;
