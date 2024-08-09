//Every   function call is pushed in the stack memory
//after the execution of the function, the function is removed from the stack memory
//This worked on the principal of LIFO
//Last In First Out

function add(a,b){
    console.log(a+b);
    
}
function sub(a,b){
    console.log(a-b);
    
}
function multiple(a,b){
    console.log(a*b);
}
multiple(2,6)
add(2,6)
sub(10,4)
