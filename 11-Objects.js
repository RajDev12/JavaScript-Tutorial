// Singleton objects= Only one instance of the class can be possible. 
// FOr eg= Single databse object is used throughout the program
//Object literals
const users = {
    name: "Dev",
    age: 23,
    email: "rjnath98@gmail.com",
    isAdult: false,
    loggedInDays: ["Mon", "tue", "thu"]
}
// //Accessing the objects
// console.log(users.name);
// // console.log(users[name])    //Error=expecting stirng argument
// console.log(users["name"])    //pass as string

//Defining a symbol and use as key inside object
const mySym = Symbol("key123")
const users1 = {
    name: "Dev",
    [mySym]: "key2333",
    age: 23,
    email: "rjnath98@gmail.com",
    isAdult: false,
    loggedInDays: ["Mon", "tue", "thu"]
}
// console.log(users1)
// console.log(users1[mySym])
// console.log(typeof users1[mySym])

// //CHanging the values from outside the objects
// users1.age=25;
// console.log(users1.age)
// //Freeze the object by making user1 immutable
// Object.freeze(users1)
// users1.age=99;
// console.log(users1.age);


//Adding a Function as a value to a key inside an object
users1.greeting = function(){
    console.log("Helo Developer")
}
console.log(users1.greeting())   //discuss undefned  later=one extra execution happen automatically
console.log(users1.greeting)

users1.greeting2 = function(){
    console.log(`Helo Developer,${this.age}`)
}
console.log(users1.greeting2())