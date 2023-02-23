import React ,{useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCarts } from "../Redux/actions";


  
  export const PaymentReceived = () =>{

  const dispatch = useDispatch()
  const history = useHistory();

  useEffect(() => {
    dispatch(clearCarts());
  }, [dispatch]);

  return(
    <div>
      <h1>Tu pago se ha acreditado correctamente</h1>
      {setTimeout(() => {
        history.push("/home")
      }, 3000)}
    </div>
    
  )
}
export default PaymentReceived