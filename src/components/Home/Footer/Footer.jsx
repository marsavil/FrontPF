import React from "react";
import Login from "../../Login/Login";
import css from "../Footer/footer.css";

export const Footer = () => {
  return (
    <div>
      <div className="container-fluid text-center bg-dark">
        <p>Online Store Copyright</p>
        <form className="form-inline">
          Get deals:
          {/* <input
            type="email"
            className="form-control"
            size="50"
            placeholder="Email Address"
          /> */}
            {/* <Login/> */}
        </form>
      </div>
    </div>
  );
};
