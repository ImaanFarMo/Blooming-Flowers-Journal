import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Dashboard from "./pages/dashboard.jsx";
import SignUp from "./pages/SignUp.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;