import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ResidentService from "../services/ResidentService";
import FooterComponent from "./FooterComponent";
import ResidentNavbar from "./ResidentNavbar";
import "../ResidentBillPayment.css";

const ResidentBillPayment = () => {
  const { billNo } = useParams();
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

  const handlePayBill = () => {
    const urlWithPrivateKey = `http://localhost:8083/residents/make-online-payment/${billNo}?key=${loggedIn}`;

    ResidentService.makeOnlinePayment(loggedIn, billNo, paymentRequest)
      .then(() => {
        console.log("Bill payment made successfully");
        navigate("/ResidentViewPreviousBill");
      })
      .catch((error) => {
        console.error("Error making bill payment:", error);
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
    <div className="resident-bill-payment-body">
      <ResidentNavbar />
      <div className="resident-bill-payment-form-container"> 
        <div className="resident-bill-payment-registerbox"> 
          <img src="https://tse2.mm.bing.net/th?id=OIP._9qDcKX0xUCXRehJdczl2QHaGw&pid=Api&P=0&h=180" alt="Avatar" className="resident-bill-payment-avatar" /> 
          <h1>Bill Payment</h1>
          <form>
            <div className="two-fields"> 
              <div>
                <label>Street:</label>
                <input
                  type="text"
                  name="street"
                  value={paymentRequest.street}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>City:</label>
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
                <label>Country:</label>
                <input
                  type="text"
                  name="country"
                  value={paymentRequest.country}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Zipcode:</label>
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
              <label>Amount:</label><br />
              <input
                type="number"
                name="amount"
                value={paymentRequest.amount}
                onChange={handleChange}
                required
              />
            </div>
            <div className="resident-bill-payment-button-container"> 
              <button type="button" className="resident-bill-payment-register-button" onClick={handlePayBill}>
                Pay
              </button>
              <button
                type="button"
                className="resident-bill-payment-cancel-button"
                onClick={() => navigate("/ResidentViewBill")}
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

export default ResidentBillPayment;
