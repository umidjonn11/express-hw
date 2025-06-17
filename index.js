const express = require('express');
const app = express();
const port = 3030;

// JSON bodyni o'qish uchun middleware
app.use(express.json());

// GET /hello — "Hello, World!"
app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

// POST /sum — a + b
app.post('/sum', (req, res) => {
  const { a, b } = req.body;


  // Raqamlar tekshiruvi
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'a va b son bulishi kerak' });
  }

  const sum = a + b;
  res.json({ result: sum });
});

// Serverni ishga tushirish
app.listen(port, () => {
  console.log(`Server http://localhost:${port} da ishlayapti`);
});

module.exports = app