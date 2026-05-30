//THe this keyword is a fundamental concept in JavaScript that refers to the context in which a function is executed. It allows functions to access properties and methods of the object they belong to, enabling more dynamic and flexible code. The value of this can change based on how a function is called, making it essential to understand its behavior for effective JavaScript programming.

// 1. Global context - this = global object (Window in browsers, global in Node.js)
console.log(this); // In browser: Window object

// 2. Inside object method - this = the object it belongs to
const ship = {
  name: "Caldari Navy Raven",
  hull: 125000,
  takeDamage: function (amount) {
    // 'this' inside method refers to the ship object
    this.hull = this.hull - amount;
    console.log(`${this.name} took ${amount} damage. Hull left: ${this.hull}`);
  },
};

ship.takeDamage(15000); // Correct this binding

// Test inputs and outputs
// Input: ship.takeDamage(15000) → Output: "Caldari Navy Raven took 15000 damage. Hull left: 110000"

// 3. Common pitfall - losing this when extracting method
const damageFn = ship.takeDamage; // Just the function reference
damageFn(5000); // this within takeDamage is now undefined or global, not ship. Outputs "undefined took 5000 damage. Hull left: NaN" because this.name is undefined and this.hull is NaN when this is not bound to the ship object.

// 4. Arrow function solution (this is lexically bound)
const drone = {
  name: "Heavy Drone",
  fire: () => {
    console.log(`Firing from ${this.name}`); // this = outer scope (lexical this) - in this case, likely the global object, so this.name is undefined
  },
};

drone.fire(); // Output: "Firing from undefined" because arrow functions do not have their own this and take it from the surrounding context, which is the global scope in this case. In a real application, you would typically avoid using arrow functions for object methods if you need to access the object's properties via this.
