// src/routes/notesRoutes.js

const express = require('express');
const router = express.Router();
const db = require('../models/db'); // Pastikan path-nya sesuai dengan struktur proyek Anda

// Endpoint untuk mendapatkan semua catatan
router.get('/notes', (req, res) => {
  db.query('SELECT * FROM notes', (err, results) => {
    if (err) {
      console.error('Error executing query:', err.stack);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.json(results); // Mengirim hasil query sebagai JSON response
  });
});

module.exports = router;
