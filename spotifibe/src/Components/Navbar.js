import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./Home";

class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />

            {/* <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Navbar;
