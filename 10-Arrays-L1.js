// array =multiple datatype as a list 
//it is dynamic in size

const myArr = [0, 1, 2, 3, 4, 5]
// const newArr=myArr;
//newArr will have a shallow copy 
//myArr and newArr will share the sam reference
// newArr[0]=10;
// console.log(newArr[0])
// const myHeors = ["shaktiman", "naagraj",1 , 2,true]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)  =add element at the 0th index and shift rest to right/ not optimized
// myArr.shift()    =remove oth index and shift left

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()  =Converts the array in String

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("After Slice original arr", myArr);


const myn2 = myArr.splice(1, 3)
console.log("after splice original arr", myArr);  //Splice changes the original array
console.log(myn2);