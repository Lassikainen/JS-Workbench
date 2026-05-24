// closure-intro.js
// Classic factory pattern - exactly what you will use for game counters

function createShipCounter(initialHull = 10000) {
  // 'currentHull' lives in the outer scope and is closed over
  let currentHull = initialHull;   // private variable - cannot be accessed directly
  
  // Inner function remembers 'currentHull' even after createShipCounter finishes
  return function applyDamage(damage) {
    currentHull = Math.max(0, currentHull - damage); // edge-case: never go negative
    console.log(`Hull integrity now: ${currentHull} HP`);
    return currentHull;
  };
}

// Create two independent counters - each has its own private 'currentHull'
const ravenCounter = createShipCounter(12000);
const blackbirdCounter = createShipCounter(8000);

console.log("=== Raven ===");
ravenCounter(4500);     // Hull integrity now: 7500 HP
ravenCounter(2000);     // Hull integrity now: 5500 HP

console.log("=== Blackbird ===");
blackbirdCounter(3000); // Hull integrity now: 5000 HP
// Notice: ravenCounter and blackbirdCounter do NOT interfere with each other