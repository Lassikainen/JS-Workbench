// All selections happen on the document object
// Run this in a browser with the matching HTML elements present

// 1. Single element selection - returns the first match or null
const hullDisplay = document.getElementById("hull-value"); // fastest for IDs
const shieldBar = document.querySelector("#shield-bar"); // CSS selector
const firstModuleSlot = document.querySelector(".module-slot"); // first element with this class

// 2. Multiple elements - returns a live NodeList (updates automatically)
const allModuleSlots = document.querySelectorAll(".module-slot"); // static NodeList in modern browsers
const allButtons = document.getElementsByTagName("button"); // live HTMLCollection

// Safe guard - always check for existence
if (hullDisplay) {
  console.log("Hull element found and ready for updates");
} else {
  console.error("Critical UI element missing - check HTML");
}

// Test inputs and outputs
// Assume HTML has <div id="hull-value">85000</div>
// Input: hullDisplay.textContent → Output: "85000"
// Input: document.querySelectorAll(".module-slot").length → Output: number of slots present
