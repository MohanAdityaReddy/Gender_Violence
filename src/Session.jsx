import React, { useState } from "react";

const Session = () => {
  const [formData, setFormData] = useState({
    name: "",
    sessionNo: "",
    details: "",
  });

  const [message, setMessage] = useState("");

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
      const response = await fetch("http://localhost:8082/api/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Session added:", data);
        setMessage("Session added successfully!");
        setFormData({ name: "", sessionNo: "", details: "" }); // Clear the form
      } else {
        setMessage("Error adding session");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error connecting to the server");
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "'Arial', sans-serif" }}>
      {/* Sidebar */}
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
                href="/datacase"
                style={{ color: "white", textDecoration: "none", fontSize: "1.2em" }}
              >
                VICTIM CASE
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
      <div
        style={{
          marginLeft: "200px",  // Adjusted to avoid overlap with the sidebar
          padding: "2em",
          maxWidth: "600px",  // Reduced width for the main content
          margin: "0 auto",
          backgroundColor: "#f9f9f9",
          borderRadius: "100px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1>Session Details Of Victim</h1>
        <h2>Add Session</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Session No:</label>
            <input
              type="text"
              name="sessionNo"
              value={formData.sessionNo}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Details:</label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Add Session</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Session;
