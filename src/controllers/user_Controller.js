const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')


//--------- creating user details

const registerUser = async function (req , res) {
    let data = req.body
    let savedData = await userModel.create(data);
    res.send({Details: savedData})
}

//------- function for login user

const loginUser = async function ( req, res) {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne( {emailId: userName , password: password});

    if(!user)
        res.send({
            status: false,
            msg: "Invalid username or the password"
        })
    
    let token = jwt.sign(
        {
            userId: user._id.toString(),
            batch: "uranium",
            organisation: 'FunctionUp'
        },
        "functionup-uranium"
    )
    res.setHeader('x-auth-token' , token)
    res.send({ status: true, data: token });
}


//---------- fetching user Details

const getUserData = async function (req, res) {
    let userId = req.params.userId
    let userDetails = await userModel.findById(userId);
    if(!userDetails)
        return res.send ({status: false , msg: "No such user exists"})
    res.send({ status: true , userDetail : userDetails})
}

//---------------- updating user Data

const updateUser = async function (req, res) {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
 
    if (!user) {
        return res.send("No such user exists");
    }

    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new: true});
   // user = userData
    //await user.save()
     res.send({ status: true, data: updatedUser });
    //res.send({ status: true, data: user });    
}

//------------- deleteing user record by setting isDeleted attribute to true

const deleteUser = async function (req, res) {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);

    if (!user) {
        return res.send("No such user exists");
    }

    //let userData = req.body;
    //let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    // res.send({ status: true, data: updatedUser });

    user.isDeleted = true
    await user.save()
    res.send({ status: true, data: user });    
}


module.exports.registerUser = registerUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser