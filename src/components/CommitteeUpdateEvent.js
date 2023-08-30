import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CommitteeMemberService from "../services/CommitteeMemberService";
import FooterComponent from "./FooterComponent";
import CommitteeMemberNavbar from "./CommitteeMemberNavbar";
import "../CommitteeUpdateEvent.css";

const CommitteeUpdateEvent = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("key");

  const [eventDTO, setEventDTO] = useState({
    eventName: "",
    organizerName: "",
    description: "",
    place: "",
    date: "",
    startTime: "",
    hours: 0,
  });

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/committee-member/view_event/${eventId}?key=${loggedIn}`;

    CommitteeMemberService.getEventById(urlWithPrivateKey, eventId)
      .then((response) => {
        const fetchedEvent = response.data;
        setEventDTO(fetchedEvent); // Just set the fetched event data directly
      })
      .catch((error) => {
        console.error("Error fetching event details:", error);
      });
  }, [eventId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDTO((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleUpdateEvent = () => {
    const currentDate = new Date().toISOString().split('T')[0]; // Get current date in 'YYYY-MM-DD' format

    if (eventDTO.date < currentDate) {
      alert("Cannot update event to a date before today.");
      return;
    }
    const urlWithPrivateKey = `http://localhost:8083/committee-member/update_event/${eventId}?key=${loggedIn}`;

    CommitteeMemberService.updateEvent(loggedIn, eventId, eventDTO)
      .then(() => {
        console.log("Event updated successfully");
        navigate("/CommitteeViewScheduledEvent");
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 400) {
            // Conflict: Chosen time slot and place are not available
            console.log("Conflict occurred:", error.response.data);
            alert("The chosen time slot and place are not available.");
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
    <div className="committee-update-event-body"> 
    <CommitteeMemberNavbar />
    <div className="committee-update-event-form-container"> 
      <div className="committee-update-event-registerbox"> 
        <img src="https://icon-library.com/images/update-icon-png/update-icon-png-18.jpg" alt="Avatar" className="committee-update-event-avatar" />
        <h3 className="header">Edit Event</h3>
      <form>
      <div className="two-fields">
        {/* Form fields for event details */}
        
        <div>
          <label>Venue</label>
          <select
                  name="place"
                  value={eventDTO.place}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Venue</option>
                  <option value="Hall">Hall</option>
                  <option value="Garden">Garden</option>
                  <option value="Society Office">Society Office</option>
                </select>
        </div>
        <div>
          <label>Event Name</label>
          <input
            type="text"
            name="eventName"
            value={eventDTO.eventName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={eventDTO.description}
            onChange={handleChange}
            required
          />
        </div>
        </div>
        <div className="two-fields"> 
        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={eventDTO.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Start Time</label>
          <input
            type="time"
            name="startTime"
            value={eventDTO.startTime}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Hours</label>
          <input
            type="number"
            name="hours"
            value={eventDTO.hours}
            onChange={handleChange}
            required
          />
        </div>
        </div>
        <div>
          <label>Organizer Name</label><br/>
          <input
            type="text"
            name="organizerName"
            value={eventDTO.organizerName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="committee-update-event-button-container">
          <button type="button" className="committee-update-event-button" onClick={handleUpdateEvent}>
            Update
          </button>
          <button type="button" className="committee-update-event-cancel-button" onClick={() => navigate("/CommitteeViewScheduledEvent")}>
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

export default CommitteeUpdateEvent;
