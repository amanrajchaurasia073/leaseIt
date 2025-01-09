// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navebar from "./components/Navebar"
import Home from "./pages/Home"
import Homes from "./pages/Homes"
import Pg from "./pages/Pg"
import Rooms from "./pages/Rooms"
import Register from "./pages/Register";

export default function App() {
  
    return (
      <Router>
        <Navebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pg" element={<Pg />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/homes" element={<Homes />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    );
  
}