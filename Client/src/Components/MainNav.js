import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import Convert from "./Convert";
import About from "./About";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Collapse,
  Brand,
  Button,
} from "react-bootstrap";
import NavBrand from "../Styles/NavBrand";
import NavList from "../Styles/NavList";

class MainNav extends React.Component {
  render() {
    return (
      <Router>
        <div className="navs">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Brand style={NavBrand}>
              <Link to="/" exact className="navbar-brand">
                SpotiFibe
              </Link>
            </Navbar.Brand>
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <NavItem className="nav-item">
                  <Link to="/" exact className="nav-link" style={NavList}>
                    Home
                  </Link>
                </NavItem>
                <NavItem className="nav-item">
                  <Link to="/convert" className="nav-link" style={NavList}>
                    Convert
                  </Link>
                </NavItem>
                <NavItem className="nav-item">
                  <Link to="/about" className="nav-link" style={NavList}>
                    About
                  </Link>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/convert" component={Convert} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default MainNav;
