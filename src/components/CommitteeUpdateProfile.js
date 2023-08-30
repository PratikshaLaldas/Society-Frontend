import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; 
import CommitteeMemberService from "../services/CommitteeMemberService";
import FooterComponent from "./FooterComponent";
import CommitteeMemberNavbar from "./CommitteeMemberNavbar";
import "../CommitteeUpdateProfile.css";

const CommitteeUpdateProfile = () => {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("key");

  const [committeeDTO, setCommitteeDTO] = useState({
    fName: "",
    mInit: "", // Middle Initial
    lName: "",
    email: "",
    wingNo: "",
    flatNo: "",
    floorNo: "",
    memberCount: 0,
    password: ""
    // ...and other fields you want to update
  });

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/committee-member/view-my-profile?key=${loggedIn}`;

    CommitteeMemberService.getMyProfile(urlWithPrivateKey)
      .then((response) => {
        console.log("Fetched committee member profile:", response.data);
        setCommitteeDTO(response.data);
      })
      .catch((error) => {
        console.error("Error fetching committee member profile:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommitteeDTO((prevResident) => ({
      ...prevResident,
      [name]: value,
    }));
  };


  const handleUpdateProfile = () => {
    const urlWithPrivateKey = `http://localhost:8083/committee/update-profile/${committeeDTO.aId}?key=${loggedIn}`;
    
    CommitteeMemberService.updateCommitteeMember(loggedIn, committeeDTO.aId, committeeDTO)
      .then(() => {
        console.log("Committee profile updated successfully");
        navigate("/CommitteeViewProfile");
      })
      .catch((error) => {
        console.error("Error updating resident profile:", error);
      });
  };

  return (
    <div className="committee-update-profile-body">
      <CommitteeMemberNavbar />
      <div className="committee-update-profile-form-container">
        <div className="committee-update-profile-registerbox">
          <img
            src="images/editprofile.webp" alt="Avatar"
            className="committee-update-profile-avatar"
          />
          <h1 className="committee-edit-profile-font">Edit Profile</h1>
          <form>
            <div className="two-fields">
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  name="fName"
                  value={committeeDTO.fName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Middle Initial</label>
                <input
                  type="text"
                  name="mInit"
                  value={committeeDTO.mInit}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  name="lName"
                  value={committeeDTO.lName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={committeeDTO.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="two-fields">
              <div>
                <label>Wing No</label>
                <select
                  name="wingNo"
                  value={committeeDTO.wingNo}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Wing No</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div>
                <label>Flat No</label>
                <input
                  type="number"
                  name="flatNo"
                  value={committeeDTO.flatNo}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Floor</label>
                <input
                  type="number"
                  name="floorNo"
                  value={committeeDTO.floorNo}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Member Count</label>
                <input
                  type="number"
                  name="memberCount"
                  value={committeeDTO.memberCount}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label>Password</label><br/>
              <input
                type="password"
                name="password"
                value={committeeDTO.password}
                onChange={handleChange}
              />
            </div>
            <div className="committee-update-profile-button-container">
              <button
                type="button"
                className="committee-update-profile-register-button"
                onClick={handleUpdateProfile}
              >
                Update
              </button>
              <button
                type="button"
                className="committee-update-profile-cancel-button"
                onClick={() => navigate("/CommitteeViewProfile")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default CommitteeUpdateProfile;
