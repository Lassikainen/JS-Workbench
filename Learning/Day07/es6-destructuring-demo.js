//Object and array destructuring are powerful features in ES6 that allow you to extract values from objects and arrays and assign them to variables in a more concise and readable way. Destructuring can be used with default values, renaming, and nested structures, making it a versatile tool for working with complex data structures.

// Object destructuring with defaults and renaming
const fitting = {
  shipType: "Raven",
  hull: 125000,
  shield: 98000,
  modules: { high: 4, low: 6 },
};

const {
  shipType: type, // rename
  hull,
  shield = 50000, // default if missing
  modules: { high: highSlots }, // nested + rename
} = fitting;

console.log(type, hull, shield, highSlots); // "Raven", 125000, 98000, 4

// Array destructuring with rest
const skillQueue = ["Gunnery", "Missile Operation", "Navigation", "Electronics"];
const [firstSkill, secondSkill, ...remaining] = skillQueue;

// Test inputs and outputs
// Input: destructuring fitting with all values present → Output: type="Raven", highSlots=4
