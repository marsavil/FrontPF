import React from "react";
import "./cart.css"

export const CartItem =({data, deleteCart})=>{
    let {id, image, model , price, quantity} = data;
    let total = price * quantity
    return(
        <div>
             <div className='cart-product'>
                <div  > 
                   
                    <p className='titulo-producto-carrito'>
						{model}
					</p>
                    <div ><img src={image} alt="img_product" className="mediana" /></div>
                    <span className='precio-producto-carrito'>
					    ${price}.00<small> x {quantity}</small>
					</span>
                    
                    <div> Total = ${total}.00</div>
                    <div>
                    <button id="delete" onClick={()=>deleteCart(id)} className='btn-clear-all' >Delete One</button>
                    <button onClick={()=>deleteCart(id, true)}className='btn-clear-all'>Delete All</button>
                    </div>
            
             
           
                </div>
            </div>
        </div>
    )
}

export default CartItem;