//Typecasting Coercion
//Explicit vs Implicit coercion
// const x = 42;
// const explicit = String(x);
// const implicit = x + "";

//The Spread Operator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// String Concatination
//const firstName = prompt('Enter your First Name');
//const address = prompt('Enter your City');
//const nameAddress = `Your name is ${firstName} and you live in ${address}.`;
//alert(nameAddress);

// Adding Numbers using Function after pasing as Integer
// var numA = parseInt(prompt(`Enter First Number : `));
// var numB = parseInt(prompt(`Enter Second Number : `));
// function addNumbers(a, b) {
//   return a + b;
// }
// var result = addNumbers(numA, numB);
// alert(result);

// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// thisisalsovariable = "hello";
// console.log(typeof thisisalsovariable);

let sum = 0;

for (let i = 0; i <= 50; i++) {
  sum += i;
}

console.log(sum);
