let axios = require("axios");
const { get } = require("express/lib/response");


//key = ab6223bdff219c200de6e4d23d60230c

let getMemeData = async (req , res) => {
    
    try {
   
        let options = {
            methods : 'get',
            url : `https://api.imgflip.com/get_memes`
        }
        let result = await axios(options)
        //console.log(result.data)
        res.status(200).send({memeData: result.data})
        
    } catch (err) {
        res.status(500).send( {msg : err.message})
    }
}

let getMemeWithText = async ( req , res) => {

    try {
        let dt = req.query
        let id  =  dt.template_id 
        let txt0 = dt.text0
        let txt1  = dt.text1
        let username = dt.username
        let password = dt.password

        let options = {
            method : 'post',
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${txt0}&text1=${txt1}&username=${username}&password=${password}`
        }
        let result = await axios(options)
        res.status(200).send({memeData: result.data})

        
    } catch (err) {
        res.status(500).send( {msg : err.message})  
    }
}

module.exports.getMemeData= getMemeData
module.exports.getMemeWithText = getMemeWithText