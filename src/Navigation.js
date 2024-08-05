import React from 'react';
import { MdCall } from "react-icons/md";
import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <header className='headerclass'>
        <div className="navbar">
        <div className="nav-links">
        <h5>Better</h5>
        <a href="/">Home</a>
        <Link to="/about">About</Link>
        <Link to="/mortgage-calculator">Mortgage Calculator</Link>
        <Link to="/start-page">Start Page</Link>
      </div>
      <div className="nav-right">
        <div className='icon'>
      < MdCall />
      </div>
        <button className="sign-in-button">Sign In</button>
      </div>
    </div>
    </header>
  );
};

export default Navigation;