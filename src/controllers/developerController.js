const developerModel = require('../models/developerModel')
const batchModel = require("../models/batchModel")

const createDeveloper= async function (req, res) {
    let developer = req.body
    let developerCreated = await developerModel.create(developer)
    res.send({data: developerCreated})   
}

const getScholarship = async function (req, res) {

    let developerWithScholarship = await developerModel.find( {$and: [ {gender: "female"}, 
    {percentage : { $gte : 70 }} ]
    } )
    res.send({data: developerWithScholarship})

}

const getDevelopers = async function ( req , res ) {

    let percent = parseInt(req.query.percentage)
    let program = req.query.program
    let programID = await batchModel.find( {name: program } ).select({_id : 1})
    const pIdArray= programID.map(element => element._id.valueOf())
    const developer = await developerModel.find( {$and: [ {batch: {$in : pIdArray } }, 
    {percentage : { $gte : percent }} ]
    } ).populate('batch')

    res.send({data: developer})
}


module.exports.createDeveloper = createDeveloper
module.exports.getScholarship = getScholarship
module.exports.getDevelopers = getDevelopers

