import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './Login.css';  // Assuming you have a custom CSS file

const Legaladvisor = () => {
  const [password, setPasswordValue] = useState("");
  const [username, setUsernameValue] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  // Handlers for user input
  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsernameValue(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    console.log("This is our data: " + username + "   " + password);

    const data = {
      username: username,
      password: password
    };

    try {
      const response = await axios.post("http://localhost:8082/api/legaladvisors/login", data);

      if (response.data === "Invalid username or password") { // Adapt this check based on the actual response format
        alert("Invalid username or password");
      } else {
        alert("Login Successful");
        navigate("/displayhealth"); // Correct path used here
      }
    } catch (error) {
      console.error("Error occurred:", error);
      alert("An error occurred. Please try again.");
    }
  };

  // Redirect to Register page
  const redirectToRegister = () => {
    window.location.href = "/register";
  };

  return (
    <>
      <h1>Legal Advisor Login</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={handleUsernameChange}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <br />
          <a href="#" onClick={redirectToRegister}>Don't have an account? Register here</a>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Legaladvisor;
