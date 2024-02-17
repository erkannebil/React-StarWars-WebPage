//fetch data'dan şu sonuç gelecek:
//https://swapi.dev/api/people/?page=1


//https://swapi.dev/api/planets/?page=1
/*
"people": "https://swapi.dev/api/people/", 
"planets": "https://swapi.dev/api/planets/", 
"films": "https://swapi.dev/api/films/", 
"species": "https://swapi.dev/api/species/", 
"vehicles": "https://swapi.dev/api/vehicles/", 
"starships": "https://swapi.dev/api/starships/"
*/
import React from "react";

const CharacterComponent = (props) => {
  const { CharacterData } = props;
  
  const { name, height, mass, hair_color, eye_color, skin_color, birth_year, gender, homeworld, films , species, vehicles , starships } = CharacterData;
  
  return (
    <div className="container">
      <div className="Name"> {name} </div>
      <div className="Height"> {height}</div>
      <div className="Mass"> {mass}</div>
      <div className="Hair_Color"> {hair_color}</div>
      <div className="Skin_Color"> {skin_color}</div>
      <div className="Eye_Color"> {eye_color}</div>
      <div className="Birth_Year"> {birth_year}</div>
      <div className="Gender"> {gender}</div>
      <div className="Homeworld"> {homeworld}</div>

      <div className="UrlsFilms">
        <ul>
        {
            films.length > 0 &&
            films.map((item, index) => (
                <li key={index}>
                <a href={item}>{item}</a>
                </li>
            ))
        }
        </ul>
      </div>
            
      <div className="UrlsSpecies">
        <ul>
        {
            species.length > 0 &&
            species.map((item, index) => (
            <li key={index}>
              <a href={item}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

        <div className="UrlsVehicles">
        <ul>
        {
          vehicles.length > 0 &&
          vehicles.map((item, index) => (
            <li key={index}>
              <a href={item}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="UrlsStarships">
        <ul>
        {
          starships.length > 0 &&
          starships.map((item, index) => (
            <li key={index}>
              <a href={item}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default CharacterComponent;
