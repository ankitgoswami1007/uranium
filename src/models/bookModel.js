const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    
    bookName: {
        type: String,
        unique: true,
        required: true,

    },
    authorName: {
        
        type: String,
        unique: true,
        required: true
    },
    category: String,
    year: {
        type: String,
    },

}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //books



// String, Number
// Boolean, Object/json, array