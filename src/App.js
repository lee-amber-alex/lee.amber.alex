import React from "react";
import PortHome from "./pages/PortHome";
import ProjectContainer from "./pages/ProjectContainer";
import bg2 from "./img/bg2.jpg";
import "./App.css";
import Nav from "./nav/Nav";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div style={{ backgroundImage: `url(${bg2})` }}>
      <Router basename={process.env.PUBLIC_URL}>
        <Nav />
        <Switch>
          <Route exact path="/" component={PortHome} />
          <Route path={process.env.PUBLIC_URL + "/projects"} component={ProjectContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
