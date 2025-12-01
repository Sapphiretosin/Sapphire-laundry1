require('dotenv').config();
require('express-async-errors');

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173",  // Allow your frontend
  credentials: true                 // Allow cookies/tokens if needed
}));

app.use(express.json());

// Auth routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Sapphire Laundry Backend is running 🚀');
});

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  console.log(`MongoDB Connected`);
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
