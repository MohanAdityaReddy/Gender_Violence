import React, { useState, useEffect } from "react";
import axios from "axios";

const AssignCase = () => {
  const [legalAdvisors, setLegalAdvisors] = useState([]);
  const [caseDetails, setCaseDetails] = useState({
    caseName: "",
    description: "",
    victimName: "", // Added victimName
  });
  const [selectedAdvisor, setSelectedAdvisor] = useState("");

  useEffect(() => {
    const fetchLegalAdvisors = async () => {
      try {
        const response = await axios.get("http://localhost:8082/api/cases/legaladvisors");
        setLegalAdvisors(response.data);
      } catch (error) {
        console.error("Error fetching legal advisors:", error);
      }
    };

    fetchLegalAdvisors();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCaseDetails({ ...caseDetails, [name]: value });
  };

  const handleAssign = async () => {
    if (!selectedAdvisor) {
      alert("Please select a legal advisor.");
      return;
    }

    const caseDetailsWithVictim = {
      ...caseDetails,
      victimName: caseDetails.victimName,  // Ensure victimName is included
    };

    try {
      const response = await axios.post(
        `http://localhost:8082/api/cases/assign/${selectedAdvisor}`,
        caseDetailsWithVictim  // Send the updated case details
      );
      alert("Case assigned successfully!");
    } catch (error) {
      console.error("Error assigning case:", error);
      alert("Failed to assign case.");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Nav Bar */}
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
                SESSION DETAILS OF VICTIM
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
      <div style={{ marginLeft: "220px", padding: "20px", width: "100%" }}>
        <h2>Assign Case to Legal Advisor</h2>
        <form>
          <div>
            <label>Case Name:</label>
            <input
              type="text"
              name="caseName"
              value={caseDetails.caseName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={caseDetails.description}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Victim Name:</label>
            <input
              type="text"
              name="victimName"
              value={caseDetails.victimName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Select Legal Advisor:</label>
            <select onChange={(e) => setSelectedAdvisor(e.target.value)} value={selectedAdvisor}>
              <option value="">-- Select --</option>
              {legalAdvisors.length > 0 ? (
                legalAdvisors.map((advisor) => (
                  <option key={advisor.id} value={advisor.id}>
                    {advisor.username} - {advisor.experience}
                  </option>
                ))
              ) : (
                <option disabled>No legal advisors available</option>
              )}
            </select>
          </div>
          <button type="button" onClick={handleAssign}>
            Assign Case
          </button>
        </form>
      </div>
    </div>
  );
};

export default AssignCase;
