import React, { useEffect, useState } from "react";
import axios from "axios";

const VictimDetailsList = () => {
  const [victimDetails, setVictimDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVictimDetails = async () => {
      try {
        const response = await axios.get("http://localhost:8082/api/victim-details/all");
        setVictimDetails(response.data);
      } catch (err) {
        setError("Failed to fetch victim details");
      } finally {
        setLoading(false);
      }
    };

    fetchVictimDetails();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ display: "flex" }}>
      {/* Navbar */}
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
                VICITIM CASE 
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
      <div style={{ marginLeft: "200px", padding: "20px", color: "black", width: "calc(100% - 200px)" }}>
        <h2>Victim Details</h2>
        <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Demographics</th>
              <th>Case Details</th>
              <th>Emergency Contact</th>
              <th>Incident Date</th>
              <th>Proof Photo</th>
            </tr>
          </thead>
          <tbody>
            {victimDetails.map((victim) => (
              <tr key={victim.id}>
                <td style={{ color: "red" }}>{victim.id}</td>
                <td style={{ color: "red" }}>{victim.name}</td>
                <td style={{ color: "red" }}>{victim.phoneNumber}</td>
                <td style={{ color: "red" }}>{victim.gender}</td>
                <td style={{ color: "red" }}>{victim.address}</td>
                <td style={{ color: "red" }}>{victim.demographics || "N/A"}</td>
                <td style={{ color: "red" }}>{victim.caseDetails || "N/A"}</td>
                <td style={{ color: "red" }}>{victim.emergencyContact}</td>
                <td style={{ color: "red" }}>{victim.incidentDate}</td>
                <td>
                  <a
                    href={`http://localhost:8082/${victim.proofPhotoPath}`} // Ensure the path is correct
                    target="_blank"
                    rel="noopener noreferrer"
                    download={victim.proofPhotoPath.split('/').pop()} // Download the file with its original name
                  >
                    Download Photo
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VictimDetailsList;
