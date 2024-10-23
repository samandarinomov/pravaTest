const express = require('express');
const router = express.Router();
const adminController = require('../../src/controllers/adminController');
const auth = require('../../src/middleware/auth');

router.post('/categories', auth, adminController.createCategory);
router.post('/questions', auth, adminController.createQuestion);

module.exports = router;
