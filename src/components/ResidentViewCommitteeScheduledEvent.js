import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResidentService from "../services/ResidentService";
import FooterComponent from "./FooterComponent";
import ResidentNavbar from "./ResidentNavbar";
import "../ResidentViewCommitteeEvent.css";

const ResidentViewCommitteeScheduledEvent = () => {
  const loggedIn = localStorage.getItem("key");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [scheduledEvents, setScheduledEvents] = useState([]);

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/residents/view_committee_event?key=${loggedIn}`;

    ResidentService.viewCommitteeScheduledEvents(urlWithPrivateKey)
      .then((response) => {
        console.log("Fetched committee scheduled events:", response.data);
        setScheduledEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching committee scheduled events:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }
  return (
    <div className="resident-view-committee-scheduled-event-body">
    <ResidentNavbar />
    <div className="container">
      <h2 className="mt-4">Committee Events</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table table-striped resident-view-committee-scheduled-event-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Event Name</th>
              <th>Description</th>
              <th>Venue</th>
              <th className="width-date">Date</th>
              <th className="width-time">Start Time</th>
              <th className="width-time">End Time</th>
              <th>Hours</th>
            </tr>
          </thead>
          <tbody>
            {scheduledEvents.map((event) => (
              <tr key={event.eventId}>
                <td>{event.organizerName}</td>
                <td>{event.eventName}</td>
                <td>{event.description}</td>
                <td>{event.place}</td>
                <td>{formatDate(event.date)}</td>
                <td>{event.startTime}</td>
                <td>{event.endTime}</td>
                <td>{event.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    <FooterComponent />
  </div>
  );
};

export default ResidentViewCommitteeScheduledEvent;
