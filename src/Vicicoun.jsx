import React, { useState } from "react";
import axios from "axios";

const Vicicoun = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    gender: "",
    address: "",
    demographics: "",
    caseDetails: "",
    emergencyContact: "",
    incidentDate: "",
  });

  const [proofPhoto, setProofPhoto] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setProofPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (proofPhoto) {
      data.append("proofPhoto", proofPhoto);
    }

    try {
      const response = await axios.post("http://localhost:8082/api/victim-details/create", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Data submitted successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Navigation Bar */}
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

      {/* Form Content */}
      <div style={{ marginLeft: "220px", padding: "2em", width: "100%" }}>
        <h1>Victim Details Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br></br>
          <input 
            style={{ color: "red", type: "text" }} 
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <br></br>
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
          <br></br>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <br></br>
          <input
            type="text"
            name="demographics"
            placeholder="Demographics"
            value={formData.demographics}
            onChange={handleChange}
          />
          <br></br>
          <textarea
            name="caseDetails"
            placeholder="Case Details"
            value={formData.caseDetails}
            onChange={handleChange}
          ></textarea>
          <br></br>
          <input
            type="text"
            name="emergencyContact"
            placeholder="Emergency Contact"
            value={formData.emergencyContact}
            onChange={handleChange}
            required
          />
          <br></br>
          <input
            type="date"
            name="incidentDate"
            value={formData.incidentDate}
            onChange={handleChange}
            required
          />
          <br></br>
          <input type="file" name="proofPhoto" onChange={handleFileChange} required />
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Vicicoun;
