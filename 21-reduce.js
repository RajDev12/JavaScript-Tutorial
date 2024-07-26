const myNums = [1, 3, 6, 7 , 9 , 10]
const myTotal = myNums.reduce(function (acc, currval) {  
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 4)
// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {  
        itemName: "data science course",
        price: 12999
    },
]
shoppingCart.reduce(function (acc, curr){
    console.log(`acc : ${acc} and curr_item : ${curr.price}`);
     return  acc+ curr.price 
}, 0)

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);



