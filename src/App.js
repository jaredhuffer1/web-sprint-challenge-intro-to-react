import React, { useState, useEffect } from 'react';
import Character from './components/Character';
import './App.css';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('https://swapi.dev/api/people/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: 'Luke Skywalker',
          height: '172',
          mass: '77',
          hair_color: 'blond',
          skin_color: 'fair',
          eye_color: 'blue',
          birth_year: '19BBY',
          gender: 'male',
          homeworld: 'http://swapi.dev/api/planets/1/',
          films: [
            'A New Hope',
            'The Empire Strikes Back',
            'Return of the Jedi',
            'Revenge of the Sith',
          ],
          species: [],
          vehicles: [
            'http://swapi.dev/api/vehicles/14/',
            'http://swapi.dev/api/vehicles/30/',
          ],
          starships: [
            'http://swapi.dev/api/starships/12/',
            'http://swapi.dev/api/starships/22/',
          ],
          created: '2014-12-09T13:50:51.644000Z',
          edited: '2014-12-20T21:17:56.891000Z',
          url: 'http://swapi.dev/api/people/1/',
        },
      ])
    );
  })
);

server.listen();

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((res) => res.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters &&
        characters.map((character) => (
          <Character key={character.name} character={character} />
        ))}
    </div>
  );
};

export default App;
