import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Bookings from "./pages/Bookings";
import Notifications from "./pages/Notifications";
import Register from "./pages/Register"; // ✅ Moved Register.js inside pages folder
import Navbar from "./components/Navbar"; // ✅ Navbar imported properly

import Login from "./pages/Login"; // ✅ Ensure Login component is imported
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
      <Navbar /> {/* ✅ Navbar is now used here */}
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/events" element={<Events />} />
  <Route path="/bookings" element={<Bookings />} />
  <Route path="/notifications" element={<Notifications />} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} /> {/* ✅ Ensure this line exists */}
</Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
