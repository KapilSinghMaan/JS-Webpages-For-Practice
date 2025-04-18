// string slicing = creating a substring 
//                  from a portion of another string
//                  string.slice(start, end)


let fullName = "Kapil Singh Maan";

// const firstName = fullName.slice(0, 6);
// const lastName = fullName.slice(6, 16);

// console.log(firstName);
// console.log(lastName);

// const firstChar = fullName.slice(0, 1);
// const lastChar = fullName.slice(-1);

// console.log(firstChar);
// console.log(lastChar);

// const firstName = fullName.slice(0, fullName.indexOf(" "));
// const lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);

const email = "kapilmaan@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);