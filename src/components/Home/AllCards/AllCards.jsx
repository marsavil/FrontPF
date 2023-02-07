import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { getAllProducts } from "../../../Redux/actions";
import { Link } from "react-router-dom";
import "./allCards.css";
import Pages from "../../Home/Pages/Pages.jsx";
import Filters from "../../Filters/Filters";

export default function AllCards() {
  const dispatch = useDispatch();

  let allProducts = useSelector((state) => state.product);
  const filterProducts = useSelector((state) => state.filteredProducts);
  filterProducts.length > 0 && (allProducts = filterProducts);

  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(12);
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      <Filters />

      <Pages
        productPerPage={productPerPage}
        allProduct={allProducts.length}
        paginate={paginate}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />

      <div>
        <div>
          <div className="d-flex flex-row flex-wrap justify-content-center">
            {allProducts.length > 0 ? (
              currentProduct.map((e) => (
                <Link key={e.id} to={`/product/${e.id}`}>
                  <div>
                    <Card
                      id={e.id}
                      model={e.model}
                      marca={e.marca}
                      price={e.price}
                      image={e.image}
                    />
                  </div>
                </Link>
              ))
            ) : (
              <h2>No hay nada</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
