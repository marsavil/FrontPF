import React from "react";
import "./addNewProduct.css";
import { Link } from "react-router-dom";

export const addNewProduct = () => {
  return (
    <div className="button-container">
      <Link to="form">
        <button className="addButton">Add a new product</button>
      </Link>
    </div>
  );
};

export default addNewProduct;
