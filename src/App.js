import React, { useEffect, useState } from "react";
import { getPokemonData, getPokemons } from "./api";
import "./App.css";
import NavBar from "./components/NavBar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";

function App() {
  const [loading, setLoding] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const fetchPokemons = async () => {
    try {
      setLoding(true);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoding(false);
    } catch (error) {
      console.log("fetchPokemon error:", error);
    }
  };
  useEffect(() => {
    console.log("carregou");
    fetchPokemons();
  }, []);

  return (
    <div>
      <NavBar />
      <SearchBar />
      <Pokedex pokemons={pokemons} loading={loading} />
    </div>
  );
}

export default App;
