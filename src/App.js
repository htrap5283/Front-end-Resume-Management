import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import EmpPersonalDetailsForm from './components/EmpPersonalDetailsForm';
import Login from './components/LoginPage';
import Navbar from './components/Navbar';
import EmployeeSearchTable from './components/EmployeeSearchTable';
// import './CSS/Navbar.css';
// import './CSS/EmpDetailsForm.css';
// import './CSS/EmployeeSearchTable.css';
import EmpProjectDetailsForm from './components/EmpProjectDetailsForm';
import EmpSkillsCertificationForm from './components/EmpSkillsCertificationForm';
import Display from './redux/Display';
import SuccessPage from './components/SucessPage';
import ErrorPage from './components/ErrorPage';



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post('http://localhost:8080/login', {
        username: username,
        password: password,
      });
      if (response.data.message === 'Login successful') {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      setIsLoggedIn(false);
    }
  };



  const handleLogout = () => {
    setIsLoggedIn(false);

  };



  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<EmpPersonalDetailsForm />} />
        <Route path="/emp-project-details" element={<EmpProjectDetailsForm />} />
        <Route path="/emp-certificates-skills-form" element={<EmpSkillsCertificationForm />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/hrview" /> : <Login handleLogin={handleLogin} />}
        />
        <Route
          path="/hrview"
          element={isLoggedIn ? <EmployeeSearchTable /> : <Navigate to="/login" />}
        />
        <Route path="/display" element={<Display />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </>
  );
};



export default App;

