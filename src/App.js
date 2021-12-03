import React, { useEffect, useState } from 'react';
import SearchForm from './Components/SearchForm';
import List from './Components/List';
import { getStarWarsPeople, sortByName } from './services';

function App() {
  const [ people, setPeople ] = useState([]);

  useEffect(() => {
    getStarWarsPeople()
      .then(res => {
        setPeople(sortByName(res.results));
      });
  }, []);

  const getPeopleWithName = (name) => {
    return getStarWarsPeople(name)
      .then(res => {
        setPeople(sortByName(res.results));
      });
  };

  return (
    <>
      <SearchForm searchPeople={getPeopleWithName} />
      <List people={people} />
    </>
  );
}

export default App;
