const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    question: String,
    options: [String],
    correctAnswer: Number
});

module.exports = mongoose.model('Question', QuestionSchema);
