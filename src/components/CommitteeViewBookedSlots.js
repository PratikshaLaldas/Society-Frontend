import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommitteeMemberService from "../services/CommitteeMemberService"; 
import FooterComponent from "./FooterComponent";
import COmmitteeMemberNavbar from "./CommitteeMemberNavbar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../ResidentViewBookedSlots.css"; // Import your custom CSS file

import "bootstrap/dist/css/bootstrap.min.css"; 


const localizer = momentLocalizer(moment);

const CommitteeViewBookedSlots = () => {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("key"); 

  const [loading, setLoading] = useState(true);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [view, setView] = useState("week");

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/committee-member/view-booked-slots?key=${loggedIn}`;

    // Call your API method to get booked slots
    CommitteeMemberService.getBookedSlots(urlWithPrivateKey)
      .then((response) => {
        console.log("loggedIn key:", loggedIn);
        console.log("Fetched booked slots:", response.data);
        setBookedSlots(response.data);
      })
      .catch((error) => {
        console.error("Error fetching booked slots:", error);
        // Handle the error appropriately
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const navigateToCheckAvailability = () => {
    navigate("/CommitteeCheckEventAvailability"); // Navigate to the CheckEventAvailability page
  };

  return (
    <div className="resident-view-booked-slot-body">
      <COmmitteeMemberNavbar />
      <div className="container mt-4">
        <h2 className="mb-3">Event Calendar</h2>
        <div className="mb-4">
        
          {/* The Month View button has been removed */}
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
          <Calendar
              localizer={localizer}
              events={bookedSlots.map((slot) => ({
                
                title: `${slot.organizerName}, ${slot.place}`,
                start: moment(slot.date + " " + slot.startTime, "YYYY-MM-DD HH:mm").toDate(),
                end: moment(slot.date + " " + slot.endTime, "YYYY-MM-DD HH:mm").toDate(),
              }))}
              view={view}
              onView={(newView) => setView(newView)}
              startAccessor="start"
              endAccessor="end"
              className="event color-event"
              style={{ background: "" }} // Set background color of the calendar
            />
            <button className="btn btn-primary mt-3 resident-slot-btn" onClick={navigateToCheckAvailability}>
              Check Availability
            </button>
          </div>
        )}
      </div>
      <FooterComponent />
    </div>
  );
};

export default CommitteeViewBookedSlots;