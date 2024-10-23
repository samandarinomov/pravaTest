const Test = require('../../src/models/Test');
const Question = require('../../src/models/Question');

exports.takeTest = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const questions = await Question.find({ category: categoryId }).limit(10); // Adjust the number of questions as needed
        const test = new Test({ user: req.user._id, category: categoryId, questions });
        await test.save();
        res.json(test);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.submitTest = async (req, res) => {
    try {
        const { testId } = req.params;
        const { answers } = req.body;
        const test = await Test.findById(testId).populate('questions');
        let score = 0;
        test.questions.forEach((question, index) => {
            if (question.correctAnswer === answers[index]) score++;
        });
        const passed = (score / test.questions.length) >= 0.8;
        test.answers = answers;
        test.score = score;
        test.passed = passed;
        await test.save();
        res.json({ passed, score });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
