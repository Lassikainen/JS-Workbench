// Mock API simulation - returns a Promise (exactly what fetch() does)

//function copied from promise-demo.js
function fetchMarketPrice(itemName) {
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

// async function is a special type of function that allows you to write asynchronous code in a more synchronous-looking manner. It uses the async keyword and can contain await expressions.
//async functions always return a Promise. Returning a value takes on a special meaning: it will be wrapped in a resolved Promise. If you throw an error, it will be wrapped in a rejected Promise. This means that you can use async functions with .then() and .catch() just like any other Promise, making them versatile for handling asynchronous operations in JavaScript.
async function buyMarketItem(itemName, quantity) {
  try {
    // await pauses here until Promise resolves
    const price = await fetchMarketPrice(itemName);
    const totalCost = price * quantity;

    console.log(`Fetched ${itemName} price: ${price} ISK`);
    console.log(`Total cost for ${quantity}: ${totalCost} ISK`);

    // Simulate wallet check (another async operation)
    const walletBalance = await simulateWalletCheck();

    if (totalCost > walletBalance) {
      throw new Error("Insufficient ISK - transaction aborted");
    }

    return { success: true, item: itemName, cost: totalCost };
  } catch (error) {
    console.error("Transaction failed:", error.message);
    return { success: false, error: error.message };
  }
}

// Helper mock
function simulateWalletCheck() {
  return new Promise((resolve) => setTimeout(() => resolve(15000000), 800));
}

// Usage. We access the result of the async function using .then() since it returns a Promise.
buyMarketItem("Tritanium", 5000).then((result) => {
  console.log("Final result:", result);
});

// Test inputs and outputs
// Input: buyMarketItem("Tritanium", 5000) → after ~2s: success object with cost 22,500,000 ISK
// Input: buyMarketItem("InvalidItem", 1) → catch block runs
