//const authorModel = require("../models/authorModel")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")
const PublisherModel= require("../models/publisherModel")


 

// creating books with author and publisher
const createBook= async function (req, res) {
    let book = req.body
    if(book.author){
        if(book.publisher){

            let author = await AuthorModel.findOne({_id : book.author})
            let publisher = await PublisherModel.findOne( {_id : book.publisher})
            if((book.author == author._id) && book.publisher == publisher._id){
                let bookCreated = await BookModel.create(book)
                res.send({data: bookCreated})
             }
            else if(book.author != author._id){
                res.send('author is not present')
            }
            else{
                res.send('publisher is not present')
            }
        }
        else{
            res.send("publisher Detail must be required");  
        }   
    }
    else{
        res.send("Author Detail must be required");
    }
   
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}
//// getting all the detail of Books along with Author and Publisher
const getBooksWithAuthorPublisherDetails = async function (req, res) {
    let specificBook = await BookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook})

}



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.getBooksWithAuthorPublisherDetails = getBooksWithAuthorPublisherDetails
