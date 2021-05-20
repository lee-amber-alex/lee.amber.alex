import React from "react";
import Bio from "../components/Bio";
import Buttons from "../components/Buttons";
import Projects from "../components/Projects";
import Img from "../components/Img";
import "../style/porthome.css";

export default function PortHome() {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center ">
          <div className="col-md-12  aboutMe">
            <Bio />
          </div>
        </div>
        <div className="row ">
          <div className="col-md-4 buttons-home">
            <Buttons />
            <Img />
          </div>
          <div className="col-md-8 projects ">
            <header className="project-header">
              <h3 >
                My Projects
              </h3>
            </header>
            <Projects />
          </div>
        </div>
      </div>
    </>
  );
}
