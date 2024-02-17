import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import PlanetContainer from './planets/PlanetContainer';



function ColorSchemesExample() {
  const characters = [{ name: 'Luke Skywalker' }, { name: 'Darth Vader' }];

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">StarWarsWorld</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/planets">Planets</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

      <Switch>
        
        <Route path="/planets">
          <PlanetContainer callplanet={"callplanet"} />
        </Route>
        <Route path="/planets">
          
        </Route>
      </Switch>
    </>
  );
}

export default ColorSchemesExample;
