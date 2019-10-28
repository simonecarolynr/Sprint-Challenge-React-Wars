import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'; 

const App = () => {
  const [data, setData] = useState({
    
  });
  useEffect(() => {
    const fetchData = async () => {
    const result = await axios(
      'https://swapi.co/api/people/',
      );

      setData(result.data.results);
    }
   
      fetchData();


  });

  //let container = document.getElementById('root')
  //container.append(starWarsChar(result.data.results))

 let Persons = [];

 Persons.push(data);

 Persons.map(person => {
   return starWarsChar(person);
   
 })

  function starWarsChar(Object) {
    const charCard = document.createElement('div')
    let birthYear = document.createElement('p')
    let created = document.createElement('p')
    let edited = document.createElement('p')
    let eyeColor = document.createElement('p')
    let films = document.createElement('p')
    let gender = document.createElement('p')
    let hairColor = document.createElement('p')
    let height = document.createElement('p')
    let homeWorld = document.createElement('p')
    let mass = document.createElement('p')
    let name = document.createElement('p')
    let skinColor = document.createElement('p')
    let species = document.createElement('p')
    let starships = document.createElement('p')
    let vehicles = document.createElement('p')

    //add class lists for styling purposes here

    //text content
    birthYear.textContent = Object.birth_year;
    created.textContent = Object.created;
    edited.textContent = Object.edited;
    eyeColor.textContent = Object.eye_color;
    gender.textContent = Object.gender;
    hairColor.textContent = Object.hair_color;
    height.textContent = Object.height;
    homeWorld.textContent = Object.homeworld;
    mass.textContent = Object.mass;
    name.textContent = Object.name;
    skinColor.textContent = Object.skin_color;
    species.textContent = Object.species;

    
    charCard.appendChild(birthYear);
    charCard.appendChild(created);
    charCard.appendChild(edited);
    charCard.appendChild(eyeColor);
    charCard.appendChild(films);
    charCard.appendChild(gender);
    charCard.appendChild(hairColor);
    charCard.appendChild(height);
    charCard.appendChild(homeWorld);
    charCard.appendChild(mass);
    charCard.appendChild(name);
    charCard.appendChild(skinColor);
    charCard.appendChild(species);
    charCard.appendChild(starships);
    charCard.appendChild(vehicles);

    return charCard;
  } 

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    
    </div>
  );
}

export default App;
