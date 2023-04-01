import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Register from "./Components/Register/Register";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import AddPost from "./Components/AddPost/AddPost";
import RaedData from "./Components/ReadData/RaedData";
import axios from "axios";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/AddPost" element={<AddPost/>} />
        <Route path="/RaedData/:id" element={<RaedData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
