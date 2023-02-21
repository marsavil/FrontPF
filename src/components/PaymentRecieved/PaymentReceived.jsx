import React from "react";
import { Link, useHistory } from "react-router-dom";


  
  export const PaymentReceived = () =>{

  const history = useHistory();
  return(
    <div>
      <h1>Tu pago se ha acreditado correctamente</h1>
      {setTimeout(() => {
        //history.push("/home")
      }, 5000)}
    </div>
    
  )
}
export default PaymentReceived