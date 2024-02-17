import React, { useState, useEffect } from "react";
import CharacterComponent from "./components/CharacterComponent.js";
import CharacterObj from "./fetchData.js";
import NavbarComponent from './components/Navbar.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import Films from "./pages/Films.jsx";
import Characters from './pages/MainPage.jsx';



const App = () => {
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

  return (
    <div className="App">
      
    </div>
  );
};
export default App;
