const url = 'https://swapi.dev/api/people';

export const sortByName = (people) => people.sort((a, b) => {
  if(a.name < b.name) return -1;
  if(a.name > b.name) return 1;
  return 0;
});

export const getStarWarsPeople = (name) => {
  if(name) return fetch(`${url}?search=${name.trim().toLowerCase()}`).then(people => people.json());
  
  return fetch(url).then(people => people.json());
};
