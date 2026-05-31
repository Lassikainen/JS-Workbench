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

async function fetchMultiplePrices(itemList) {
  try {
    // Promise.all runs all requests in parallel. It takes an array of Promises and returns a new Promise that resolves when all input Promises have resolved, or rejects if any input Promise rejects.
    const prices = await Promise.all(itemList.map((item) => fetchMarketPrice(item)));

    // prices is now an array of resolved values in the same order
    const marketData = itemList.map((item, index) => ({
      item: item,
      price: prices[index],
    }));

    console.table(marketData);
    return marketData;
  } catch (error) {
    console.error("One or more market requests failed:", error.message);
  }
}

// Usage
fetchMultiplePrices(["Tritanium", "Plex", "Mexallon"]);

//Promise.race runs all requests in parallel but returns as soon as the first Promise resolves or rejects. This is useful when you want to proceed with the first available result and don't care about the others, or when you want to implement a timeout mechanism for asynchronous operations.
async function fetchWithRace(itemList) {
  try {
    // Promise
    const firstPrice = await Promise.race(itemList.map((item) => fetchMarketPrice(item)));
    console.log("First price received:", firstPrice);
  } catch (error) {
    console.error("Market request failed:", error.message);
  } finally {
    console.log("Race query complete");
  }
}

fetchWithRace(["Tritanium", "InvalidItem", "Plex"]);

async function fetchWithAllSettled(itemList) {
  // Promise.allSettled runs all requests in parallel and waits for all of them to complete, regardless of whether they resolve or reject. It returns an array of objects describing the outcome of each Promise (fulfilled or rejected), allowing you to handle successes and failures individually without short-circuiting.
  const results = await Promise.allSettled(itemList.map((item) => fetchMarketPrice(item)));
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Price for ${itemList[index]}: ${result.value} ISK`);
    } else {
      console.error(`Failed to fetch price for ${itemList[index]}: ${result.reason.message}`);
    }
  });
}

fetchWithAllSettled(["Tritanium", "InvalidItem", "Plex"]);
