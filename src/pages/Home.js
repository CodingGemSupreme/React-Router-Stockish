import React from 'react'
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Welcome To Stockish</h1>
      <h2>Your Premier Stock Hub</h2>
      <Link to="Dashboard">Click Here to See All of Your Tracked Stocks In One Place</Link>
    </div>
  )
}

export default Home