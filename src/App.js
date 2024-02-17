import React, {useEffect, useState} from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import DataObj from './fetchData';
import PlanetContainer from './components/planets/PlanetContainer';

import Navbar from './components/navbar.js'

const App = () => {
  const [characters, setCharacters] = useState({});
  
  let [pageNo, setPageNo] = useState(1); 
  useEffect(() => {

    
    const getPeople = async () => {
      try {
        console.log(pageNo);
        const data = await DataObj.GetPeople(pageNo);
        console.log(data);
        setCharacters(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    getPeople();
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
      <Navbar/>

    </div>
  );
}

export default App;
