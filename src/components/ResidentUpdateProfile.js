import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; 
import ResidentService from "../services/ResidentService";
import ResidentNavbar from "./ResidentNavbar";
import FooterComponent from "./FooterComponent";
import "../ResidentUpdateProfile.css";

const ResidentUpdateProfile = () => {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("key");

  const [residentDTO, setResidentDTO] = useState({
    fName: "",
    mInit: "", // Middle Initial
    lName: "",
    email: "",
    wingNo: "",
    flatNo: "",
    floorNo: "",
    memberCount: 0,
    birthYear: new Date(),
    twoWheelerCount: 0,
    fourWheelerCount: 0,
    password: ""
    // ...and other fields you want to update
  });

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/residents/view-my-profile?key=${loggedIn}`;

    ResidentService.getMyProfile(urlWithPrivateKey)
      .then((response) => {
        console.log("Fetched resident profile:", response.data);
        setResidentDTO(response.data);
      })
      .catch((error) => {
        console.error("Error fetching resident profile:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResidentDTO((prevResident) => ({
      ...prevResident,
      [name]: value,
    }));
  };


  const handleUpdateProfile = () => {
    const urlWithPrivateKey = `http://localhost:8083/residents/update-resident-detail/${residentDTO.rId}?key=${loggedIn}`;

    ResidentService.updateResident(loggedIn, residentDTO.rId, residentDTO)
      .then(() => {
        console.log("Resident profile updated successfully");
        navigate("/ResidentViewProfile");
      })
      .catch((error) => {
        console.error("Error updating resident profile:", error);
      });
  };

  return (
    <div className="resident-update-profile-body">
    <ResidentNavbar />
    <div className="resident-update-profile-form-container">
      <div className="resident-update-profile-registerbox">
        <img
          src="images/editprofile.webp" alt="Avatar" className="resident-update-profile-avatar"
        />
        <h1 className="update-profile-font">Edit Profile</h1>
      <form>
        {/* Form fields for resident details */}
        <div className="two-fields">
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="fName"
            value={residentDTO.fName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Middle Initial</label>
          <input
            type="text"
            name="mInit"
            value={residentDTO.mInit}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lName"
            value={residentDTO.lName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={residentDTO.email}
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
            value={residentDTO.wingNo}
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
            value={residentDTO.flatNo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Floor</label>
          <input
            type="number"
            name="floorNo"
            value={residentDTO.floorNo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Member Count</label>
          <input
            type="number"
            name="memberCount"
            value={residentDTO.memberCount}
            onChange={handleChange}
          />
        </div>
        </div>
        <div className="two-fields">
        <div>
          <label>Birth Year</label>
          <input
            type="number"
            name="birthYear"
            value={residentDTO.birthYear}
            onChange={handleChange}
          />
        </div> 
        <div>
          <label>Two-Wheeler Count</label>
          <input
            type="number"
            name="twoWheelerCount"
            value={residentDTO.twoWheelerCount}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Four-Wheeler Count</label>
          <input
            type="number"
            name="fourWheelerCount"
            value={residentDTO.fourWheelerCount}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={residentDTO.password}
            onChange={handleChange}
          />
        </div>
        </div>
        {/* ...other fields */}
        <div className="resident-update-profile-button-container">
              <button
                type="button"
                className="resident-update-profile-register-button"
                onClick={handleUpdateProfile}
              >
                Update
              </button>
              <button
                type="button"
                className="resident-update-profile-cancel-button"
                onClick={() => navigate("/ResidentViewProfile")}
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

export default ResidentUpdateProfile;
