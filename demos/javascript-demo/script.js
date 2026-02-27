// 1. Grab the "Piece" from the page
const theButton = document.getElementById("switch");
const theHeading = document.querySelector("h1");

// 2. Define the "Action" (The Brain's Logic)
const flipSwitch = () => {
  // Check the current color of the background
  if (document.body.style.backgroundColor === "white") {
    // If it's white, make it dark
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "white";
    theHeading.innerText = "The Room is Dark";
  } else {
    // If it's dark, make it bright!
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    theHeading.innerText = "The Light is ON!";
  }
};

function alertUser() {
  alert("You have ligma");
}

// 3. Connect the Action to the Button
theButton.addEventListener("click", alertUser);

// --- Counter feature ---
const incrementButton = document.getElementById("increment");
const countDisplay = document.getElementById("count");

let currentCount = 0;

function handleIncrement() {
  currentCount++;
  countDisplay.innerText = currentCount;
}

incrementButton.addEventListener("click", handleIncrement);


    function printSomething(){
      console.log("Hello, world!");
    }


