import React from 'react';
import { Link } from 'react-router-dom';
//import Logout from './Logout';
import "../ResidentNavbar.css";
import Logout from './Logout';

const CommitteeMemberNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-background navbar-height">
          <a className="navbar-brand" href="/ResidentHome">
            <img src="/images/logo.png" alt="Society Logo" height="70" width="108"/>
          </a>
          <div className="ml-auto">
            <ul className="navbar-nav">
              
              <li className="nav-item">
                <Link to="/CommitteeMemberBulletin" className="nav-link navbar-text-white">
                  Bulletin
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/CommitteeMemberVoting" className="nav-link navbar-text-white">
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
                  <Link to="/CommitteeCheckEventAvailability" className="dropdown-item">
                    Schedule Event
                  </Link>
                  <Link to="/CommitteeViewScheduledEvent" className="dropdown-item">
                    View Society Scheduled Events
                  </Link>
                  <Link to="/CommitteeViewAllScheduledEvent" className="dropdown-item">
                    View All Events
                  </Link>
                  <Link to="/CommitteeViewBookedSlots" className="dropdown-item">
                    View Booked Slots
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
                  <Link to="/CommitteeGetAllComplaint" className="dropdown-item">
                    View Complaints
                  </Link>
                  <Link to="/CommitteeViewAllComplaintReplies" className="dropdown-item">
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
                  <Link to="/CommitteeGetAllSuggestions" className="dropdown-item">
                    View Suggestions
                  </Link>
                  <Link to="/CommitteeViewAllSuggestionReplies" className="dropdown-item">
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
                  <Link to="/CommitteeViewAllResident" className="dropdown-item">
                    Make Bill
                  </Link>
                  <Link to="/CommitteeViewAllBill" className="dropdown-item">
                    View Bill
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
                  <Link to="/CommitteeViewProfile" className="dropdown-item">
                    Manage Profile
                  </Link>
                  <Link to="/CommitteeMemberHome" className="dropdown-item">
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

export default CommitteeMemberNavbar;
