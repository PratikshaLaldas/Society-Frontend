import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResidentService from "../services/ResidentService"; // Import your API methods
import ResidentNavbar from "./ResidentNavbar";
import FooterComponent from "./FooterComponent";
import "../RegisterComplaint.css";

const RegisterComplaint = () => {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("key"); // Assuming you store the authentication key in localStorage

  const [complaintDTO, setComplaintDTO] = useState({
    // Define your complaintDTO properties here
    // For example:
    description: "",
    solutionMsg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComplaintDTO((prevComplaint) => ({
      ...prevComplaint,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlWithPrivateKey = `http://localhost:8083/residents/register_complaint/?key=${loggedIn}`;

    // Call your API method to register the complaint
    ResidentService.registerComplaint(urlWithPrivateKey, complaintDTO)
      .then((response) => {
        console.log("loggedIn key:", loggedIn);
        console.log("Complaint registered successfully:", response.data);
        navigate("/ComplaintList"); // Navigate to the GetAllComplaints page
      })
      .catch((error) => {
        console.error("Error registering complaint:", error);
        // Handle the error appropriately
      });
  };

  return (
    <div className="complaint-body">
    <ResidentNavbar />
    <div className="complaint-form-container">
      <div className="complaint-registerbox">
      <img src="images/complaint.webp" alt="Avatar" className="complaint-avatar" />
        <h1>Register a Complaint</h1>
        <form onSubmit={handleSubmit}>
          <p>Description</p>
          <textarea
            name="description"
            value={complaintDTO.description}
            onChange={handleChange}
            placeholder="Enter Description"
            required
          />
          <p>Solution Message (if any)</p>
          <textarea
            name="solutionMsg"
            value={complaintDTO.solutionMsg}
            onChange={handleChange}
            placeholder="Enter Solution Message"
          />
          <div className="complaint-button-container">
            <button type="submit" className="complaint-register-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    <FooterComponent />
  </div>
  );
};

export default RegisterComplaint;
