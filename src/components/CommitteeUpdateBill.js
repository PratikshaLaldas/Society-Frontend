import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CommitteeMemberService from "../services/CommitteeMemberService";
import FooterComponent from "./FooterComponent";
import CommitteeMemberNavbar from "./CommitteeMemberNavbar";
import "../CommitteeUpdateBill.css";

const CommitteeUpdateBill = () => {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("key");
  const { billId } = useParams();

  const [billDTO, setBillDTO] = useState({
    maintenanceFee: 0,
    period: "",
    // ...other fields you want to include in the bill
  });

  useEffect(() => {
    if (billId) {
      const urlWithPrivateKey = `http://localhost:8083/committee-member/view_bill/${billId}?key=${loggedIn}`;

      CommitteeMemberService.getBillById(urlWithPrivateKey, billId)
        .then((response) => {
          console.log("Fetched bill details:", response.data);
          setBillDTO({
            maintenanceFee: response.data.maintenanceFee,
            period: response.data.period,
            // ...other fields
          });
        })
        .catch((error) => {
          console.error("Error fetching bill details:", error);
        });
    }
  }, [billId, loggedIn]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillDTO((prevBill) => ({
      ...prevBill,
      [name]: value,
    }));
  };

  const handleUpdateBill = () => {
    const urlWithPrivateKey = `http://localhost:8083/committee-member/update-bill/${billId}?key=${loggedIn}`;

    CommitteeMemberService.updateBill(loggedIn, billId, billDTO)
      .then(() => {
        console.log("Bill updated successfully");
        navigate("/CommitteeViewAllBill");
      })
      .catch((error) => {
        console.error("Error updating bill:", error);
      });
  };

  return (
    <div className="update-bill-body"> 
      <CommitteeMemberNavbar /> 
      <div className="update-bill-form-container">
        <div className="update-bill-registerbox">
        <img src="https://cdn.icon-icons.com/icons2/1154/PNG/512/1486564394-edit_81508.png" alt="Avatar" className="update-bill-avatar" /> 
      
          <h3 className="h3-top-margin">Edit Bill</h3>
          <form>
            <div>
              <p>Maintenance Fee</p>
              <input
                type="number"
                name="maintenanceFee"
                value={billDTO.maintenanceFee}
                onChange={handleChange}
                required
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
      
            <div className="update-bill-button-container">
              <button
                className="update-bill-register-button" /* Apply the button class */
                type="button"
                onClick={handleUpdateBill}
              >
                Update Bill
              </button>
              <button
                className="update-bill-cancel-button" /* Apply the button class */
                type="button"
                onClick={() => navigate("/CommitteeViewAllBill")}
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

export default CommitteeUpdateBill;
