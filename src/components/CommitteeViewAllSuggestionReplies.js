import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommitteeMemberService from "../services/CommitteeMemberService";
import CommitteeUpdateSuggestionReply from "./CommitteeUpdateSuggestionReply"; // Make sure to import the correct path
import FooterComponent from "./FooterComponent";
import CommitteeMemberNavbar from "./CommitteeMemberNavbar";
import { FaTrash, FaPencilAlt, FaReply } from "react-icons/fa";
import "../CommitteeViewSuggestionReplies.css";

const CommitteeViewAllSuggestionReplies = () => {
  const loggedIn = localStorage.getItem("key");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [suggestionReplies, setSuggestionReplies] = useState([]);

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/committee-member/view_all_suggestion_replies?key=${loggedIn}`;

    CommitteeMemberService.getAllSuggestionReplies(urlWithPrivateKey)
      .then((response) => {
        console.log("Fetched suggestion replies:", response.data);
        setSuggestionReplies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching suggestion replies:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDeleteReply = (replyId) => {
    const urlWithPrivateKey = `http://localhost:8083/committee-member/delete_suggestion_reply/${replyId}?key=${loggedIn}`;

    if (window.confirm("Are you sure you want to delete this reply?")) {
      CommitteeMemberService.deleteSuggestionReply(urlWithPrivateKey, replyId)
        .then(() => {
          console.log("Suggestion reply deleted successfully");
          setSuggestionReplies((prevReplies) =>
            prevReplies.filter((reply) => reply.replyId !== replyId)
          );
        })
        .catch((error) => {
          console.error("Error deleting suggestion reply:", error);
        });
    }
  };

  const handleUpdateReply = (replyId) => {
    navigate(`/CommitteeUpdateSuggestionReply/${replyId}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  return (
    <div className="committee-view-suggestion-replies-body"> {/* Reuse existing body style */}
    <CommitteeMemberNavbar />
    <div className="container">
      <h2 className="mt-4">Suggestion Reply List</h2> {/* Use same heading style */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table table-striped committee-view-suggestion-replies-table">
          <thead>
            <tr>
              <th className="width-committee-suggestion-replies-name">Name</th>
              <th className="width-committee-suggestion-replies-suggestion-date">Suggestion Date</th>
              <th>Suggestion</th>
              <th className="width-committee-suggestion-replies-date">Reply Date</th>
              <th>Response</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {suggestionReplies.map((reply) => (
              <tr key={reply.replyId}>
                <td>{reply.suggestionerName}</td>
                <td>{formatDate(reply.suggestionDate)}</td>
                <td>{reply.suggestionDescription}</td>
                <td>{formatDate(reply.date)}</td>
                <td>{reply.response}</td>
                <td>
                  &nbsp;
                  <span
                    className="icon-committee-view-suggestion-replies-edit-button" 
                    onClick={() => handleUpdateReply(reply.replyId)}
                  >
                    <FaPencilAlt />
                  </span>
                  <span
                    className="icon-committee-view-suggestion-replies-delete-button"
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

export default CommitteeViewAllSuggestionReplies;
