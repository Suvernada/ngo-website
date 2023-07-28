import React from 'react'
import "./header.css";
import { useNavigate } from 'react-router-dom';
import logo from "../../images/logo.png"

const Header = () => {
  const navigate=useNavigate();
  return (<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" onClick={()=>{navigate("/")}}><img src={logo} alt="ngo-logo"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex-grow-0" id="navbarNavAltMarkup">
      <ul className="navbar-nav">
        <li className='nav-item'><a className="nav-link" onClick={()=>{navigate("/")}}>Home</a></li>
        <li className='nav-item'><a className="nav-link" onClick={()=>{navigate("/about")}}>About us</a></li>
        <li className='nav-item'><a className="nav-link" onClick={()=>{navigate("/causes")}}>Platform</a></li>
        <li className='nav-item'><a className="nav-link" onClick={()=>{navigate("/events")}}>Our Work</a></li>
        <li className='nav-item'><a className="nav-link" onClick={()=>{navigate("/notice")}}>Notice</a></li>
        <li className='nav-item'><a className="nav-link" onClick={()=>{navigate("/contactus")}}>Contact us</a></li>
        <button className='btn btn-primary btn-donate' data-bs-toggle="modal" data-bs-target="#donationModal">+ Donate now</button>
      </ul>
    </div>
  </div>
</nav>)
}

export default Header