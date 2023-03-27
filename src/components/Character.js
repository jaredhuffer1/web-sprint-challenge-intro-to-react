// Write your Character component here
import React from 'react';
function Character(props) {
    return (
      <div>
        <h2>{props.name}</h2>
        <p>Gender: {props.gender}</p>
        <p>Birth Year: {props.birthYear}</p>
        <p>Height: {props.height} cm</p>
        <p>Mass: {props.mass} kg</p>
      </div>
    );
  }
  export default Character;
  