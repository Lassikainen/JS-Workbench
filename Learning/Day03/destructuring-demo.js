// ---- OBJECT DESTRUCTURING ----
// Destructuring allows you to unpack values from objects (or arrays) into distinct variables in a concise way.

// Example object representing a ship fitting
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

// Traditional way to extract values
//This is equivalent to doing:
// const shipType = shipFitting.shipType;
// const currentShield = shipFitting.currentShield;
// const modules = shipFitting.modules;

const { shipType, currentShield, modules } = shipFitting;

// Now you have three separate variables
console.log(shipType); // "Caldari Navy Raven"
console.log(currentShield); // 112000
console.log(modules); // { highSlot1: "425mm Railgun II", lowSlot1: "Multispectrum Shield Hardener II" }

// Renaming during destructuring.
// This is equivalent to doing:
// const shieldHP = shipFitting.currentShield;
const { currentShield: shieldHP } = shipFitting;
console.log(shieldHP); // 112000

// Default value if property missing
//This is equivalent to doing:
// const maxArmor = shipFitting.maxArmor !== undefined ? shipFitting.maxArmor : 80000;
const { maxArmor = 80000 } = shipFitting; // uses 80000 if no maxArmor in shipFitting
console.log(maxArmor); // 80000

// ---- ARRAY DESTRUCTURING ----

// You can also destructure arrays. The order matters here.
const inventory = ["Tritanium", "Pyerite", "Mexallon", "Isogen"];
const [first, second, ...rest] = inventory; // first="Tritanium", second="Pyerite", rest=["Mexallon", "Isogen"]
console.log(first); // "Tritanium"
console.log(second); // "Pyerite"
console.log(rest); // ["Mexallon", "Isogen"]

// ---- NESTED DESTRUCTURING ----

// You can destructure nested objects too.
//This is equivalent to doing:
// const highSlot1 = shipFitting.modules.highSlot1;

const {
  modules: { highSlot1 },
} = shipFitting; // extracts highSlot1 from the nested modules object
console.log(highSlot1); // "425mm Railgun II"
