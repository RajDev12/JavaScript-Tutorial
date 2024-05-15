let a = 2;
let b = "";
let loggedIn = 'True';
let marks = null;
let age;
const bigNum = 12345678765n;
// console.log("hi")

console.log(typeof bigNum)
// console.log(typeof null)
//  alert("this is a alert") //This only interpreted by browser

//DataTypes
//Primitive  =Pass by value i.e a copy of that variable is passed, any changes doesn't effect the original one
// 1. Number = 2 to the power 53
//2.  bigint
//3.String
//4.boolean
//5.null =standalone value/empty not 0/ it is treated as object 
//6. undefined
//7.Symbol  = uniquely define variable
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId)    //false

//Non-Primitive / Reference type = address is passed , any changes via new variable will reflect to original one also
//Arrays
//Functions
// Objects 
const myArray = ["1st", "2nd", "3rd"];
let myObj = {
    name: "Dev",
    city: "Mohali"
}
const myFunction = function(){
    console.log("I am a function");
}
console.log(typeof myFunction)  //object function 
console.log(typeof myObj)  //object 
console.log(typeof myArray)  //object 
