const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')


//--------- creating user details

const registerUser = async function (req , res) {

    try {
        let data = req.body
        let existUser = await userModel.find(data)
        //let exist1 = await userModel.exists(data) // second method
  
        if(existUser.length == 0){
            if(Object.keys(data) != 0){
                let savedData = await userModel.create(data);
                res.status(201).send({Details: savedData})
            }
            else res.status(400).send({msg:'Bad Request'})

        }
        else res.status(401).send({msg:'Bad Request'})
        
    } 
    catch (err) {
       // console.log("This is the error :", err.message)
        res.status(500).send({msg: "Error", error: err.message})
    }
    
}

//------- function for login user

const loginUser = async function ( req, res) {

    try {
        let data = req.body
        let userName = data.emailId;
        let password = data.password;
        if(userName !== '' && password !== ''){
            let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ; 

            if(re.test(userName)){
            
                let user = await userModel.findOne( {emailId: userName , password: password});

                if(!user) res.status(400).send({  msg: "Invalid username or the password" })
    
                let token = jwt.sign(
                    {
                        userId: user._id.toString(),
                        batch: "uranium",
                        organisation: 'FunctionUp'
                    },
                    "functionup-uranium"
                )
                res.setHeader('x-auth-token' , token)
                res.status(201).send({ status: true, data: token });
        
            }
            else res.status(401).send({msg:'UserName is not a valid email'})

        }
        else res.status(400).send({msg:'Bad Request'})
        
    } 
    catch (err) {
        res.status(500).send({ msg: "Error", error: err.message })
    }

}


//---------- fetching user Details

const getUserData = async function (req, res) {
    try {
        let userId = req.params.userId
   
        let userDetails = await userModel.findById(userId);
        if(!userDetails || userDetails.isDeleted)
            return res.status(404).send ( { msg: "No such user exists"} )
        
        res.status(200).send({  userDetail : userDetails})

        
    } catch (err) {

        res.status(500).send({ msg: "Error", error: err.message })
    }
    
}

//---------------- updating user Data

const updateUser = async function (req, res) {
    try {
        let userId = req.params.userId
    
        let user = await userModel.findById(userId);
     
        if (!user || user.isDeleted) {
            return res.status(404).send("No such user exists");
        }
    
        let userData = req.body;
        let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new: true});
         res.status(200).send({ status: true, data: updatedUser });
        
    } catch (err) {
        res.status(500).send({ msg: "Error", error: err.message })
    }
   

    // user = userData
    //await user.save()
    //res.send({ status: true, data: user });    
}

//------------- deleteing user record by setting isDeleted attribute to true

const deleteUser = async function (req, res) {
    
    try {
        let userId = req.params.userId
        let user = await userModel.findById(userId);
        if (!user || user.isDeleted) {
            return res.status(404).send("No such user exists");
        }

    //let userData = req.body;
    //let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    // res.send({ status: true, data: updatedUser });

        user.isDeleted = true
        await user.save()
        res.status(205).send({  data: user }); 
        
    } catch (err) {
        res.status(500).send({ msg: "Error", error: err.message })
    }
       
}


module.exports.registerUser = registerUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser

// dev = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjYzMTA2OWI5YzgxOTgzMmVjZTFiYWUiLCJiYXRjaCI6InVyYW5pdW0iLCJvcmdhbmlzYXRpb24iOiJGdW5jdGlvblVwIiwiaWF0IjoxNjUwNjU5NDQ5fQ.SAyC6QnLCKXTTrzVvHGCkSDNMr3zfoIIMP9Odf0ljMU