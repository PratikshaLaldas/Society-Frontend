import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import residentService from "../services/ResidentService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import NavbarComponent from "./NavbarComponent";
//import FooterComponent from "./FooterComponent";
import "../RegisterResident.css";

const RegisterResident = () => {
  const [resident, setResident] = useState({
    email: "",
    fName: "",
    mInit: "",
    lName: "",
    wingNo: "",
    flatNo: "",
    floorNo: "",
    memberCount: "",
    twoWheelerCount: "",
    fourWheelerCount: "",
    birthYear: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResident((prevResident) => ({
      ...prevResident,
      [name]: value,
    }));
  };

  const handleBirthYearChange = (date) => {
    const selectedYear = date.getFullYear();
    setResident((prevResident) => ({
      ...prevResident,
      birthYear: selectedYear,
    }));
  };
  

  const registerResident = (e) => {
    e.preventDefault();
    residentService
      .registerResident(resident)
      .then(() => {
        console.log("Resident registered successfully");
        window.alert("Resident registered successfully");
        navigate("/Login"); // Navigate to the desired page
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setResident({
      email: "",
      fName: "",
      mInit: "",
      lName: "",
      wingNo: "",
      flatNo: "",
      floorNo: "",
      memberCount: "",
      twoWheelerCount: "",
      fourWheelerCount: "",
      birthYear: null,
    });
  };

  return (
    <div className="resident-body">

      <div className="resident-form-container">
        <div className="registerbox">
        <img src="images/avatar.jpg" alt="Avatar" className="avatar" />
          <h1 className="register-h1">Register</h1>
          <form onSubmit={registerResident}>
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={resident.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
            />

        <div className="input-row">
        <div className="input-group">
            <p>First Name</p>
            <input
              type="text"
              name="fName"
              value={resident.fName}
              onChange={handleChange}
              placeholder="Enter First Name"
              required
            />
         </div>   
         <div className="input-group">
            <p>Middle Initial</p>
            <input
              type="text"
              name="mInit"
              value={resident.mInit}
              onChange={handleChange}
              placeholder="Enter Middle Initial"
            />
        </div>
        <div className="input-group">
            <p>Last Name</p>
            <input
              type="text"
              name="lName"
              value={resident.lName}
              onChange={handleChange}
              placeholder="Enter Last Name"
              required
            />
        </div>
        <div className="input-row">
        <div className="input-group">
            <p>Wing No</p>
          <select
            name="wingNo"
            value={resident.wingNo}
            onChange={handleChange}
            required
          >
            <option value="">Select Wing No</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          </div>
          <div className="input-group">
            <p>Flat No</p>
            <input
              type="text"
              name="flatNo"
              value={resident.flatNo}
              onChange={handleChange}
              placeholder="Enter Flat No"
              required
            />
            </div>
            <div className="input-group">
            <p>Floor No</p>
            <input
              type="text"
              name="floorNo"
              value={resident.floorNo}
              onChange={handleChange}
              placeholder="Enter Floor No"
              required
            />
            </div>
            </div>
            <div className="input-row">
            <div className="input-group">
            <p>Member Count</p>
            <input
              type="number"
              name="memberCount"
              value={resident.memberCount}
              onChange={handleChange}
              placeholder="Enter Member Count"
              required
            />
            </div>
            <div className="input-group">
            <p>Two Wheeler Count</p>
            <input
              type="number"
              name="twoWheelerCount"
              value={resident.twoWheelerCount}
              onChange={handleChange}
              placeholder="Enter Two Wheeler Count"
              required
            />
            </div>
            <div className="input-group">
            <p>Four Wheeler Count</p>
            <input
              type="number"
              name="fourWheelerCount"
              value={resident.fourWheelerCount}
              onChange={handleChange}
              placeholder="Enter Four Wheeler Count"
              required
            />
            </div>
         
            <div className="input-group">
            <p>Birth Year</p>
    
            <DatePicker className="birth-year-picker"
                selected={resident.birthYear ? new Date(resident.birthYear, 0, 1) : null}
                onChange={(date) => handleBirthYearChange(date)}
                dateFormat="yyyy"
                showYearPicker
                minDate={new Date("1940-01-01")}
                maxDate={new Date("2006-12-31")}
                placeholderText="Select Birth Year"
                required
                />
                </div>
         </div>
        <div>
        <div className="button-container">
              <button type="submit" className="register-button">
                Register
              </button>
              <button onClick={reset} className="clear-button">
                Clear
              </button>
            </div>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterResident;
