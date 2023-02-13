import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCarts, getProductId } from "../../Redux/actions";
import "./detail.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import accounting from 'accounting-js';
import Cart from "../Cart/Cart";



export const DetailProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.detail);
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    dispatch(getProductId(id));
  }, [dispatch, id]);

  if (!product) {
    return <div>"LOADING"</div>;
  }

  const myProduct = product;
  const handleAddToCart = (id) => {
    setCart([...cart, id]);
    dispatch(addToCarts(id));
  };

  return (
    <div key={myProduct.id} className="detailContainer">
      <Link to="/home">
        <button className="backButton">Back</button>
      </Link>
      <div className="Detail">
        <Cart/>
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
          <h3 className="texts"> </h3>
          <button onClick={()=>handleAddToCart(myProduct.id)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
