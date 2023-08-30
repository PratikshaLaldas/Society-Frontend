import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ResidentService from "../services/ResidentService";
import ResidentNavbar from "./ResidentNavbar";
import FooterComponent from "./FooterComponent";
import "../ResidentEventPayment.css";

const ResidentEventPayment = () => {
  const { eventId } = useParams();
  const loggedIn = localStorage.getItem("key");
  const navigate = useNavigate();

  const [paymentRequest, setPaymentRequest] = useState({
    street: "",
    city: "",
    country: "",
    zipcode: "",
    amount: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentRequest((prevPayment) => ({
      ...prevPayment,
      [name]: value,
    }));
  };

  const handlePayEvent = () => {
    const urlWithPrivateKey = `http://localhost:8083/residents/make-event-payment/${eventId}?key=${loggedIn}`;

    ResidentService.markEventAsPaid(loggedIn, eventId, paymentRequest)
      .then(() => {
        console.log("Event payment made successfully");
        navigate("/ResidentViewPreviousScheduledEvent");
      })
      .catch((error) => {
        console.error("Error making event payment:", error);
        if (error.response) {
          if (error.response.status === 500) {
            // Payment Failed: Show pop-up
            alert("Payment failed. Please enter the correct amount.");
          } else {
            // Other errors
            alert("An error occurred while making payment. Please try again later.");
          }
        }
      });
  };

  return (
    <div className="resident-event-payment-body"> 
      <ResidentNavbar />
      <div className="resident-event-payment-form-container"> 
        <div className="resident-event-payment-registerbox"> 
          <img src="https://tse2.mm.bing.net/th?id=OIP._9qDcKX0xUCXRehJdczl2QHaGw&pid=Api&P=0&h=180" alt="Avatar" className="resident-event-payment-avatar" /> 
          <h1>Event Payment</h1>
          <form>
          <div className="two-fields">
            <div>
              <label>Street</label>
              <input
                type="text"
                name="street"
                value={paymentRequest.street}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>City</label>
              <input
                type="text"
                name="city"
                value={paymentRequest.city}
                onChange={handleChange}
                required
              />
            </div>
            </div>
            <div className="two-fields">
            <div>
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={paymentRequest.country}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Zipcode</label>
              <input
                type="text"
                name="zipcode"
                value={paymentRequest.zipcode}
                onChange={handleChange}
                required
              />
            </div>
            </div>
            <div>
              <label>Amount</label><br/>
              <input
                type="number"
                name="amount"
                value={paymentRequest.amount}
                onChange={handleChange}
                required
              />
            </div>
            <div className="resident-event-payment-button-container"> 
              <button type="button" className="resident-event-payment-register-button" onClick={handlePayEvent}>
                Pay
              </button>
              <button
                type="button"
                className="resident-event-payment-cancel-button" 
                onClick={() => navigate("/ResidentViewScheduledEvent")}
              >
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

export default ResidentEventPayment;
