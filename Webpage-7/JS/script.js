// Counter which can be increased , decreased or reset to zero. 

const deccount = document.getElementById("decbtn");
const inccount = document.getElementById("incbtn");
const resetcount = document.getElementById("resetbtn");
const counter = document.getElementById("count");

let count = 0;

deccount.onclick = function () {
    count--;
    counter.textContent = count;
};

inccount.onclick = function () {
    count++;
    counter.textContent = count;
};

resetcount.onclick = function () {
    count = 0;
    counter.textContent = count;
};