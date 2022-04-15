const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema ( {
    name: {type : String , trim : true},
    headQuarter: {type : String , trim : true}

} , { timestamps : true});

module.exports =  mongoose.model('newPublisher' , publisherSchema) // newPublishers