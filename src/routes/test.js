const express = require('express');
const router = express.Router();
const testController = require('../../src/controllers/testController');
const auth = require('../../src/middleware/auth');

router.get('/take/:categoryId', auth, testController.takeTest);
router.post('/submit/:testId', auth, testController.submitTest);

module.exports = router;
