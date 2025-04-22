// while loop = repeat some code WHILE some condition is true


// ----------- EXAMPLE -----------

// let username = "";

// while (username === "" || username === null) {
//     username = window.prompt("Enter your name");
// }

// console.log(`Hello ${username}`);



let loggenIn = false;
let username;
let password;

while (!loggenIn) {
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if (username === "myUsername" && password === "myPassword") {
        loggenIn = true;
        console.log("You are Logged in");
    }
    else {
        console.log("You are not Logged in");
    }
}