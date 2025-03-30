// Different ways of user input are :-

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

let username;

// EASY WAY 

// username=window.prompt("Enter your name");
// console.log(`Your name is ${username}`);


// PROFESSIONAL WAY 

document.getElementById("btn").onclick = function(){
    username=document.getElementById("textbox").value;
    document.getElementById("head").textContent=`Welcome ${username}`;
};