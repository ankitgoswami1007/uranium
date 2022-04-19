const UserModel= require("../models/userModel")




const basicCode= async function(req, res) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
    }
//-------------------------------------------------
// creating 3 api to perform global middleware upon these api
    const apiOne= async function(req, res) {
       
        res.send({ msg: "This is coming from api1"})
        }

    const apiTwo= async function(req, res) {
       
        res.send({ msg: "This is coming from api2"})
        }

    const apiThree= async function(req, res) {
       
        res.send({ msg: "This is coming from api3"})
        }



///----------------------------------------------------------------
const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode
//----------------- 
module.exports.apiOne = apiOne
module.exports.apiTwo = apiTwo
module.exports.apiThree = apiThree


// - ASSIGNMENT:-
// Write a middleware that logs (console.log) some data everytime any API is hit
// Data to be logged:-the current timestamp(as date time) , the IP of the user and the route being requested).
// For this first figure out how to get the route location being request, how to get current timestamp and how to get the IP.
// NOTE: ip of local computer will come as ::1 so dont get disturbed by seeing this)

// e.g: you should be logging something like this on each line:
// time , IP, Route should be printed on each line in terminal( every time an api is hit)
// 2010-08-19 14:00:00 , 123.459.898.734 , /createUser