import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/landingpage/Home";
import Login from "../pages/loginpage/Login";
import MyNotes from "../pages/mynotes/MyNotes";
import Register from "../pages/registerpage/Register";

function RouteList() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/mynotes" element={<MyNotes />} />
      </Routes>
    </div>
  );
}

export default RouteList;
