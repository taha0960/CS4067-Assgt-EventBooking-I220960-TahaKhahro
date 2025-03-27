const express = require("express");
const router = express.Router();
const Notification = require("../models/Notification");
const nodemailer = require("nodemailer");

// Create a new notification
router.post("/", async (req, res) => {
    try {
        const newNotification = new Notification(req.body);
        await newNotification.save();
        res.status(201).json(newNotification);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all notifications
router.get("/", async (req, res) => {
    try {
        const notifications = await Notification.find();
        res.json(notifications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Send email notification (example)
router.post("/send-email", async (req, res) => {
    const { email, subject, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.json({ message: "Email sent successfully", info });
    });
});

module.exports = router;
