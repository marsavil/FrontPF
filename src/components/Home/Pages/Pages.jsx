import React from "react";
import css from "../Pages/pages.css"

export default function Pages ({productPerPage, allProduct, paginate, setCurrentPage, currentPage}){
    const pageNumber = [];
    for (let i = 1; i<= Math.ceil(allProduct/productPerPage); i++){
        pageNumber.push(i)  // para que el empiece en 1
    }

    const handleBack = () => {
        currentPage > 1 && (setCurrentPage(currentPage - 1))
    }
    
      
    const handleNext = () => {
        setCurrentPage(currentPage + 1)
    }

    return(
        <nav aria-label="Page navigation example">
            
            <ul class="pagination justify-content-center">
            <button class="page-item" className="productButton" onClick={handleBack}>Back</button>
                {pageNumber && 
                    pageNumber.map(number => {
                    return (
                        <li class="page-item" key = {number}>
                        <a class="page-link" id="pagination" onClick={() => paginate(number)}>
                        {number}
                        </a>
                        </li>
                    )                   
                }) 
                }
            <button className="productButton" onClick={handleNext}>Next</button>
            </ul>
        </nav>
    )
};
