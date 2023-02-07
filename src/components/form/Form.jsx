import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts , postProduct} from "../../Redux/actions";
import "./form.css"

// function validate(input){
//     const errors = {};
//     if (!input.name || input.name.length < 4) {
//         errors.name = "The name must be more than four letters";
//     }
//     if(!input.hp || input.hp < 0 || input.hp > 150){
//         errors.hp = "Hp must be between 1 - 150";
//     }
//     if(!input.attack || input.attack < 0 || input.attack > 150){
//         errors.attack = "Attack must be between 1 - 150";
//     }
//     if(!input.defense || input.defense < 0 || input.defense > 150){
//         errors.defense = "Defense must be between 1 - 150";
//     }
//     if(!input.speed || input.speed < 0 || input.speed > 150){
//         errors.speed = "Speed must be between 1 - 150";
//     }
//     if (input.types.length === 0) {
//         errors.types = "Must have at least one type";
//     }
//     return errors;
// }

export default function Form(){

    const dispatch = useDispatch();
    
    const history = useHistory();

    const [input , setInput] = useState({
        marca: "",
        model: "",
        condition: "",
        price: "",
        ram: "",
        camera: "",
        image: "",
        os: "",
        stock: "",
    }   )
    const [errors, setErrors] = useState({firstTry:true});

    useEffect(()=>{
        dispatch(getAllProducts());
     },[]);
    
    // useEffect(() => {
    //     setErrors(
    //       validate({
    //         ...input,
    //       })
    //     );
    //   }, [input]);

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    // if(errors.firstTry){
    //     setErrors(validate({
    //         ...input,
    //         [e.target.name]: e.target.value
    //         })
    //     )}
    }
   
    // function handleDeleteType(e){
    //     setInput({
    //         ...input,
    //         types: input.types.filter((t) => t !== e),
    // });
          
    // }
    function handleSubmit(e){
        e.preventDefault();
            dispatch(postProduct(input))
            alert("Success")
            setInput({
                marca: "",
                model: "",
                condition: "",
                price: "",
                ram: "",
                camera: "",
                image: "",
                os: "",
                stock: "",
            });
          
            history.push("/home")  //cuando crea el personaje se redirige a la pag principal
       }

    function handleCheckErrors(e){
        e.preventDefault();
        // setErrors(validate({
        //     ...input,
        //     [e.target.name]: e.target.value,
            
        // }))
        handleSubmit(e)
    }
    
    return(
        <div>
            <div >
                <Link to="/home">
                <button >Return to home</button>
                </Link>
            </div>
            
            <div className="contGral">
                <div className="card">
                {/* <img src={pikachu} alt="pikachu" className="pikachu" /> */}
                    <div className="contTitle">
                        <div className="title">Create product</div>
                    </div>
                
            <form onSubmit={(e)=> handleSubmit(e)}>
                <div className="form">
                    <div className="izq">
                        <div>
                        <div>Marca:</div>
                         <input
                            type="text"
                            value={input.marca}
                            name="marca"
                            onChange={(e) => handleChange(e)}
                            placeholder="marca"
                            className="inputs"
                         />
                    {errors.marca && (<div className="error">{errors.marca}</div>)}
                        </div>

                        <div>
                        <div>Model:</div>
                    <input
                        type="text"
                        value={input.model}
                        name="model"
                        onChange={(e) => handleChange(e)}
                        placeholder="Model"
                        className="inputs"
                    />
                    {errors.model && (<div className="error">{errors.model}</div>)}
                        </div>

                        <div>
                        <div>Price:</div>
                    <input
                        type="number"
                        value={input.price}
                        name="price"
                        onChange={(e) => handleChange(e)}
                        placeholder="Price"
                        className="inputs"
                    />
                        {errors.price && (<div className="error">{errors.price}</div>)}
                        </div>
                        
                        <div>
                        <div>Condition:</div>
                        <input
                        type="text"
                        value={input.condition}
                        name="condition"
                        onChange={(e) => handleChange(e)}
                        placeholder="condition"
                        className="inputs"
                    />
                        {errors.condition && (<div className="error">{errors.condition}</div>)}
                        <div>Ram:</div>
                        <input
                        type="text"
                        value={input.ram}
                        name="ram"
                        onChange={(e) => handleChange(e)}
                        placeholder="ram"
                        className="inputs"
                    />
                    {errors.ram && (<div className="error">{errors.ram}</div>)}
                        </div>
                    </div>

                    <div className="der">

                        <div>
                        <div>Camera:</div>
                        <input
                            type="text"
                            value={input.camera}
                            name="camera"
                            onChange={(e) => handleChange(e)}
                            placeholder="pixeles"
                            className="inputs"
                        />
                        {errors.camera && (<div className="errors">{errors.camera}</div>)}
                        </div>

                        <div>
                        <div>Stock:</div>
                        <input
                            type="text"
                            value={input.stock}
                            name="stock"
                            onChange={(e) => handleChange(e)}
                            placeholder="stock"
                            className="inputs"
                        />
                        {errors.stock && (<div>{errors.stock}</div>)}
                        </div>

                        <div>
                        <div>Os</div>
                        <input
                            type="text"
                            value={input.os}
                            name="os"
                            onChange={(e) => handleChange(e)}
                            placeholder="Os"
                            className="inputs"
                        />
                          {errors.height && (<div>{errors.height}</div>)}
                        </div>

                        <div>
                        <div>Image:</div>
                        <input
                            type="text"
                            value={input.image}
                            name="image"
                            onChange={(e) => handleChange(e)}
                            placeholder="URL"
                            className="inputs"
                        />
                        {errors.image && (
                            <div className="error">{errors.image}</div>
                        )}
                        </div>
                        
                        <button id="bt" className="button" onClick={e => handleCheckErrors(e)}>Create</button>
                    </div>
                </div>
            </form>

                </div>
            </div>
        <form >
            <div>          
            </div>

        </form>
        </div>
    )
}