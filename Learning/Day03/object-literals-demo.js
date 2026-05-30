// Object literal - creates a new object in one step
const shipFitting = {
  shipType: "Caldari Navy Raven", // string property
  hullHP: 125000, // number
  currentShield: 98000,
  maxShield: 120000,
  modules: {
    // nested object for sub-grouping
    highSlot1: "425mm Railgun II",
    lowSlot1: "Multispectrum Shield Hardener II",
  },
  isWarpAligned: false, // boolean
};

// Accessing properties - two equivalent ways
console.log(shipFitting.shipType); // dot notation - most common
console.log(shipFitting["hullHP"]); // bracket notation - useful when key has spaces or is dynamic

// Adding a new property after creation
shipFitting.currentCapacitor = 6500;

// Updating an existing property
shipFitting.currentShield = 112000;

// Test inputs and outputs
// Input: shipFitting.currentShield = 98000 → after update: 112000
console.log(shipFitting); // Output when logged: full object with updated currentShield and new currentCapacitor
// Output when logged: full object with all 7 properties
