import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/lee.amber.alex">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);


