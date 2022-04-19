const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://dbWork:HjwpvUp0l8mHwAXv@cluster0.qsnfp.mongodb.net/ankit-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

//---------- Global MiddleWare

app.use (
    function (req, res, next) {
        let date_var = new Date().toISOString().replace('T' , ' ').substring(0 , 19)
        let route_location = req.originalUrl
        let ip = req.ip.split(':').join('.')
        
        console.log(date_var + " , " + ip + " , " + route_location);

        //console.log ("inside GLOBAL MW");
        next();
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
