//Memoization is a top-down approach to dynamic programming where we store the results of expensive function calls and return the cached result when the same inputs occur again. This is particularly useful for problems with overlapping subproblems, such as the knapsack problem.

//The below function is a memoized version of the recursive solution to the knapsack problem. It uses a Map to cache results of subproblems identified by a unique key (combination of index and remaining capacity). This way, when the same subproblem is encountered again, we can return the cached result instead of recomputing it, significantly improving performance for larger inputs.

function maxCargoValueMemo(items, capacity) {
  // Cache key = "index-capacity" to uniquely identify each subproblem
  const memo = new Map();

  function dp(index, remainingCapacity) {
    const key = `${index}-${remainingCapacity}`;

    // MEMOIZATION CHECK - return cached result if exists
    if (memo.has(key)) return memo.get(key);

    // BASE CASE - no items left or no capacity
    if (index === items.length || remainingCapacity === 0) {
      return [0, []]; // No value can be added if we have no items or no capacity
    }

    // RECURSIVE CASE - explore both options: skip or take the current item
    //skip the current item and move to the next one, keeping the remaining capacity the same. This represents the case where we decide not to include the current item in our cargo.
    const skipResult = dp(index + 1, remainingCapacity);
    const skipValue = skipResult[0]; // Value if we skip the current item
    const skipItems = skipResult[1] || []; // Items included if we skip the current item

    //take the current item (if it fits) and add its value to the result of the recursive call with the remaining capacity reduced by the mass of the current item. This represents the case where we decide to include the current item in our cargo.
    let takeValue = 0;
    if (items[index].mass <= remainingCapacity) {
      const takeResult = dp(index + 1, remainingCapacity - items[index].mass);
      takeValue = items[index].value + takeResult[0];
      takeItems = [items[index], ...takeResult[1]];
    }

    if (takeValue > skipValue) {
      // If we take the item, we also want to store the items included in the optimal solution. We can modify our dp function to return both the maximum value and the list of items included in that solution.
      const [subValue, subItems] = dp(index + 1, remainingCapacity - items[index].mass);
      takeValue = items[index].value + subValue;
      memo.set(key, [takeValue, [items[index], ...subItems]]);
    } else {
      memo.set(key, [skipValue, [...skipItems]]);
    }
    result = memo.get(key);
    return result;
  }

  return dp(0, capacity);
}
const items = [
  { mass: 3, value: 20 },
  { mass: 4, value: 45 },
  { mass: 5, value: 60 },
  { mass: 6, value: 75 },
  { mass: 7, value: 80 },
  { mass: 8, value: 100 },
];
console.log(maxCargoValueMemo(items, 22)); // Output: 260
console.log(maxCargoValueMemo(items, 10)); // Output: 260

// Test inputs and outputs
// Input: items = [{mass:3,value:40}, {mass:4,value:50}, {mass:5,value:60}], capacity=10
// Output: 110 (items 1+3 or 2+3 depending on values) - computed in O(n*capacity) time instead of exponential
