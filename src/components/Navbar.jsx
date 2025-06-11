import React from 'react';
import './Textareas.css'


import { Link } from 'react-router';

export default function Navbar() {
  return (
  
      <>
      <div className="container1">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link" to="/about">About</Link>
                
              </div>
            </div>
          </div>
        </nav>
      </div>

      

      </>
  );
}
