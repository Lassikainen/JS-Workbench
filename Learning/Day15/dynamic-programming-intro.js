// Dynamic Programming Introduction
//Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems and storing the results of those subproblems to avoid redundant work. It is often used to optimize recursive algorithms that have overlapping subproblems.
//The key idea behind dynamic programming is to use a table (often an array or a hash map) to store the results of subproblems. When the same subproblem is encountered again, we can simply look up the result in the table instead of recomputing it. This can significantly reduce the time complexity of algorithms that would otherwise have exponential growth due to repeated calculations.

//The below function is a classic example of the Knapsack problem, where we want to maximize the value of items we can carry given a weight capacity. The naive recursive solution explores all combinations of items, leading to exponential time complexity. However, by using dynamic programming, we can store the results of subproblems (e.g., the maximum value for a given capacity and index) in a table, allowing us to solve larger instances efficiently without redundant calculations.

//First we try with recursion, which is straightforward but inefficient due to repeated calculations of the same subproblems.
function maxCargoValueAndItems(items, capacity, index = 0) {
  // base case: no items left or no capacity
  if (index === items.length || capacity === 0) return [0, []];

  // option 1: skip current item
  const [skipValue, skipItems] = maxCargoValueAndItems(items, capacity, index + 1);

  // option 2: take current item (if it fits)
  let takeValue = -Infinity;
  let takeItems = [];
  if (items[index].mass <= capacity) {
    const [subValue, subItems] = maxCargoValueAndItems(items, capacity - items[index].mass, index + 1);
    takeValue = items[index].value + subValue;
    takeItems = [items[index], ...subItems];
  }

  // choose better of take vs skip
  if (takeValue > skipValue) {
    return [takeValue, takeItems];
  }
  return [skipValue, skipItems];
}

const items = [
  { mass: 3, value: 20 },
  { mass: 4, value: 45 },
  { mass: 5, value: 60 },
  { mass: 6, value: 75 },
  { mass: 7, value: 80 },
  { mass: 8, value: 100 },
];

let result = maxCargoValueAndItems(items, 22);
console.log(result[0], JSON.stringify(result[1])); // Output: 260, [{"mass":4,"value":45},{"mass":5,"value":60},{"mass":6,"value":75},{"mass":7,"value":80}]

result = maxCargoValueAndItems(items, 10);
console.log(result[0], JSON.stringify(result[1])); // Output: 120, [{"mass":4,"value":45},{"mass":6,"value":75}]

//Now we can optimize this with dynamic programming by storing the results of subproblems in a table. This way, we avoid redundant calculations and can solve larger instances efficiently.
function maxCargoValueAndItemsDP(items, capacity) {
  const numItems = items.length;
  // dp[i][w] will hold the maximum value for the first i items and capacity w. itemIncluded[i][w] will track whether we included item i in the optimal solution for capacity w.

  //Array.from is used to create a 2D array (table) for dynamic programming. The outer array has numItems + 1 rows (to account for the case of 0 items), and each inner array has capacity + 1 columns (to account for capacities from 0 to the given capacity). We initialize all values to 0 for dp and false for itemIncluded.
  const dp = Array.from({ length: numItems + 1 }, () => Array(capacity + 1).fill(0));
  const itemIncluded = Array.from({ length: numItems + 1 }, () => Array(capacity + 1).fill(false));

  // Build the dp table iteratively
  // We iterate through each item and each capacity to fill the dp table. For each item, we have two options: skip it or take it (if it fits). We compare the value of both options and store the maximum in dp[i][w]. If we take the item, we also mark it in the itemIncluded table for later reconstruction of the solution.
  for (let i = 1; i <= numItems; i++) {
    //w represents the current capacity we are trying to fill, and i represents the index of the item we are considering (1-based index for easier table management). We start from 1 because dp[0][w] represents the case of having no items, which is already initialized to 0.
    for (let w = 0; w <= capacity; w++) {
      // option 1: skip current item. This means we take the maximum value from the previous row (i - 1) for the same capacity w, which represents not including the current item.
      dp[i][w] = dp[i - 1][w];
      // option 2: take current item (if it fits)
      if (items[i - 1].mass <= w) {
        //We calculate the value if we take the current item, which is the value of the current item plus the maximum value we can get with the remaining capacity (w - items[i - 1].mass) from the previous row (i - 1). This represents including the current item and then looking up the best solution for the remaining capacity.
        const valueWithItem = items[i - 1].value + dp[i - 1][w - items[i - 1].mass];
        //If this is better than the value we currently have stored in dp[i][w], we update dp[i][w] to this new value and mark that we included this item in the itemIncluded table
        if (valueWithItem > dp[i][w]) {
          dp[i][w] = valueWithItem;
          itemIncluded[i][w] = true; // mark that we included this item
        }
      }
    }
  }

  // Reconstruct the solution by backtracking through the itemIncluded table
  const selectedItems = [];
  let i = numItems;
  let w = capacity;
  while (i > 0 && w > 0) {
    if (itemIncluded[i][w]) {
      selectedItems.push(items[i - 1]);
      w -= items[i - 1].mass;
    }
    i--;
  }
  return [dp[numItems][capacity], selectedItems];
}

result = maxCargoValueAndItemsDP(items, 22);
console.log(result[0], JSON.stringify(result[1])); // Output: 260, [{"mass":4,"value":45},{"mass":5,"value":60},{"mass":6,"value":75},{"mass":7,"value":80}]

result = maxCargoValueAndItemsDP(items, 10);
console.log(result[0], JSON.stringify(result[1])); // Output: 120, [{"mass":4,"value":45},{"mass":6,"value":75}]
