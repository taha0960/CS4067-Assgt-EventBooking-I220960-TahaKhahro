require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); // Import the database connection
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

app.use(cors({ origin: "*" }));  // Allow all frontend requests
// Connect to MongoDB
connectDB();

// Routes
app.use("/api/users", userRoutes);

// Default Route
app.get("/", (req, res) => {
    res.send("✅ User Service is running!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`✅ User service is running on port ${PORT}`);
});
