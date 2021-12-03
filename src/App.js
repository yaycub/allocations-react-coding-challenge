import React, { useEffect, useState } from 'react';
import SearchForm from './Components/SearchForm';
import List from './Components/List';
import { getStarWarsPeople, sortByName } from './services';
import Paging from './Components/Paging';

function App() {
  const [ people, setPeople ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ searchTerm, setSearchTerm ] = useState('');

  useEffect(() => {
    getStarWarsPeople({ page, name: searchTerm })
      .then(res => {
        setPeople(sortByName(res.results));
      });
  }, [ page ]);

  const getPeopleWithName = (name) => {
    return getStarWarsPeople({ name, page })
      .then(res => {
        setSearchTerm(name);
        setPeople(sortByName(res.results));
      });
  };

  return (
    <main 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 25,
      }}
    >
      <SearchForm searchPeople={getPeopleWithName} />
      <Paging 
        page={page}
        setPage={setPage}
        listLength={people.length}
      />
      <List people={people} />
    </main>
  );
}

export default App;
