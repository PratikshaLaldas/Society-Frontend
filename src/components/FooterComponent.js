import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="mt-4 footer-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <br/>
            <h5>Contact Us</h5>
            <hr className="short-hr" />
            <p className="footer-text">
              Pearl City Appartments,<br />
              Hiranandani Gardens<br />
              Powai, Mumbai - 400075<br/><br/>
              pearlcityapparments@gmail.com

            </p>
          </div>
          <div className="col-md-4">
          <br/>
            
          <h5>Amenities</h5>
            <hr className="short-hr" />
            <p className="footer-text">
              Swimming Pool<br/> 
              Club House<br/> 
              Garden<br/> 
              Fitness Center<br/>
              Sports Facilities<br/>
              Event Hall<br/>
              Children's Play Area<br/>
              </p>
          </div>

          <div className="col-md-4">
          <br/>
          <h5>Environmental Initiatives</h5>
            <hr className="short-hr" />
            <p className="footer-text">
                Solar Power Generation<br/> 
                Rainwater Harvesting<br/> 
                Waste Segregation<br/> 
                Community Garden<br/>
                Energy-Efficient Lighting<br/>
                E-Waste Recycling<br/>
                Plastic-Free Zone<br/>
                Green Roof Projects<br/>
            </p>
          </div>

          
          <div className="col-md-3">
          <br/>
            
          </div>
          <p className="footer-copyright">
      &copy; 2022 Pearl City Appartments. All Rights Reserved.</p>
        </div>
        </div>
        
    </footer>
  );
};

export default FooterComponent;
