import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommitteeMemberService from "../services/CommitteeMemberService";
import CommitteeMemberNavbar from "./CommitteeMemberNavbar";
import FooterComponent from "./FooterComponent";
import { FaReply,FaFileInvoice } from "react-icons/fa";
import "../CommitteeViewAllResident.css";

const CommitteeViewAllResident = () => {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("key");

  const [loading, setLoading] = useState(true);
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/committee-member/view-all-resident?key=${loggedIn}`;

    CommitteeMemberService.getAllResident(urlWithPrivateKey)
      .then((response) => {
        console.log("Fetched residents:", response.data);
        setResidents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching residents:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleMakeBill = (rId) => {
    navigate(`/CommitteeMakeBill/${rId}`);
  };

  return (
    <div className="committee-view-all-resident-body">
      <CommitteeMemberNavbar />
      <div className="container">
        <h2 className="mt-4">Resident List</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="table table-striped committee-view-all-resident-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Wing</th>
                <th>Flat</th>
                <th>Floor</th>
                <th>Member Count</th>
                <th>Two Wheeler Count</th>
                <th>Four Wheeler Count</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {residents.map((resident) => (
                <tr key={resident.rId}>
                  <td>{`${resident.fName} ${resident.lName}`}</td>
                  <td>{resident.wingNo}</td>
                  <td>{resident.flatNo}</td>
                  <td>{resident.floorNo}</td>
                  <td>{resident.memberCount}</td>
                  <td>{resident.twoWheelerCount}</td>
                  <td>{resident.fourWheelerCount}</td>
                  <td className="width-committee-view-all-resident-action">
                    <button
                      onClick={() => handleMakeBill(resident.rId)}
                      className="make-bill-button "
                    >
                      <FaFileInvoice />&nbsp; Make Bill
                    </button>
                  </td>
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

export default CommitteeViewAllResident;
