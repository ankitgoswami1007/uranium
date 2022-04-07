const express = require('express');
const router = express.Router();
const logger = require('./logger')



router.get('/candidate', function (req, res) {
    console.log('------------------')
    let arr = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Abdulkadir", "Abdulkarem", "Abdulkhader", "Abdullah", "Abdul-Majeed", "Abdulmalik", "Abdul-Rehman", "Abdur", "Abdurraheem", "Abdur-Rahman", "Abdur-Rehmaan", "Abel", "Abhinav", "Abhisumant"] ;
    let count = req.query.count
    console.log(count);
    let newArr = [];
    if(count <= 0 || count >= arr.length){
         res.status(404).send("Invalid Number");
    }
    else{
        for(let i  = 0 ; i < count ; i++){
            newArr.push(arr[i]);
        }
        // console.log(req)
        // console.log('------------------')
        // console.log('These are the request query parameters: ', req.query)
         res.send(newArr);

    }
    
});




module.exports = router;
// adding this comment for no reason