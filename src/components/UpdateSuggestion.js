import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ResidentService from "../services/ResidentService";
import FooterComponent from "./FooterComponent";
import ResidentNavbar from "./ResidentNavbar";
import "../UpdateSuggestion.css";

const UpdateSuggestion = () => {
  const { sid } = useParams();
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("key");

  const [suggestionDTO, setSuggestionDTO] = useState({
    description: "",
  });

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/residents/view_suggestion/${sid}/?key=${loggedIn}`;

    ResidentService.getSuggestionById(urlWithPrivateKey, sid)
      .then((response) => {
        const fetchedSuggestion = response.data;
        setSuggestionDTO({
          description: fetchedSuggestion.description,
        });
      })
      .catch((error) => {
        console.error("Error fetching suggestion:", error);
      });
  }, [sid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSuggestionDTO((prevSuggestion) => ({
      ...prevSuggestion,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    const updatedSuggestion = {
      description: suggestionDTO.description,
    };

    const urlWithPrivateKey = `http://localhost:8083/residents/update_suggestion/${sid}/?key=${loggedIn}`;

    ResidentService.updateSuggestion(loggedIn, sid, updatedSuggestion)
      .then(() => {
        console.log("Suggestion updated successfully");
        navigate("/SuggestionList");
      })
      .catch((error) => {
        console.error("Error updating suggestion:", error);
      });
  };

  return (
    <div className="update-suggestion-body">
    <ResidentNavbar />
    <div className="update-suggestion-form-container">
      <div className="update-suggestion-registerbox">
      <img src="https://cdn.icon-icons.com/icons2/1154/PNG/512/1486564394-edit_81508.png" alt="Avatar" className="update-suggestion-avatar" />
        <h1>Edit Suggestion</h1>
        <form>
          <p>Suggestion</p>
          <textarea
            name="description"
            value={suggestionDTO.description}
            onChange={handleChange}
            required
          />
          <div className="update-suggestion-button-container">
            <button type="button" onClick={handleUpdate} className="update-suggestion-register-button">
              Update
            </button>
            <button type="button" onClick={() => navigate("/SuggestionList")} className="update-suggestion-cancel-button">
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

export default UpdateSuggestion;
