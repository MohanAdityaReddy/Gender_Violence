import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Counlogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8082/api/counsellors/login", {
        username,
        password,
      });

      // If login is successful, navigate to /assigncase
      alert(response.data);
      navigate("/assigncase"); // Redirect after successful login

      // Optionally, you can store token or other session data here

    } catch (err) {
      // Handle error
      setError(err.response ? err.response.data : "Something went wrong");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form onSubmit={handleLogin} style={{ padding: "2em", border: "1px solid #ddd", borderRadius: "8px" }}>
        <h2>Login Counsellor</h2>
        {error && <div style={{ color: "red", marginBottom: "1em" }}>{error}</div>}
        <div style={{ marginBottom: "1em" }}>
          <label htmlFor="username" style={{ display: "block", marginBottom: "0.5em" }}>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5em" }}
          />
        </div>
        <div style={{ marginBottom: "1em" }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: "0.5em" }}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5em" }}
          />
        </div>
        <button type="submit" style={{ width: "100%", padding: "0.5em", backgroundColor: "#2c3e50", color: "#fff" }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Counlogin;
