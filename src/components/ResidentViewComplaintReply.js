import React, { useEffect, useState } from "react";
import ResidentService from "../services/ResidentService";
import FooterComponent from "./FooterComponent";
import ResidentNavbar from "./ResidentNavbar";
import "../ResidentViewComplaintReply.css";

const ResidentViewComplaintReply = () => {
  const loggedIn = localStorage.getItem("key");
  const [complaintReplies, setComplaintReplies] = useState([]);

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/residents/view_complaint_reply/?key=${loggedIn}`;

    const fetchComplaintReplies = async () => {
      try {
        const response = await ResidentService.getComplaintRepliesForResident(urlWithPrivateKey);
        setComplaintReplies(response.data);
      } catch (error) {
        console.error("Error fetching complaint replies:", error);
      }
    };

    fetchComplaintReplies();
  }, [loggedIn]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  return (
    <div className="resident-view-complaint-reply-body">
      <ResidentNavbar />
      <div className="container">
        <h2 className="mt-4">Complaint Replies</h2>
        <table className="table table-striped resident-view-complaint-reply-table">
          <thead>
            <tr>
              <th>Name</th>
              <th className="width-complaint-date">Complaint Date</th>
              <th>Complaint Description</th>
              <th>Solution Message</th>
              <th className="width-reply-date">Reply Date</th>
              <th>Response</th>
            </tr>
          </thead>
          <tbody>
            {complaintReplies.map((reply) => (
              <tr key={reply.replyId}>
                <td>{reply.complainerName}</td>
                <td>{formatDate(reply.complaintDate)}</td>
                <td>{reply.complaintDescription}</td>
                <td>{reply.solutionMsg}</td>
                <td>{formatDate(reply.date)}</td>
                <td>{reply.response}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <FooterComponent />
    </div>
  );
};

export default ResidentViewComplaintReply;
