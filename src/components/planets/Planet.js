import React from "react";

const Planet = (props) => {
    
    const {planet} = props;

    const {name, population} = planet;

    return (
        <>
            <h1>{name}</h1>
            <p>{population}</p>
            
        </>
    )
}

export default Planet;