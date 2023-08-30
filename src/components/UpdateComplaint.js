import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ResidentService from "../services/ResidentService";
import FooterComponent from "./FooterComponent";
import ResidentNavbar from "./ResidentNavbar";
import "../UpdateComplaint.css";

const UpdateComplaint = () => {
  const { cid } = useParams();
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("key");

  const [complaintDTO, setComplaintDTO] = useState({
    description: "",
    solutionMsg: "",
  });

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/residents/view_complaint/${cid}/?key=${loggedIn}`;

    ResidentService.getComplaintById(urlWithPrivateKey, cid)
      .then((response) => {
        const fetchedComplaint = response.data;
        setComplaintDTO({
          description: fetchedComplaint.description,
          solutionMsg: fetchedComplaint.solutionMsg,
        });
      })
      .catch((error) => {
        console.error("Error fetching complaint:", error);
      });
  }, [cid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComplaintDTO((prevComplaint) => ({
      ...prevComplaint,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    const updatedComplaint = {
      description: complaintDTO.description,
      solutionMsg: complaintDTO.solutionMsg,
    };

    const urlWithPrivateKey = `http://localhost:8083/residents/update_complaint/${cid}/?key=${loggedIn}`;

    ResidentService.updateComplaint(loggedIn, cid, updatedComplaint)
      .then(() => {
        console.log("Complaint updated successfully");
        navigate("/complaintList");
      })
      .catch((error) => {
        console.error("Error updating complaint:", error);
      });
  };

  return (
    <div className="update-complaint-body">
      <ResidentNavbar />
      
      <div className="update-complaint-form-container"> 
        <div className="update-complaint-registerbox"> 
         <img src="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/650/cached.offlinehbpl.hbpl.co.uk/news/CEM/iStock-935061536.jpg" alt="Avatar" className="update-complaint-avatar" />
          <h1>Edit Complaint</h1>
          <form>
            <p>Description</p>
            <textarea
              name="description"
              value={complaintDTO.description}
              onChange={handleChange}
              required
            />
            <p>Solution Message</p>
            <textarea
              name="solutionMsg"
              value={complaintDTO.solutionMsg}
              onChange={handleChange}
            />
            <div className="update-complaint-button-container"> 
              <button type="button" onClick={handleUpdate} className="update-complaint-register-button"> 
                Update
              </button>
              <button type="button" onClick={() => navigate("/complaintList")} className="update-complaint-cancel-button">
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

export default UpdateComplaint;
