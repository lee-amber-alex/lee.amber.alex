import React from "react";
import PortHome from "./pages/PortHome";
import ProjectContainer from "./pages/ProjectContainer"
import bg2 from "./img/bg2.jpg";
import "./App.css";
import Nav from "./nav/Nav";
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    
    <div style={{ backgroundImage: `url(${bg2})` }} >
      <Nav />
      {/* <PortHome/> */}
      <HashRouter>
        <div className="container">
          <Switch>
            <Route exact path="/" component={PortHome} />
            <Route exact path="/projects" exact component={ProjectContainer} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
