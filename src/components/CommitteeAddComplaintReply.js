import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CommitteeMemberService from "../services/CommitteeMemberService";
import FooterComponent from "./FooterComponent";
import CommitteeMemberNavbar from "./CommitteeMemberNavbar";
import "../CommitteeComplaintReply.css";

const CommitteeAddComplaintReply = () => {
  const { cid } = useParams();
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("key");

  const [complaintReplyDTO, setComplaintReplyDTO] = useState({
    response: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComplaintReplyDTO((prevComplaintReply) => ({
      ...prevComplaintReply,
      [name]: value,
    }));
  };

  const handleAddReply = () => {
    const urlWithPrivateKey = `http://localhost:8083/committee-member/add_complaint_reply/${cid}?key=${loggedIn}`;

    CommitteeMemberService.addComplaintReply(loggedIn, cid, complaintReplyDTO)
      .then(() => {
        console.log("Complaint reply added successfully");
        navigate("/committeeViewAllComplaintReplies");
      })
      .catch((error) => {
        console.error("Error adding complaint reply:", error);
      });
  };

  return (
    <div className="complaint-reply-body">
    <CommitteeMemberNavbar/>
    <div className="complaint-reply-form-container">
    <div className="complaint-reply-registerbox">
      <img src="https://cdn.onlinewebfonts.com/svg/img_277005.png" alt="Avatar" className="complaint-reply-avatar" />
      <h3 className="h1-margin">Add Complaint Reply</h3>
      <form>
          <p>Response</p>
          <textarea
            name="response"
            value={complaintReplyDTO.response}
            onChange={handleChange}
            placeholder="Enter Response"
            required
          />
         <div className="complaint-reply-button-container">
          <button className="complaint-reply-register-button" type="button" onClick={handleAddReply}>
            Add Reply
          </button>
          <button className="complaint-reply-cancel-button" type="button" onClick={() => navigate("/committeeGetAllComplaint")}>
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

export default CommitteeAddComplaintReply;
