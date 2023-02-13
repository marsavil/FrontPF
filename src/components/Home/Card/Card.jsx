import React from "react";
import { Link } from "react-router-dom";


const Card = ({ id, image, price, model , handleAddToCart}) => {
  

  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <a className="card-img-tiles" >
        <img className="card-img-top" src={image} alt="cel" />
      </a>
      <div className="card-body border mt-n1 py-4 text-center">
      <Link key={id} to={`/product/${id}`}><h2 className="h5 mb-1">{model}</h2></Link>
        <span className="d-block mb-3 font-size-xs text-muted">
          Starting from <span className="font-weight-semibold">{price}</span>
        </span>
        <button onClick={() => handleAddToCart(id)} 
                className="btn btn-pill btn-outline-primary btn-sm">
          Add
        </button>
      </div>
    </div>
  );
};

export default Card;
