let a = 2;
let b = "";
let loggedIn = 'True';
let marks = null;
let age;
const bigNum = 12345678765n;
// console.log("hi")

console.log(typeof bigNum)
console.log(typeof null)
//  alert("this is a alert") //This only interpreted by browser

 
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId)    //false
console.log(typeof id)    //Symbol

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

// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
 