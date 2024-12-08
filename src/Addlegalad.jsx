import React, { useState } from 'react';

const Addlegalad = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        phoneNo: '',
        experience: '',
        address: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8082/api/legaladvisors/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Registration successful:', data);
                setMessage('Registration successful!');
            } else {
                console.error('Error registering user');
                setMessage('Error registering user');
            }
        } catch (error) {
            console.error('There was an error!', error);
            setMessage('There was an error!');
        }
    };

    return (
        <div style={{ display: "flex", height: "100vh", fontFamily: "'Arial', sans-serif" }}>
            {/* Sidebar */}
            <nav
                style={{
                    backgroundColor: "#2c3e50",
                    color: "#fff",
                    padding: "1em",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: "200px",
                }}
            >
                <h2 style={{ color: "#f39c12", fontSize: "1.5em", marginBottom: "1em" }}>MENU</h2>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <li style={{ margin: "1em 0" }}>
                        <a
                            href="/adminindex"
                            style={{
                                color: "white",
                                textDecoration: "none",
                                fontSize: "1em",
                                padding: "0.5em 1em",
                                display: "block",
                            }}
                        >
                            USER DETAILS
                        </a>
                    </li>
                    <li style={{ margin: "1em 0" }}>
                        <a
                            href="/addcoun"
                            style={{
                                color: "white",
                                textDecoration: "none",
                                fontSize: "1em",
                                padding: "0.5em 1em",
                                display: "block",
                            }}
                        >
                            ADD COUNSELLOR
                        </a>
                    </li>
                    <li style={{ margin: "1em 0" }}>
                        <a
                            href="/addlegalad"
                            style={{
                                color: "white",
                                textDecoration: "none",
                                fontSize: "1em",
                                padding: "0.5em 1em",
                                display: "block",
                            }}
                        >
                            ADD LEGAL ADVISOR
                        </a>
                    </li>
                    <li style={{ margin: "1em 0" }}>
                        <a
                            href="/addlegelri"
                            style={{
                                color: "white",
                                textDecoration: "none",
                                fontSize: "1em",
                                padding: "0.5em 1em",
                                display: "block",
                            }}
                        >
                            ADD LEGAL RIGHTS
                        </a>
                    </li>
                    <li style={{ margin: "1em 0" }}>
                        <a
                            href="/"
                            style={{
                                color: "white",
                                textDecoration: "none",
                                fontSize: "1em",
                                padding: "0.5em 1em",
                                display: "block",
                            }}
                        >
                            SIGN OUT
                        </a>
                    </li>
                </ul>
                <a
                    href="/about"
                    style={{
                        marginTop: "auto",
                        textDecoration: "none",
                        alignSelf: "center",
                    }}
                >
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
            </nav>

            {/* Main Content */}
            <main style={{ flex: 1, marginLeft: "200px", padding: "2em" }}>
                <h2>Register as Legal Advisor</h2>
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
                            style={{ width: "100%", padding: "8px" }}
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
                            style={{ width: "100%", padding: "8px" }}
                        />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                        <label htmlFor="phoneNo">Phone Number:</label>
                        <input
                            type="tel"
                            id="phoneNo"
                            name="phoneNo"
                            value={formData.phoneNo}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", padding: "8px" }}
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
                            style={{ width: "100%", padding: "8px" }}
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
                            style={{ width: "100%", padding: "8px" }}
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

export default Addlegalad;
