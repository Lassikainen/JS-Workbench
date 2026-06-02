//This demo explores time complexity in JavaScript, which is a way to describe how the runtime of an algorithm grows as the input size increases. We will look at two functions: one that finds the maximum hull strength from an array of ships (O(n)), and another that checks for duplicate modules in an array (O(n²)).
// The first function is efficient for large inputs, while the second can become very slow as the input size grows, demonstrating why understanding time complexity is important when writing code.

//Common examples of time complexity in Javascript:

// O(1) - constant time (best):
// Arrays: access by index (arr[5]), push/pop from end, shift/unshift from start (but O(n) for shift/unshift), length property,
// Objects: access by key (obj["key"]), set/delete by key, Map/Set operations
// Loops: single loop over fixed-size data (for i = 0; i < 10; i++) is O(1) because it does not grow with input size
// Functions: Math.max(a, b), array.length, object.hasOwnProperty("key")

//O(log n) - logarithmic time (good):
// Binary search in sorted arrays (divide and conquer)
// Balanced tree operations (insert/search/delete in O(log n))
// Some sorting algorithms (e.g., merge sort, quicksort average case)

// O(n) - linear time (acceptable for moderate n):
// Single loop through array (for i = 0; i < arr.length; i++)
// Array methods like forEach, map, filter (each iterates once over the array)
// Objects: iterating over all keys/values (for key in obj) is O(n) where n is number of keys

// O(n log n) - linearithmic time (common for efficient sorting):
// Efficient sorting algorithms (merge sort, quicksort average case)

// O(n²) - quadratic time (bad for large n):
// Nested loops (for i = 0; i < arr.length; i++) { for j = 0; j < arr.length; j++) }
// Some naive algorithms (e.g., bubble sort, selection sort)

// O(2^n) - exponential time (very bad for n > 20):
// Recursive algorithms that solve problems by branching into two or more subproblems (e.g., Fibonacci naive recursion)

// O(n) - single pass through array (good)
function findMaxHull(ships) {
  let maxHull = 0;
  for (let i = 0; i < ships.length; i++) {
    // one loop = O(n)
    if (ships[i].hull > maxHull) {
      maxHull = ships[i].hull;
    }
  }
  return maxHull;
}

// O(n²) - nested loops (avoid for large n)
function findDuplicateModules(modules) {
  for (let i = 0; i < modules.length; i++) {
    // outer loop
    for (let j = i + 1; j < modules.length; j++) {
      // inner loop
      if (modules[i] === modules[j]) {
        return modules[i];
      }
    }
  }
  return null;
}

// Test inputs and outputs
// Input: ships = [{hull:45000}, {hull:125000}, {hull:85000}] → Output: 125000 (O(n))
// Input: modules = ["Railgun", "Drone", "Railgun"] → Output: "Railgun" (but O(n²) - too slow for 10k items)
