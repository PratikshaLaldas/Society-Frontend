import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../ResidentHome.css';
import ResidentNavbar from './ResidentNavbar';
import FooterComponent from './FooterComponent';
import "../ResidentGallery.css";

const ResidentGallery = () => {
  return (
    <div className="resident-gallery gallery-background">
      <ResidentNavbar/>  
   
        <h2 className="mt-4">Gallery</h2>
        <div className="text-center mt-4 card-margin">
        <div className="row">
          <div className="col-md-4">
            <a href="/ResidentGallery" className="card gallery-card-link">
              <img src="/images/garden.jpg" className="card-img-top" alt="Meet Neighbours" style={{ height: '200px' }} />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Society Garden</h5>
              </div>
              
            </a>
          </div>
          <div className="col-md-4">
            <a href="/ResidentGallery" className="card gallery-card-link">
              <img src="/images/pool.webp" className="card-img-top" alt="View committee Members" style={{ height: '200px' }} />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Society Pool </h5>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="/ResidentGallery" className="card gallery-card-link">
              <img src="/images/hall1.png" className="card-img-top" alt="Rules & Regulations" style={{ height: '200px' }} />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Society Hall</h5>
              </div>
            </a>
          </div>
          
        </div>

        <br/>
        <div className="row">
          <div className="col-md-4">
            <a href="/ResidentGallery" className="card gallery-card-link">
              <img src="/images/holi.jpeg" className="card-img-top" alt="Meet Neighbours" style={{ height: '200px' }} />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Holi Celebration in Society</h5>
            
              </div>
              
            </a>
          </div>
          <div className="col-md-4">
            <a href="/ResidentGallery" className="card gallery-card-link">
              <img src="/images/seminar.jpeg" className="card-img-top" alt="View committee Members" style={{ height: '200px' }} />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Clean Neighbour Seminar</h5>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="/ResidentGallery" className="card gallery-card-link">
              <img src="/images/navratri.jpeg" className="card-img-top" alt="Rules & Regulations" style={{ height: '200px' }} />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Navratri Celebration in Society</h5>
              </div>
            </a>
          </div>
        </div>

        <br/>
        <div className="row">
          <div className="col-md-4">
            <a href="/ResidentGallery" className="card gallery-card-link">
              <img src="/images/environment day.jpg" className="card-img-top" alt="Meet Neighbours" style={{ height: '200px' }} />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Environment Day Drive</h5>
        
            
              </div>
              
            </a>
          </div>
          <div className="col-md-4">
            <a href="/ResidentGallery" className="card gallery-card-link">
              <img src="/images/covid vaccination drive.jpg" className="card-img-top" alt="View committee Members" style={{ height: '200px' }} />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Covid Vaccination Drive</h5>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="/ResidentGallery" className="card gallery-card-link">
              <img src="/images/ganesh fest.jpg" className="card-img-top" alt="Rules & Regulations" style={{ height: '200px' }} />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Ganeshotsav</h5>
              </div>
            </a>
          </div>
        </div> <br/>
        
        <div className="row">
          <div className="col-md-4">
            <a href="/ResidentGallery" className="card gallery-card-link">
              <img src="/images/fancy-dress.jpeg" className="card-img-top" alt="Meet Neighbours" style={{ height: '200px' }} />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Fancy Dress for Kids</h5>
        
            
              </div>
              
            </a>
          </div>
          <div className="col-md-4">
            <a href="/ResidentGallery" className="card gallery-card-link">
              <img src="/images/diwali.jpeg" className="card-img-top" alt="View committee Members" style={{ height: '200px' }} />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Diwali Celebration in Society</h5>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="/ResidentGallery" className="card gallery-card-link">
              <img src="/images/independence.jpeg" className="card-img-top" alt="Rules & Regulations" style={{ height: '200px' }} />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Independence Day Celebration</h5>
              </div>
            </a>
          </div>
        </div>
  </div>


      <FooterComponent />
    </div>
  );
};

export default ResidentGallery;
