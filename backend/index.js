const express = require('express');
const app = express();
const donorRoutes = require('./routes/donorRoutes');
const pool = require('./db'); // Database connection

app.use(express.json());
app.use('/api', donorRoutes);

app.listen(5000, () => {
  console.log('Backend server is alive on port 5000!');
});
