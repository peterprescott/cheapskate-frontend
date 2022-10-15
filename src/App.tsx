import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./Pages/Homepage/Welcome";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Welcome />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
