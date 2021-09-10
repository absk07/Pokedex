import React from "react";
import "../assets/css/badgeStyles.css";
import pokemonTypeToClassname from "../pokemonTypeToClassname";

function PokemonType(props) {
  const getClassName = () => {
    return pokemonTypeToClassname[props.type] || "badge rounded-pill bg-info mx-1";
  };

  if (!props.type) {
    return null;
  }
  return (
    <span data-testid={`pokemon-type-${props.type}`} className={getClassName()}>
      {props.type}
    </span>
  );
}

export default PokemonType;
