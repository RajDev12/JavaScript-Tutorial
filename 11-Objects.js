// Singleton objects= Only one instance of the class can be possible. 
// FOr eg= Single databse object is used throughout the program
// //Object literals
// const users = {
//     u_name: "Dev",  //entries
//     age: 23,
//     email: "rjnath98@gmail.com",
//     isAdult: false,
//     loggedInDays: ["Mon", "tue", "thu", "feb"]
// }

// users.email = "Mridhu@gmail.com"
// console.log(users.email);

// console.log(users.age);
// users.loggedInDays[1] ="Sun"
// console.log(users.loggedInDays[1]);
// console.log(users.loggedInDays.length);
// console.log(users.loggedInDays.slice(1));
// console.log(users.loggedInDays.splice(2));
// console.log(users.loggedInDays)
// console.log(users);

// console.log(users["u_name"]);
// let a=Object.entries(users)
// console.log(a[2][1]);




// //Accessing the objects
// console.log(users.name);
// // console.log(users[name])    //Error=expecting stirng argument
// console.log(users["name"])    //pass as string

//Accessing the keys, values and entries
// console.log(Object.keys(users)) //['name', 'age', 'email', 'isAdult', 'loggedInDays']   =array output
// console.log(Object.values(users)) //['Dev', 23, 'rjnath98@gmail.com', false, ['Mon', 'tue', 'thu']] 
// console.log(Object.entries(users)) //[['name', 'Dev'], ['age', 23], ['email', 'rjnath98@gmail.com'], ['isAdult', false], ['loggedInDays', ['Mon', 'tue', 'thu']]];


// console.log(users.hasOwnProperty("u_name"))



//Defining a symbol and use as key inside object
const mySym = Symbol()
function age(){
  let age =23
  return age
}
const users1 = {
    name: "Dev",
    [mySym]: "key2333",
    age: age(),
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
Object.freeze(users1)
users1.age=99;
// console.log(users1.age);
// console.log(users1);


//Adding a Function as a value to a key inside an object
// users1.greeting = function(){
//     console.log("Helo Developer")
// }
// console.log(users1.greeting())   //discuss undefned  later=one extra execution happen automatically
// console.log(users1.greeting)

// users1.greeting2 = function(){
//     console.log(`Helo Developer,${this.age}`)
// }
// console.log(users1.greeting2())



//==================================//////

const appUser = new Object();   //Singleton object
//OR  const appUser= {};    NON-singleton object
appUser.id = "1234rtw";
appUser.name = "Dev";
appUser.isLoggedIn = false;

// console.log(appUser);

const app2user = {
    email: "rjnath98@ibmc.com",
    id: "1234rtw",
    fullname: {
        userFullName: {
            firstName: "Dev",
            seconName: "nath"
        }
    }
}

// cons`ole.log(app2user)
// console.log(app2user.fullname.userFullName.seconName);
// console.log(app2user.email)

const obj1 = { 1: "a",2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { obj1, obj2 }
console.log(obj3);  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4={ ...obj1, ...obj2}  //
console.log(obj4); 

const obj5 = Object.assign({}, obj1,obj2)  //assign(target, source1,src2,src3)
console.log(obj5);

