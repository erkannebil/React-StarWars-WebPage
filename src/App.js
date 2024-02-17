// App.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage.jsx';
import Films from './pages/Film.jsx';
import Planets from './pages/Planets.jsx';
import Species from './pages/Species.jsx';
import Starships from './pages/Starships.jsx';
import Vehicles from './pages/Vehicles.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/mainPage" component={MainPage} />
          <Route path="/films" component={Films} />
          <Route path="/planets" component={Planets} />
          <Route path="/species" component={Species} />
          <Route path="/starships" component={Starships} />
          <Route path="/vehicles" component={Vehicles} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
