import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  orderByName,
  orderMarca,
  orderPrice,
} from "../../Redux/actions";

export default function Filters() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  function handleSort(e) {
    if (e.target.value === "asc" || e.target.value === "desc") {
      e.preventDefault();
      dispatch(orderByName(e.target.value));
    }
    if (e.target.value === "all") {
      e.preventDefault();
      dispatch(getAllProducts(e.target.value));
    }
  }

  function handleFilterMarca(e) {
    dispatch(orderMarca(e.target.value));
  }
  function handleFilterByPrice(e) {
    dispatch(orderPrice(e.target.value));
  }

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <select onChange={(e) => handleSort(e)}>
          <option hidden={true} value="all">
            Order
          </option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>

        <select onChange={(e) => handleFilterMarca(e)}>
          <option value="All">All</option>
          <option value="Samsung">Samsung</option>
          <option value="Apple">Apple</option>
          <option value="Huawei">Huawei</option>
          <option value="Motorola">Motorola</option>
        </select>

        <select onChange={(e) => handleFilterByPrice(e)}>
          <option value="all">All</option>
          <option value="greater">Greater price</option>
          <option value="smaller">Smaller price</option>
        </select>
      </nav>
    </div>
  );
}
