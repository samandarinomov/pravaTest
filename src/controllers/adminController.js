const Category = require('../../src/models/Category');
const Question = require('../../src/models/Question');

exports.createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;
        const category = new Category({ name, description });
        await category.save();
        res.status(201).json({ message: 'Category created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createQuestion = async (req, res) => {
    try {
        const { category, question, options, correctAnswer } = req.body;
        const newQuestion = new Question({ category, question, options, correctAnswer });
        await newQuestion.save();
        res.status(201).json({ message: 'Question created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
