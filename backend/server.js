
require('./initDB');

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Mount auth routes
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log('Backend running on', PORT));
