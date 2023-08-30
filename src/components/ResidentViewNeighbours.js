import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResidentService from "../services/ResidentService";
import FooterComponent from "./FooterComponent";
import ResidentNavbar from "./ResidentNavbar";
import "../ResidentViewNeighbor.css";

const ResidentViewNeighbours = () => {
  const loggedIn = localStorage.getItem("key");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [neighbors, setNeighbors] = useState([]);

  useEffect(() => {
    const urlWithPrivateKey = `http://localhost:8083/residents/view-neighbours?key=${loggedIn}`;

    ResidentService.getAllResidents(urlWithPrivateKey)
      .then((response) => {
        console.log("Fetched neighbors:", response.data);
        setNeighbors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching neighbors:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="resident-view-neighbor-body">
      <ResidentNavbar />
      <div className="container">
        <h2 className="mt-4">Neighbors List</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="table table-striped resident-view-neighbor-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Wing</th>
                <th>Flat</th>
                <th>Floor</th>
                <th>Member Count</th>
              </tr>
            </thead>
            <tbody>
              {neighbors.map((neighbor) => (
                <tr key={neighbor.rId}>
                  <td>{`${neighbor.fName} ${neighbor.mInit} ${neighbor.lName}`}</td>
                  <td>{neighbor.email}</td>
                  <td>{neighbor.wingNo}</td>
                  <td>{neighbor.flatNo}</td>
                  <td>{neighbor.floorNo}</td>
                  <td>{neighbor.memberCount}</td>
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

export default ResidentViewNeighbours;
