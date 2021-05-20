import React from "react";
// import PortHome from "./pages/PortHome";
// import ProjectContainer from "./pages/ProjectContainer";
import Home from "./pages/Home"
import bg2 from "./img/bg2.jpg";
import "./App.css";
import Nav from "./nav/Nav";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Route, Switch} from "react-router-dom";

function App() {

  return (
    <div style={{ backgroundImage: `url(${bg2})` }}>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route exact path="/#/" component={PortHome}/> */}
        {/* <Route path="/projects"  component={ProjectContainer}/> */}
      </Switch>
    </div>
  );
}

export default App;
