import React, { useEffect, useState } from "react";
import axios from "axios";

const Adminindex = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:8082/allUsers");
                setUsers(response.data);
            } catch (err) {
                setError("Failed to fetch user details. Please try again later.");
                console.error("Error fetching user details:", err);
            }
        };
        fetchUsers();
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
                href="/adminindex"
                style={{ color: "white", textDecoration: "none", fontSize: "1.2em" }}
              >
                USER DETAILS
              </a>
            </li>
            <li style={{ margin: "1.5em 0" }}>
              <a
                href="/addcoun"
                style={{ color: "white", textDecoration: "none", fontSize: "1.2em" }}
              >
                ADD COUNSELLOR
              </a>
            </li>
            <li style={{ margin: "1.5em 0" }}>
              <a href="/addlegalad" style={{ color: "white", textDecoration: "none", fontSize: "1.2em" }}>
                ADD LEGAL ADVISOR
              </a>
            </li>
            <li style={{ margin: "1.5em 0" }}>
                            <a href="/addlegelri" style={{ color: "white", textDecoration: "none", fontSize: "1.2em" }}>
                                ADD LEGAL RIGTHS
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
            <main style={{ flex: 1, marginLeft: "200px", padding: "2em" }}>
                <h1>Admin Portal</h1>
                <section style={{ marginTop: "2em" ,color:"red"}}>
                    <h2>User Details</h2>
                    {error ? (
                        <p style={{ color: "red" }}>{error}</p>
                    ) : (
                        <table style={{ width: "100%", borderCollapse: "collapse" ,color:"black"}}>
                            <thead>
                                <tr>
                                    <th style={{ borderBottom: "1px solid #ddd" }}>Email</th>
                                    <th style={{ borderBottom: "1px solid #ddd" }}>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.email}>
                                        <td style={{ borderBottom: "1px solid #ddd" }}>{user.email}</td>
                                        <td style={{ borderBottom: "1px solid #ddd" }}>{user.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </section>
            </main>
        </div>
    );
};

export default Adminindex;
