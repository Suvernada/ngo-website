import React from 'react'
import banner1 from "../../images/children.jpeg"
import banner2 from "../../images/education.jpg"
import "./carousel.css";

const Carousel = () => {
  return (
    <div id="topHomepageCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner1} className="d-block w-100" alt="banner-1"/>
      <div className="carousel-caption d-none d-md-block text-start">
        <h1 className='carousel-heading'>Suvernada Foundation</h1>
        <h1 className='carousel-heading'>Feel the difference</h1>
        <p>Lets make the world a better place.</p>
        <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#donationModal">Donate now</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={banner2} className="d-block w-100" alt="banner-1"/>
      <div className="carousel-caption d-none d-md-block text-start">
      <h1 className='carousel-heading'>Welcome to</h1>
        <h1 className='carousel-heading'>Suvernada Foundation</h1>
        <p>Lets make the world a better place.</p>
        <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#donationModal">Donate now</button>
    </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#topHomepageCarousel" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#topHomepageCarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel