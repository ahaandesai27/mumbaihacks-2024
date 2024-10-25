// src/App.js
import React, { useState } from 'react';
import Login from './components/auth/Login.jsx';
import Signup from './components/auth/Signup.jsx';
import Chatbot from './components/Chatbot.jsx'

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Chatbot />
  );
};

export default App;
