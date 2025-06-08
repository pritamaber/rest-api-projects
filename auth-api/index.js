import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

//dotenv config
dotenv.config();

// app init
const app = express();

// port
const PORT = 3000;

// init json support
app.use(express.json());

// all auth routes prefixed with api
app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
