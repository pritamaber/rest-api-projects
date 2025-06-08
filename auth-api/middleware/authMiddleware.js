import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import users from "../data/users.js";

dotenv.config();

export function protectRoute(req, res, next) {
  const authHeader = req.headers.authorization;

  // 1. Check if token is present
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "No token provided" });
  }

  // 2. Extract the token from the header
  const token = authHeader.split(" ")[1];

  try {
    // 3. Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. Attach user info to request (optional: fetch full user from DB)
    req.user = users.find((u) => u.id === decoded.id);

    if (!req.user) {
      return res.status(404).json({ error: "User not found" });
    }

    // 5. Continue to the route handler
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}
