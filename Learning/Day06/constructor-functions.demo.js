// Constructor functions are a way to create multiple objects with the same structure and behavior. They are essentially regular functions that are intended to be used with the new keyword, which creates a new object and sets this to that object within the function. This allows us to define a blueprint for creating similar objects without having to manually set up each one.

//This gives us a way to create multiple ship objects with shared behavior (methods) while keeping the code organized and memory efficient. The methods are defined on the prototype, so they are shared across all instances, while the properties are unique to each instance.
function Ship(name, hull, shield) {
  // Instance properties (unique to each ship)
  this.name = name;
  this.hull = hull;
  this.shield = shield;
}

// Shared methods live on the prototype - memory efficient.
//However, this is an older pattern. In modern JavaScript, you would typically use ES6 classes for this purpose, which provide a cleaner syntax while still using prototypes under the hood.
//You would usually write this as a class in modern JavaScript, but this is the traditional way to create constructor functions and prototypes. for example:
// class Ship {
//   constructor(name, hull, shield) {
//     this.name = name;
//     this.hull = hull;
//     this.shield = shield;
//   }

//We will see this in modern-class-syntax-demo.js

Ship.prototype.takeDamage = function (amount) {
  this.hull -= amount;
  console.log(`${this.name} took ${amount} damage. Hull: ${this.hull}`);
};

Ship.prototype.getStatus = function () {
  return `${this.name} - Hull: ${this.hull}, Shield: ${this.shield}`;
};

// Creating instances
const raven = new Ship("Caldari Navy Raven", 125000, 98000);
const merlin = new Ship("Caldari Merlin", 45000, 28000);

raven.takeDamage(20000); // Uses shared method from prototype
console.log(merlin.getStatus());

// Test inputs and outputs
// Input: new Ship("Raven", 125000, 98000) then takeDamage(20000) → Output: "Caldari Navy Raven took 20000 damage. Hull: 105000"
// Both raven and merlin share the same takeDamage function object
