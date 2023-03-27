import React, { useState, useEffect } from 'react';
import Character from './components/Character';
import './App.css';
import { data } from './mocks/handlers'; 




  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  
  const App = () => {
    const [characters, setCharacters] = useState([]);
  
    useEffect(() => {
      setCharacters(data);
    }, []);
  
    return (
      <div className="App">
        <h1 className="Header">Characters</h1>
        {characters && characters.map((character) => (
          <Character key={character.name} character={character} />
        ))}
      </div>
    );
  };
  
  export default App;
  