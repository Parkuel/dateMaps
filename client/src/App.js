import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';



function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/forgot-password' element={<ForgotPasswordPage />} />

      
    </Routes>
  );
}

export default App;
