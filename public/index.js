require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// ===== MongoDB Connection =====
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ===== Schema & Model =====
const registrationSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  phoneNo: String,
  AadharNo: String,
  activities: [String],
  donations: Number,
  dob: Date,
  experience: String,
});

const Registration = mongoose.model("Registration", registrationSchema);

// ===== Middleware =====
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // For static assets like register.html, CSS, images

// ===== Routes =====

// Serve form at root path "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "registration.html"));
});

// Optional: also serve form at "/register"
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "registration.html"));
});

// Handle form submissions
app.post("/register", async (req, res) => {
  try {
    const data = req.body;

    // Ensure activities is always an array
    let activities = data.activities;
    if (!activities) activities = [];
    else if (!Array.isArray(activities)) activities = [activities];

    // Create and save new registration
    const newRegistration = new Registration({
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phoneNo: data.phoneNo,
      AadharNo: data.AadharNo,
      activities: activities,
      donations: Number(data.donations) || 0,
      dob: data.dob ? new Date(data.dob) : null,
      experience: data.experience,
    });

    await newRegistration.save();

    res.send(`
      <h2>✅ Registration successful!</h2>
      <p>We will get back to u soon :) </p>
      <p>Thank you for registering with 
        <strong>EnviroMode</strong>! Your support is greatly appreciated.
</p>      <a href="/">Back to Home</a>
    `);
  } catch (error) {
    console.error("❌ Error saving registration:", error);
    res
      .status(500)
      .send("An error occurred while processing your registration.");
  }
});

// ===== Start Server =====
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
