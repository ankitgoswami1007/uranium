
let printDate = function() {
    var day = (new Date()).getDate() ;
    console.log("Date : " +day);
}

let printMonth = function() {
    var month = (new Date()).getMonth();
    console.log("Month : " + (month+1));

}
let getBatchInfo = function() {
    console.log("Infomation to be Display");
    console.log("Uranium")
    console.log("W3D3");
    console.log("the topic for today is Nodejs module system");
}

module.exports.printDate = printDate ;
module.exports.printMonth = printMonth ;
module.exports.getBatchInfo = getBatchInfo ;