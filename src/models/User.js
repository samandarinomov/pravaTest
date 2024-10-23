const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    categories: [String],
    testsTaken: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Test' }]
});

module.exports = mongoose.model('User', UserSchema);
