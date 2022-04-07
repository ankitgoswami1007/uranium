const express = require('express');
const lodash = require('lodash');
const logger = require('./logger');
const logger1 = require('../logger/logger')
const helper = require('../util/helper')
const formatter = require('../validator/formatter')



const router = express.Router();

router.get('/test-me', function (req, res) {
    // //console.log('I am inside the first route handler')
    // console.log('The endpoint value is', logger.endpoint)
    // console.log('Calling log function')
    
    logger1.welcome();

    helper.printDate();
    helper.printMonth();
    helper.getBatchInfo();

    formatter.trimFun();
    formatter.changetoLowerCase() ;
    formatter.changeToUpperCase() ;

    res.send('Assignment 6 april , problem 1 to 3')
});



router.get('/hello', function (req, res) {
    console.log('I am inside the hello route handler')

    let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    console.log(mL);
    console.log(lodash.chunk(mL, 4))

    let oddArr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
  
    let newArray = lodash.tail(oddArr);
    console.log(newArray);

    let a = [1, 2, 3];
    let b = [2, 3, 4];
    let c = [3, 4, 5];
    let d = [4, 5, 6];
    let e = [5, 6, 7];

    let finalArr = lodash.union(a , b , c , d , e); 
    console.log(finalArr);

    let pairs = [ 
        ['horror','The Shining'], 
        ['drama','Titanic'] ,
        ['thriller','Shutter Island'],
        ['fantasy','Pans Labyrinth'] 
    ];
    let obj = lodash.fromPairs(pairs);
    console.log(obj);
    res.send('Assignment 6 april , problem 4')
    
});


// router.get('/test-me5', function (req, res) {
//     res.send('My final ever api!')
// });

// router.get('/test-me3', function (req, res) {
//     res.send('My first ever api!')
// });

// router.get('/test-me4', function (req, res) {
//     res.send('My first ever api!')
// });

module.exports = router;
// adding this comment for no reason