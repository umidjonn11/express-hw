const express = require("express");
const app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Hello, World!");
});

app.post("/sum", (req, res) => {
  const { a, b } = req.body;

  if (typeof a !== "number" || typeof b !== "number") {
    return res.status(400).json({ error: "a va b son bulishi kerak" });
  }

  const sum = a + b;
  res.json({ result: sum });
});

module.exports = app;
