const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")

const weatherController = require('../controllers/weatherController')

const memeController = require('../controllers/memeController')



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

router.get('/cowin/getVaccinationSessionDistrictId', CowinController.getByDistrict)

//------------------------weather api
// Get weather of London 
router.get('/weather/getLondonWeather', weatherController.getLondonWeather)

router.get('/weather/getLondonTemp', weatherController.getLondonTemp)

router.get('/weather/getCity', weatherController.getCity)

//--------------- meme api

router.get('/meme/getMemeData', memeController.getMemeData)

router.post('/meme/getMemeWithText', memeController.getMemeWithText)


module.exports = router;