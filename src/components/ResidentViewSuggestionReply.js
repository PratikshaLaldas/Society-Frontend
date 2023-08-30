import React, { useEffect, useState } from "react";
import ResidentService from "../services/ResidentService";
import ResidentNavbar from "./ResidentNavbar";
import FooterComponent from "./FooterComponent";
import "../ResidentViewSuggestionReply.css";

const ResidentViewSuggestionReply = () => {
  const loggedIn = localStorage.getItem("key");
  const [suggestionReplies, setSuggestionReplies] = useState([]);

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/residents/view_suggestion_reply/?key=${loggedIn}`;

    const fetchSuggestionReplies = async () => {
      try {
        const response = await ResidentService.getSuggestionRepliesForResident(urlWithPrivateKey);
        setSuggestionReplies(response.data);
      } catch (error) {
        console.error("Error fetching suggestion replies:", error);
      }
    };

    fetchSuggestionReplies();
  }, [loggedIn]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="resident-view-suggestion-reply-body">
    <ResidentNavbar />
    <div className="container">
      <h2 className="mt-4">Suggestion Replies</h2>
      <table className="table table-striped resident-view-suggestion-reply-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Suggestion</th>
            <th className="width-suggestion-date">Suggestion Date</th>
            <th className="width-suggestion-reply-date">Reply Date</th>
            <th>Response</th>
          </tr>
        </thead>
        <tbody>
          {suggestionReplies.map((reply) => (
            <tr key={reply.replyId}>
              <td>{reply.suggestionerName}</td>
              <td>{reply.suggestionDescription}</td>
              <td>{formatDate(reply.suggestionDate)}</td>
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

export default ResidentViewSuggestionReply;
