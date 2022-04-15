const mongoose = require('mongoose');

// const authorSchema = new mongoose.Schema( {
//     author_id: String,
//     author_name: String,
//     age:Number,
//     address:String

// }, { timestamps: true });

// module.exports = mongoose.model('Author', authorSchema) // authors

const authorSchema = new mongoose.Schema( {
    authorName: {type : String , trim : true},
    age: Number,
    address: {type : String , trim : true},
    rating: Number

} , { timestamps: true});

module.exports = mongoose.model('newAuthor', authorSchema) // newAuthors
