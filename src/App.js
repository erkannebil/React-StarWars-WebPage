import React, { useState, useEffect } from "react";
import ApiObj from "./FetchData";

const App = () => {
  const [characterData, setCharacterData] = useState([ ]);

  useEffect(async () => {
    let fetchData= await ApiObj.fetchData();
    setCharacterData(fetchData);
    console.log(fetchData);
  },[]);
  
  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
    </div>
  );
}

export default App;
