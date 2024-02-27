import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"; // Importing useNavigate
import axios from "axios"; // Import axios for making API requests
import "../Styles/registerPage.css"; // Import the CSS file

const RegisterPage = () => {
  const { option } = useParams();
  const navigate = useNavigate(); // Initializing navigate

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    dob: "",
    password: "",
    role: option.toUpperCase(), // Convert to uppercase
    phoneNumber: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      //console.log("I am in API");
      //console.log(option);
      // Make API call to register user
      const response = await axios.post(
        "http://localhost:8081/api/v1/auth/register",
        formData
      );
      console.log("Registration successful!", response.data);
      // Redirect to login page after successful registration using navigate
      navigate('/Login');
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="register-container">
      <div className="heading">
      <img src="/hadlogo.png" alt="logo"></img>
      <h1 className="register-heading">Register as {option}</h1>
      </div>
      <form onSubmit={handleRegister}>
        <div className="form-fields">
          <div className="personal-info">
            <label className="form-label">First Name : </label>
            <input
              type="text"
              name="firstName"
              className="form-input"
              value={formData.firstName}
              onChange={handleFormChange}
              required
            />
            <label className="form-label">Middle Name : </label>
            <input
              type="text"
              name="middleName"
              className="form-input"
              value={formData.middleName}
              onChange={handleFormChange}
            />
            <label className="form-label">Last Name : </label>
            <input
              type="text"
              name="lastName"
              className="form-input"
              value={formData.lastName}
              onChange={handleFormChange}
              required
            />
            <label className="form-label">Date of Birth : </label>
            <input
              type="date"
              name="dob"
              className="form-input"
              value={formData.dob}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="account-info">
          <label className="form-label">Phone Number : </label>
            <input
              type="tel"
              name="phoneNumber"
              className="form-input"
              value={formData.phoneNumber}
              onChange={handleFormChange}
              required
            />
            <label className="form-label">Email : </label>
            <input
              type="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleFormChange}
              required
            />
            {/* <label className="form-label">Role : </label>
            <input
              type="text"
              name="role"
              className="form-input"
              value={formData.role}
              onChange={handleFormChange}
              required
            /> */}
            <label className="form-label">Password : </label>
            <input
              type="password"
              name="password"
              className="form-input"
              value={formData.password}
              onChange={handleFormChange}
              required
            />
            <label className="form-label">Confirm Password : </label>
            <input
              type="password"
              name="confirm-password"
              className="form-input"
              required
            />
          </div>
        </div>
        <div className="submit-button">
        <button type="submit" className="register-button">
          Register
        </button>
        </div>
      </form>
    </div>

  );
};

export default RegisterPage;
