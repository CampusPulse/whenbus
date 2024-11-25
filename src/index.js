// src/index.js
function greet() {
  alert("Hello from Webpack!");
}

// Expose the function to the window object to make it accessible globally
window.greet = greet;
