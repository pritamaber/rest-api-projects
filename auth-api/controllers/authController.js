import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import users from "../data/users.js";

// dotenv init
dotenv.config();

// Register user
export async function registerUser(req, res) {
  const { name, email, password } = req.body;

  // 1. Basic validation
  if (!name || !email || !password) {
    res.status(404).json({ error: "All fields are required" });
  }

  // 2. Check if the user exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(409).json({ error: "user already exists" });
  }

  // 3. Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 4. Save the user
  const newUser = {
    id: Date.now(),
    name,
    email,
    password: hashedPassword,
  };
  users.push(newUser);

  // 5. Return success
  res.status(201).json({
    message: "User registered sucessfully",
    user: { id: newUser.id, name: newUser.name, email: newUser.email },
  });
}

// Login user
export async function loginUser(req, res) {
  const { email, password } = req.body;

  // 1. Basic validation
  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // 2. Check if user exists
  const fetchedUser = users.find((user) => user.email === email);
  if (!fetchedUser) {
    return res.status(404).json({ error: "User not found" });
  }

  // 3. Compare password (correct order: plain, hashed)
  const isMatch = await bcrypt.compare(password, fetchedUser.password);
  if (!isMatch) {
    return res.status(401).json({ error: "Incorrect password" });
  }

  // 4. Success
  // create token
  const token = jwt.sign(
    {
      id: fetchedUser.id,
      email: fetchedUser.email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  // show login sucess info
  res.status(200).json({
    message: "Logged in successfully",
    token,
  });
}

// get me function
export function getMe(req, res) {
  // req.user is set by middleware
  const { id, name, email } = req.user;
  res.json({ id, name, email });
}
