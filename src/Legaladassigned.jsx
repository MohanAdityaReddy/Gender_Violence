import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams to access URL parameters

const AssignedCases = () => {
  const { advisorId } = useParams(); // Get advisorId from URL
  const [assignedCases, setAssignedCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the assigned cases for the logged-in advisor
  useEffect(() => {
    const fetchAssignedCases = async () => {
      try {
        const response = await axios.get(`http://localhost:8082/api/cases/legaladvisor/${advisorId}`);
        setAssignedCases(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error occurred:", error);
        setError("Failed to load assigned cases.");
        setLoading(false);
      }
    };

    fetchAssignedCases();
  }, [advisorId]); // Runs whenever advisorId changes

  return (
    <div>
      <h1>Assigned Cases for Advisor {advisorId}</h1>

      {loading && <p>Loading assigned cases...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {assignedCases.length > 0 ? (
          assignedCases.map((assignedCase) => (
            <li key={assignedCase.caseId}>
              <h3>{assignedCase.caseTitle}</h3>
              <p>{assignedCase.description}</p>
            </li>
          ))
        ) : (
          <p>No cases assigned.</p>
        )}
      </ul>
    </div>
  );
};

export default AssignedCases;
