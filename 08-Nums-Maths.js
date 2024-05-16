const a=300;
console.log(a)

const num =new Number(300)
console.log(num);
console.log(num.toString().length);
console.log(num.toFixed(2)); // two decimal point  

const dec=134.87699998;
console.log(dec.toPrecision(4));
console.log(dec.toPrecision(2)); //exact 2 value then exponantial value


const price=100000000;
console.log(price.toLocaleString())
console.log(price) //not changing the original number
console.log(price.toLocaleString('en-IN'))


console.log(Math.PI);
console.log(Math.abs(-5));
console.log(Math.SQRT2);
console.log(Math.ceil(4.1));
console.log(Math.floor(4.8));

console.log(Math.random());
console.log(Math.random()*10);

const min=10;
const max=20;
console.log((Math.random()*(max-min+1))+min)
console.log(Math.floor(Math.random()*(max-min+1))+min)



