import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    console.log("User signed out");
    navigate("/");
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "2em",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2em",
        }}
      >
        <a href="/" style={{ textDecoration: "none" }}></a>
        <button
          onClick={handleSignOut}
          style={{
            backgroundColor: "#ff6f61",
            color: "white",
            border: "none",
            padding: "0.5em 1em",
            borderRadius: "30px",
            fontSize: "1em",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#ff4c41")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#ff6f61")}
        >
          SIGN OUT
        </button>
        <div>
          <span style={{ fontSize: "1.5em", fontWeight: "bold", marginRight: "0.5em", color: "#fff" }}>
            ABOUT
          </span>
          <span
            style={{
              fontSize: "1.5em",
              color: "#ffd700",
            }}
          >
            👤
          </span>
        </div>
      </div>

      {/* Title */}
      <h1 style={{ fontSize: "2.5em", marginBottom: "0.5em", color: "#ffffff" }}>VICTIM PORTAL</h1>
      <h2 style={{ fontSize: "1.8em", marginBottom: "1em", color: "#ffebcd" }}>ABOUT</h2>

      {/* Team Members Section */}
      <section style={{ marginBottom: "2em" }}>
        <h3 style={{ fontSize: "1.5em", marginBottom: "0.5em", color: "#ffe4b5" }}>Team Members :</h3>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            lineHeight: "2em",
            color: "#ff4500",
          }}
        >
          <ul>
  <li style={{ color: "#1E90FF" }}>K.Mohan Aditya Reddy <span style={{ color: "black" }}> - The team lead</span></li>
  <li style={{ color: "#1E90FF" }}>C.Preetham Reddy</li>
  <li style={{ color: "#1E90FF" }}>D.Jaswanth Reddy</li>
</ul>

        </ul>
      </section>

      {/* Project Section */}
      <section>
        <h3 style={{ fontSize: "1.5em", marginBottom: "0.5em", color: "#ffd700" }}>Our Project :</h3>
        <p
          style={{
            textAlign: "left",
            lineHeight: "1.8",
            color: "#ffffff",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "1em",
            borderRadius: "10px",
          }}
        >
          1. <strong>Admin:</strong> Manage content, user roles, and ensure data security. <br />
          2. <strong>Victim/Survivor:</strong> Access resources, seek help, and connect with support services. <br />
          3. <strong>Counsellor:</strong> Provide support, guidance, and monitor progress. <br />
          4. <strong>Legal Advisor:</strong> Offer legal advice, update legal resources, and assist with legal actions.
        </p>
      </section>
    </div>
  );
};

export default About;