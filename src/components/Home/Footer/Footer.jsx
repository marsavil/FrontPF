import React from "react";
import css from "../Footer/footer.css"

export const Footer = () => {
  return (
    <div>

        <footer class="container-fluid text-center">
            <p>Online Store Copyright</p>  
                <form class="form-inline">Get deals:
                    <input type="email" class="form-control" size="50" placeholder="Email Address"/>
                        <button id="sign" type="button" class="btn btn-dark">Sign Up</button>
                </form>
        </footer>
    </div>
  );
};