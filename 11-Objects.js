// Singleton objects= Only one instance of the class can be possible. 
// FOr eg= Single databse object is used throughout the program
//Object literals
const users={
    name: "Dev",
    age: 23,
    email:"rjnath98@gmail.com",
    isAdult: false,
    loggedInDays: ["Mon","tue","thu"]
}
//Accessing the objects
console.log(users.name);
// console.log(users[name])    //Error=expecting stirng argument
console.log(users["name"])    //pass as string

//
