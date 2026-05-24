// 01-console-test.js
// This file demonstrates console usage – run it with: node 01-console-test.js

// console.log() outputs to the terminal or browser console
// It is the most important debugging tool you will ever use
console.log("Capsuleer Caiphus reporting for duty");  // String output

// You can log multiple values at once
console.log("Ship hull:", 250, "Shield:", 180);  // Numbers and strings together

// console.error() for serious problems (red in terminal)
console.error("Warning: Capacitor at 12% – critical!");

// console.warn() for non-fatal alerts (yellow)
console.warn("Market data may be delayed");

// console.table() for clean object/array display – extremely useful for inventories
const shipFitting = {
  shipType: "Kestrel",
  hull: 250,
  shield: 180,
  capacitor: 120
};
console.table(shipFitting);  // Displays as a clean table in console