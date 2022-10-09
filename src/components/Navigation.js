import React from 'react'
import { Link } from "react-router-dom";


function Navigation(props) {
  return (
    <div className="Navigation">
    <Link to="/">
      <div>Home</div>
    </Link>
    <Link to="/stocks">
      <div>Stocks</div>
    </Link>
    <Link to="/Dashboard">
        <div>Dashboard</div>
    </Link>
    <Link to ="/About">
        <div>About Us</div>
    </Link>
    
  </div>
);
};

export default Navigation