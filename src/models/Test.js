const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
    answers: [Number],
    score: Number,
    passed: Boolean
});

module.exports = mongoose.model('Test', TestSchema);
