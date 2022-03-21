import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <nav className="space-x-4 items-center">
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink
          to="/about">
          About
        </NavLink>
        <NavLink
          to="/contact"
        >
        
          Contact
        </NavLink>
        <NavLink
          to="/product"
        >
        
          Product
        </NavLink>
      </nav>
    </div>
  )
}

export default Header