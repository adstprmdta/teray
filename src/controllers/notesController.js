const db = require('../models/db');

// Create a new note
exports.createNote = async (req, res) => {
  const { title, datetime, note } = req.body;
  try {
    const [result] = await db.execute(
      'INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)',
      [title, datetime, note]
    );
    res.status(201).json({ id: result.insertId, title, datetime, note });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all notes
exports.getAllNotes = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM notes');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single note by id
exports.getNoteById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.execute('SELECT * FROM notes WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a note
exports.updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, datetime, note } = req.body;
  try {
    const [result] = await db.execute(
      'UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?',
      [title, datetime, note, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json({ id, title, datetime, note });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a note
exports.deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.execute('DELETE FROM notes WHERE id = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
