import React, {useContext} from "react";
import backgroundImage from "../assets/langingpagebg.jpg"; // Adjust the path as needed
import { UserContext } from '../Context/userContext.jsx';
function Homepage() {
  const { userId } = useContext(UserContext);
  console.log("User ID: ",  userId)
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
      <div className="d-flex flex-column mb-5 align-items-center">
        <div>
          <h1>Work from home for Everyone</h1>
        </div>
        <div className="mb-3">
          <h2>
            Empower your team and company to work flexibly and efficiently from
            home today!{" "}
          </h2>
        </div>
        <div className="d-grid gap-4 col-4 mx-auto">
          <button className="btn btn-warning" type="button">
            Get Started as Employee
          </button>
          <button className="btn btn-danger" type="button">
            Register as Company
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
