const AuthorModel = require('../models/authorModel')
//const bookModel = require('../models/bookModel')
const BookModel= require("../models/bookModel")


const createAuthor= async function (req, res) {
    let data= req.body
    if(data.author_id){
        let savedData= await AuthorModel.create(data)
        res.send({msg: savedData})
    }
    else{
        res.send("Author_ID must be Needed")
    }
}

const createBook= async function (req, res) {
    let data= req.body
    if(data.author_id){
        let savedData= await BookModel.create(data)
        res.send({msg: savedData})
    }
    else{
        res.send("Author_ID must be Needed")   
    }
    
}

//List out the books written by "Chetan Bhagat" 
const getAllChetanBooks = async function ( req , res){
    let authorDetail = await AuthorModel.find({author_name: "Chetan Bhagat"})
    const id = authorDetail.map(function(obj){
        return obj.author_id;
    })
    //console.log(id);
    let allBooks = await BookModel.find( {author_id: id}).select({name:1 ,  _id : 0})
    res.send( {ChetanBookList: allBooks } )
}

// find the author of “Two states” and update the book price to 100;
const updatePrice = async function ( req , res) {
    //let data = req.body

    let updatedPrice = await BookModel.findOneAndUpdate(
        { name :"Two states"},
        { $set: { price: 100} },
       // {$set : data},
        { new : true}

    ).select({price: 1 , _id: 0})

    let bookDetail = await BookModel.find({name: "Two states"})
    const id = bookDetail.map(function(obj){
        return obj.author_id;
    })
    //const id = bookDetail[0].author_id
    // console.log(typeof id);
    let authorName = await AuthorModel.find({author_id : id}).select({author_name: 1 , _id: 0})
    authorName = authorName[0].author_name

    //console.log(updatedPrice);
    
    res.send({authorName, updatedPrice })

}

//Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books

const getAuthorName = async function (req , res) {
    let bookDetails = await bookModel.find( {price : { $gte : 50 , $lte : 100} }).select({author_id : 1 , _id: 0})

    let ids = bookDetails.map( obj => obj.author_id)
    let arr = []
    for(let id of ids){
        let ans = await AuthorModel.find( { author_id : id }).select({author_name: 1 , _id : 0 })
        arr.push(ans);
    }
    let result = arr.flat()
    res.send({result })
}   



module.exports.createBook= createBook
module.exports.createAuthor = createAuthor ;
module.exports.getAllChetanBooks = getAllChetanBooks ;
module.exports.updatePrice = updatePrice
module.exports.getAuthorName = getAuthorName