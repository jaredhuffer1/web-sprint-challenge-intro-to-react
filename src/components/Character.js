import React from 'react';

function Character({ character }) {
  return (
    <div>
      <h2>{character.name}</h2>
      <p>Gender: {character.gender}</p>
      <p>Birth Year: {character.birthYear}</p>
      <p>Height: {character.height} cm</p>
      <p>Mass: {character.mass} kg</p>
    </div>
  );
}

export default Character;

  