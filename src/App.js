// import styled from "styled-components";
import React from "react";
import GlobalStyle from "./GlobalStyle";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar.component";
import Homepage from "./routes/homepage/homepage.component";
import LoginPage from "./routes/auth/auth-login.component";
import RegisterPage from "./routes/auth/auth-register.component";
import Dashboard from "./routes/dashboard/user-dashboard.component";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
