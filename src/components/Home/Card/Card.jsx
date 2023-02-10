import React from "react";

const Card = ({ marca, image, price, model }) => {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <a className="card-img-tiles" href="shop-style1-ls.html">
        <img className="card-img-top" src={image} alt="cel" />
      </a>
      <div className="card-body border mt-n1 py-4 text-center">
        <h2 className="h5 mb-1">{model}</h2>
        <span className="d-block mb-3 font-size-xs text-muted">
          Starting from <span className="font-weight-semibold">{price}</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
