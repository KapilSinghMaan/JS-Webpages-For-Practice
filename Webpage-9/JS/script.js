// RANDOM NUMBER GENERATION through Math function 

// console.log(Math.random());          generate number between 0 and 1

// To generate number between any range 

// let min = Number(window.prompt("Enter start limit"));
// let max = Number(window.prompt("Enter end limit"));
// let randomnum = Math.floor(Math.random() * (max - min) + min);
// console.log(randomnum);


const roll = document.getElementById("btn");
const newlabel = document.getElementById("mylabel");
let randomnum;

roll.onclick = function () {
    randomnum = Math.floor(Math.random() * 6) + 1;
    newlabel.textContent = randomnum;
};