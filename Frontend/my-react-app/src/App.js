// src/App.js
import React, { useState } from 'react';
import Login from './components/auth/Login.jsx';
import Signup from './components/auth/Signup.jsx';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="App">
      <div className="text-center mt-5">
        {isLogin ? <Login /> : <Signup />}
        <button
          className="btn btn-link mt-3"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default App;
