import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResidentService from "../services/ResidentService";
import FooterComponent from "./FooterComponent";
import ResidentNavbar from "./ResidentNavbar";
import { FaPencilAlt, FaTrash, FaCreditCard } from "react-icons/fa"; 
import '@fortawesome/fontawesome-free/css/all.min.css';


import "../ResidentViewScheduledEvent.css";

const ResidentViewScheduledEvent = () => {
  const loggedIn = localStorage.getItem("key");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [scheduledEvents, setScheduledEvents] = useState([]);

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/residents/view_scheduled_event?key=${loggedIn}`;

    ResidentService.viewScheduledEvents(urlWithPrivateKey)
      .then((response) => {
        console.log("Fetched scheduled events:", response.data);
        setScheduledEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching scheduled events:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Event deletion logic
  const handleDeleteEvent = (eventId) => {
    const urlWithPrivateKey = `http://localhost:8083/residents/delete_event/${eventId}?key=${loggedIn}`;

    if (window.confirm("Are you sure you want to delete this event?")) {
      ResidentService.deleteEvent(urlWithPrivateKey, eventId)
        .then(() => {
          console.log("Event deleted successfully");
          setScheduledEvents((prevEvents) =>
            prevEvents.filter((event) => event.eventId !== eventId)
          );
        })
        .catch((error) => {
          console.error("Error deleting event:", error);
        });
    }
  };

  // Event update logic
  const handleUpdateEvent = (eventId) => {
    // Navigate to the update page with the appropriate URL
    navigate(`/ResidentUpdateEvent/${eventId}`);
  };

  // Event payment logic
  const handlePayEvent = (eventId) => {
    // Navigate to the payment page with the appropriate URL
    navigate(`/ResidentEventPayment/${eventId}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  return (
    <div className="resident-view-scheduled-event-list-body">
    <ResidentNavbar />
    <div className="container">
      <h2 className="mt-4">Scheduled Events</h2>
      <table className="table table-striped resident-view-scheduled-event-table">
        <thead>
          <tr>
            <th >Name</th>
            <th>Event</th>
            <th className="width-description">Description</th>
            <th>Venue</th>
            <th className="width-event-date">Date</th>
            <th className="width">Start Time</th>
            <th className="width">End Time</th>
            <th>Hours</th>
            <th>Amount</th>
            <th>Status</th>
            <th className="width">Actions</th>
          </tr>
        </thead>
        <tbody>
          {scheduledEvents.map((event, index) => (
            <tr key={event.eventId}>
              <td>{event.organizerName}</td>
              <td>{event.eventName}</td>
              <td>{event.description}</td>
              <td>{event.place}</td>
              <td>{formatDate(event.date)}</td>
              <td>{event.startTime}</td>
              <td>{event.endTime}</td>
              <td>{event.hours}</td>
              <td>{event.amount}</td>
              <td>{event.status}</td>
              <td>
                <span
                  className="icon-resident-edit-event-button"
                  onClick={() => handleUpdateEvent(event.eventId)}
                >
                  <FaPencilAlt />
                </span>
                <span
                  className="icon-resident-delete-event-button"
                  onClick={() => handleDeleteEvent(event.eventId)}
                >
                  <FaTrash />
                </span>
                <span
                  className="icon-resident-pay-event-button"
                  onClick={() => handlePayEvent(event.eventId)}
                >
                    <FaCreditCard /> 
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <FooterComponent />
  </div>
  );
};

export default ResidentViewScheduledEvent;
