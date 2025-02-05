// routes/donorRoutes.js
const express = require('express');
const router = express.Router();
const pool = require('../db'); // PostgreSQL database pool connection

// GET: Fetch all donors
router.get('/donors', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM donors');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch donors' });
  }
});

// POST: Add a new donor
router.post('/donors', async (req, res) => {
  const { name, contact, email, location, food_item, donation_date } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO donors (name, contact, email, location, food_item, donation_date) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [name, contact, email, location, food_item, donation_date]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add donor' });
  }
});

module.exports = router;
