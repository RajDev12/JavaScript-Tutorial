let score = 33;
console.log(typeof score); //number

let score2 = "33";
console.log(typeof score2); //String

let scoreInNumber = Number(score2); //Here Number is a class
console.log(typeof scoreInNumber); //number in smallcase

let adult = true;
console.log(typeof adult);
console.log(Number(adult)); //true=1; false=0

//String to number conversion
let score3 = "33abc";
console.log(typeof Number(score3));  //number => it  will convert to number but value will be NaN. 
console.log(Number(score3));    //NaN  i.e Not a Number
