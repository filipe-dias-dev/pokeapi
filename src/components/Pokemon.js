import React from "react";

const Pokemon = (props) => {
  const { pokemon } = props;
  const onHeartClick = () => {
    console.log("podefavoritar");
  };
  const heart = "❤️";
  return (
    <div className="pokemon-card" style={{border: '0.04rem solid red', borderRadius: '1% / 70%'}}>
      <div className="pokemon-image-container">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-image"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>{pokemon.id}</div>
        </div>

        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className="pokemon-type-text">
                  {type.name}
                </div>
              );
            })}
          </div>
          <div className="pokemon-heart">
          <button className="pokemon-heart-btn" onClick={onHeartClick}>
            {heart}
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
