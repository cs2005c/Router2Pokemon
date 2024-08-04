import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemon(data.results));
  }, []);

  const handlePokemonClick = (index) => {
    navigate(`/pokemon/${index + 1}`);
  };

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemon.map((p, index) => (
          <li key={p.name} onClick={() => handlePokemonClick(index)}>
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
