import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import StarWars from './components/StarWars';

const App = () => {
  const [starWarsData, setStarWarsData] = useState([]);
  console.log(starWarsData);

  useEffect(() => {
    axios
    .get('https://swapi.co/api/people')
    .then(res => {
      console.log(res);
      setStarWarsData(res.data.results)
    });
  }, []);


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {starWarsData.map((data, i) => {
        return <StarWars Data={data} key={i} />
      })}
    </div>
  );
}

export default App;
