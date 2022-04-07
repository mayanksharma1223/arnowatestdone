const mongoose = require('mongoose');
const { Schema } = mongoose;

const ValuesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    india: {
        type: Number,
        required: true,

    },
    oman: {
        type: Number,
        required: true
    },
    us: {
        type: Number,
        required:true
    },
    growth: {
        type: Number,
        required:true
    },
    loss: {
        type: Number,
        required:true
    },

    date: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('values', ValuesSchema);