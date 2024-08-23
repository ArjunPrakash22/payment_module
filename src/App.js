import React,{useEffect} from "react";
import { Routes, Route,useLocation } from "react-router-dom";
import './App.css';
import {Login,Register

} from "./Pages";

function App() {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
