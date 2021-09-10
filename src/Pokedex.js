import React from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

const Pokedex = () => {
    const pokemon = [
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65},
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 100, name: 'Voltorb', type: 'electric', base_experience: 60},
        {id: 19, name: 'Rattata', type: 'normal', base_experience: 30},
        {id: 129, name: 'Magikarp', type: 'water', base_experience: 30},
        {id: 6, name: 'Charizard', type: 'fire', base_experience: 170},
        {id: 8, name: 'Wartortle', type: 'water', base_experience: 70},
        {id: 18, name: 'Pidgeot', type: 'flying', base_experience: 130},
        {id: 68, name: 'Machamp', type: 'fighting', base_experience: 170},
        {id: 77, name: 'Ponyta', type: 'fire', base_experience: 60},
    ];

    return (
        <div className="Pokedex">
            <h1>
                <img src="Pokédex_logo.png" alt="Pokedex" />
            </h1>
            <div className="Pokedex-cards">
                {pokemon.map(p => <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />)}
            </div>
        </div>
    );
}
 
export default Pokedex;