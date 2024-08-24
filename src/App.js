import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import { Login, Register } from "./Pages";
import AdminPanel from "./AdminPanel";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPanel />} /> 
      </Routes>
    </div>
  );
}

export default App;
