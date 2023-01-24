// Get the button and the popup elements
var openButton = document.getElementById("popup-button");
var closeButton = document.getElementById("close-button");
var popup = document.getElementById("popup");

// Add a click event listener to the open button
openButton.addEventListener("click", function() {
    // Show the popup
    popup.style.display = "block";
    // Hide the open button
    openButton.style.display = "none";
});

// Add a click event listener to the close button
closeButton.addEventListener("click", function() {
    // Hide the popup
    popup.style.display = "none";
    // Show the open button
    openButton.style.display = "block";
});
