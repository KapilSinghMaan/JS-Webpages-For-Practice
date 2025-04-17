// ternary operator = a shortcut to if{} and else{} statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse;

// let time = 9;
// let greeting = time > 12 ? "Good afternoon" : "Good morning";
// console.log(greeting);

// let inSchool = false;
// let edu=inSchool?"You are in school":"You are in college";
// console.log(edu);

let purAmount = 990;
let discount = purAmount > 100 ? 10 : 0;
console.log(`Your Total bill is ${purAmount - (purAmount * discount / 100)}`);