import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductQuery } from "../../Redux/actions.js";
import Cart from "../Cart/Cart.jsx";
import "./navBar.css";
import User from "./user.jsx";
import { Link } from "react-router-dom";

export default function Navbar({}) {
  const dispatch = useDispatch();
  const [model, setModel] = useState("");
  const user =  useSelector((state) => state.userLogged);
  const [active, setActive] = useState(false);
  function handleInputModel(e) {
    e.preventDefault();
    setModel(e.target.value);
    console.log(model);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getProductQuery(model));
    setModel("");
    console.log(getProductQuery(model));
  }

  return (
    <section className="navbar navbar-expand-lg" id="navbar1">
      <div className="logo-Container">
        <a  href="/"> </a>
      </div>
      <div className="searchbar-container">
        <form className="d-lg-flex mb-2 mb-lg-0 mx-auto w-100" id="mobile">
          <div className="busca">
            <input
              className="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => handleInputModel(e)}
            />
            <div type="submit" onClick={(e) => handleSubmit(e)}>
              <i className="bi bi-search" id="formbusca"></i>
            </div>
          </div>
        </form>
      </div>

      <div className="login-Container">
        <div onClick={() => setActive(!active)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon-cart"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>
        <User />
        <div
          className={`container-cart-products ${active ? "" : "hidden-cart"}`}
        >
          <Cart />
        </div>
        <div>
          {!user ?
          <Link to="/login">
            <button>Log in</button>
          </Link>
          :
          <button className="btnClose">Log out</button>}
        </div>
      </div>
    </section>
  );
}
