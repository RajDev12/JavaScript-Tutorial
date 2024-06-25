//All primitive data types are stored in the stack memory

let a=3;
let b=a;
//a copy of value of 'a' is passed to b
console.log(b);  //3
//changing the value of b, it will not change in a
b=10;
console.table([a,b]);

//Non-primitive or reference type are stored in heap memory
//On reassigning , the refernce address is passed, So both the varibale is pointing to the same object in heap
//Changes via one variable will reflect in the other variable also.
let user1={    //object
    name:"Dev",
    age:23
}
let user2=user1;
console.log(user2);
user2.age=24;
user1.
name= 'Ritika'
console.table([user1,user2]);