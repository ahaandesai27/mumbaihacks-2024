import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Homepage from './components/homepage';
import Taskpage from './components/taskpage';
import Navbar from './components/navbar'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<> <Navbar /> <Homepage /> </>} />
        <Route path="/tasks" element={<> <Navbar /> <Taskpage /> </>} />
      </Routes>
    </Router>
  );
}

export default App;
