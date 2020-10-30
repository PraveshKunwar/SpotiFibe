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
import "../Styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <div className="Nav-div">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
              SpotiFibe
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <NavLink to="/">
                    <a class="nav-link" href="#">
                      Home<span class="sr-only">(current)</span>
                    </a>
                  </NavLink>
                </li>
                <NavLink to="/convert">
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Converter
                    </a>
                  </li>
                </NavLink>
                <NavLink to="/about">
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      About
                    </a>
                  </li>
                </NavLink>
              </ul>
            </div>
          </nav>
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

export default Navbar;
