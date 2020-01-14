import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
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

const CharCard = styled.div `
display: flex;
justify
width: 29%;
background: white;
border-radius: 20px;
border: 2px solid orange;
`

let Characters = [];

 Characters.push(data);
 console.log("this is characters: ", Characters);





  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {data.map(person => {
      return <CharCard>{person.name}</CharCard>})}
    </div>
  );
}

export default App;
