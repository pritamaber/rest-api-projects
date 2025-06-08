import express from "express";
import {
  getAllContacts,
  getContactById,
} from "./controllers/contactController.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Contactbook api is running");
});

app.get("/contacts", getAllContacts);
app.get("/contacts/:id", getContactById);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
