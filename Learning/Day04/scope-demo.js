// Outer scope (global in this file)
// This file demonstrates variable scope and lexical lookup in JavaScript
//Best practice: avoid global variables in real code – this is just for demonstration purposes. In a real project, you would typically wrap your code in a function or module to create a local scope and avoid polluting the global namespace.
const PILOT_NAME = "Caiphus"; // Available everywhere in this file

function checkShipStatus() {
  // Inner function scope
  const currentShield = 98000; // Only visible inside this function

  function logShield() {
    // Deeply nested scope
    const message = "Shield status nominal"; // Local to this innermost function

    console.log(PILOT_NAME); // Can access outer scope (lexical lookup)
    console.log(currentShield); // Can access parent function scope
    console.log(message); // Local variable
  }

  logShield();
  // console.log(message);          // ERROR - message is not visible here so we cannot log it. This would throw a ReferenceError if uncommented.
}

checkShipStatus();

// Test inputs and outputs
// Input: call checkShipStatus() → Output:
// "Caiphus"
// 98000
// "Shield status nominal"
