import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, clearCarts, deleteAllCarts, deleteOneCart } from "../../Redux/actions";

import "./cart.css";
import CartItem from "./CartItem";

export const Cart = () =>{
    const dispatch = useDispatch();


    const cart = useSelector((state) => state.cart);

    
    useEffect(() => {
        dispatch(getAllProducts());
      }, [dispatch]);
   
    const sumPrice = (amount, item) => amount + item.price * item.quantity;
    const priceTotal = cart.reduce(sumPrice, 0);
  

   
    const deleteCart = (id, all = false)=>{
        if(all){
            dispatch(deleteAllCarts(id))
        }else{
            dispatch(deleteOneCart(id))
        
        }
    }
    const clearCart = ()=>{
        dispatch(clearCarts())
    }

    return(
        <div >
            <h3>Cart</h3>
            <article className="box ">
                <button onClick={clearCart} className='btn-clear-all'>Clear Cart</button>
                { cart.length > 0 ? (
                <>
                    { cart.map((item, index)=> 
                     <CartItem
                     key={index}
                     data={item}
                     deleteCart={deleteCart}
                     
                     />)}
                <div className="cart-total">
                    <h3>Total:</h3>
                    <span className='total-pagar'>${priceTotal}.00</span>
                    {/* {(
                        cart?.reduce((amount, item) => item.price + amount, 0)
                    )} */}
                </div>
                </>
                )          
                 : (
                    <p className='cart-empty'>El carrito está vacío</p>
                )
                }
            </article>

        </div>
    )


}

export default Cart;