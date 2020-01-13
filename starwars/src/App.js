import React, { useState, useEffect} from 'react';
import Cards from "./Card"
import './App.css';
import axios from 'axios'; 

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
    .get('https://swapi.co/api/people/')
    .then(response => {
      console.log(response.data.results)
      setData(response.data.results) 
    })
    .catch(err => {
      console.log(err)
    })
}, []);

let Characters = [];

 Characters.push(data);

 Characters.map(person => {
   let character = person;
   return starWarsChar(character)  
 })
 

  function starWarsChar(props) {
    return <div className='charCard'>
              <p>Birth Year: {props.birth_year}</p>
              <p>Eye Color: {props.eye_color}</p>
              <p>Height: {props.height}</p>
              <p>Mass: {props.mass}</p>
              <p>Home World: {props.homeworld}</p>
              <p>Name: {props.name}</p>
              <p>Species: {props.species}</p>
          </div>
  } 

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Cards></Cards>
    </div>
  );
}

export default App;
