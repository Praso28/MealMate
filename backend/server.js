require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const cors = require('cors');
const pool = require('./db'); // Import the database connection

const app = express();
app.use(express.json());
app.use(cors());

// Test route to check if the server is running
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is alive!' });
});

// Sample API to fetch donors
app.get('/api/donors', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM donors');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
app.listen(4000, () => {
  console.log('Server running on port 4000');
});
