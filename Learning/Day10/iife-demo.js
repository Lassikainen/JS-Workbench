//IIFE - Immediately Invoked Function Expression
// An IIFE is a JavaScript function that runs as soon as it is defined. It creates a private scope for variables and functions, preventing them from polluting the global namespace. This is especially useful for encapsulating code and avoiding conflicts with other scripts.

// IIFE - creates private scope
const marketSimulator = (function () {
  // Private variables - completely hidden
  let internalBalance = 50000000;
  let transactionLog = [];

  function recordTransaction(item, amount) {
    transactionLog.push({ item, amount, time: new Date() });
  }

  return {
    // Public API
    buy: function (item, cost) {
      if (cost > internalBalance) {
        console.log(
          `Cannot purchase ${item} - insufficient ISK. Required: ${cost}, Available: ${internalBalance}`,
        );
      } else {
        internalBalance -= cost;
        recordTransaction(item, -cost);
        console.log(`Purchased ${item} for ${cost} ISK. New balance: ${internalBalance}`);
      }
    },

    getBalance: function () {
      return internalBalance;
    },
  };
})(); // ← immediate invocation

// Test - simulate multiple purchases. This demonstrates that internalBalance and transactionLog are private and cannot be accessed directly from outside the IIFE, while the buy method can manipulate the internal state through the public API.
for (let i = 0; i < 25; i++) {
  marketSimulator.buy("Tritanium", 2500000);
}

// Test inputs and outputs
// Input: marketSimulator.buy(...) → private balance updated, transaction recorded
// console.log(marketSimulator.internalBalance) → undefined (private!)
