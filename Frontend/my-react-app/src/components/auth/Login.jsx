import React, {useRef} from 'react';
import axios from 'axios';
import './styles.css'; // Ensure you have a CSS file for custom styles

const Login = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await axios.post('https://your-api-url/login', {
        email,
        password,
      });

      // Handle successful login here (e.g., store token, redirect)
      console.log('Login successful:', response.data);
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
            <input type="email" className="form-control" id="email" required ref={emailRef}/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" required red={passwordRef}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
