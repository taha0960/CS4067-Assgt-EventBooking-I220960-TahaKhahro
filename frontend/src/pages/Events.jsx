import React, { useState, useEffect } from "react";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/events")
      .then(response => setEvents(response.data))
      .catch(error => console.error("Error fetching events:", error));
  }, []);

  return (
    <div>
      <h1>Available Events</h1>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            {event.name} - {event.location} ({new Date(event.date).toLocaleDateString()})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
