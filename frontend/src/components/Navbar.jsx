import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">View Events</Link></li>
        <li><Link to="/bookings">Bookings</Link></li> {/* ✅ Ensure this line exists */}
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li> {/* ✅ Ensure this is here */}
      </ul>
    </nav>
  );
};

export default Navbar;
