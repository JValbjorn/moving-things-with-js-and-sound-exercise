// Your code here
"use strict";

const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "rgb(113, 190, 165)";

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

              function moveDodgerUp() {
                 const bottomNumbers = dodger.style.bottom.replace("px", ""); 
                 const bottom = parseInt(bottomNumbers, 10);
             
                 if (bottom < 360) { // Adjust the limit as needed
                     dodger.style.bottom = `${bottom + 1}px`; // Move up
                 }
             }
             
             function moveDodgerDown() {
                 const bottomNumbers = dodger.style.bottom.replace("px", ""); 
                 const bottom = parseInt(bottomNumbers, 10);
             
                 if (bottom > 0) { // Prevent moving below the screen
                     dodger.style.bottom = `${bottom - 1}px`; // Move down
                 }
             }
             
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