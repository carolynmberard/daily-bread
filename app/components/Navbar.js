import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
      <Link to="/">Daily Bread</Link>
      </div>
      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/breads">Our Breads</Link>
      </div>
    </nav>
  )
}

export default Navbar
