import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../LogoutButton.css";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Fetch role and key from localStorage
    const role = localStorage.getItem("role");
    const key = localStorage.getItem("key");

    // Clear authentication state from localStorage
    localStorage.removeItem("key");
    localStorage.removeItem("role");

    // Send a POST request to the logout endpoint on the backend
    axios
      .post("http://localhost:8083/app/logout", { role, key })
      .then((response) => {
        // Handle the response from the backend (optional)
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors that occur during the request (optional)
        console.error(error);
      });

    toast.success("Logged out successfully");
    // Navigate to the login page after successful logout
    navigate("/Login");
  };

  return (
    <div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <ToastContainer />
    </div>
  );
};

export default Logout;
