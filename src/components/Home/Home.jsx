import React from "react";
import AllCards from "../Home/AllCards/AllCards";
import Navbar from "../NavBar/NavBar.jsx";
import AddNewProduct from "../addNewProduct/AddNewProduct"
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "./Footer/Footer";
import {  getUserLogged } from "../../Redux/actions";


export const Home = () => {

  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);
  
  // const email = user ? JSON.parse(user).email : null;
  
  // dispatch(getUserLogged(email))





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
