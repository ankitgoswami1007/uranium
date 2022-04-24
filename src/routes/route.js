const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const user_Controller = require('../controllers/user_Controller')
const auth = require ('../middleware/auth')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/users", userController.createUser  )

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updateUser)

//-------- api for creating user
router.post("/users", user_Controller.registerUser  )

//-------- api for login user
router.post("/login", user_Controller.loginUser)

//-------- api for fetching user details
router.get("/users/:userId", auth.authMiddleWare, user_Controller.getUserData)

//-------- api for updating user detail
router.put("/update/:userId",auth.authMiddleWare, user_Controller.updateUser)

//-------- api for deleting user by using isDeleted property  to true
router.delete("/delete/:userId",auth.authMiddleWare, user_Controller.deleteUser)

module.exports = router;
