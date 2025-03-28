import React, { useState, useEffect } from "react";
import axios from "axios";

const Notifications = () => {
  const [userId, setUserId] = useState("");
  const [notifications, setNotifications] = useState([]);

  const fetchNotifications = () => {
    axios.get(`http://localhost:5003/api/notifications/${userId}`)
      .then(response => setNotifications(response.data))
      .catch(error => console.error("Error fetching notifications:", error));
  };

  return (
    <div>
      <h1>Notifications</h1>
      <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
      <button onClick={fetchNotifications}>Fetch Notifications</button>
      <ul>
        {notifications.map(notification => (
          <li key={notification._id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
