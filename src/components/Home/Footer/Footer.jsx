import React from "react";
import css from "../Footer/footer.css";

export const Footer = () => {
  return (
    <div>
      <div className="container-fluid text-center bg-dark">
        <p>Online Store Copyright</p>
        <form className="form-inline">
          Get deals:
          <input
            type="email"
            className="form-control"
            size="50"
            placeholder="Email Address"
          />
          <button type="button" className="btn btn-dark rounded m-4">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
