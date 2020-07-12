import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Form, Users, ListKeys, LiftingState, Redux, ComposingExtracting } from "./views";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav  } from "react-bootstrap";
// import {NavLink} from "react-bootstrap/NavLink";

function App() {
  return (
    <>
      <Router>
        <div>
          <header>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand href="#home">LoGo</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link>
                    <Link className="App-link" style={{textDecoration: 'none'}} to="/">
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="App-link" style={{textDecoration: 'none'}} to="/form">
                      Form
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="App-link" style={{textDecoration: 'none'}} to="/router-dom">
                      Router-dom
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="App-link" style={{textDecoration: 'none'}} to="/list-keys">
                      List-keys
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="App-link" style={{textDecoration: 'none'}} to="/lifting-state">
                      Lifting-State
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="App-link" style={{textDecoration: 'none'}} to="/redux">
                      Redux
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="App-link" style={{textDecoration: 'none'}} to="/composing-extracting">
                      Composing-Extracting
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </header>

          <div className="App">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/form">
                <Form />
              </Route>
              <Route path="/router-dom">
                <Users />
              </Route>
              <Route path="/list-keys">
                <ListKeys />
              </Route>
              <Route path="/lifting-state">
                <LiftingState />
              </Route>
              <Route path="/redux">
                <Redux />
              </Route>
              <Route path="/composing-extracting">
                <ComposingExtracting />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>

      <footer className='footer mt-auto py-3 bg-dark text-white'>
        <div className='container'>Footer</div>
      </footer>
    </>
  );
}

export default App;
