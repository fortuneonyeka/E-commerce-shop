import React from 'react'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { delItem } from "../redux/actions/index"

const Cart = () => {
  const state = useSelector((state)=> state.addItems)
  const dispatch = useDispatch()

  const handleClose = (item) => {
    dispatch(delItem(item))
    
  }

  
  const cartItems = (cartItem) => { 
    return (
      <div className="px4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button onClick={()=>handleClose(cartItem)} className="btn btn-outline-danger btn-close float-end border border-3 border-danger" aria-label="close"></button>
          <div className="row justify-content-center">
            <div className="col-md-4 m-5">
              <img className="py-5 px-5"  width="500px" src={cartItem.img} alt={cartItem.title} />
            </div>
            <div className="col-md-4 py-5 m-5 px-5">
              <h3 className="text-dark fw-bold mx-3">{cartItem.title}</h3>
              <hr />
              <p className="mx-3 lead fw-bold">${cartItem.price}</p>
              <hr />
              <p className="mx-3 my-5  lead">{cartItem.desc}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  const empthycart = () => {
    return (
      <div className="px4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <h3 className="text-center text-warning fw-bold pt-2">Your Cart Is Empty! please choose from our list of <NavLink className="text-decoration-none" to="/product">products</NavLink> </h3>
        </div>
        </div>
    )
  }
  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink to="/checkout" className="btn btn-outline-primary w-25 mb-5 mx-auto py-3">Proceed to checkout</NavLink>
        </div>
      </div>
    )
  }
  return (
    <>
    {state.length === 0 && empthycart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  )
}

export default Cart