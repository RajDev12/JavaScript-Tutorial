//Logical operator = true/false
console.log(2>1); //t
console.log(2>=1); 

console.log(2<=1); //f
console.log(2<1); //f
console.log("2"<1);  //F   2<1
console.log("2">1);   //T

console.log(2==2); //true
console.log("2"==2);    //True =Checks Only value
console.log("2"===2);   //False   =Checks data types also i.e string !=number

console.log("help:",null >0); //0>0   2>2   a>a
console.log(null <0);
console.log(null ==0); //t
console.log(null ===0); //

//in comparasion, NUll is treated as 0.

console.log(null >=0); //

console.log(null <=0);  

console.log("undefined treated as: NaN",undefined ==0);
console.log(undefined ===0);
console.log(undefined >=0);
console.log(undefined <=0);
