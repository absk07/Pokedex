import React from 'react';
import Pokecard from './Pokecard';
import Pokemons from '../pokemon.json';

const Pokedex = () => {
    return (
        <div className="Pokedex container my-4">
            <div className="container">
                <h1 className="text-center">
                    <img src="Pokédex_logo.png" className="img-fluid" alt="Pokedex" />
                </h1>
            </div>
            <div className="row g-5">
                {Pokemons.map(p => <Pokecard id={p.id} name={p.name} type={p.type} img={p.img} />)}
            </div>
        </div>
    );
}

export default Pokedex;