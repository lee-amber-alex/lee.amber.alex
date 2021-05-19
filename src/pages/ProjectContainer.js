import React from "react";
import Projects from "../components/Projects";
import "../style/projects.css"

export default function ProjectContainer() {
  return (
    <div>
      <div className="container-fluid projects">
        <div className="row align-items-center">
          <div className="col-md-12 ">
            <Projects />
          </div>

        </div>
        <div className="row align-items-center">
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
}
