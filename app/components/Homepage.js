import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className="homepage-container">
      <h1>Welcome to Daily Bread</h1>
      <Link to="/breads">
        <h2>take a look at our daily offerings</h2>
      </Link>
    </div>
  )
}

export default Homepage
