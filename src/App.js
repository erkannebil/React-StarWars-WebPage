import React, { useState, useEffect } from "react";
import CharacterComponent from "./components/CharacterComponent.js";
import CharacterObj from "./fetchData.js";

const App = () => {
  const [Characters, setCharacters] = useState({});
  let [pageNo, setPageNo] = useState(1); //?

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  useEffect(() => {

    
    const fetchDataAndSetCharacters = async () => {
      try {
        console.log(pageNo);
        const data = await CharacterObj.GetPeople(pageNo);
        console.log(data);
/*  
        "count": 82,
        "next": "https://swapi.dev/api/people/?page=2",
        "previous": null,
        "results": []
*/
        setCharacters(data);
       // console.log(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchDataAndSetCharacters();
  }, [pageNo]);

 const next= ()=>{
    let tmp_pageNo=pageNo +1;
    setPageNo(tmp_pageNo);
    console.log(pageNo);
  }
 const prev= ()=>{
  let tmp_pageNo=pageNo -1;
    setPageNo(tmp_pageNo);
    console.log(pageNo);
  }
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.  
  //console.log(Characters);
  return (
    <div className="App">
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
  );
};
export default App;
