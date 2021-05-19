import React from "react";
import Bio from "../components/Bio";
import Buttons from "../components/Buttons";
import Img from "../components/Img";
import "../style/porthome.css";

export default function PortHome() {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-12 row-container">
            <div className="row">
              <div className="col-md-6 aboutMe">
                <Bio />
              </div>
              <div className="col-md-6 projects ">
                <Buttons />
                <Img />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
