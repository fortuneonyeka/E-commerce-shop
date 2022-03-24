import React from 'react'
import { useParams } from "react-router-dom"
import { useState } from "react"
import DATA from '../Data'

const ProductDetails = () => {
  {/* Now we need a product id which is passed from product page */}
  const proid = useParams();
  const proDetail = DATA.filter(x=>x.id == proid.id)
  const product = proDetail[0]
  console.log(product);

  const [cartBtn, setCartBtn] = useState("Add To Cart")
  const [count, setCount] = useState(0)
  const handleCart = (product) => {
    if (cartBtn === "Add To Cart") {
      setCartBtn("Remove From Cart")
    }else{
      setCartBtn("Add To Cart")
    }
    
  }
  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center  my-5 product">
              <img src={product.img} alt={product.title} height="500px" width="500px" />
          </div>
          <div className="col-md-6 my-5 py-3">
            <h1 className="text-danger fw-bold">{product.title}</h1>
            <hr />
            <h2 className="text-info my-3">${product.price}</h2>
            <p className="lead">{product.desc}</p>
            <button onClick={() =>handleCart(product)} className="btn btn-outline-primary my-2">{cartBtn}</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails