import React from 'react'
import Item from "./Item"
import {Outlet} from "react-router-dom"
const Home = () => {
  

  return (
    <div className="home">
      <Outlet/>
    </div>
  )
}

export default Home
