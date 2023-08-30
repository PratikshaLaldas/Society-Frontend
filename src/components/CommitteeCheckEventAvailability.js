import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommitteeMemberService from "../services/CommitteeMemberService"; 
import FooterComponent from "./FooterComponent";
import CommitteeMemberNavbar from "./CommitteeMemberNavbar";
import "../CommitteeEventAvailability.css";

const CommitteeCheckEventAvailability = () => {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("key"); // Assuming you store the authentication key in localStorage

  const [eventAvailability, setEventAvailability] = useState({
    // Define your eventAvailability properties here
    // For example:
    place: "",
    date: "",
    startTime: "",
    hours: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventAvailability((prevAvailability) => ({
      ...prevAvailability,
      [name]: value,
    }));
  };

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    const urlWithPrivateKey = `http://localhost:8083/committee-member/check-schedule-availability?key=${loggedIn}`;
  
    CommitteeMemberService.checkEventAvailability(urlWithPrivateKey, eventAvailability)
      .then((response) => {
        if (response.status === 200) {
          // Success: Time slot and place are available
          console.log("Event availability response:", response.data);
          alert("Time slot and place is available. You can proceed.");
          navigate("/CommitteeScheduleEvent"); // Navigate to the ScheduleEvent page
        }
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 409) {
            // Conflict: Chosen time slot and place are not available
            console.log("Conflict occurred:", error.response.data);
            alert("The chosen time slot and place is not available.");
            navigate("/CommitteeViewBookedSlots");
          } else {
            // Other errors
            console.error("Error checking event availability:", error);
            // Handle other errors, show appropriate message
            alert("An error occurred. Please try again later.");
          }
        }
      });
  };
  
  

  return (
    <div className="committee-event-availability">
      <CommitteeMemberNavbar /> 
      <div className="committee-event-availability-form-container">
        <div className="committee-event-availability-registerbox">
          <img src="images/event-availability.png" alt="Avatar" className="committee-event-availability-avatar" />
          <h1>Check Event Availability</h1>
          <form onSubmit={handleCheckAvailability}>
        <div>
        <label>Venue</label>
          <select
            name="place"
            value={eventAvailability.place}
            onChange={handleChange}
            required
          >
            <option value="">Select a venue</option>
            <option value="Hall">Hall</option>
            <option value="Garden">Garden</option>
            <option value="Society Office">Society Office</option>
          </select>
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={eventAvailability.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Start Time</label>
          <input
            type="time"
            name="startTime"
            value={eventAvailability.startTime}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Hours</label>
          <input
            type="number"
            name="hours"
            value={eventAvailability.hours}
            onChange={handleChange}
            required
          />
        </div>
        <div className="committee-event-availability-button-container">
              <button type="submit" className="committee-event-availability-button">
                Check Availability
              </button>
        </div>
      </form>
      </div>
      </div>
      <FooterComponent /> 
    </div>
  );
};

export default CommitteeCheckEventAvailability;
