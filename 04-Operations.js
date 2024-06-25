// let a=3;
let neg_a=-a;
console.log(neg_a)
let b=10000;
console.log("The value of b is 2");
console.log("The value of b is", b);
//string interpolation
console.log(`The value of b is ${b}`);


let str1="         hello         abcd     .   ";  //trim only removes spaces from begining and ending but it doesnt remove spaces from middle of the words
console.log("trimmed str1===",str1.trim()); //hello         abcd     .
let trimmed1= str1.trim()
let str2="   abc    Developer     "; 
let str4 = str1 +str2;
console.log("Without trimmed str4==",str4);
let trimmed2 = str2.trim();  //abc    Developer
let str3=trimmed1+trimmed2;;
console.log("trimmed concate ==",str3);

//Implicit conversion= conversion done by node
console.log("1"+2)    //12
console.log("1"+2+2)    //122
console.log(3+"1"+2)    //312
console.log("concate",3+2+5+"1"+4)    //1014
2+3+"4"+"0"+0 //5400




let counter=0;
console.log(counter);
++counter; //pre 1    counter =counter+1
console.log(counter); //1
counter++;  //post 1+1=2
console.log(counter); 2
var a= counter++  //put last value of counter in counter then increase
console.log(a); //2,
console.log(counter); //3
