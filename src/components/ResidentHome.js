import React, { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../ResidentHome.css';
import ResidentNavbar from './ResidentNavbar';
import FooterComponent from './FooterComponent';



const ResidentHome = () => {
  useEffect(() => {
    // Initialize the carousel when the component mounts
    window.$('.carousel').carousel();
  }, []);

  const goToPreviousSlide = () => {
    window.$('.carousel').carousel('prev');
  };

  const goToNextSlide = () => {
    window.$('.carousel').carousel('next');
  };

  return (
    <div>
      <div className='carousel-container'>
      <ResidentNavbar/>
        <div id="carouselExample" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">  <div className="carousel-item active">
            <img
              className="d-block w-100 carousel-image"
              src="/images/garden.jpg"
              alt="First slide"
            />
            <div className="carousel-caption caption-middle">
              <h3 className="carousel-text font-bold">Garden View</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carousel-image"
              src="/images/pool.webp"
              alt="Second slide"
            />
            <div className="carousel-caption caption-middle">
              <h3 className="carousel-text font-bold carousel-text-black">Pool View</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 carousel-image"
              src="/images/hall1.png"
              alt="Third slide"
            />
            <div className="carousel-caption caption-middle">
              <h3 className="carousel-text font-bold carousel-text-black">Party Hall</h3>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExample"
          role="button"
          data-slide="prev"
          onClick={goToPreviousSlide}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExample"
          role="button"
          data-slide="next"
          onClick={goToNextSlide}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
      <div className="text-center mt-4">
        <div className="row">
          <div className="col-md-3">
            <a href="/ResidentViewNeighbours" className="card card-link">
              <img src="/images/neighbour.jpg" className="card-img-top" alt="Meet Neighbours" style={{ height: '200px' }} />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Meet Your Neighbours</h5>
            
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="/ViewCommitteeMember" className="card card-link">
              <img src="/images/committee.jpg" className="card-img-top" alt="View committee Members" style={{ height: '200px' }} />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">View Committee Members </h5>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="/Rules" className="card card-link">
              <img src="/images/rules.jpg" className="card-img-top" alt="Rules & Regulations" style={{ height: '200px' }} />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Rules & Regulations</h5>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a href="/ResidentGallery" className="card card-link">
              <img src="/images/gallery-home1.jpeg" className="card-img-top" alt="Rules & Regulations" style={{ height: '200px' }} />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Gallery</h5>
              </div>
            </a>
          </div>
        </div>
  </div>
  <FooterComponent/>
    </div>

      </div>
  );
};

export default ResidentHome;
