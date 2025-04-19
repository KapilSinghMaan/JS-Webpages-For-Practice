// Method Chaining = Calling one method after another
//                   in one continuous line of code.

let username = window.prompt("Enter your Username");

// ---------------- No Method Chaining ---------------



// username = username.trim();
// let firstchar = username.charAt(0);
// firstchar = firstchar.toUpperCase();

// let extrachar = username.slice(1);
// extrachar = extrachar.toLowerCase();

// username = firstchar + extrachar;
// console.log(username);



// ----------------- Method Chaining -----------------

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);