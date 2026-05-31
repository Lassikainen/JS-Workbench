// Mock API simulation - returns a Promise (exactly what fetch() does)
function fetchMarketPrice(itemName) {
  // Promise constructor takes an executor function
  // executor receives resolve (success) and reject (failure) functions
  //This function PRETENDS to fetch market price data for a given item. It simulates an asynchronous operation using setTimeout to mimic network latency.
  // The function returns a Promise that either resolves with a price for valid items or rejects with an error for invalid items.
  // The example demonstrates how to consume the Promise using .then() for successful resolution and .catch() for handling errors, as well as .finally(), without actually making any network requests.
  return new Promise((resolve, reject) => {
    console.log(`Requesting market price for ${itemName}...`);

    // Simulate network latency (real API call would go here)
    setTimeout(() => {
      if (itemName === "Tritanium") {
        resolve(4500); // fulfilled with value
      } else if (itemName === "InvalidItem") {
        reject(new Error("Item not found in database")); // rejected
      } else {
        resolve(1250000); // another successful price
      }
    }, 1200); // 1.2 second delay
  });
}

// Consuming a Promise with .then / .catch
fetchMarketPrice("Tritanium")
  .then((price) => {
    console.log(`Tritanium current price: ${price} ISK`);
    return price * 1000; // chaining - return new value or another Promise
  })
  //then runs only if previous Promise was fulfilled - can be chained for sequential async operations
  //Chaining requires that you return a value (or another Promise) from the .then() callback. The next .then() in the chain will receive that value as its argument.
  //Forgetting to return a value or Promise will result in the next .then() receiving undefined, which can lead to bugs if not handled properly. Always ensure that you return the expected value or a new Promise when chaining .then() calls.
  .then((totalValue) => {
    console.log(`Value for 1000 units: ${totalValue} ISK`);
  })
  //catch runs any time a promise in the chain is rejected - can be used for centralized error handling
  .catch((error) => {
    console.error("Market request failed:", error.message);
  })
  .finally(() => {
    console.log("Market query complete - always runs");
  });

// Test inputs and outputs
// Input: fetchMarketPrice("Tritanium") → after 1.2s: "Tritanium current price: 4500 ISK" then "Value for 1000 units: 4500000 ISK"
// Input: fetchMarketPrice("InvalidItem") → after 1.2s: "Market request failed: Item not found in database"
