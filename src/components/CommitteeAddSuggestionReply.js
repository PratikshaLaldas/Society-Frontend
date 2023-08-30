import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CommitteeMemberService from "../services/CommitteeMemberService";
import FooterComponent from "./FooterComponent";
import CommitteeMemberNavbar from "./CommitteeMemberNavbar";
import "../CommitteeAddSuggestionReply.css"

const CommitteeAddSuggestionReply = () => {
  const { sid } = useParams();
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("key");

  const [suggestionReplyDTO, setSuggestionReplyDTO] = useState({
    response: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSuggestionReplyDTO((prevSuggestionReply) => ({
      ...prevSuggestionReply,
      [name]: value,
    }));
  };

  const handleAddReply = () => {
    const urlWithPrivateKey = `http://localhost:8083/committee-member/add_suggestion_reply/${sid}?key=${loggedIn}`;

    CommitteeMemberService.addSuggestionReply(loggedIn, sid, suggestionReplyDTO)
      .then(() => {
        console.log("Suggestion reply added successfully");
        navigate("/CommitteeViewAllSuggestionReplies");
      })
      .catch((error) => {
        console.error("Error adding suggestion reply:", error);
      });
  };

  return (
    <div className="suggestion-reply-body">
    <CommitteeMemberNavbar/>
    <div className="suggestion-reply-form-container">
    <div className="suggestion-reply-registerbox">
      <img src="https://cdn.onlinewebfonts.com/svg/img_277005.png" alt="Avatar" className="suggestion-reply-avatar" />
      <h3 className="h1-margin">Add Suggestion Reply</h3>
      <form>
        <div>
          <p>Response</p>
          <textarea
            name="response"
            value={suggestionReplyDTO.response}
            onChange={handleChange}
            placeholder="Enter Response"
            required
          />
        </div>
        <div className="suggestion-reply-button-container">
        <button className="suggestion-reply-register-button" type="button" onClick={handleAddReply}>
          Add Reply
        </button>
        <button className="suggestion-reply-cancel-button" type="button" onClick={() => navigate("/CommitteeGetAllSuggestions")}>
          Cancel
        </button>
        </div>
      </form>
      </div>
      </div>
      <FooterComponent/>
    </div>
  );
};

export default CommitteeAddSuggestionReply;
