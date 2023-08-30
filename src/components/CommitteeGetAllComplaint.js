import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommitteeMemberService from "../services/CommitteeMemberService";
import CommitteeMemberNavbar from "./CommitteeMemberNavbar";
import FooterComponent from "./FooterComponent";
import "../CommitteeGetAllComplaint.css";
import { FaReply } from "react-icons/fa";


const CommitteeGetAllComplaint = () => {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("key");

  const [loading, setLoading] = useState(true);
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/committee-member/view_all_complaints?key=${loggedIn}`;
    
    CommitteeMemberService.getAllComplaintsOfAllMember(urlWithPrivateKey)
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

  const navigateToAddReply = (cid) => {
    navigate(`/committeeAddComplaintReply/${cid}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  return (
    <div className="committee-all-complaint-body">
    <CommitteeMemberNavbar />
    <div className="container">
      <h2 className="mt-4">Complaint List</h2>
      {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="table table-striped committee-all-complaint-table">
          
        <thead>
          <tr>
            <th>Complainer Name</th>
            <th>Date of Complaint</th>
            <th>Complaint Description</th>
            <th>Solution Message</th>
            <th className="width-committee-complaint-action">Actions</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map((complaint) => (
            <tr key={complaint.cid}>
              <td>{complaint.complainerName}</td>
              <td>{formatDate(complaint.date)}</td>
              <td>{complaint.description}</td>
              <td>{complaint.solutionMsg}</td>
              <td>
              <button onClick={() => navigateToAddReply(complaint.cid)} className="reply-button">
                <FaReply />&nbsp; Reply
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        )}
    </div>
    <FooterComponent/>
    </div>
  );
};

export default CommitteeGetAllComplaint;
