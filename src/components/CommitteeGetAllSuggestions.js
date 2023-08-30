import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommitteeMemberService from "../services/CommitteeMemberService";
import CommitteeMemberNavbar from "./CommitteeMemberNavbar";
import FooterComponent from "./FooterComponent";
import { FaReply } from "react-icons/fa";
import "../CommitteeGetAllSuggestion.css";

const CommitteeGetAllSuggestions = () => {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("key");

  const [loading, setLoading] = useState(true);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/committee-member/view_all_suggestions?key=${loggedIn}`;
    
    CommitteeMemberService.getAllSuggestionsOfAllMember(urlWithPrivateKey)
      .then((response) => {
        console.log("Fetched suggestions:", response.data);
        setSuggestions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching suggestions:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const navigateToAddReply = (sid) => {
    navigate(`/CommitteeAddSuggestionReply/${sid}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  return (
    <div className="committee-all-suggestion-body">
    <CommitteeMemberNavbar />
    <div className="container">
      <h2 className="mt-4">Suggestion List</h2>
      {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="table table-striped committee-all-suggestion-table">
          
        <thead>
          <tr>
            <th className="width-committee-suggestion-name">Name</th>
            <th className="width-committee-suggestion-date">Date of Suggestion</th>
            <th className="width-committee-suggestion">Suggestion</th>
            <th className="width-committee-suggestion-action">Actions</th>
          </tr>
        </thead>
        <tbody>
          {suggestions.map((suggestion) => (
            <tr key={suggestion.sid}>
              <td>{suggestion.suggestionerName}</td>
              <td>{formatDate(suggestion.date)}</td>
              <td>{suggestion.description}</td>
              <td> 
                <button onClick={() => navigateToAddReply(suggestion.sid)} className="reply-button">
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

export default CommitteeGetAllSuggestions;
