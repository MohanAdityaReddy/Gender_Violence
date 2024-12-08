import React, { useState } from "react";
import axios from "axios";

const Health = () => {
  const [formData, setFormData] = useState({
    name: "",
    mentalConditions: "",
    physicalConditions: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8082/api/userinfo", formData, {
        headers: { "Content-Type": "application/json" },
      });
      setResponseMessage("Data submitted successfully!");
      console.log("Response:", response.data);
    } catch (error) {
      setResponseMessage("Error submitting data. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Navigation Sidebar */}
      <nav
        style={{
          backgroundColor: "#2c3e50",
          color: "#fff",
          width: "200px",
          padding: "2em 1em",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
        }}
      >
        <div>
          <h2
            style={{
              color: "#f39c12",
              fontSize: "1.5em",
              textAlign: "center",
              marginBottom: "1em",
            }}
          >
            MENU
          </h2>
          <ul style={{ listStyle: "none", padding: 0, textAlign: "center", marginTop: "1em" }}>
            <li style={{ margin: "1.5em 0" }}>
              <a
                href="/session"
                style={{ color: "white", textDecoration: "none", fontSize: "1.2em" }}
              >
                SESSION DETAILS OF VICITIM
              </a>
            </li>
            <li style={{ margin: "1.5em 0" }}>
              <a
                href="/health"
                style={{ color: "white", textDecoration: "none", fontSize: "1.2em" }}
              >
                UPDATE HEALTH CONDITION
              </a>
            </li>
            <li style={{ margin: "1.5em 0" }}>
              <a
                href="/assigncase"
                style={{ color: "white", textDecoration: "none", fontSize: "1.2em" }}
              >
                ASSIGN CASE TO LEGAL ADVISOR
              </a>
            </li>
           
            <li style={{ margin: "1.5em 0" }}>
              <a
                href="/"
                style={{ color: "white", textDecoration: "none", fontSize: "1.2em" }}
              >
                Sign Out
              </a>
            </li>
          </ul>
        </div>
        <div style={{ textAlign: "center" }}>
          <a href="/about" style={{ textDecoration: "none" }}>
            <button
              style={{
                backgroundColor: "transparent",
                border: "1px solid #fff",
                color: "#fff",
                padding: "0.5em 1em",
                cursor: "pointer",
                borderRadius: "5px",
                fontSize: "1em",
              }}
            >
              ABOUT
            </button>
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", marginLeft: "220px" }}>
        <h1>Upload User Information</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="name" style={{ display: "block", fontWeight: "bold" }}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="mentalConditions" style={{ display: "block", fontWeight: "bold" }}>Mental Conditions:</label>
            <textarea
              id="mentalConditions"
              name="mentalConditions"
              value={formData.mentalConditions}
              onChange={handleChange}
              required
              rows="4"
              style={{ width: "100%", padding: "8px" }}
            ></textarea>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="physicalConditions" style={{ display: "block", fontWeight: "bold" }}>Physical Conditions:</label>
            <textarea
              id="physicalConditions"
              name="physicalConditions"
              value={formData.physicalConditions}
              onChange={handleChange}
              required
              rows="4"
              style={{ width: "100%", padding: "8px" }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "#fff", border: "none", cursor: "pointer" }}
          >
            Submit
          </button>
        </form>
        {responseMessage && (
          <p style={{ marginTop: "20px", color: responseMessage.startsWith("Error") ? "red" : "green" }}>
            {responseMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Health;
