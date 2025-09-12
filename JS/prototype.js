Object.prototype.printThis = function(){
    console.log("This is added in prototype of OBJECT")
}

const myObj = {
    name : "Himanshu",
    uid:10889,
}

console.log(myObj)
myObj.printThis()