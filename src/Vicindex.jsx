import React, { useEffect, useState } from "react";

const Vicindex = () => {
  const [legalRights, setLegalRights] = useState([]);

  // Fetch legal rights from the database
  useEffect(() => {
    fetch("http://localhost:8082/api/legal-rights")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch legal rights");
        }
        return response.json();
      })
      .then((data) => setLegalRights(data))
      .catch((error) => console.error("Error fetching legal rights:", error));
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "'Arial', sans-serif" }}>
      {/* Sidebar Menu */}
      <nav
        style={{
          backgroundColor: "#2c3e50",
          color: "#fff",
          width: "200px",
          padding: "2em 1em",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "fixed", // Makes the sidebar fixed on the left
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
                href="/victimindex"
                style={{ color: "white", textDecoration: "none", fontSize: "1.2em" }}
              >
                Legal Rights
              </a>
            </li>
            <li style={{ margin: "1.5em 0" }}>
              <a
                href="/vicicoun"
                style={{ color: "white", textDecoration: "none", fontSize: "1.2em" }}
              >
                Connect For Help
              </a>
            </li>
            <li style={{ margin: "1.5em 0" }}>
              <a href="#" style={{ color: "white", textDecoration: "none", fontSize: "1.2em" }}>
                Help
              </a>
            </li>
            <li style={{ margin: "1.5em 0" }}>
              <a
                href="#signout"
                style={{ color: "white", textDecoration: "none", fontSize: "1.2em" }}
              >
                Sign Out
              </a>
            </li>
          </ul>
        </div>
        <div style={{ textAlign: "center" }}>
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
        </div>
      </nav>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: "3em",
          backgroundColor: "#f4f4f4",
          marginLeft: "200px", // Adds space for the fixed sidebar
          overflowY: "auto",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2em",
          }}
        >
          <h1 style={{ fontSize: "2em", color: "#2c3e50", textAlign: "left" }}>
            VICTIM PORTAL
          </h1>
        </header>

        {/* Legal Rights Section */}
        <section
          id="legal-rights"
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "2em",
            borderRadius: "8px",
            marginTop: "2em",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            textAlign: "center",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h2
            style={{
              color: "#f39c12",
              fontSize: "1.8em",
              borderBottom: "2px solid #f39c12",
              paddingBottom: "0.5em",
            }}
          >
            LEGAL RIGHTS
          </h2>
          {legalRights.length > 0 ? (
            <ol style={{ paddingLeft: "1.5em", marginTop: "1em", textAlign: "left" }}>
              {legalRights.map((right) => (
                <li
                  key={right.id}
                  style={{ marginBottom: "1em", fontSize: "1.2em", lineHeight: "1.5" }}
                >
                  <strong style={{ color: "#f39c12" }}>{right.title}:</strong> {right.description}
                </li>
              ))}
            </ol>
          ) : (
            <p style={{ fontSize: "1.2em", color: "#bbb", marginTop: "1em" }}>
              Loading legal rights...
            </p>
          )}
        </section>
      </main>
    </div>
  );
};

export default Vicindex;
