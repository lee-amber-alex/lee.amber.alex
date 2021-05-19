import React from "react";
import aws from "../img/aws.png";
import uw from "../img/uw.png";
import "../style/img.css";

export default function Img() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-5 ">
            <img src={aws} alt="aws cert" className="img-cert" />
          </div>

          <div className="col-md-7 ">
            <img src={uw} alt="uw cert" className="img-cert-UW" />
          </div>
        </div>
      </div>
    </div>
  );
}
