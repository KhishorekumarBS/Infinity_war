var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
var LevelSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    hero: {
        type: String,
        required: true
    },
    question: {
        data: Buffer, 
        contentType: String
    },

    answer: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    },
    clue1: {
        type: String,
        required: true
    },
     clue2: {
        type: String,
        required: true
    },
     clue3: {
        type: String,
        required: true
    },

    bg: {
        type: String,
        required: true
    },

    entryimg: {
        type: String,
        required: true
    },

    successimg: {
        type: String,
        required: true
    },
    failureimg: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('levelnew', LevelSchema);