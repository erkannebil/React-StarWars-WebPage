import React, { useState, useEffect } from "react";
import DataObj from "../../fetchData";
import Planet from "./Planet";


const PlanetContainer = (props) => {
        const {callplanet} = props

    const [planets, setPlanets] = useState({})

    useEffect(() => {
        const getPlanets = async() => {
            let planetResult = await DataObj.GetPlanets(1)
            console.log(planetResult)
            setPlanets(planetResult);
        }
        getPlanets();
    },[callplanet])

    return (
        <>
            {planets.results &&
            planets.results.map((planet, index) => {
                return ( <Planet key = {index} planet = {planet} />)
            })}
            
        </>
    )

}

export default PlanetContainer;