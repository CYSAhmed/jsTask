// script.js

// Function to prompt the user for their name and display a welcome message
(function() {
    const userName = prompt("Please enter your name:");
    if (userName) {
        alert(`Welcome, ${userName}!`);
    } else {
        alert("Welcome, guest!");
    }
})();
