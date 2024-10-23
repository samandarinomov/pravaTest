const express = require('express');
const bodyParser = require('body-parser');
const db = require('../config/db');
const dotenv = require("dotenv/config")

const app = express();

app.use(bodyParser.json());

const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const testRoutes = require('./routes/test');

app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/test', testRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
