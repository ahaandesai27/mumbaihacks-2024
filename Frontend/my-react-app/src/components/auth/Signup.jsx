import React, { useRef } from 'react';
import axios from 'axios';

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();
  const roleRef = useRef();
  const companyNameRef = useRef();
  const homeCityNameRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const signupData = {
      Name: nameRef.current.value,
      Email: emailRef.current.value,
      Age: Number(ageRef.current.value), // Ensure age is a number
      Password: passwordRef.current.value,
      Role: roleRef.current.value,
      Level: 1,
      PhoneNumber: phoneNumberRef.current.value,
      HomeCity: homeCityNameRef.current.value,
    };

    try {
      const response = await axios.post('YOUR_API_ENDPOINT_HERE', signupData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Success:', response.data);
      // Handle success (e.g., redirect, show a message, etc.)
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      // Handle error (e.g., show error message to the user)
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="signup-form">
        <h2 className="text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" ref={nameRef} required />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" ref={emailRef} required />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="age" className="form-label">Age</label>
              <input type="number" className="form-control" id="age" ref={ageRef} required />
            </div>
            <div className="col-md-6">
              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
              <input type="tel" className="form-control" id="phoneNumber" ref={phoneNumberRef} required />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" ref={passwordRef} required />
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="form-label">Role</label>
            <input type="text" className="form-control" id="role" ref={roleRef} required />
          </div>
          <div className="mb-3">
            <label htmlFor="companyName" className="form-label">Company Name</label>
            <input type="text" className="form-control" id="companyName" ref={companyNameRef} required />
          </div>
          <div className="mb-3">
            <label htmlFor="homeCityName" className="form-label">Home City</label>
            <input type="text" className="form-control" id="homeCityName" ref={homeCityNameRef} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
