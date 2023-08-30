import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CommitteeMemberService from "../services/CommitteeMemberService";
import CommitteeMemberNavbar from "./CommitteeMemberNavbar";
import FooterComponent from "./FooterComponent";
import "../CommitteeUpdateComplaintReply.css";

const CommitteeUpdateComplaintReply = () => {
  const { replyId } = useParams();
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("key");

  const [complaintReplyDTO, setComplaintReplyDTO] = useState({
    response: "",
  });

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/committee-member/view_complaint_reply/${replyId}?key=${loggedIn}`;

    CommitteeMemberService.getComplaintReplyById(urlWithPrivateKey, replyId)
      .then((response) => {
        const fetchedComplaintReply = response.data;
        setComplaintReplyDTO({
          response: fetchedComplaintReply.response,
        });
      })
      .catch((error) => {
        console.error("Error fetching complaint reply:", error);
      });
  }, [replyId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComplaintReplyDTO((prevComplaintReply) => ({
      ...prevComplaintReply,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    const updatedReply = {
      response: complaintReplyDTO.response,
    };

    const urlWithPrivateKey = `http://localhost:8083/committee-member/update_complaint_reply/${replyId}?key=${loggedIn}`;

    CommitteeMemberService.updateComplaintReply(loggedIn, replyId, updatedReply)
      .then(() => {
        console.log("Complaint reply updated successfully");
        navigate("/committeeViewAllComplaintReplies");
      })
      .catch((error) => {
        console.error("Error updating complaint reply:", error);
      });
  };

  return (
    <div className="update-complaint-reply-body">
      <CommitteeMemberNavbar />
      
      <div className="update-complaint-reply-form-container"> 
        <div className="update-complaint-reply-registerbox"> 
         <img src="https://cdn.icon-icons.com/icons2/1154/PNG/512/1486564394-edit_81508.png" alt="Avatar" className="update-complaint-reply-avatar" />
          <h1>Edit Complaint Reply</h1>
          <form>
            <p>Response</p>
            <textarea
              name="response"
              value={complaintReplyDTO.response}
              onChange={handleChange}
              required
            />
            <div className="update-complaint-reply-button-container"> 
              <button type="button" onClick={handleUpdate} className="update-complaint-reply-register-button"> 
                Update
              </button>
              <button type="button" onClick={() => navigate("/committeeViewAllComplaintReplies")} className="update-complaint-reply-cancel-button">
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

export default CommitteeUpdateComplaintReply;
