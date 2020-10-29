let buttons = document.getElementsByClassName("btn");
let changeMe = document.getElementById("changeMe");

// Run through a loop
// Add an event listener
for(let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
        alert("You clicked on " + e.target.innerText);
        if(e.target.innerText == "Danger") {
            changingText(e.target.innerText);
        }
    });
}

function changingText(textToChange) {
    changeMe.innerText = textToChange;
}

switch(textToChange) {
    case "Primary": 
        changeMe.classList.add("blue");
        break;

    case "Secondary":
        changeMe.classList.add("gray");
        break;
    case "Success":
        changeMe.classList.add("yellow");
        break;
    case "Danger":
        changeMe.classList.add("red");
        break;
    case "Warning":
        changeMe.classList.add("teal");
        break;
    case "default":
        break;
}