// Your code here
"use strict";

const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
      
    }
    });
    
     

    function moveDodgerLeft() {
        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);
  
        if (left > 0) {
            dodger.style.left = `${left - 1}px`;
         }}

         function moveDodgerRight() {
            const leftNumbers = dodger.style.left.replace("px", "");
            const left = parseInt(leftNumbers, 10);
      
            if (left < 360) {
                dodger.style.left = `${left + 1}px`;
             }}
             
             document.addEventListener("keydown", function (e) {
                 if (e.key === "ArrowLeft") {
                     moveDodgerLeft();
                 } else if (e.key === "ArrowRight") {
                     moveDodgerRight();
                 } else if (e.key === "ArrowUp") { // Calls moveDodgerUp() when Up Arrow is pressed
                     moveDodgerUp();
                 } else if (e.key === "ArrowDown") { // Calls moveDodgerDown() when Down Arrow is pressed
                     moveDodgerDown();
                 }
             });