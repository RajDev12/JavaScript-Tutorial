let A= 100;  //Global scope = can be accessed from anywhere in this file

if (true) {  // Block Scope = can be accessed only within this block
    let A = 10;
    const b = 20;
    var c = 30; // Exception
    console.log("inner A:",A)
}
//     {   } =Scope

console.log("outer A:",A); 
// console.log(b);
console.log(c); // can be accessed outside the block scope , so avoid using it
