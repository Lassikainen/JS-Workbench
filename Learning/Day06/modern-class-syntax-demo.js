//This example demonstrates how to use ES6 class syntax to create objects with shared behavior and inheritance in JavaScript. Classes provide a cleaner and more intuitive syntax for creating constructor functions and managing prototypes, while still using the underlying prototype-based inheritance model of JavaScript. This is the modern way to define object blueprints and is widely used in contemporary JavaScript development.

//This is known as synctactic sugar because it provides a more familiar and concise syntax for defining objects and their behavior, while still using the same underlying mechanisms as constructor functions and prototypes. The class syntax makes it easier to read and write object-oriented code in JavaScript, especially for developers coming from other languages with class-based inheritance.

class Ship {
  constructor(name, hull, shield) {
    this.name = name;
    this.hull = hull;
    this.shield = shield;
  }

  takeDamage(amount) {
    this.hull -= amount;
    console.log(`${this.name} took ${amount} damage. Hull left: ${this.hull}`);
  }

  getStatus() {
    return `${this.name} - Hull: ${this.hull}, Shield: ${this.shield}`;
  }
}

// Inheritance with extends and super
class Frigate extends Ship {
  constructor(name, hull, shield, bonusSpeed) {
    super(name, hull, shield); // Must call parent constructor first
    this.bonusSpeed = bonusSpeed; // Frigate-specific property
  }

  // Override method
  takeDamage(amount) {
    console.log("Frigate evasive maneuver engaged!");
    super.takeDamage(amount * 0.9); // Call parent version with reduced damage
  }
}

class Cruiser extends Ship {
  constructor(name, hull, shield, bonusArmor) {
    super(name, hull, shield);
    this.bonusArmor = bonusArmor;
  }
}

// Usage
const merlin = new Frigate("Caldari Merlin", 45000, 28000, 450);
const raven = new Cruiser("Caldari Navy Raven", 125000, 98000, 25000);

merlin.takeDamage(10000); // Uses overridden Frigate version
console.log(merlin.getStatus()); // Inherited from Ship

// Test inputs and outputs
// Input: new Frigate("Merlin", 45000, 28000, 450) then takeDamage(10000) → Output: "Frigate evasive maneuver engaged!" + "Caldari Merlin took 9000 damage. Hull left: 36000"
