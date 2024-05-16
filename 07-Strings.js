let  str1="   Hello-I-am-a-developer     ";
//1. trim()
let str2=str1.trim();
console.log(str2);

//2.  replace & replaceAll
console.log(str1.trim().replace("-"," ")) //replace first occurence
console.log(str1.trim().replaceAll("-"," ")) //replace all occurence
console.log(str1)  //doesn't make any changes to oriignal string
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
console.log(check1);

//Slice
console.log(str7.slice(0,5))
console.log(str7.slice(-21,9))  //-index =0 incase of slice

//split =it returns a array of every word as an item which splited based on delimeter
console.log(str7.split(' '))


//String Interpolation
const name = new String('I-am-dev')
const job=new String('Web-developer')


// console.log(name+job+"kuch bhi extra ")  =outdated way

console.log(`Hi, ${name.trim().replaceAll('-',' ')} and i am a ${job.trim().replaceAll('-',' ')} `)


