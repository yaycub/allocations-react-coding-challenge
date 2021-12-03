const url = 'https://swapi.dev/api/people?search=han';

export const getStarWarsPeople = (name) => {
  if(name) return fetch(`${url}?search=${name.trim().toLowerCase()}`).then(people => people.json());
  
  return fetch(url).then(people => people.json());
};
