import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./landing.css";
import video from "../../Media/MÃ³vil - 29326.mp4";

function Landing() {
    return (
        <header>
            <div class="container">
                <div class="overlay">
 
                    <video autoplay="autoplay" muted="muted" loop="loop">
                        <source src={video} type="video/mp4" />
                    </video>
             
                    <div class="container h-100">
                        <div class="d-flex h-100 text-center align-items-center">
                            <div class="w-100 text-white">
                                 <h1 class="display-3">Welcome</h1>
         
                                <Link to="/home"><button type="button" class="btn btn-dark">Start</button></Link>
                             </div>
      
                        </div>
     
                    </div>
     
                </div>

            </div>
        </header>
    )
}
export default Landing;
