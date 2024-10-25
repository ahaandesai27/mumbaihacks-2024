import React, { useRef, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { UserContext } from '../../Context/userContext.jsx';

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { setUserId } = useContext(UserContext);
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
    console.log(email, password);

    try {
      const response = await axios.post('http://localhost:5000/login', {
        "Email": email,
        "Password": password
      });

      console.log('Login successful:', response.data);

      // Set the user ID in the context
      if (response.data && response.data.ID) {
        setUserId(response.data.ID);
      }

      // Redirect to homepage
      navigate('/home');

    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., show notification)
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center pt-5">
      <div className="login-form">
        <h2 className="mb-4">Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" required ref={emailRef} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" required ref={passwordRef} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
