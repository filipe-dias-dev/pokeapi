import React, { useState } from "react";

const SearchBar = () => {
    const[search, setSearch] = useState("dito")

    const onChangeHandler = (e) => {
        console.log("pokemon:", e.target.value)
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () => {
        console.log("pokemon:", search)
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
        </div>
    )
}

export default SearchBar;