// Arrow functions are a more concise syntax for writing functions in JavaScript. They also have some important differences from regular functions, particularly in how they handle the 'this' keyword. Arrow functions do not have their own 'this' context; instead, they inherit 'this' from the immediately enclosing scope. This makes them particularly useful for writing callbacks and methods that need to access the surrounding context without worrying about losing 'this' binding. However, they are not suitable for all situations, such as when you need a function to have its own 'this' or when defining object methods that rely on 'this' to refer to the object itself.

// 1. Regular function - has its own 'this'
const ship = {
  name: "Caldari Navy Raven",
  fireWeapon: function () {
    console.log(`Firing from ${this.name}`);
  },
};

// 2. Arrow function - lexical 'this' (inherits from surrounding scope)
const modernShip = {
  name: "Caldari Navy Raven",
  fireWeapon: () => {
    console.log(`Firing from ${this.name}`); // 'this' would be global here - NOT what we want for methods
  },
};

// Correct modern pattern: arrow inside a method or for callbacks
const correctShip = {
  name: "Caldari Navy Raven",
  modules: ["Railgun II", "Missile Launcher"],

  activateAllModules: function () {
    // Arrow inside regular method inherits 'this' correctly since the activateAllModules function has its own 'this' bound to correctShip
    this.modules.forEach((module) => {
      console.log(`${this.name} activating ${module}`);
    });
  },
};

correctShip.activateAllModules();

// One-line arrow with implicit return (extremely common in modern code)
const calculateWarpTime = (distance, speed) => distance / speed;

console.log(calculateWarpTime(500000, 2500)); // Returns 200

// Test inputs and outputs
// Input: calculateWarpTime(500000, 2500) → Output: 200
// Input: correctShip.activateAllModules() → Output: two lines with correct ship name
