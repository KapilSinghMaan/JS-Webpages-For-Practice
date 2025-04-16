// if , if else , else if and nested if in javascript

const btn=document.getElementById("btn");
const myage=document.getElementById("myage");
const result=document.getElementById("result");

let age;

btn.onclick = function(){
    age=myage.value;
    age=Number(age);
    if(age>100)
    {
        result.textContent=`You are TOO OLD to enter this website`;
    }
    else if(age>18)
    {
        result.textContent=`You are old enough to enter this website`;
    }
    else if(age==0)
    {
        result.textContent=`You cannot enter. You are just born.`;
    }
    else if(age<0)
    {
        result.textContent=`Your age can't below 0`;
    }
    else
    {
        result.textContent=`You are not old enough to enter this website`;
    }
};