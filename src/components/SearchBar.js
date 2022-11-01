import React, { useState } from "react";
import { searchPokemon } from "../api";

const SearchBar = () => {
    
    const [search, setSearch] = useState("dito")

    const [pokemon, setPokemon] = useState()
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () => {
        onSearchHandler(search)
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
    }

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="buscar pokemon" onChange={onChangeHandler}/>
                {search}
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
            {pokemon ? (
                <div>
                    <div>Nome:{pokemon.name}</div>
                    <div>Peso:{pokemon.weigth}</div>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
            ) :null}
        </div>
    )
}

export default SearchBar;