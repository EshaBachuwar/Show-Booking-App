import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
// import "./navbar.css"
export const Navbar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg bg-dark ">
    <div className="container-fluid">
      <Link className="navbar-brand text-white mx-3 " to='/'><h1>Showzzz</h1></Link>
      <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" ></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-">
          <li className="nav-item">
            <Link className="nav-link active text-white " aria-current="page" to="/"><h5>Home</h5></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-white " aria-current="page" to="/shows"><h5>Your shows</h5></Link>
          </li>
         
        </ul>
        
      </div>
    </div>
  </nav></div>
  )
}
