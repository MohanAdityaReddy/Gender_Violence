import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './Login.css'; 
function Login() {
    const [password, setPasswordValue] = useState("");
    const [userId, setUserIdValue] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate

    // Handlers for user input
    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value);
    };

    const handleUserIdChange = (e) => {
        setUserIdValue(e.target.value);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
        console.log("This is our data: " + userId + "   " + password);

        const data = {
            userId: userId,
            password: password
        };

        try {
            const response = await axios.post("http://localhost:8082/loginUser", data);
            if (response.data === false) {  // Compare to false (or adapt according to response format)
                alert("Invalid user id or Password");
            } else {
                alert("Login Successful");
                navigate("/victimindex"); // Correct path used here
            }
            
        } catch (error) {
            console.error("Error occurred:", error);
            alert("An error occurred. Please try again.");
        }
    };

    // Redirect to Register page
    const redirectToRegister = () => {
        window.location.href = "/register";
    };

    return (
        <>
            <h1>LOGIN PAGE</h1>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label>User ID:</label>
                    <input
                        type="email"
                        placeholder="Enter your user id"
                        value={userId}
                        onChange={handleUserIdChange}
                    />
                    <br />
                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="Enter your Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <br />
                    <a href="#" onClick={redirectToRegister}>Don't have an account? Register here</a>
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;
