import React from "react"; 
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductQuery } from "../../Redux/actions.js";
import "./navBar.css"


export default function Navbar(){

    const dispatch = useDispatch();
    const [model,setModel] = useState("");

    function handleInputModel(e){
        e.preventDefault();
        setModel(e.target.value);
        console.log(model);        
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getProductQuery(model));  
        setModel("") // para dejarlo vacio despues de la busqueda 
    }
    return(
      
      <section className="navbar navbar-expand-lg" id="navbar1">

        <div className="col-md-2" >
          <a href="/">LOGO</a>
        </div>
        
        <button className="navbar-toggler d-lg-none" id="main">
          <span className="navbar-toggler-icon">
            <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <ion-icon name="menu-outline"></ion-icon>
            </a>
          </span>
        </button>

        <form className="d-lg-flex mb-2 mb-lg-0 mx-auto w-100" id="mobile">
          <div className="busca">
            <input 
              className="form-control me-2 w-75" 
              type="search" 
              placeholder="Search" 
              aria-label="Search"  
              onChange={(e) => handleInputModel(e)}/>
            <div
                type="submit" 
                onClick={(e)=> handleSubmit(e)}
            ><i className="bi bi-search" id="formbusca"></i>
            </div>
          </div>
        </form>

      <div className="col-md-3">
        <div className="d-flex d-md-flex flex-row align-items-center">
          
          <div className="col-md-3" id="iconsperson" onClick="redirectBtnlogin()">
            <span className="shop-bag">
              
            </span>
         

         

          </div>

          <div className="col-md-3" id="iconscart" onClick="redirectIconCheckout()">
            <span className="shop-bag" >
              
                <div className="text-icon">
                  CART
                </div>
            </span>
          </div>
        </div>
      </div>
    </section>
    )
}
