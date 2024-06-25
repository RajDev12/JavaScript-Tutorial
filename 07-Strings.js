let  str1="   Hello-I-am-a-developer     ";
// str1 ="jbvkfevb"   // in js string is mutable/changable
console.log(str1);
//1. trim()
let str2=str1.trim();
console.log(str2);
console.log(str1);

//2.  replace & replaceAll      Hello-I-am-a-developer     
console.log(str1.trim().replace("-"," ")) //replace first occurence
console.log(str1.trim().replaceAll("-"," ")) //replace all occurence
z = str1.trim().replaceAll("-"," ")
console.log("Changed str::",z)
console.log(str1)  //doesn't make any changes to orignal string
//any string function returns a new string or any object


// 3. toUpperCase()
let str3="hello world";
let str4=str3.toUpperCase();
console.log(str4);

// 4. toLowerCase()
let str5="HELLO WORLD";
let str6=str5.toLowerCase();
console.log(str6);

//
// 5. includes()
let str7 = "JavaScript is awesome";
let check1 = str7.includes("awesome");
console.log("includes::",check1);

//Slice
console.log(str7.slice(0,5))
console.log(str7.slice(-1,0))  //-index =0 incase of slice

//split =it returns a array of every word as an item which splited based on delimeter
console.log(str7.split(' '))


//String Interpolation
const name1 = new String('I-am-dev')
const job=new String('Web-developer')


// console.log(name+job+"kuch bhi extra ")  =outdated way

console.log(`Hi, ${name.trim().replaceAll('-',' ')} and i am a ${job.trim().replaceAll('-',' ')} `)

console.log(`${name1}`);  //string interpolation
