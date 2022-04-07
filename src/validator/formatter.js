


let trimFun = function() {
    let str = "   functionUp   " ;
    console.log("before : " + str);
    console.log("After : " +   str.trim());
}

let  changetoLowerCase = function() {
    let str = "FUNCTIONUP" ;
    console.log("before : " + str);
    console.log("After : " + str.toLowerCase());
}

let  changeToUpperCase = function() {
    let str = "functionUp" ;
    console.log("before : " + str);
    console.log("After : " + str.toUpperCase());    
}

module.exports.trimFun = trimFun ;
module.exports.changetoLowerCase = changetoLowerCase ;
module.exports.changeToUpperCase = changeToUpperCase ;