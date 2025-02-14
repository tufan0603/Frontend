import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

function Home() {
  return (
    <div className="container-fluid home-container-fluid">
      <div className="container">
        <div className="row home-element">
          <div className="col-md-6">
            <Link to={"/skills"}>
              <button className="elements-link">Skills</button>
            </Link>
          </div>
          <div className="col-md-6">
            <Link to={"/projects"}>
              <button className="elements-link">Projects</button>
            </Link>
          </div>
          <div className="col-md-6">
            <Link to={"/resume"}>
              <button className="elements-link">Resume</button>
            </Link>
          </div>
          <div className="col-md-6">
            <Link to={"/message"}>
              <button className="elements-link">Messages</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
