// array =multiple datatype as a list 
//it is dynamic in size
const myArr = [4, 54, 50, 65, 48, 75]
// myArr[2]=6
// console.log(myArr);
// const newArr=myArr;
//newArr will have a shallow copy 
//myArr and newArr will share the sam reference
// newArr[0]=10;
// console.log(newArr[0])
const myHeors = ["shaktiman", "naagraj",1 , 2,true]

// const myArr2 = new Array(1, 2, 3, 4)
// // console.log(myArr[1]);

// // Array methods
// // const myArr = [4, 54, 50, 65, 48, 75,6]
// // myArr.push(6)
// // myArr.push(7)
// // myArr.pop()

// // myArr.unshift(9)  //=add element at the 0th index and shift rest to right/ not optimized
// // myArr.shift()    //=remove oth index and shift left
// // console.log(myArr);

// // console.log(myArr.includes(9));
// // console.log(myArr.indexOf(-12));

// // const newArr = myArr.join() //=Converts the array in String
// // console.log(newArr);  

// // console.log(myArr);
// // console.log( newArr);

// // [4, 54, 50, 65, 48, 75]
// // slice, splice

// // console.log("A ", myArr);

// // const myn1 = myArr.slice(1, 3)

// // console.log(myn1);
// // console.log("After Slice original arr", myArr);

// //Removing elements 
// // const myn2 = myArr.splice(1, 2)
// // console.log("after splice original arr", myArr);  //Splice changes the original array
// // console.log(myn2);


// // let myArr = [0, 1, 2, 3, 4, 5];

// // let removedElements = myArr.splice(1, 2);

// // console.log('Modified array:', myArr);        // Output: Modified array: [0, 3, 4, 5]
// // console.log('Removed elements:', removedElements); // Output: Removed elements: [1, 2]

// // Remove all elements starting from index 2
// // myArr.splice(2);

// //inserting elements in a particular position without deleting others
// // let myArr = [0, 1, 2, 3, 4, 5];

// // // Insert 'a' and 'b' at index 1 without removing any elements
// // myArr.splice(1, 0, 'a', 'b');

// // console.log('Modified array)



// // const months = ['Jan', 'March', 'April', 'June'];
// // months.splice(1, 0, 'Feb');
// //============================================================//

const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)   //=["thor", "Ironman", "spiderman",[ "superman", "flash", "batman"]

// // console.log(marvel_heros);
// // console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) //returns a new array
// console.log(allHeros);


// //Spread operator
// const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity) //we can pass a number of depth also
// console.log(real_another_array);

let b=10;
console.log(Array.isArray(b))


 var str= "Developer HI"



console.log( Array.from(str));


// console.log(Array.isArray("Hitesh"))  //false
// console.log(Array.from("Hitesh"))   //converts to a char array 
console.log(Array.from({name: "hitesh"})) // interesting =try to make array from the keyValue

let score1 = 100
let score2 = 200
let score3 = 300
let arrayFromInt = Array.of(score1,score2,score3)
console.log(arrayFromInt);

arrayFromInt[2]= 500;
console.log(arrayFromInt.slice(0,1))

let a="this is the basic string."
let n=9 
let n1= "This is another data of the datatype string"
console.log(Array.of(a,n,n1,2,3,4,5));


const num=[2,5,4,6,9,5,2,4,6]
num.lastIndexOf(2)
num.lastIndexOf(2,3)
num.lastIndexOf(2, -2)
// you can't find Nan using lastIndexof
num.lastIndexOf(Nan)  // o/p=-1
