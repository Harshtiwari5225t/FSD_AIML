import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to ="/">Home</Link>
      <Link to ="/mycart">Cart</Link>
      <Link to ="/myorders">Order</Link>
      <Link to ="/settings">Settings</Link>
      <Link to ="/profile">Profile</Link>
      <Link to ="/logout">Logout</Link>
    </div>
  )
}

export default Navbar
