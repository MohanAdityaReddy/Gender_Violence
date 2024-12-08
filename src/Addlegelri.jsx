import React, { useState } from 'react';

const Addlegelri = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: ''
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
            const response = await fetch('http://localhost:8082/api/legal-rights', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Legal right added:', data);
                setMessage('Legal right added successfully!');
                setFormData({ title: '', description: '' }); // Clear the form
            } else {
                setMessage('Error adding legal right');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error connecting to the server');
        }
    };

    return (
        <div style={{ display: "flex", height: "100vh", fontFamily: "'Arial', sans-serif" }}>
            {/* Sidebar */}
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
                            <a
                                href="/addlegal"
                                style={{ color: "white", textDecoration: "none", fontSize: "1.2em" }}
                            >
                                ADD LEGAL ADVISOR
                            </a>
                        </li>
                        <li style={{ margin: "1.5em 0" }}>
                            <a
                                href="/addlegalri"
                                style={{ color: "white", textDecoration: "none", fontSize: "1.2em" }}
                            >
                                ADD LEGAL RIGHT
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
                <h2>Add Legal Right</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "10px" }}>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            style={{ width: "100%", padding: "8px" }}
                        />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                        <label htmlFor="description">Description:</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
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
                        Add Legal Right
                    </button>
                </form>
                {message && <p>{message}</p>}
            </main>
        </div>
    );
};

export default Addlegelri;
