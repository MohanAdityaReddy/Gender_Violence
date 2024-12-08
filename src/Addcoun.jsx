import React, { useState } from "react";
import axios from "axios";

const Addcoun = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        phoneNumber: "",
        experience: "",
        address: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8082/api/counsellors/register", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            setMessage("Registration successful!");
        } catch (error) {
            setMessage("Registration failed. Please try again.");
            console.error("Error:", error);
        }
    };

    return (
        <div style={{ fontFamily: "'Arial', sans-serif", backgroundColor: "#000", color: "#fff" }}>
            {/* Top Navigation Menu */}
            <nav
                style={{
                    backgroundColor: "#2c3e50", // Dark blue-gray background
        color: "#fff", // White text
        padding: "1em", // Space inside the bar
        display: "flex", // Flexbox layout
        justifyContent: "space-between", // Spread items across the bar
        alignItems: "center", // Align items vertically
        position: "fixed", // Fixed position at the top
        top: 0,
        left: 0,
        width: "100%", // Full width across the page
        zIndex: 10, // Ensure it stays above other elements
                }}
            >
                <h2 style={{ color: "#f39c12", margin: "0 2em 0 1em", fontSize: "1.5em" }}>MENU</h2>
                <ul
                    style={{
                        listStyle: "none",
                        display: "flex",
                        gap: "2em",
                        margin: 0,
                        padding: 0,
                    }}
                >
                    <li>
                        <a href="/adminindex" style={{ color: "white", textDecoration: "none" }}>
                            USER DETAILS
                        </a>
                    </li>
                    <li>
                        <a href="/addcoun" style={{ color: "white", textDecoration: "none" }}>
                            ADD COUNSELLOR
                        </a>
                    </li>
                    <li>
                        <a href="/addlegalad" style={{ color: "white", textDecoration: "none" }}>
                            ADD LEGAL ADVISOR
                        </a>
                    </li>
                    <li>
                        <a href="/addlegelri" style={{ color: "white", textDecoration: "none" }}>
                            ADD LEGAL RIGHTS
                        </a>
                    </li>
                    <li>
                        <a href="/" style={{ color: "white", textDecoration: "none" }}>
                            SIGN OUT
                        </a>
                    </li>
                </ul>
                <a href="/about" style={{ textDecoration: "none", marginLeft: "auto" }}>
                    <button
                        style={{
                            backgroundColor: "#2c3e50",
                            color: "#fff",
                            padding: "1em",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        ABOUT
                    </button>
                </a>
            </nav>

            {/* Main Content */}
            <main style={{ padding: "2em", marginTop: "5em", backgroundColor: "#000" }}>
                <h2>Register as Counsellor</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "10px" }}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", padding: "8px", backgroundColor: "#333", color: "#fff" }}
                        />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", padding: "8px", backgroundColor: "#333", color: "#fff" }}
                        />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", padding: "8px", backgroundColor: "#333", color: "#fff" }}
                        />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                        <label htmlFor="experience">Experience (in years):</label>
                        <input
                            type="number"
                            id="experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", padding: "8px", backgroundColor: "#333", color: "#fff" }}
                        />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                        <label htmlFor="address">Address:</label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", padding: "8px", backgroundColor: "#333", color: "#fff" }}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: "#4CAF50",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        Register
                    </button>
                </form>
                {message && (
                    <p
                        style={{
                            marginTop: "10px",
                            color: message.includes("successful") ? "green" : "red",
                        }}
                    >
                        {message}
                    </p>
                )}
            </main>
        </div>
    );
};

export default Addcoun;
