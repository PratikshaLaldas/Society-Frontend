import React, { useEffect, useState } from "react";
import ResidentService from "../services/ResidentService";
import ResidentNavbar from "./ResidentNavbar";
import FooterComponent from "./FooterComponent";
import "../ResidentViewPreviousBill.css";

const ResidentViewPreviousBill = () => {
  const loggedIn = localStorage.getItem("key");

  const [loading, setLoading] = useState(true);
  const [previousBills, setPreviousBills] = useState([]);

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/residents/view-my-previous-bill?key=${loggedIn}`;

    ResidentService.getMyPreviousBills(urlWithPrivateKey)
      .then((response) => {
        console.log("Fetched previous bills:", response.data);
        setPreviousBills(response.data);
      })
      .catch((error) => {
        console.error("Error fetching previous bills:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [loggedIn]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  return (
    <div className="resident-view-previous-bill-body"> 
    <ResidentNavbar/>
    <div className="container">
      <h2 className="mt-4">Previous Bills</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table table-striped resident-view-previous-bill-table"> {/* Use the same class for styling */}
          <thead>
            <tr>
              <th>Name</th>
              <th className="width-period">Period</th>
              <th className="width">Maintenance Fee</th>
              <th>Parking</th>
              <th>Security</th>
              <th className="width-area">Common Area Utilization</th>
              <th className="width-date">Bill Date</th>
              <th className="width-date">Due Date</th>          
              <th className="width-amount">Total Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {previousBills.map((bill) => (
              <tr key={bill.billNo}>
                <td>{`${bill.residentFirstName} ${bill.residentLastName}`}</td>
                <td>{bill.period}</td>
                <td>{bill.maintenanceFee}</td>
                <td>{bill.parkingCharge}</td>
                <td>{bill.securityCharge}</td>
                <td>{bill.commonAreaUtilization}</td>
                <td>{formatDate(bill.date)}</td>
                <td>{formatDate(bill.dueDate)}</td>   
                <td>{bill.amount}</td>
                <td>{bill.status}</td>
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

export default ResidentViewPreviousBill;
