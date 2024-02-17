import React from "react";

const MainPage = () => {
    return (
        <div>
           <NavbarComponent/>
      {Characters.previous &&
        <button onClick={prev}>PREVIOUS</button>
      }
      
      {Characters.next &&
        <button onClick={next} >NEXT</button>
      }
    
      <h1 className="Header">Karakterler</h1>
      { 
      Characters.results &&
      Characters.results.map((characters, index) => (
        <CharacterComponent key={index} CharacterData={characters} />
      )) }
        </div>
    )
}
export default MainPage;