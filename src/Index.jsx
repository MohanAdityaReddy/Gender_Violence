import React from "react";
import "./TileInterface.css"; // External CSS file for styling

const TileInterface = () => {
  const handleNavigation = (url) => {
    window.location.href = url;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <header
        style={{
          backgroundColor: "#007BFF",
          color: "white",
          textAlign: "center",
          padding: "20px",
          fontSize: "24px",
        }}
      >
        GENDER VIOLENCE RESPONSE MECHANISM
      </header>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          flex: 1,
          padding: "20px",
        }}
      >
        {/* Admin Tile */}
        <div
          className="tile"
          onClick={() => handleNavigation("./admin")}
        >
          <h2>Admin</h2>
          <p>Manage users and oversee the system</p>
        </div>

        {/* Counselor Tile */}
        <div
          className="tile"
          onClick={() => handleNavigation("/counlogin")}
        >
          <h2>Councillor</h2>
          <p>Guide Users in Reload Life</p>
        </div>

        {/* User Tile */}
        <div
          className="tile"
          onClick={() => handleNavigation("/login")}
        >
          <h2>User</h2>
          <p>Re Fing Their life and Restart with help</p>
        </div>

        <div
          className="tile"
          onClick={() => handleNavigation("/legaladvisor")}
        >
          <h2>Legal Advisor</h2>
          <p>Guide Users in Reload Life</p>
        </div>

      </section>

      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#007BFF",
          color: "white",
        }}
      >
        <p>&copy; 2024 GENDER VIOLENCE RESPONSE MECHANISM. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default TileInterface;
