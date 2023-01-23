const multiply = (a,b) => a*b;

console.log(multiply(4,3));

const curriedMultiply = (a) => (b) => a*b;
console.log(curriedMultiply(4)(6));

const curriedMultiplyBy5 = curriedMultiply(5);
console.log(curriedMultiplyBy5(6));

//partial Application
const multiply2 = (a,b,c) => a*b*c;

const partialMultiplyBy5 = multiply2.bind(null,5);
console.log(partialMultiplyBy5(4,100));