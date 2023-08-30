import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommitteeMemberService from "../services/CommitteeMemberService";
import CommitteeUpdateComplaintReply from "./CommitteeUpdateComplaintReply"; // Make sure to import the correct path
import FooterComponent from "./FooterComponent";
import { FaTrash, FaPencilAlt, FaReply } from "react-icons/fa";
import CommitteeMemberNavbar from "./CommitteeMemberNavbar";
import "../CommitteeViewAllComplaintReplies.css";


const CommitteeViewAllComplaintReplies = () => {
  const loggedIn = localStorage.getItem("key");

  const [loading, setLoading] = useState(true);
  const [complaintReplies, setComplaintReplies] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/committee-member/view_all_complaint_replies?key=${loggedIn}`;

    CommitteeMemberService.getAllComplaintReplies(urlWithPrivateKey)
      .then((response) => {
        console.log("Fetched complaint replies:", response.data);
        setComplaintReplies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching complaint replies:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDeleteReply = (replyId) => {
    const urlWithPrivateKey = `http://localhost:8083/committee-member/delete_complaint_reply/${replyId}?key=${loggedIn}`;

    if (window.confirm("Are you sure you want to delete this reply?")) {
      CommitteeMemberService.deleteComplaintReply(urlWithPrivateKey, replyId)
        .then(() => {
          console.log("Complaint reply deleted successfully");
          setComplaintReplies((prevReplies) =>
            prevReplies.filter((reply) => reply.replyId !== replyId)
          );
        })
        .catch((error) => {
          console.error("Error deleting complaint reply:", error);
        });
    }
  };

  {/*const handleUpdateReply = (replyId, updatedReply) => {
    const urlWithPrivateKey = `http://localhost:8083/committee-member/update_complaint_reply/${replyId}?key=${loggedIn}`;

    CommitteeMemberService.updateComplaintReply(loggedIn, replyId, updatedReply)
      .then(() => {
        console.log("Complaint reply updated successfully");
        // Update the state with the updated reply
        setComplaintReplies((prevReplies) =>
          prevReplies.map((reply) =>
            reply.replyId === replyId ? { ...reply, ...updatedReply } : reply
          )
        );
      })
      .catch((error) => {
        console.error("Error updating complaint reply:", error);
      });
  };*/}

  const handleUpdateReply = (replyId) => {
    // Navigate to the update page with the appropriate URL
    navigate(`/CommitteeUpdateComplaintReply/${replyId}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  return (
    <div className="committee-view-complaint-replies-body"> {/* Reuse existing body style */}
    <CommitteeMemberNavbar />
    <div className="container">
      <h2 className="mt-4">Complaint Reply List</h2> {/* Use same heading style */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table table-striped committee-view-complaint-replies-table">
          <thead>
            <tr>
              <th className="width-committee-complaint-replies-name">Name</th>
              <th className="width-committee-complaint-replies-date">Complaint Date</th>
              <th>Complaint</th>
              <th>Solution Message</th>
              <th className="width-committee-complaint-replies-date">Reply Date</th>
              <th>Response</th>
              <th>Actions</th>
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
                <td>&nbsp;
                <span
                    className="icon-committee-view-complaint-replies-edit-button" // Use same edit button style
                    onClick={() => handleUpdateReply(reply.replyId)}
                  >
                    <FaPencilAlt />
                  </span>
                  <span
                    className="icon-committee-view-complaint-replies-delete-button" // Use same delete button style
                    onClick={() => handleDeleteReply(reply.replyId)}
                  >
                    <FaTrash />
                  </span>
                  
                
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    <FooterComponent />
  </div>
  );
};

export default CommitteeViewAllComplaintReplies;
