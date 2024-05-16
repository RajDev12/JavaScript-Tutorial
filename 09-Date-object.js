let myDate=new Date();
// console.log(myDate)
// console.log(myDate.toString())
console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
console.log(myDate.getDay())
console.log(myDate.getMonth())
console.log(myDate.getMonth()+1)  //starts from 0
console.log(myDate.getFullYear())
console.log(myDate.getTime())



let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();  //total milisecods from 1st jan 1970

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
