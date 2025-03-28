require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const eventRoutes = require("./routes/eventRoutes");

const app = express();

// Middleware
app.use(cors({ origin: "*" }));  // Allow all frontend requests

app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use("/api/events", eventRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Event Service running on port ${PORT}`));
