// Primitive examples with test inputs/outputs

// number
const hullIntegrity = 4250; // integer
const shieldRechargeRate = 12.75; // float
console.log(typeof hullIntegrity); // "number"

// string - always use double or single quotes consistently (we prefer double in this course)
const logMessage = "Warp drive engaged. Destination: Jita 4-4";
console.log(logMessage.length); // 42 characters

// boolean
const isCapsuleer = true;
const hasTarget = false;

// undefined vs null
let currentTarget; // declared but never assigned → undefined
console.log(currentTarget); // undefined

const noTarget = null; // explicit "nothing here"
console.log(noTarget); // null

// typeof operator - your diagnostic tool
console.log(typeof hullIntegrity); // "number"
console.log(typeof logMessage); // "string"
console.log(typeof isCapsuleer); // "boolean"
console.log(typeof hasTarget); // "boolean"
console.log(typeof currentTarget); // "undefined"
console.log(typeof noTarget); // "object"
