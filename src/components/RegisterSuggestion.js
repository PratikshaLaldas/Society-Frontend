import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResidentService from "../services/ResidentService";
import ResidentNavbar from "./ResidentNavbar";
import FooterComponent from "./FooterComponent";
import "../RegisterSuggestion.css";

const RegisterSuggestion = () => {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("key");

  const [suggestionDTO, setSuggestionDTO] = useState({
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSuggestionDTO((prevSuggestion) => ({
      ...prevSuggestion,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlWithPrivateKey = `http://localhost:8083/residents/register_suggestion/?key=${loggedIn}`;

    ResidentService.registerSuggestion(urlWithPrivateKey, suggestionDTO)
      .then((response) => {
        console.log("Suggestion registered successfully:", response.data);
        navigate("/SuggestionList");
      })
      .catch((error) => {
        console.error("Error registering suggestion:", error);
      });
  };

    return (
      <div className="suggestion-body">
        <ResidentNavbar />
        <div className="suggestion-form-container">
          <div className="suggestion-registerbox">
            <img src="images/suggestion1.jpg" alt="Avatar" className="suggestion-avatar" />
            <h1>Drop Your Suggestion</h1>
            <form onSubmit={handleSubmit}>
              <p>Suggestion</p>
              <textarea
                name="description"
                value={suggestionDTO.description}
                onChange={handleChange}
                placeholder="Enter Suggestion"
                required
              />
              <div className="suggestion-button-container">
                <button type="submit" className="suggestion-register-button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <FooterComponent />
      </div>
  );
};

export default RegisterSuggestion;
