const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');

router.use('/', authRoutes);
router.use('/users/:userId', userRoutes);

module.exports = router ;