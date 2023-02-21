import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./landing.css";
import video from "../../Media/MÃ³vil - 29326.mp4";

function Landing() {
  return (
    <header>
      <div className="container">
        <div className="overlay">
          <video autoplay="autoplay" muted="muted" loop="loop">
            <source src={video} type="video/mp4" />
          </video>

          <div className="container h-100">
            <div className="d-flex h-100 text-center align-items-center">
              <div className="w-100 text-white">
                <h1 className="display-3">Welcome</h1>

                <Link to="/home">
                  <button type="button" className="btn btn-dark">
                    Start
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Landing;
