import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CommitteeMemberService from "../services/CommitteeMemberService";
import FooterComponent from "./FooterComponent";
import CommitteeMemberNavbar from "./CommitteeMemberNavbar";
import "../CommitteeUpdateSuggestionReply.css";

const CommitteeUpdateSuggestionReply = () => {
  const { replyId } = useParams();
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("key");

  const [suggestionReplyDTO, setSuggestionReplyDTO] = useState({
    response: "",
  });

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/committee-member/view_suggestion_reply/${replyId}?key=${loggedIn}`;

    CommitteeMemberService.getSuggestionReplyById(urlWithPrivateKey, replyId)
      .then((response) => {
        const fetchedSuggestionReply = response.data;
        setSuggestionReplyDTO({
          response: fetchedSuggestionReply.response,
        });
      })
      .catch((error) => {
        console.error("Error fetching suggestion reply:", error);
      });
  }, [replyId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSuggestionReplyDTO((prevSuggestionReply) => ({
      ...prevSuggestionReply,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    const updatedReply = {
      response: suggestionReplyDTO.response,
    };

    const urlWithPrivateKey = `http://localhost:8083/committee-member/update_suggestion_reply/${replyId}?key=${loggedIn}`;

    CommitteeMemberService.updateSuggestionReply(loggedIn, replyId, updatedReply)
      .then(() => {
        console.log("Suggestion reply updated successfully");
        navigate("/CommitteeViewAllSuggestionReplies");
      })
      .catch((error) => {
        console.error("Error updating suggestion reply:", error);
      });
  };

  return (
    <div className="update-suggestion-reply-body">
    <CommitteeMemberNavbar />
    
    <div className="update-suggestion-reply-form-container"> 
      <div className="update-suggestion-reply-registerbox"> 
       <img src="https://cdn.icon-icons.com/icons2/1154/PNG/512/1486564394-edit_81508.png" alt="Avatar" className="update-suggestion-reply-avatar" />
      
      <h3 className="edit-suggestion-font">Edit Suggestion Reply</h3>
      <form>
        <div>
          <p>Response:</p>
          <textarea
            name="response"
            value={suggestionReplyDTO.response}
            onChange={handleChange}
            required
          />
        </div>
        <div className="update-suggestion-reply-button-container"> 
        <button type="button" onClick={handleUpdate} className="update-suggestion-reply-register-button"> 
          Update
        </button>
        <button
          type="button"
          onClick={() => navigate("/CommitteeViewAllSuggestionReplies")} className="update-suggestion-reply-cancel-button"
        >
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

export default CommitteeUpdateSuggestionReply;
