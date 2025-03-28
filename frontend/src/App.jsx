import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Bookings from "./pages/Bookings";
import Notifications from "./pages/Notifications";
import Register from "./pages/Register"; // ✅ Moved Register.js inside pages folder
import Navbar from "./components/Navbar"; // ✅ Navbar imported properly

import Login from "./pages/Login"; // ✅ Ensure Login component is imported



function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* ✅ Navbar is now used here */}
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/events" element={<Events />} />
  <Route path="/bookings" element={<Bookings />} />
  <Route path="/notifications" element={<Notifications />} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} /> {/* ✅ Ensure this line exists */}
</Routes>

      </div>
    </Router>
  );
}

export default App;
