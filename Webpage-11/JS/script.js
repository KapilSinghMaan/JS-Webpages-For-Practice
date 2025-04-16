// Checking checked box and radio button are checked or not

//  .checked = property that determines the checked state of an 
//             HTML checkbox or radio button element


const mySub = document.getElementById("mySub");
const visaBtn = document.getElementById("visaBtn");
const onlineBtn = document.getElementById("onlineBtn");
const upiBtn = document.getElementById("upiBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

mySubmit.onclick = function () {

    if (mySub.checked) {
        subResult.textContent = `You are now subscribed to my website.`
    }
    else {
        subResult.textContent = `You have NOT subscribed to my website.`
    }


    if (visaBtn.checked) {
        payResult.textContent = `You can pay through Visa to my website.`
    }
    else if (onlineBtn.checked) {
        payResult.textContent = `You can pay through Online to my website.`
    }
    else if (upiBtn.checked) {
        payResult.textContent = `You can pay through UPI to my website.`
    }
    else {
        payResult.textContent = `You must select a payment mode.`
    }
};