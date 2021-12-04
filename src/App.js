import React, { useEffect, useState } from 'react';
import SearchForm from './Components/SearchForm';
import List from './Components/List';
import { getStarWarsPeople } from './services';
import Paging from './Components/Paging';
import Averages from './Components/Averages';

export const sortByName = (people) => people.sort((a, b) => {
  if(a.name < b.name) return -1;
  if(a.name > b.name) return 1;
  return 0;
});

function App() {
  const [ people, setPeople ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ searchTerm, setSearchTerm ] = useState('');

  useEffect(() => {
    getStarWarsPeople({ page: 1, name: searchTerm })
      .then(res => {
        setPeople(sortByName(res.results));
        setPage(1);
      });
  }, [ searchTerm ]);

  const fetchByPage = (page) => {
    getStarWarsPeople({ page, name: searchTerm })
      .then(res => {
        setPeople(sortByName(res.results));
        setPage(page);
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
      <SearchForm searchPeople={setSearchTerm} />
      <Paging 
        page={page}
        setPage={fetchByPage}
        listLength={people.length}
      />
      <List people={people} />
      <Averages people={people}/>
    </main>
  );
}

export default App;
