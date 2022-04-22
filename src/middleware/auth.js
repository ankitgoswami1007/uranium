
const jwt = require("jsonwebtoken");

///--------------- middleware for token verification 

let authMiddleWare = function (req , res , next){
    //console.log("innerAuth");
    try {
      let token = req.headers['x-Auth-token']
    
      if(!token) token = req.headers['x-auth-token']

      if(!token) return res.status(401).send({message: "token must be present" })

      let decodedToken = jwt.verify( token , "functionup-uranium")
      let userId = req.params.userId

      if(decodedToken.userId != userId)
        return res.status(401).send({  error: 'user is not allowed to perform this task'})

    next()
      } 
      catch(err) {
        return res.status(401).send({  message: "token is invalid"})
      }
    
    

}

module.exports.authMiddleWare = authMiddleWare


//dhavan-daan- tokan:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjYxYjE5YjhkY2IxMDJjNGUxZDYxZDkiLCJiYXRjaCI6InVyYW5pdW0iLCJvcmdhbmlzYXRpb24iOiJGdW5jdGlvblVwIiwiaWF0IjoxNjUwNTcxMTc4fQ.oA8T28PwZPOTUpTY-DLIxGuxSSNsbdBNaeBCaAUosV0"

//imran--> "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjYxYjBkM2U5NWVjZDBkMTcyYjI5ODQiLCJiYXRjaCI6InVyYW5pdW0iLCJvcmdhbmlzYXRpb24iOiJGdW5jdGlvblVwIiwiaWF0IjoxNjUwNTcyMDI0fQ.Y4db7n7JWEVuQgjBQtnClzMijtBqpQNlYBAUSK-FEkw"

//sai-- eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjYxYTQ3OGZkMzY1MTlhMDk0ODkzY2QiLCJiYXRjaCI6IlVyYW5pdW0iLCJvcmdhbmlzYXRpb24iOiJGdW5jdGlvblVwIiwiaWF0IjoxNjUwNTY2NjAzfQ.Fa78-AjtRez7vVqlwcW9TFgMlmt9n2OYqOipSTimLn0