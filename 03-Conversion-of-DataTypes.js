// EXplicit conversion = converted by the user
let score = 33;
console.log(typeof score); //number
var a = String(score) 
console.log(a) 
console.log(typeof a)  //string  

let score2 = "33";  
console.log(typeof score2); //String

let scoreInNumber = Number(score2); //Here Number is a class
console.log(typeof scoreInNumber); //number in smallcase

let adult = true;
console.log(typeof adult);//boolean
console.log(Number(adult)); //true=1; false=0

//String to number conversion
let score3 = "33abc";
console.log(typeof Number(score3));  //number => it  will convert to number but value will be NaN. 
console.log(Number(score3));    //NaN  i.e Not a Number

let score4 = null;
console.log(typeof Number(score4));  //number => it  will convert to number but value will be NaN. 
console.log(Number(score4));    //NaN  i.e Not a Number

let score5 = undefined;
console.log(typeof Number(score5));  //number => it  will convert to number but value will be NaN. 
console.log(Number(score5));
//iiiiiiii
let life=1;
life=Boolean(life)
console.log(life)   //true
console.log(typeof life)   //boolean

let life1="";
life1=Boolean(life1)
console.log(life1)   //false
console.log(typeof life1)   //boolean


let life2="anything";
life2=Boolean(life2)
console.log(life2)   //true
console.log(typeof life2)   //boolean


//Real Life Use Cases
//Assume we are working with weather App, if some temperature data is coming from user, 
//then we must check  for the type, cuz null and 0 degree celcius is two different thing

