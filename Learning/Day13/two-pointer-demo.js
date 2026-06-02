//The Two pointer technique is a powerful algorithmic approach that uses two indices to traverse a data structure, often an array, from both ends towards the center.
// This method is particularly effective for problems that involve finding pairs or triplets of elements that satisfy certain conditions, such as summing to a target value.
// By sorting the data first, we can efficiently move the pointers based on whether the current sum is less than, equal to, or greater than the target, achieving an optimal time complexity of O(n) after an initial O(n log n) sort.
// Generally speaking, data must be sorted for two-pointer to work, but it can be adapted for certain problems on unsorted data with additional logic (e.g., using a hash set to track seen values).

// Two-pointer to find two modules whose CPU usage sums to target
//This function takes an array of module objects (each with a name and CPU usage) and a target CPU value. It first sorts the modules by their CPU usage, then uses two pointers (left and right) to find a pair of modules that sum to the target CPU. If such a pair is found, it returns their names; otherwise, it returns null. The sorting step ensures that we can efficiently move the pointers based on the current sum compared to the target.
function findOptimalFitting(modules, targetCPU) {
  // Step 1: sort first (O(n log n)) - required for two-pointer on unsorted data
  modules.sort((a, b) => a.cpu - b.cpu);

  let left = 0;
  let right = modules.length - 1;

  while (left < right) {
    // pointers move toward center
    const currentSum = modules[left].cpu + modules[right].cpu;

    if (currentSum === targetCPU) {
      return [modules[left].name, modules[right].name];
    } else if (currentSum < targetCPU) {
      left++; // need larger sum → move left pointer right
    } else {
      right--; // sum too big → move right pointer left
    }
  }

  return null; // no valid pair
}

// Test inputs and outputs
// Input: modules = [{name:"Railgun",cpu:45}, {name:"Hardener",cpu:25}, {name:"Drone",cpu:30}], targetCPU=70
// After sort: left=0 (25), right=2 (45) → sum=70 → returns ["Hardener","Railgun"] (O(n) after sort)
