require('dotenv').config(); // Load environment variables
const { Pool } = require('pg'); // Import PostgreSQL Pool class

// Database connection setup
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Export the pool for use in other files
module.exports = pool;
