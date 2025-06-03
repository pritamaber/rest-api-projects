# 🛠️ REST API Mini Projects

This repository contains beginner-friendly, production-style REST API projects built using **Node.js** and **Express.js**, focused on practical learning without requiring any hosting or external database.

> ⚡ Each project is self-contained and designed to teach key REST concepts through real-world mini apps.

---

## 📁 Project Structure

```
rest-api-projects/
├── hello-api/           // Day 1 – Your First REST Endpoint
│   └── index.js
├── quotevault-api/      // Day 2 – Full CRUD API with in-memory DB
│   ├── index.js
│   ├── routes/
│   │   └── quotes.js
│   └── data/
│       └── quotes.js
```

## 📦 Projects

### 1. 📬 Hello API

A basic Express server with a single `GET /hello` route to understand how REST APIs respond with JSON.

- ✅ `GET /hello` → `{ "message": "Hello, Pritam! 👋" }`
- 🎯 Concepts: Express setup, routing, JSON response, status codes

🔗 Path: `hello-api/index.js`

---

### 2. 🧠 QuoteVault API

A fully functional CRUD API that allows you to manage quotes. Uses an in-memory array instead of a database for simplicity.

#### Endpoints:

- `GET /api/quotes` → List all quotes
- `GET /api/quotes/:id` → Retrieve a specific quote
- `POST /api/quotes` → Add a new quote
- `PUT /api/quotes/:id` → Update an existing quote
- `DELETE /api/quotes/:id` → Delete a quote

🎯 Concepts Covered:

- Express routing
- RESTful HTTP methods
- `req.params`, `req.body`
- Status codes: 200, 201, 400, 404
- Using Postman for testing

🔗 Path: `quotevault-api/`

---

## 🛠️ Stack

- **Node.js** – JavaScript runtime
- **Express.js** – Fast, minimalist web framework
- **Postman** – Manual API testing
- **In-Memory Storage** – No database required for now

---

## 📌 Usage

```bash
# Navigate to project folder
cd quotevault-api

# Install dependencies
npm install

# Start server
node index.js

# Test endpoints using Postman or browser
```
