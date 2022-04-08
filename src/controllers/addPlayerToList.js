
 
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ],
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
 
   let addPlayer = function(req , res){

    let data = req.body

    let flag = 0

    players.map((obj) =>{
        if(obj.name === data.name){
            flag = 1 ;        
        }
    })
    if(flag === 1){
        return res.status(404).send(" Player is already exists in the List");
    }
    else{
        players.push(data);
    }
    
    console.log(players);
    return res.send({ updatedList : players})

   }

   module.exports.addPlayer = addPlayer
