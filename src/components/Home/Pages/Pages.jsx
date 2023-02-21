import React from "react";
import "./pages.css";

export default function Pages({
  productPerPage,
  allProduct,
  paginate,
  setCurrentPage,
  currentPage,
}) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(allProduct / productPerPage); i++) {
    pageNumber.push(i); // para que el empiece en 1
  }

  const handleBack = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <button
          className="page-item productButton"
          onClick={handleBack}
        >
          Back
        </button>
        {pageNumber &&
          pageNumber.map((number) => {
            return (
              <li className="page-item" key={number}>
                <a
                  className="page-link"
                  id="pagination"
                  onClick={() => paginate(number)}
                >
                  {number}
                </a>
              </li>
            );
          })}
        <button className="productButton" onClick={handleNext}>
          Next
        </button>
      </ul>
    </nav>
  );
}
