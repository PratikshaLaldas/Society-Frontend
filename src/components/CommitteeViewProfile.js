import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CommitteeMemberService from "../services/CommitteeMemberService";
import FooterComponent from "./FooterComponent";
import CommitteeMemberNavbar from "./CommitteeMemberNavbar";
import "../CommitteeViewProfile.css";

const CommitteeViewProfile = () => {
  const loggedIn = localStorage.getItem("key");

  const [loading, setLoading] = useState(true);
  const [committeeProfile, setCommitteeProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/committee-member/view-my-profile?key=${loggedIn}`;

    CommitteeMemberService.getMyProfile(urlWithPrivateKey)
      .then((response) => {
        console.log("Fetched resident profile:", response.data);
        setCommitteeProfile(response.data);
      })
      .catch((error) => {
        console.error("Error fetching resident profile:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="committee-view-profile-body">
      <CommitteeMemberNavbar />
      <div className="committee-view-profile-form-container">
        <div className="committee-view-profile-registerbox">
          <img src="images/myprofile.png" alt="Avatar" className="committee-view-profile-avatar" />
          <h1 className="committee-profile-font">My Profile</h1>
          <div className="two-fields">
            <div>
              <p><strong>Name:</strong> {`${committeeProfile.fName} ${committeeProfile.mInit} ${committeeProfile.lName}`}</p>    
              <p><strong>Floor:</strong> {committeeProfile.floorNo}</p>
              {/* <p><strong>Password:</strong> {committeeProfile.password}</p> */}
            </div>
            <div>
            <p><strong>Email:</strong> {committeeProfile.email}</p>
            <p><strong>Flat:</strong> {committeeProfile.flatNo}</p>
              
            </div>
            <div>
            <p><strong>Wing:</strong> {committeeProfile.wingNo}</p>
            <p><strong>Member Count:</strong> {committeeProfile.memberCount}</p>
    
            </div>
          </div>
          <div className="committee-view-profile-button-container"> 
          <button
                type="button"
                className="committee-view-profile-update-profile-button" 
                onClick={() => navigate("/CommitteeUpdateProfile")}
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

export default CommitteeViewProfile;
