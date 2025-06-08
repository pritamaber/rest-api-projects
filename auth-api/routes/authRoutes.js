import express from "express";
import { protectRoute } from "../middleware/authMiddleware.js";
import {
  registerUser,
  loginUser,
  getMe,
} from "../controllers/authController.js";

// Router init
const router = express.Router();

// register user route
router.post("/register", registerUser);

// login user route
router.get("/login", loginUser);

// me route
router.get("/me", protectRoute, getMe);

export default router;
