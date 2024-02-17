import React, { useState, useEffect } from "react";
import CharacterComponent from "../components/CharacterComponent.js";
import 'bootstrap/dist/css/bootstrap.min.css'
import CharacterObj from "../fetchData.js";


const MainPage = () => {
  const [Characters, setCharacters] = useState({});
  let [pageNo, setPageNo] = useState(1);

  useEffect(() => {


    const fetchDataAndSetCharacters = async () => {
      try {
        console.log(pageNo);
        const data = await CharacterObj.GetPeople(pageNo);
        console.log(data);

        setCharacters(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchDataAndSetCharacters();
  }, [pageNo]);

  const next = () => {
    let tmp_pageNo = pageNo + 1;
    setPageNo(tmp_pageNo);
    console.log(pageNo);
  }
  const prev = () => {
    let tmp_pageNo = pageNo - 1;
    setPageNo(tmp_pageNo);
    console.log(pageNo);
  }

  return (
    <div className="App">
      <div>
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
          ))}
      </div>
    </div>
  )
}
export default MainPage;