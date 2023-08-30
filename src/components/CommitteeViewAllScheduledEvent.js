import React, { useEffect, useState } from "react";
import CommitteeMemberService from "../services/CommitteeMemberService";
import FooterComponent from "./FooterComponent";
import CommitteeMemberNavbar from "./CommitteeMemberNavbar";
import "../CommitteeViewAllScheduledEvent.css"

const CommitteeViewAllScheduledEvent = () => {
  const loggedIn = localStorage.getItem("key");

  const [loading, setLoading] = useState(true);
  const [scheduledEvents, setScheduledEvents] = useState([]);

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/committee-member/view_all_scheduled_events?key=${loggedIn}`;

    CommitteeMemberService.getAllScheduledEvents(urlWithPrivateKey)
      .then((response) => {
        console.log("Fetched all scheduled events:", response.data);
        setScheduledEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching all scheduled events:", error);
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
    <div className="committee-view-all-scheduled-event-body">
    <CommitteeMemberNavbar />
    <div className="container">
      <h2 className="mt-4">All Scheduled Events</h2>
      {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="table table-striped committee-view-all-scheduled-event-table">
          
        <thead>
          <tr>
            <th className="width-committee-all-event-name">Name</th>
            <th className="width-committee-all-event-event-name">Event Name</th>
            <th>Description</th>
            <th>Venue</th>
            <th className="width-committee-all-event-date">Date</th>
            <th className="width-committee-all-event-time">Start Time</th>
            <th className="width-committee-all-event-time">End Time</th>
            <th>Hours</th>
            <th>Amount</th>
            <th>Status</th>
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
              <td>{event.amount}</td>
              <td>{event.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
       )}
    </div>
    <FooterComponent/>
    </div>


  );
};

export default CommitteeViewAllScheduledEvent;
