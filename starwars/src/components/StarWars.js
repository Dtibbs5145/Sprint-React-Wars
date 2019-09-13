import React from 'react';

const StarWars = (props) => {
    
    return(
        <div>
            <h4>Name: {props.Data.name}</h4>
            <p>Height: {props.Data.height}</p>
            <p>Mass: {props.Data.mass}</p>
            <p>Hair Color: {props.Data.hair_color}</p>
        </div>
    )
};

export default StarWars;