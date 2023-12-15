
const names = ["Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya"];
let currentIndex = 0;
const nameDisplay = document.getElementById("name-display");
console.log(names)

// Function to display the current name
function displayCurrentName() {
    nameDisplay.textContent = names[currentIndex];
}

// Function to show the next name
function showNext() {
    currentIndex = (currentIndex + 1) % names.length;
    displayCurrentName();
}

// Function to show the previous name
function showPrevious() {
    currentIndex = (currentIndex - 1 + names.length) % names.length;
    displayCurrentName();
}

// Display the initial name
displayCurrentName();