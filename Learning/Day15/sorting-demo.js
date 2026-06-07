//Advanced sorting (quicksort, mergesort) and binary search are frequently combined with DP for preprocessing or fast lookups.

// Example: Given a list of market prices and a budget, find the closest price under the budget using sorting and binary search.

// Binary search for closest market price under budget
function findClosestPriceBelow(prices, budget) {
  //Sort prices in ascending order to enable binary search. This step is crucial for the binary search algorithm to function correctly, as it relies on the data being sorted to efficiently narrow down the search space.
  prices.sort((a, b) => a - b); // O(n log n) preprocessing

  let left = 0;
  let right = prices.length - 1;
  let result = -1;

  // Binary search to find the largest price that is <= budget. The binary search algorithm works by repeatedly dividing the search interval in half.

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (prices[mid] <= budget) {
      result = prices[mid]; // valid candidate
      left = mid + 1; // look for even larger (still <= budget)
    } else {
      right = mid - 1;
    }
  }
  return result;
}

// Test inputs and outputs
// Input: prices = [1200, 4500, 9800, 15000], budget = 10000 → Output: 9800
