// Your code here

const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";


document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        const leftNumbers = dodger.style.left.replace("px", "")
        const left = parseInt(leftNumbers, 10);
        dodger.style.left = `${left - 1}px`;
    }
    console.log(event);
});



