import React from "react";
import { useDispatch, useSelector } from "react-redux"
import "./dashboard.css";
import { Link } from "react-router-dom";


export const Dashboard = () => {

    const logged = useSelector((state)=> state.userLogged)
    console.log(logged)

  if (logged.isAdmin){
    return (
      <div className="button-container">
        <Link to="/admin">
          <button className="addButton">Dashboard</button> 
        </Link>
      </div>
    );
  }else{
    return (
      <div className="button-container">
         <Link to="/userProfile">
        <button>Profile</button>
        </Link>
      </div>
    );
  }
  
}