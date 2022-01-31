// HARD: Create two buttons, one that when clicked turns the background of the body red. The other, when clicked, turns the body's background color white. Each of the background colors should be defined as class styles and when the buttons are pushed the body's classList is updated to include the correct class for the background. 

// Create a single function that takes an input className and updates the body's classList to ONLY include that className

// *Note: Check Canvas for the starter code needed for this exercise. The starter code will be located in a folder named hard_js. 


let redBtn = document.querySelector(".bodyRed")
let whiteBtn = document.querySelector(".bodyWhite")

redBtn.addEventListener('click', redFunction)
whiteBtn.addEventListener('click', whiteFunction)

function redFunction() {
    document.body.style.backgroundColor = "red";
}

function whiteFunction() {
    document.body.style.backgroundColor = "white";
}

// function colorFunctions(className) {
//     if(className == ".bodyRed"){
//         document.body.style.backgroundColor = "red";
//     }
// }