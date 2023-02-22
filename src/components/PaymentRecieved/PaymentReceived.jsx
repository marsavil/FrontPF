import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";


  
  export const PaymentReceived = () =>{

  const history = useHistory();
  

  return(
    <div>
      <h1>Que Verga</h1>
      {setTimeout(() => {
        console.log("esto es lo que se vendio",sale)
        //history.push("/home")
      }, 5000)}
    </div>
    
  )
}
export default PaymentReceived