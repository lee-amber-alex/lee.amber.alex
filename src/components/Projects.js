import React from "react";
import Carousel from "react-bootstrap/Carousel";
import bantr from "../img/bantr.png";
import ballyhoo from "../img/ballyhoo.png";
import gameflix from "../img/gameflix.png";
import password from "../img/password.png";
import TeamEmbed from "./TeamEmbed";
import ReadMe from "./ReadMe";
import "../style/projects.css";

export default function Projects() {
  return (
    <div >
      <Carousel >
       

        <Carousel.Item>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 ">
                <Carousel.Caption className="carousel-caption">
                  <h3>Ballyhoo Bulletin</h3>
                  <p>
                    Trade goods and services within your community at the{" "}
                    {`${" "}`}
                    <a href="https://ballyhoo-bulletin.herokuapp.com/login">
                      Ballyhoo Bulletin!
                    </a>
                    <br />
                    <b>Technologies used:</b> HTML, CSS, JavaScript, Express,
                    Bootstrap, Mongoose, Firebase, and Cloudinary. <br /> <br />
                    Visit the Ballyhoo Bulletin team github repo {`${" "}`}
                    <a href="https://github.com/Ballyhoo-Bulletin/ballyhoo-bulletin">
                      here.
                    </a>
                  </p>
                </Carousel.Caption>
              </div>
              <div className="col-md-6">
                <img src={ballyhoo} alt="Ballyhoo" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 ">
                <Carousel.Caption className="carousel-caption">
                  <h3>Bantr</h3>
                  <p>
                    Keep up with your buds using the social media app {`${" "}`}
                    <a href="https://bantr.herokuapp.com/">Bantr!</a>
                    <br />
                    <b>Technologies used:</b> HTML, CSS, JavaScript, Express,
                    Bootstrap, MySQL, and Handlebars. <br /> <br />
                    Visit the Bantr team github repo {`${" "}`}
                    <a href="https://github.com/ziieng/Bantr">here.</a>
                  </p>
                </Carousel.Caption>
              </div>
              <div className="col-md-6">
                <img src={bantr} alt="Bantr" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 ">
                <Carousel.Caption className="carousel-caption">
                  <h3>GameFlix!</h3>
                  <p>
                    Do you enjoy playing video games and watching movies? Having
                    trouble deciding what to play or watch next? Let{`${" "}`}
                    <a href="https://tommywillen.github.io/Gameflix/">GameFlix!</a> help
                    you chose your next adventure.
                    <br />
                    <b>Technologies used:</b> HTML, CSS, JavaScript, Express,
                    Bootstrap. <br /> <br />
                    Visit the GameFlix! team github repo {`${" "}`}
                    <a href="https://github.com/lee-amber-alex/Gameflix">
                      here.
                    </a>
                  </p>
                </Carousel.Caption>
              </div>
              <div className="col-md-6">
                <img src={gameflix} alt="Gameflix" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 ">
                <Carousel.Caption className="carousel-caption">
                  <h3>Password Generator</h3>
                  <p>
                    Having trouble establishing an unused unique password? Visit
                    {`${" "}`}
                    <a href="https://lee-amber-alex.github.io/Password.Generator/">
                      Password Generator
                    </a>{" "}
                    to get a customizable password.
                    <br />
                    <b>Technologies used:</b> HTML, CSS, JavaScript. <br />{" "}
                    <br />
                    Visit the Password Generator github repo {`${" "}`}
                    <a href="https://github.com/lee-amber-alex/Password.Generator">
                      here.
                    </a>
                  </p>
                </Carousel.Caption>
              </div>
              <div className="col-md-6">
                <img src={password} alt="Password" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 ">
                <Carousel.Caption className="carousel-caption">
                  <h3>Team Template Generator </h3>
                  <p>
                    Organize your team's information with this Node CLI that
                    takes in employee data and generates an HTML webpage that
                    displays summaries for each person. Watch the
                    {`${" "}`}
                    <a href="https://vimeo.com/477902553/43a74d6bde">
                      Team Template Generator
                    </a>{" "}
                    demo to preview the application.
                    <br />
                    <b>Technologies used:</b> HTML, CSS, Bootstrap JavaScript,
                    Node.js, Inquirer. <br /> <br />
                    Visit the CLI Team Template Generator github repo {`${" "}`}
                    <a href="https://github.com/lee-amber-alex/CLI.TeamGenerator.Template.Engine">
                      here.
                    </a>
                  </p>
                </Carousel.Caption>
              </div>
              <div className="col-md-6">
                <TeamEmbed />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 ">
                <Carousel.Caption className="carousel-caption">
                  <h3>README Generator </h3>
                  <p>
                    Save time by creating your project README using this
                    command-line application that quickly and easily generates a
                    high-quality README file. Watch the
                    {`${" "}`}
                    <a href="https://vimeo.com/475283514/7fb19a9a52">
                      README Generator
                    </a>{" "}
                    demo to preview the application.
                    <br />
                    <b>Technologies used:</b> HHTML, CSS, JavaScript, Node.js.{" "}
                    <br /> <br />
                    Visit the README Generator github repo {`${" "}`}
                    <a href="https://github.com/lee-amber-alex/README.Generator">
                      here.
                    </a>
                  </p>
                </Carousel.Caption>
              </div>
              <div className="col-md-6">
                <ReadMe />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
