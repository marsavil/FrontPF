import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCarts, getProductId } from "../../Redux/actions";
import "./detail.css";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import accounting from 'accounting-js';
import NavBar from "../NavBar/NavBar"
import Comment from "../comment/Comment.jsx"




export const DetailProduct = () => {
  
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.detail);
  
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    // dispatch(getComments(product.id))
    dispatch(getProductId(id));
  }, [dispatch, id]);
 //console.log("este id viene de la variable product en linea 17", product.id)
  // const allComments = useSelector((state) => state.comments)

  
  // console.log("soy allcomments", allComments)

  const myProduct = product;
  const handleAddToCart = (id) => {
    setCart([...cart, id]);
    dispatch(addToCarts(id));
  };
  if (!product) {
    return <div>"LOADING"</div>;
  }else{
    return (
    <div key={myProduct.id} className="detailContainer">
      <NavBar/>
      <Link to="/home">
        <button className="mt-3 back">Back</button>
      </Link>
      <div className="Detail">
        <div className="imageContainer">
          <img src={myProduct.image} alt="product" className="productImage" />
        </div>
        <div className="textContainer">
          <h2 className="texts">{myProduct.name}</h2>
          <h3 className="texts">
            {" "}
            Marca: <br /> {myProduct.marca}
          </h3>
          <h3 className="texts">
            {" "}
            Modelo: <br /> {myProduct.model}
          </h3>
          <h3 className="texts">
            {" "}
            Price: <br /> {accounting.formatMoney(myProduct.price)}
          </h3>
          <h3 className="texts">
            {" "}
            Camera: <br /> {myProduct.camera}
          </h3>
          <h3 className="texts">
            {" "}
            os: <br /> {myProduct.os}
          </h3>
          <h3 className="texts">
            {" "}
            Ram: <br /> {myProduct.ram}
          </h3>
          <h3 className="texts">
            {" "}
            Stock: <br /> {myProduct.stock}
          </h3>
          <h3 className="texts"> </h3>
          <button className="back" onClick={()=>handleAddToCart(myProduct.id)}>Add to Cart</button>
        </div>
      </div>
      <hr />
      <Comment/>
    </div>
  );
  }
  
};

export default DetailProduct;
