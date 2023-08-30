import React, { useEffect, useState } from "react";
import ResidentService from "../services/ResidentService";
import { useParams, useNavigate } from "react-router-dom";
import ResidentNavbar from "./ResidentNavbar";
import FooterComponent from "./FooterComponent";
import "../ResidentViewProfile.css";

const ResidentViewProfile = () => {
  const loggedIn = localStorage.getItem("key");

  const [loading, setLoading] = useState(true);
  const [residentProfile, setResidentProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/residents/view-my-profile?key=${loggedIn}`;

    ResidentService.getMyProfile(urlWithPrivateKey)
      .then((response) => {
        console.log("Fetched resident profile:", response.data);
        setResidentProfile(response.data);
      })
      .catch((error) => {
        console.error("Error fetching resident profile:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="resident-view-profile-body"> {/* Reuse the same class name */}
    <ResidentNavbar />
    <div className="resident-view-profile-form-container"> {/* Reuse the same class name */}
      <div className="resident-view-profile-registerbox"> {/* Reuse the same class name */}
      <h1 className="profile-font">My Profile</h1>
      <img src="images/myprofile.png" alt="Avatar" className="resident-view-profile-avatar" />
          <div className="two-fields"> {/* Add this container div */}
            <div>
              <p><strong>Name:</strong> {`${residentProfile.fName} ${residentProfile.mInit} ${residentProfile.lName}`}</p>    
              <p><strong>Wing:</strong> {residentProfile.wingNo}</p>
              <p><strong>Member Count:</strong> {residentProfile.memberCount}</p>
              {/* <p><strong>Password:</strong> {residentProfile.password}</p> */}
            </div>
            <div>
            <p><strong>Email:</strong> {residentProfile.email}</p>
              <p><strong>Flat:</strong> {residentProfile.flatNo}</p>
              <p><strong>Two-Wheeler Count:</strong> {residentProfile.twoWheelerCount}</p>
              
            </div>
            <div>
              <p><strong>Birth Year:</strong> {residentProfile.birthYear}</p>
              <p><strong>Floor:</strong> {residentProfile.floorNo}</p>
              <p><strong>Four-Wheeler Count:</strong> {residentProfile.fourWheelerCount}</p>
      
            </div>
          </div>
          <div className="resident-view-profile-button-container"> 
          <button
                type="button"
                className="resident-view-profile-update-profile-button" 
                onClick={() => navigate("/ResidentUpdateProfile")}
              >
                Update Profile
              </button>
          </div>
     
      </div>
    </div>
    <FooterComponent />
  </div>
  );
};

export default ResidentViewProfile;
