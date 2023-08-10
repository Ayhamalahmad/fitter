// Select elements
let buttons = document.querySelectorAll(".buttons button");
let imgs = document.querySelectorAll(".gallery img");
let boxs = document.querySelectorAll(".gallery .box");

// Add event listeners for image buttons
buttons.forEach((button) => {
  button.addEventListener("click", handleImage); // Activate click listener to change images
  button.addEventListener("click", handleActive); // Activate click listener to change active state
});

// Update active state of buttons
function handleActive() {
  buttons.forEach((button) => {
    button.classList.remove("active"); // Remove active state from all buttons
    this.classList.add("active"); // Add active state to the clicked button
  });
}

// Change displayed images
function handleImage() {
  boxs.forEach((box) => {
    box.style.display = "none"; // Hide all displayed images
  });
  document.querySelectorAll(this.dataset.filter).forEach((element) => {
    element.style.display = "flex"; // Display matching images based on the selected filter
  });
}
