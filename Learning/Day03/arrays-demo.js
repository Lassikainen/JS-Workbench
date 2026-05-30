// Array literal
const cargoHold = [
  "Tritanium", // index 0
  "Pyerite", // index 1
  "Mexallon", // index 2
  "Isogen", // index 3
];

// Accessing by index
console.log(cargoHold[0]); // "Tritanium"

// Adding to end
cargoHold.push("Nocxium"); // .push() method adds to end

// Removing from end
const lastItem = cargoHold.pop(); // .pop() removes and returns last item

// Length property (always up-to-date)
console.log(cargoHold.length); // 4 after push/pop
console.log(cargoHold); // ["Tritanium", "Pyerite", "Mexallon", "Isogen"] - final state of array
console.log(lastItem); // "Nocxium" - the item that was removed by pop()
// Test inputs and outputs
// Input: cargoHold starts with 4 items → after push("Nocxium") length = 5
// After pop() → lastItem = "Nocxium", length = 4
