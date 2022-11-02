import React from "react";

const NavBar = () => {
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <div>
      <nav>
        <img alt="pokeapi-new" src={logoImg} className="navbar-img" />
      </nav>
    </div>
  );
};

export default NavBar;
