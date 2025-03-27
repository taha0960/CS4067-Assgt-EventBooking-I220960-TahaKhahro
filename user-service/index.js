require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Debugging: Ensure environment variables are loaded
if (!process.env.MONGO_URI) {
    console.error("❌ ERROR: MONGO_URI is missing in .env!");
    process.exit(1);
}

if (!process.env.JWT_SECRET) {
    console.error("❌ ERROR: JWT_SECRET is missing in .env!");
    process.exit(1);
}

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Connected to MongoDB");
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err);
        process.exit(1); // Exit on database failure
    }
}
connectDB();

// Routes
app.use('/api/users', userRoutes);

// Default Route
app.get('/', (req, res) => {
    res.send('✅ User Service is running!');
});

// Start Server
app.listen(PORT, () => {
    console.log(`✅ User service is running on port ${PORT}`);
});
