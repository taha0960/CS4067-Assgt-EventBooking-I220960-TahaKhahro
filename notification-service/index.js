const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/api/notifications", require("./routes/notificationRoutes"));

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Notification Service running on port ${PORT}`));
