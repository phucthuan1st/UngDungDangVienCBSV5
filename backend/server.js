const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const app = express();

// Secret key for JWT
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "your-secret-key";

// Sample users (replace with your actual user data)
const users = [
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];

// Middleware to parse JSON bodies
app.use(bodyParser.json());

app.get("/server-status", (req, res) => {
  res.json({ Status: "Server is running" });
});

// Login endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Find user by username and password
  const user = users.find(
    (u) => u.username === username && u.password === password,
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  // Generate JWT token, expired in 5 minutes
  const token = jwt.sign({ userId: user.id }, JWT_SECRET_KEY, {
    expiresIn: "5m",
  });

  res.json({
    authenticated: true,
    token: token,
  });
});

// Logout endpoint
app.post("/logout", (req, res) => {
  res.json({ message: "Logout successful" });
});

// Verify token middleware
const verifyToken = (req, res, next) => {
  const { token } = req.body; // Get token from request

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.userId = decoded.userId;
    next();
  });
};

// Route to verify JWT token
app.post("/verify-token", verifyToken, (req, res) => {
  // If the middleware didn't throw an error, the token is valid
  res.json({
    authenticated: true,
  });
});

// Protected route example
app.get("/app", verifyToken, (req, res) => {
  res.json({ message: "Protected route accessed successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
