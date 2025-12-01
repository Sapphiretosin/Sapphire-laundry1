const express = require("express");
const router = express.Router();
const {
  register,
  registerAdmin,
  login,
} = require("../controllers/authController");
const { protect, authorizeRoles } = require("../middleware/authMiddleware");

// --------------------
// Public routes
// --------------------
router.post("/register", register);
router.post("/login", login);
router.post("/register-admin", registerAdmin);

// --------------------
// Protected route example
// --------------------
router.get("/profile", protect, (req, res) => {
  res.json({ message: "This is your profile", user: req.user });
});

// --------------------
// Admin-only route example
// --------------------
router.get("/admin", protect, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Welcome, Admin!" });
});

module.exports = router;
