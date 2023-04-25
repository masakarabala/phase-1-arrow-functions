
// has a function expression called divide
// divide divides 2000 by 100
function divide(num1,num2){
    return num1/num2;
}
console.log(divide(2000,100));

// has an arrow function called square
// square arrow function takes one parameter and multiplies it times itself
const square=num =>{ return num*num};

console.log(square(9));

// has an arrow function called add 
//add arrow function takes two parameters and adds them together
const add=(num1,num2)=>{return num1+num2}
console.log(add(9,2));