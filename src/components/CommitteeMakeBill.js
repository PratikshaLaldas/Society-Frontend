import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CommitteeMemberService from "../services/CommitteeMemberService";
import FooterComponent from "./FooterComponent";
import CommitteeMemberNavbar from "./CommitteeMemberNavbar";
import "../CommitteeMakeBill.css";

const CommitteeMakeBill = () => {
  const { rId } = useParams();
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("key");

  const [billDTO, setBillDTO] = useState({
    maintenanceFee: 0,
    period: "",
    // ...other fields you want to include in the bill
  });

  useEffect(() => {
    // No need to fetch resident details here
    // Set default values in the bill form
    setBillDTO({
      maintenanceFee: 0,
      period: "", // Set the appropriate default value for period
      // ...other fields
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillDTO((prevBill) => ({
      ...prevBill,
      [name]: value,
    }));
  };

  const handleCreateBill = () => {
    const urlWithPrivateKey = `http://localhost:8083/committee-member/make-bill/${rId}?key=${loggedIn}`;

    CommitteeMemberService.makeBill(loggedIn, rId, billDTO)
      .then(() => {
        console.log("Bill created successfully");
        navigate("/CommitteeViewAllBill");
      })
      .catch((error) => {
        console.error("Error creating bill:", error);
      });
  };

  return (
    <div className="make-bill-body"> 
    <CommitteeMemberNavbar /> 
    <div className="make-bill-form-container">
      <div className="make-bill-registerbox">
      <img src="https://icon-library.com/images/billing-icon/billing-icon-2.jpg" alt="Avatar" className="make-bill-avatar" /> 
        <h3 className="h3-margin">Create Bill</h3>
        <form>
          <div>
            <p>Maintenance Fee</p>
            <input
              type="number"
              name="maintenanceFee"
              value={billDTO.maintenanceFee}
              onChange={handleChange}
              required
              placeholder="Enter Maintenance Fee"
            />
          </div>
          <div>
            {/* <p>Period</p>
            <input
              type="text"
              name="period"
              value={billDTO.period}
              onChange={handleChange}
              required
              placeholder="Eg: 1st Jan to 31st Jan"
            /> */}

          <p>Period</p>
          <select
            name="period"
            value={billDTO.period}
            onChange={handleChange}
            required
          >
            <option value="">Select a period</option>
            <option value="1st Jan to 31st Jan">1st Jan to 31st Jan</option>
            <option value="1st Feb to 28th Feb">1st Feb to 28th Feb</option>
            <option value="1st Mar to 31st Mar">1st Mar to 31st Mar</option>
            <option value="1st Apr to 30th Apr">1st Apr to 30th Apr</option>
            <option value="1st May to 31st May">1st May to 31st May</option>
            <option value="1st June to 30th June">1st June to 30th June</option>
            <option value="1st July to 31st July">1st July to 31st July</option>
            <option value="1st Aug to 31st Aug">1st Aug to 31st Aug</option>
            <option value="1st Sep to 30th Sep">1st Sep to 30th Sep</option>
            <option value="1st Oct to 31st Oct">1st Oct to 31st Oct</option>
            <option value="1st Nov to 30th Nov">1st Nov to 30th Nov</option>
            <option value="1st Dec to 31st Dec">1st Dec to 31st Dec</option>
          </select>
          </div>

          <div className="make-bill-button-container">
            <button
              className="make-bill-register-button" /* Apply the button class */
              type="button"
              onClick={handleCreateBill}
            >
              Create Bill
            </button>
            <button
              className="make-bill-cancel-button" 
              type="button"
              onClick={() => navigate("/CommitteeViewAllResident")}
            >
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

export default CommitteeMakeBill;
