import React from "react";
import { NavLink } from "react-router-dom";
import DATA from '../Data'

const Product = () => {
  const cardItem = (item) => {
    return (
      <div className="card m-5 py-4" key={item.id} style={{width: "18rem"}}>
        <img src={item.img} className="card-img-top" alt={item.tittle} />
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead">${item.price}</p>
          <NavLink to={`/product/${item.id}`} className="btn btn-outline-success w-100 p-3">
            Buy Now
          </NavLink>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="container py-5 mt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Available Products</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">{DATA.map(cardItem)}
        </div>
      </div>
    </div>
  );
};

export default Product;
