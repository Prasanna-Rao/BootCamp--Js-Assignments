// Function to generate a random color
function getRandomColor() {
    // Generating random values for RGB
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change the background color of the body
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

// Adding onclick event to the entire document
document.onclick = function() {
    changeBackgroundColor();
};
