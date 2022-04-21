

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     //counter
//     next()
// }

const check_isFreeAppUser = function ( req, res, next) {
    let isFreeAppUser = req.headers.isfreeappuser
    if(!isFreeAppUser){
        return res.send( {message: 'The request is missing a mandatory header'} )
    }
    // if(req.headers.isfreeappuser != 'false' || req.headers.isfreeappuser != 'true'){
    //     res.send({message: 'Enter valid value'})
    // }
     req.isFreeAppUser = req.headers.isfreeappuser
    next()
}

module.exports.check_isFreeAppUser = check_isFreeAppUser
//module.exports.mid4= mid4
