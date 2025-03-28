const express = require("express");
const axios = require("axios"); // Import Axios for API calls
const Booking = require("../models/Booking");

const router = express.Router();

// Create a booking
router.post("/", async (req, res) => {
  try {
    const { userId, eventId, status } = req.body;

    // ✅ Validate User
    const userResponse = await axios.get(`http://localhost:5000/api/users/${userId}`);
    if (!userResponse.data) {
      return res.status(404).json({ error: "User not found" });
    }

    // ✅ Validate Event
    const eventResponse = await axios.get(`http://localhost:5001/api/events/${eventId}`);
    if (!eventResponse.data) {
      return res.status(404).json({ error: "Event not found" });
    }

    // ✅ Save Booking in Database
    const booking = new Booking({ userId, eventId, status });
    await booking.save();

    res.status(201).json(booking);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
