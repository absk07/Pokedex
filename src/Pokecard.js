import React from 'react';
import './Pokecard.css'

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world';

const Pokecard = (props) => {

    let imgSrc = `${POKE_API}/${props.id}.svg`;

    return(
        <div className="Pokecard">
            <h1 className="Pokecard-title">{props.name}</h1>
            <img className="Pokecard-img" src={imgSrc} alt={props.name} />
            <p className="Pokecard-data Pokecard-type">Type: {props.type}</p>
            <p className="Pokecard-data Pokecard-exp">EXP: {props.exp}</p>
        </div>
    );
};

export default Pokecard;