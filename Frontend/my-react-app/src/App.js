import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Landingpage from './components/landing_page';
import Taskpage from './components/taskpage';
import Navbar from './components/navbar'
import Homepage from './components/homepage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<> <Navbar /> <Homepage /> </>} />
        <Route path="/tasks" element={<> <Navbar /> <Taskpage /> </>} />
        <Route path="/" element={<> <Navbar /> <Landingpage /> </>} />
      </Routes>
    </Router>
  );
}

export default App;
