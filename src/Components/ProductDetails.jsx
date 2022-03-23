import React from 'react'
import { useParams } from "react-router-dom"
import DATA from '../Data'

const ProductDetails = () => {
  {/* Now we need a product id which is passed from product page */}
  const proid = useParams();
  const proDetail = DATA.filter(x=>x.id == proid.id)
  const product = proDetail[0]
  console.log(product);
  return (
    <>
      <div className="container p-4 mt-3">
        <div className="row">
          <div className="col-md-6">
              <img src={product.img} alt={product.title} height="500px" width="500px" />
          </div>
          <div className="col-md-6">
            <h1 className="text-danger">{product.title}</h1>
            <hr />
            <h2 className="text-info">${product.price}</h2>
            <p>{product.desc}</p>
            <button className="btn btn-outline-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails