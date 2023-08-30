import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResidentService from "../services/ResidentService";
import "../ResidentViewBill.css";
import ResidentNavbar from "./ResidentNavbar";
import FooterComponent from "./FooterComponent";

const ResidentViewBill = () => {
  const loggedIn = localStorage.getItem("key");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/residents/view-my-bill?key=${loggedIn}`;

    ResidentService.getMyBills(urlWithPrivateKey)
      .then((response) => {
        console.log("Fetched bills:", response.data);
        setBills(response.data);
      })
      .catch((error) => {
        console.error("Error fetching bills:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handlePayBill = (billNo) => {
    navigate(`/ResidentBillPayment/${billNo}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  return (
    <div className="resident-view-bill-body">
    <ResidentNavbar />
    <div>
      <table className="bill-table">
        <thead>
          <tr>
            <th>Bill No</th>
            <th>Bill Date</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => (
            <React.Fragment key={bill.billNo}>
              <tr>
                <td>{bill.billNo}</td>
                <td>{formatDate(bill.date)}</td>
                <td>{formatDate(bill.dueDate)}</td>
              </tr>
              <tr>
                <th colSpan="3">Period: {bill.period}</th>
              </tr>
              <tr>
                <th colSpan="3">Name: {`${bill.residentFirstName} ${bill.residentLastName}`}</th>
              </tr>
              <tr>
                <th>Sr. No.</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Maintenance Fee</td>
                <td>{bill.maintenanceFee}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Parking Charge</td>
                <td>{bill.parkingCharge}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Security Charge</td>
                <td>{bill.securityCharge}</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Common Area Utilization</td>
                <td>{bill.commonAreaUtilization}</td>
              </tr>
              <tr>
                <td></td>
                <td>Total Payable</td>
                <td>{bill.amount}</td>
              </tr>
              <tr>
              <td colSpan="3" className="bold-label">
                Status: {bill.status}</td>
              </tr>
              <tr>
                <td colSpan="3">
                  {bill.status === "unpaid" && (
                    <button onClick={() => handlePayBill(bill.billNo)}>Pay</button>
                  )}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      </div>
      <FooterComponent/>
    </div>

  );
};

export default ResidentViewBill;
