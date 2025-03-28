import axios from "axios";

const BASE_URL = "http://localhost:5000"; // Adjust if necessary

// User Authentication
export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// Fetch Events
export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/events`);
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

// Book an Event
export const bookEvent = async (eventId, token) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/bookings/create`,
      { eventId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  } catch (error) {
    console.error("Error booking event:", error);
    throw error;
  }
};

// Fetch Bookings
export const fetchBookings = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/bookings`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return [];
  }
};
