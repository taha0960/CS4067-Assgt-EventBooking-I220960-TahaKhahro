import React, { useState } from "react";
import axios from "axios";

const Bookings = () => {
  const [userId, setUserId] = useState("");
  const [eventId, setEventId] = useState("");
  const [status, setStatus] = useState("confirmed");
  const [message, setMessage] = useState("");

  const handleBooking = () => {
    axios.post("http://localhost:5002/api/bookings", { userId, eventId, status })
      .then(response => setMessage("Booking confirmed!"))
      .catch(error => setMessage("Booking failed!"));
  };

  return (
    <div>
      <h1>Book an Event</h1>
      <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <input type="text" placeholder="Event ID" value={eventId} onChange={(e) => setEventId(e.target.value)} />
      <button onClick={handleBooking}>Book Now</button>
      <p>{message}</p>
    </div>
  );
};

export default Bookings;
