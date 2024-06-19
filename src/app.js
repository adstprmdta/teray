const express = require('express');
const notesRoutes = require('./routes/notesRoutes');

const app = express();

app.use(express.json());
app.use('/api', notesRoutes);

module.exports = app;
