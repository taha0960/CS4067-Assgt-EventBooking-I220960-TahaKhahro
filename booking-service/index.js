const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/bookings", require("./routes/bookingRoutes"));

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Booking Service running on port ${PORT}`));
