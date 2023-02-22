import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { validateToken } from "../../Redux/actions";


export const Confirmation = () =>{

  const history = useHistory();
  const dispatch = useDispatch()
  const actualUrl = window.location.href;
  
  const token = actualUrl.slice(35)
  
  const payload = {
    token : token,
  }
  

  function handleToken(arg){
    dispatch(validateToken(arg))
  }


  return(
    <div>
      <h1>Email confirmado</h1>
      {handleToken(payload)}
      {setTimeout(() => {
        //history.push("/home")
      }, 5001)}
    </div>
    
  )
}
export default Confirmation