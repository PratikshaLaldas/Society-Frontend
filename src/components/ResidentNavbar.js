import React from 'react';
import { Link } from 'react-router-dom';
//import Logout from './Logout';
import "../ResidentNavbar.css";
import Logout from './Logout';

const ResidentNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-background navbar-height">
          <a className="navbar-brand" href="/ResidentHome">
            <img src="/images/logo.png" alt="Society Logo" height="70" width="108" />
          </a>
          <div className="ml-auto">
            <ul className="navbar-nav">
              
              <li className="nav-item">
                <Link to="/ResidentBulletin" className="nav-link navbar-text-white">
                  Bulletin
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/ResidentVoting" className="nav-link navbar-text-white">
                  Voting
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle navbar-text-white"
                  href="/#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Event
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/ResidentCheckEventAvailability" className="dropdown-item">
                    Schedule Event 
                  </Link>
                  <Link to="/ResidentViewScheduledEvent" className="dropdown-item">
                    View Scheduled Event {/*for making payment later user can access this page directly */}
                  </Link>
                  <Link to="/ResidentViewPreviousScheduledEvent" className="dropdown-item">
                    View All Events
                  </Link>
                  <Link to="/ResidentViewBookedSlots" className="dropdown-item">
                    View Booked Slots
                  </Link>
                  <Link to="/ResidentViewCommitteeScheduledEvent" className="dropdown-item">
                    Committee Events
                  </Link>
                 
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle navbar-text-white"
                  href="/#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Complaint
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/RegisterComplaint" className="dropdown-item">
                    Make Complaint
                  </Link>
                  <Link to="/ComplaintList" className="dropdown-item">
                    View Complaint
                  </Link>
                  <Link to="/ResidentViewComplaintReply" className="dropdown-item">
                    View Complaint Reply
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle navbar-text-white"
                  href="/#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Suggestion Box
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/RegisterSuggestion" className="dropdown-item">
                    Drop Suggestion
                  </Link>
                  <Link to="/suggestionList" className="dropdown-item">
                    View Suggestion
                  </Link>
                  <Link to="/ResidentViewSuggestionReply" className="dropdown-item">
                    View Suggestion Reply
                  </Link>
                </div>
              </li>
              
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle navbar-text-white"
                  href="/#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Accounting
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/ResidentViewBill" className="dropdown-item">
                    View Bill
                  </Link>
                  <Link to="/ResidentViewPreviousBill" className="dropdown-item">
                    Previous Bill
                  </Link>
                </div>
              </li>
              

              <li className="nav-item dropdown nav-margin">
                <a
                  className="nav-link dropdown-toggle navbar-text-white"
                  href="/#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  My Section
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/ResidentViewProfile" className="dropdown-item">
                    Manage Profile
                  </Link>
                  <Link to="/ResidentHome" className="dropdown-item">
                    Home
                  </Link>
                </div>
              </li>
                   
              <li className="nav-item">
                <Logout />
              </li>

            </ul>
          </div>
        </nav>
      );
};

export default ResidentNavbar;
