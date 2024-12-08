import React, { useState } from "react";
import axios from "axios";

function Register() {
    const [register, setRegister] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Register Data:", register);
        try {
            const response = await axios.post('http://localhost:8082/addUser', register, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log("Response Data:", response.data);
            alert("User added successfully!");
        } catch (error) {
            console.error("Error while adding user:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={register.name}
                    onChange={handleChange}
                    required
                />
                <br />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={register.email}
                    onChange={handleChange}
                    required
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={register.password}
                    onChange={handleChange}
                    required
                />
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
