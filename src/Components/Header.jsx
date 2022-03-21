import React from 'react'
import { NavLink } from 'react-router-dom';
// import CartBtn from "./buttons/CartBtn";
import Login from './buttons/Login'
// import Signup from "./buttons/Signup";

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/about" className="nav-link" aria-current="page">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/product" className="nav-link" aria-current="page">Product</NavLink>
        </li>

        <li className="nav-item">
        <NavLink to="/contact" className="nav-link" aria-current="page">Contact</NavLink>
        </li>
      </ul>
    <NavLink className="navbar-brand mx-auto fw-bold ms-3" to="/">FORTUNE MART</NavLink>
    <Login />
    <Signup />
    <CartBtn />
    </div>
  </div>
</nav>
    </>
  )
}

export default Header