import React from "react";
import backgroundImage from "../assets/homepagebg.jpg"; // Adjust the path as needed
import { useNavigate } from "react-router-dom";
function Homepage() {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
      }}
    >
      <div className="d-flex flex-row align-items-center bg-dark">
        <div className="d-flex flex-column mb-5 mt-5 align-items-center col-6">
          <div>
            <h1>Efficient Task Tracking</h1>
          </div>
          <div className="mb-3 text-center text-primary">
            <h2>
              Easily track your tasks with our streamlined task tracking
              feature, ensuring accurate task management.
            </h2>
          </div>
        </div>
        <div className="d-grid gap-4 col-3 mx-auto my-auto col-4">
          <button className="btn btn-warning" type="button" onClick={() => navigate("../tasks")}>
            Track Tasks
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;