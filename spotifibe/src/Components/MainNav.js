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
import styles from "../Navbar.css";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Collapse,
  Brand,
} from "react-bootstrap";

class MainNav extends React.Component {
  render() {
    return (
      <Router>
        <div className="navs">
          <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
            <Navbar.Brand>
              <Link to="/" exact className="navbar-brand">
                SpotiFibe
              </Link>
            </Navbar.Brand>
            <NavItem className="nav-item">
              <Link to="/" exact className="nav-link">
                Home
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link to="/convert" className="nav-link">
                Convert
              </Link>
            </NavItem>
            <NavItem className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </NavItem>
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
