// The sliding window technique is an efficient algorithmic approach for solving problems that involve finding contiguous subarrays or substrings that satisfy certain conditions.
// It uses two pointers (or indices) to represent a "window" that can expand and contract as needed while traversing the data structure, typically an array or string.
// This method is particularly useful for problems like finding the longest substring without repeating characters, the maximum sum of a subarray of a given size, or in this case, the longest subarray of cargo items that can fit within a mass limit.
// By maintaining a running total and adjusting the window size dynamically, we can achieve an optimal time complexity of O(n) for many problems that would otherwise require O(n^2) with nested loops.
//Note: This technique is most effective when the data structure is linear and we are looking for contiguous segments. It may not be suitable for problems that require non-contiguous combinations or more complex data structures without additional modifications.

// Sliding window: find longest subarray (cargo) where total mass <= capacity
function maxCargoWindow(cargo, maxMass) {
  let left = 0;
  let currentMass = 0;
  let maxLength = 0;
  let bestWindow = [];

  for (let right = 0; right < cargo.length; right++) {
    // expand right pointer
    currentMass += cargo[right].mass; // add new item

    // shrink from left while condition violated
    while (currentMass > maxMass && left <= right) {
      currentMass -= cargo[left].mass;
      left++;
    }

    // update max if current window is better
    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
      bestWindow = cargo.slice(left, right + 1);
    }
  }

  return { length: maxLength, items: bestWindow };
}

// Test inputs and outputs
// Input: cargo = [{item:"Trit",mass:1}, {item:"Plex",mass:10}, {item:"Mex",mass:3}], maxMass=12
// Window expands to full array then shrinks → returns length 2 with optimal items (O(n) total)
