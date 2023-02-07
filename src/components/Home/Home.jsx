import React from "react";
import AllCards from "../Home/AllCards/AllCards";
import Navbar from "../NavBar/NavBar.jsx";
import AddNewProduct from "../addNewProduct/AddNewProduct"
import Filters from "../Filters/Filters.jsx"
import "./home.css";
import { Footer } from "./Footer/Footer";


export const Home = ({setCurrentPage}) => {
  return (
    <div>
      <Navbar />
      <AllCards />
      <AddNewProduct/>
      <Footer/>
    </div>
  );
};

export default Home;
