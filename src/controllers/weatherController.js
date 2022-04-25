let axios = require("axios");
const { get } = require("express/lib/response");


//key = ab6223bdff219c200de6e4d23d60230c

let getLondonWeather = async (req , res) => {
    
    try {
        let city = req.query.q
        let appid = req.query.appid
        let options = {
            methods : 'get',
            url : `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = await axios(options)
        //console.log(result.data)
        res.status(200).send({weather: result.data.weather })
        
    } catch (err) {
        res.status(500).send( {msg : err.message})
    }
}


let getLondonTemp = async (req , res) => {
   
    try {
        let city = req.query.q
        let appid = req.query.appid
        let options = {
            methods : 'get',
            url : `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = await axios(options)
        //console.log(result.data)
        res.status(200).send({CityName: result.data.name ,  temperature: result.data.main.temp })
        
    } catch (err) {
        res.status(500).send( {msg : err.message})
    }
}

let getCity = async (req , res) => {

    try{
        let appid = req.query.appid
        let cities =  [ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] 
        
        
        let arr = []
        for(let city of cities){
            let options = {
                methods : 'get',
                url : `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
            }
            let result = await axios(options)
             arr.push({CityName: result.data.name ,  temperature: result.data.main.temp })
        }
        arr.sort((a,b) => (a.temperature > b.temperature)? 1 : -1 )
        res.status(200).send(arr)
    
    } catch (err) {
        res.status(500).send( {msg : err.message})
    }
}



module.exports.getLondonWeather = getLondonWeather
module.exports.getLondonTemp = getLondonTemp
module.exports.getCity = getCity