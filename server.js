// server.js

const express = require('express');
const app = express();
const dotenv = require('dotenv');
const notesRoutes = require('./src/routes/notesRoutes'); // Sesuaikan dengan path yang benar

dotenv.config();

const PORT = process.env.APP_PORT || 3000;

// Middleware untuk parsing body dari JSON
app.use(express.json());

// Menggunakan rute untuk /notes
app.use('/', notesRoutes);

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
