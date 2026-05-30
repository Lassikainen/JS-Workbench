//Spread and rest operators are powerful features in JavaScript that allow you to work with arrays and objects in a more flexible way.
//The spread operator (three dots: ...) is used to expand an iterable (like an array or object) into individual elements
//The rest operator collects multiple elements into a single array or object.
// They are often used for copying, merging, and destructuring data structures, making code more concise and easier to read.

// Spread in arrays
const baseModules = ["Railgun I", "Shield Hardener"];
const advancedModules = [...baseModules, "Drone Bay", "Afterburner"]; // ...baseModules copies the elements of baseModules into the new array, then we add more modules

console.log(advancedModules); // ["Railgun I", "Shield Hardener", "Drone Bay", "Afterburner"]

// Spread in objects (shallow copy + merge)
const baseStats = { hull: 125000, shield: 98000 };

//...baseStats creates a shallow copy of baseStats, then we add/override properties for ravenStats
//A shallow copy means that if baseStats had nested objects, those nested objects would still be shared between baseStats and ravenStats. In this case, since baseStats only has primitive values, it's effectively a full copy.
// However, if we had something like baseStats = { hull: 125000, shield: 98000, modules: ["Railgun I"] }, then ravenStats.modules would reference the same array as baseStats.modules, which could lead to unintended side effects if we modify it.
//If you want to do a deep copy, you would need to use a library like lodash or write a custom function to recursively copy nested objects and arrays.
const ravenStats = { ...baseStats, name: "Caldari Navy Raven", bonus: "Missile" };

// Rest parameter - collects remaining arguments
function logFitting(pilot, shipType, ...modules) {
  console.log(`${pilot} flying ${shipType} with modules:`, modules);
}

// Test inputs and outputs
// Input: logFitting("Caiphus", "Raven", "Railgun", "Hardener", "Drone") → Output: "Caiphus flying Raven with modules: ["Railgun", "Hardener", "Drone"]"
// Input: { ...baseStats, name: "Raven" } → Output: object with 4 properties
