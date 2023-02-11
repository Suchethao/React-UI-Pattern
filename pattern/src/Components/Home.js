

import React, { useState, useEffect } from "react";
import './Home.css';

const Home = () => {
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(response => response.json())
      .then(data => {
        setPokemonData(data.results);
      });
  }, []);

  const nextPokemon = () => {
    setCurrentPokemonIndex((currentPokemonIndex + 1) % pokemonData.length);
  };

  const prevPokemon = () => {
    setCurrentPokemonIndex((currentPokemonIndex + pokemonData.length - 1) % pokemonData.length);
  };

  if (!pokemonData.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemon-container">
    <h2 className="pokemon-name">{pokemonData[currentPokemonIndex].name}</h2>
    <img className="pokemon-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentPokemonIndex + 1}.png`} alt="pokemon" />
    <div className="arrow-container">
      <button className="prev-arrow" onClick={prevPokemon}>⟵</button>
      <button onClick={nextPokemon}>⟶</button>
    </div>
  </div>
  );
};

export default Home;
