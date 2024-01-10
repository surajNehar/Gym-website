// Navbar.js
import React from 'react';
import "./navbar.css"
import { Link } from 'react-router-dom';

function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id='nav-section'>
    <div className="container">
      <Link to={"/"} className="navbar-brand" ><h3>GYM FIT</h3></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

        <div className="navbar-nav offset-3">
          <Link to={"/"} className="nav-link" aria-current="page" id='nav-content' >Home</Link>
          <Link to={"/program"} className="nav-link" id='nav-content' > Program</Link>
          <Link to={"/about"} className="nav-link" id='nav-content' >About</Link>
          <Link to={"/trainer"} className="nav-link" id='nav-content' >Trainer</Link>
          <Link to={"/pricing"} className="nav-link" id='nav-content' >Pricing</Link>

         
         </div>

         <button className=" d-flex btn btn-outline-dark offset-3 px-4" type="button">
          <Link to={"/register"} className='nav-link'  >Join-Us</Link>
        </button>

      </div>
    </div>
  </nav>
    
  );
}

export default Navbar;
