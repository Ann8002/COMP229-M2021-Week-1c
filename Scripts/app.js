// IIFE -- Immediately Invoked Function Expression
"use strict";
(function(){

function start()
{
    let myVariable = 20;
console.log("my number is: " + myVariable);

for (let index = 0; index < myVariable; index++) {
    console.log("your number is: " + index);

}
}    

window.addEventListener("load", start);



})();

