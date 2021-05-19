import React from "react";
import resume from "../img/ALResume2021.pdf";
import ProjectContainer from "../pages/ProjectContainer";
import "../style/buttons.css";


export default function Buttons() {


  return (
    <div>
      <div className="btn-group-vertical">
        <a
          href="https://www.linkedin.com/in/leeamberalex"
          className="btn btn-secondary"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/lee-amber-alex"
          className="btn btn-secondary"
        >
          GitHub
        </a>
        
        <a  href="/#/projects" className="btn btn-secondary ">
          My Projects
        </a>
        <a href={resume} className="btn btn-secondary ">
          Resume
        </a>
        <a href="mailto:lee.amber.alex@gmail.com" className="btn btn-secondary ">
          Contact
        </a>
      </div>
    </div>
  );
}
