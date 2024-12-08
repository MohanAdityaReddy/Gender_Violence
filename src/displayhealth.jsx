import React, { useState, useEffect } from "react";
import axios from "axios";

const Displayhealth = () => {
  const [userInfo, setUserInfo] = useState([]);

  // Fetch user info from backend when component mounts
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("http://localhost:8082/api/userinfo");
        setUserInfo(response.data);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

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
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              textAlign: "center",
              marginTop: "1em",
            }}
          >
            <li style={{ margin: "1.5em 0" }}>
              <a
                href="/displayhealth"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "1.2em",
                }}
              >
                HEALTH CONDITION
              </a>
            </li>
            <li style={{ margin: "1.5em 0" }}>
              <a
                href="/Legaladassigned"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "1.2em",
                }}
              >
                ASSIGNED CASES
              </a>
            </li>
            <li style={{ margin: "1.5em 0" }}>
              <a
                href="/"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "1.2em",
                }}
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

      {/* Main Content Area */}
      <div style={{ marginLeft: "220px", padding: "20px", width: "100%" ,color: "red"}}>
        <h2>User Information</h2>
        <table border="1" style={{ width: "100%", textAlign: "left" ,color:"black"}}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Mental Conditions</th>
              <th>Physical Conditions</th>
            </tr>
          </thead>
          <tbody>
            {userInfo.length > 0 ? (
              userInfo.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.mentalConditions}</td>
                  <td>{user.physicalConditions}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No user information available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Displayhealth;
