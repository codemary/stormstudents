// window object
// window.addEventListener("mousedown", function(event) {
//     alert("Mousedown event was fired on the window!");
//     console.log("MY event", event);
// })

// prevent default
let link = document.querySelector("a");
link.addEventListener("click", function(event) {
    console.log("Redirecting stopped", event);
    event.preventDefault();
})

// stop propagation
document.getElementById("button12").addEventListener("mousedown", function(event) {
    alert("Button Clicked");
    if(event.button == 2) {
        event.stopPropagation();
        console.log("stopPropagation", event)
    }
})

document.getElementById("demo").addEventListener("mousedown", function(event) {
    alert("Paragraph Clicked!");
})

// remove event listener
let heading = document.querySelector("h1");

function listener(event) {
    if(event.type === "mouseenter") {
        heading.style.color = "red";
    } else if (event.type === "mouseleave") {
        heading.style.color = "blue";
        heading.removeEventListener("mouseleave", listener)
    }
    console.log(event);
    
}

heading.addEventListener("mouseenter", listener);
heading.addEventListener("mouseleave", listener);
// heading.removeEventListener("mouseleave", listener);

// DOM Content Loaded
function onLoad(event) {
    console.log(event);
    alert("Page has been loaded!")
}
// document.addEventListener("DOMContentLoaded", onLoad);

// key Up
let input = document.querySelector("input");

function onKeyUpEvent(event) {
    console.log(event);
    alert(`${event.key} was pressed`);
}

input.addEventListener("keyup", onKeyUpEvent);

// Form Events

// submit
function logSubmit(event) {
    log.textContent = `Form submitted! Time Stamp: ${event.timeStamp}`;
    event.preventDefault();
    let formData = new FormData(event.target);
    console.log(formData);
    console.log(event);
    console.log("formData.get(name)", formData.get("name"));
    
}

const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);

// reset
function logReset(event) {
    resetLog.textContent = `Form reset! Time Stamp: ${event.timeStamp}`;
}

const resetLog = document.getElementById("reset-log");
form.addEventListener("reset", logReset);