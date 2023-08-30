import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommitteeMemberService from "../services/CommitteeMemberService";
import FooterComponent from "./FooterComponent";
import CommitteeMemberNavbar from "./CommitteeMemberNavbar";
import "../CommitteeScheduleEvent.css";

const CommitteeScheduleEvent = () => {
  const loggedIn = localStorage.getItem("key");
  const navigate = useNavigate();

  const [eventDTO, setEventDTO] = useState({
    eventName: "",
    organizerName: "",
    description: "",
    place: "",
    date: "",
    startTime: "",
    hours: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDTO((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleScheduleEvent = () => {
    const urlWithPrivateKey = `http://localhost:8083/committee-member/schedule_event?key=${loggedIn}`;

    CommitteeMemberService.scheduleEvent(urlWithPrivateKey, eventDTO)
      .then(() => {
        console.log("Event scheduled successfully");
        navigate("/CommitteeViewScheduledEvent");
      })
      .catch((error) => {
        console.error("Error scheduling event:", error);
      });
  };

  return (
    <div className="committee-schedule-event">
    <CommitteeMemberNavbar/>
    <div className="committee-schedule-event-form-container">
      <div className="committee-schedule-event-registerbox">
        <img src="images/scheduleEvent.png" alt="Avatar" className="committee-schedule-event-avatar" />
        <h1>Schedule Event</h1>
      <form>
      <div className="two-fields">
      <div>
        <label>Venue</label>
          <select
            name="place"
            value={eventDTO.place}
            onChange={handleChange}
            required
          >
            <option value="">Select a place</option>
            <option value="Hall">Hall </option>
            <option value="Garden">Garden </option>
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
        
        <div className="committee-schedule-event-button-container">
              <button type="button" className="committee-schedule-event-button" onClick={handleScheduleEvent}
              >
                Schedule
              </button>
            </div>
      </form>
      </div>
      </div>
      <FooterComponent/>
    </div>
  );
};

export default CommitteeScheduleEvent;
