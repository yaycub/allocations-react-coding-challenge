const url = 'https://swapi.dev/api/people';

export const getStarWarsPeople = ({ name, page }) => {
  if(!page) page = 1;

  if(name) return fetch(`${url}?search=${name.trim().toLowerCase()}&page=${page}`).then(people => people.json());
  
  return fetch(`${url}?page=${page}`).then(people => people.json());
};
