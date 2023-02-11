// import React, { useState } from "react";

// const Home = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [
//     "https://picsum.photos/200/300?image=10",
//     "https://picsum.photos/200/300?image=20",
//     "https://picsum.photos/200/300?image=30"
//   ];

//   const nextImage = () => {
//     setCurrentImageIndex((currentImageIndex + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length);
//   };

//   return (
//     <div>
//         <h1>Slider Wireframe</h1>
//       <img src={images[currentImageIndex]} alt="slideshow" />
//       <button onClick={prevImage}>Prev</button>
//       <button onClick={nextImage}>Next</button>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";

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
    <div>
      <h1>Pokemon Slider</h1>
      <h2>{pokemonData[currentPokemonIndex].name}</h2>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentPokemonIndex + 1}.png`} alt="pokemon" />
      <button onClick={prevPokemon}>Prev</button>
      <button onClick={nextPokemon}>Next</button>
    </div>
  );
};

export default Home;
