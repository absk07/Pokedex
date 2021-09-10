import React from 'react';
import PokemonType from './PokemonType';
import '../assets/css/pokecard.css';

const Pokecard = (props) => {
    const renderTypes = () => {
        if(props.type) {
          return props.type.map(type => <PokemonType key={type} type={type} />);
        }
    };

    return(
        <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="card Pokecard">
                <img src={props.img} alt={props.name} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title text-center">{props.name}</h5>
                    <p className="card-text text-center">{renderTypes()}</p>
                </div>
            </div>
        </div>
    );
};

export default Pokecard;