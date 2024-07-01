 
function addFromUser(){
    let a= Number(prompt("Enter the value of a"))
    let b= Number(prompt("Enter b"))
    let result =a +b
    console.log(result);
}

addFromUser()



 
 
 
//  function myFunction( num1=9, num2=7, num3=8){
//     //  console.log("I am a function");
//      let d=num1 +num2 +num3;

//      return d;
//  }
//  console.log(myFunction(2,3,3))
// //  myFunction //reference address
// //  myFunction(2, 3); //execution  o/p=5
//  //num1, num2 are the parameter of the function and values passed while are the arguments
// //but but but....

// // const a = myFunction("a", 3);
// // console.log(a);   //undefined =the function isnt returning anything

// function myFunc( x, y){
//     // let result= x+y;
//     // return result;
//     return x+y;

// }
// // // myFunc(3,4)
// // const op=myFunc(3,4);
// // // console.log("result: ",op);


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter username");
//         return;
//     }
//     // if(!username){  //same as undefined
//     //     console.log("Please enter username");
//     //     return;
//     // }
//     return `${username} just logged in successfully`;
// }
// // console.log(loginUserMessage("Dev"));
// // console.log(loginUserMessage());   //undefined

// function loginUserMessage(username="Shaksi"){ // default  parameter
//     // if(username === undefined){
//     //     console.log("Please enter username");
//     //     return;
//     // }
//     if(!username){  //same as undefined
//         console.log("Please enter username");
//         return;
//     }
//     return `${username} just logged in successfully`;
// }
// console.log(loginUserMessage());



// //Passing multiple parameter inside function
// function calculateCartPrice(num1) {
//     return num1;
// }
// console.log(calculateCartPrice(3,4,5));


// function calculateCartPrice1(...num1) {   //rest operator
//     return num1;
// }
// console.log(calculateCartPrice1(1,2,3,4,5));

// function calculateCartPrice2(num1, num2, ...num3) {
//     // return num1+num2+(...num3);
// }
// console.log(calculateCartPrice2(1,2,3,4,5));


// //Passing anyObject inside function
// const obj={
//     name : "Dev",
//     price: "399"
// }
// function objFunc(anyObject){  //must check for availabality of that variable inside object
//     console.log(`Usernamr is ${anyObject.name} and price is ${anyObject.price}`)
// }
// objFunc(obj)

     