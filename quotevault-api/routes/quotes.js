const express = require("express");
const router = express.Router();
const quotes = require("../data/quotes");

// GET all quotes
router.get("/", (req, res) => {
  res.status(200).json(quotes);
});

// GET a quote by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const quote = quotes.find((q) => q.id === id);
  if (!quote) return res.status(404).json({ error: "Quote not found" });
  res.json(quote);
});

// POST a new quote
router.post("/", (req, res) => {
  const { author, text } = req.body;
  if (!author || !text) {
    res.status(400).json({ error: "Author and text are required" });
  }
  let newQuote = {
    id: quotes.length + 1,
    author,
    text,
  };
  quotes.push(newQuote);
  res.status(201).json(newQuote);
});

//UPDATE a quote by ID
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const quote = quotes.find((q) => q.id === id);
  if (!quote) return res.status(404).json({ error: "Quote not found" });

  const { author, text } = req.body;
  if (author) quote.author = author;
  if (text) quote.text = text;
  res.json(quote);
});

// DELETE a quote by ID
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = quotes.findIndex((q) => q.id === id);
  if (index === -1) return res.status(404).json({ error: "Quote not found" });

  const deleted = quotes.splice(index, 1);
  res.json({ message: "Quote deleted", deleted });
});

module.exports = router;
