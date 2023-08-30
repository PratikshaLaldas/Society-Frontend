import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResidentService from "../services/ResidentService";
import Complaint from "./Complaint";
import ResidentNavbar from "./ResidentNavbar";
import "../ComplaintList.css";
import FooterComponent from "./FooterComponent";

const ComplaintList = () => {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("key");

  const [loading, setLoading] = useState(true);
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/residents/view_all_complaints/?key=${loggedIn}`;
    
    ResidentService.getAllComplaints(urlWithPrivateKey)
      .then((response) => {
        console.log("Fetched complaints:", response.data);
        setComplaints(response.data);
      })
      .catch((error) => {
        console.error("Error fetching complaints:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const deleteComplaint = (cid) => {
    const urlWithPrivateKey = `http://localhost:8083/residents/delete_complaint/${cid}/?key=${loggedIn}`;
    
    if (window.confirm("Are you sure you want to delete this complaint?")) {
      ResidentService.deleteComplaint(urlWithPrivateKey, cid)
        .then(() => {
          console.log("Complaint deleted successfully");
          setComplaints((prevComplaints) =>
            prevComplaints.filter((complaint) => complaint.cid !== cid)
          );
        })
        .catch((error) => {
          console.error("Error deleting complaint:", error);
        });
    }
  };

  return (
    <div className="complaint-list-body">
    <ResidentNavbar /> {/* Include your Navbar here */}
    <div className="container "> {/* Use Bootstrap container class */}
      <h2 className="mt-4">Complaint List</h2>
      <table className="table table-striped complaint-table">
        <thead>
          <tr>
            <th className="w-25">Complainer Name</th>
            <th >Date</th>
            <th className="w-25">Complaint Description</th>
            <th className="w-25">Solution Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint, index) => (
            <Complaint
              key={complaint.cid}
              complaint={complaint}
              deleteComplaint={deleteComplaint}
              isEvenRow={index % 2 === 0}
            />
          ))}
        </tbody>
      </table>
    </div>
    <FooterComponent /> {/* Include your Footer here */}
  </div>
  );
};

export default ComplaintList;
