import React from 'react';
import Pokecard from './Pokecard';
import Pokemons from '../pokemon.json';

const Pokedex = () => {
    return (
        <div className="Pokedex container">
            <div className="row g-5">
                <h1 className="h1 text-center">
                    <img src="Pokédex_logo.png" alt="Pokedex" />
                </h1>
                {Pokemons.map(p => <Pokecard id={p.id} name={p.name} type={p.type} img={p.img} />)}
            </div>
        </div>
    );
}

export default Pokedex;