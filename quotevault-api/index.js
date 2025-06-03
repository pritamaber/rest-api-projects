const express = require("express");
const app = express();
const quotesRouter = require("./routes/quotes");

// Middleware to parse JSON body
app.use(express.json());

// Use /api/quotes for all quote endpoints
app.use("/api/quotes", quotesRouter);

app.get("/", (req, res) => {
  res.send("📚 Welcome to QuoteVault API!");
});

app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
