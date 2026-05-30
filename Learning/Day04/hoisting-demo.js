// Hoisting demonstration - what the JavaScript engine actually sees

// 1. Function declaration - fully hoisted
console.log(calculateWarpTime(500000, 2500)); // Works even though declared later

function calculateWarpTime(distance, speed) {
  return distance / speed; // Returns seconds
}

// 2. var - hoisted but value is undefined until assignment
//Best practice: avoid var in modern JavaScript – use let/const instead to prevent this kind of confusion.
console.log(shipStatus); // undefined (hoisted declaration)
var shipStatus = "Aligned"; // assignment happens here

// 3. let / const - hoisted into Temporal Dead Zone
// console.log(currentCap);     //This would throw a ReferenceError because currentCap is in the Temporal Dead Zone until the let line is executed. The variable exists but cannot be accessed before its declaration.
let currentCap = 7500;
// console.log(maxCap);       //This would also throw a ReferenceError for the same reason as currentCap.
const maxCap = 12000;
