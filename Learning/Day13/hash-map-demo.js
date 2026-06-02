//Hash maps (objects or Map) allow O(1) lookups by key, making them ideal for problems like two-sum where we want to check for complementary values efficiently.
// Hash maps are best suited for problems that require fast lookups, insertions, and deletions by key. They are not ideal for problems that require ordered data or range queries without additional structures (e.g., balanced trees).
//Examples are finding pairs of items that sum to a target, counting occurrences of elements, grouping by categories, and implementing caches or memoization.
// In this example, we use a Map to store seen CPU values and their corresponding module names as we iterate through the list of modules. This way, we can find a pair of modules that sum up to the target CPU in a single pass (O(n)) without needing to sort the array first.

// Hash map for O(n) two-sum (no sorting needed)
function findComplementaryModules(modules, targetCPU) {
  const seen = new Map(); // key = cpu, value = module name

  for (let i = 0; i < modules.length; i++) {
    // For each module, calculate the needed complementary CPU to reach the target
    const needed = targetCPU - modules[i].cpu;

    // Check if we've already seen a module with the needed CPU value
    if (seen.has(needed)) {
      // O(1) lookup
      return [seen.get(needed), modules[i].name];
    }

    seen.set(modules[i].cpu, modules[i].name); // store for future lookups
  }

  return null;
}

// Test inputs and outputs
// Input: modules = [{name:"Railgun",cpu:45}, {name:"Hardener",cpu:25}], targetCPU=70
// Map check finds 25 → needed 45 → returns ["Hardener","Railgun"] in single pass (O(n))
