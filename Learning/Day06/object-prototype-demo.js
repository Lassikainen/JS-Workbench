// Base object - every object has a prototype chain
// In JavaScript, objects can inherit properties and methods from a prototype. This allows for shared behavior without copying functions to every instance, making it memory efficient and enabling powerful patterns like delegation and inheritance.

const baseShip = {
  hull: 10000,
  shield: 8000,
  // Method will be shared via prototype
  takeDamage: function (amount) {
    this.hull -= amount;
    console.log(`${this.name || "Unknown ship"} took ${amount} damage. Hull left: ${this.hull}`);
  },
};

// Create a new object that delegates to baseShip. What this actually does is create a new empty object and sets its internal [[Prototype]] (accessible via __proto__) to baseShip, so it can access properties and methods defined on baseShip.
const raven = Object.create(baseShip); // Object.create sets the prototype to baseShip
raven.name = "Caldari Navy Raven"; // Add own property to raven
raven.hull = 125000; // Override hull property for raven

// Property lookup demonstration
console.log(raven.hull); // 125000 → found on raven itself
console.log(raven.shield); // 8000 → not on raven, follows __proto__ to baseShip
raven.takeDamage(15000); // Calls method from prototype

// Test inputs and outputs
// Input: raven.takeDamage(15000) → Output: "Caldari Navy Raven took 15000 damage. Hull left: 110000"
// The method was never copied to raven; it was delegated via the prototype chain
