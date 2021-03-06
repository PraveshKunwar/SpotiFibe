import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import NavBrand from "../Styles/NavBrand";
import NavList from "../Styles/NavList";
import Processing from "./Processing";

class Navigation extends React.Component {
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
                  <Link to="/home" exact className="nav-link" style={NavList}>
                    Home/Convert
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
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/process" component={Processing} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navigation;
