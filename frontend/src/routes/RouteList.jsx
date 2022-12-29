import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/landingpage/Home";
import MyNotes from "../pages/mynotes/MyNotes";

function RouteList() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mynotes" element={<MyNotes />} />
      </Routes>
    </div>
  );
}

export default RouteList;
