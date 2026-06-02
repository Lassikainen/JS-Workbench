// Depth first search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking.
// It uses a stack data structure, either implicitly through recursion or explicitly with an iterative approach.
// DFS is commonly used for tasks such as pathfinding, topological sorting, and detecting cycles.
// Here, we implement DFS to confirm whether two faraway star systems are connected in a jump network.

// Graph as adjacency list
const jumpNetwork = {
  Jita: ["Perimeter", "Motsu", "Tash-Murkon Prime", "Hek"],
  Perimeter: ["Jita", "Kisogo"],
  Motsu: ["Jita"],
  Kisogo: ["Perimeter"],
  "Tash-Murkon Prime": ["Jita", "Aunenen"],
  Hek: ["Jita", "Amarr", "Rens"],
  Amarr: ["Hek", "Dodixie"],
  Rens: ["Hek"],
  Dodixie: ["Amarr", "Hedion"],
  Hedion: ["Dodixie"],
  "Sinq Laison": ["Molden Heath"],
  "Molden Heath": ["Sinq Laison"],
  Aunenen: ["Tash-Murkon Prime", "Tenerifis"],
  Tenerifis: ["Aunenen", "Uedama"],
  Uedama: ["Tenerifis", "Poitot"],
  Poitot: ["Uedama", "Halaima"],
  Halaima: ["Poitot", "Kador"],
  Kador: ["Halaima", "Niarja"],
  Niarja: ["Kador", "Oursulaert"],
  Oursulaert: ["Niarja"],
};

// Here, we use a stack to keep track of the nodes we need to visit next.
// We start with the initial node and repeatedly visit the last node added to the stack (LIFO order). If we reach the target node, we return true. If we encounter a node we've already visited, we skip it to avoid cycles.
// If we exhaust the stack without finding the target, we return false, indicating that there is no path between the two systems in the jump network.
function depthFirstSearch(graph, start, target) {
  const stack = [start];
  const visited = new Set();

  while (stack.length > 0) {
    const current = stack.pop();

    if (current === target) {
      return true;
    }

    if (visited.has(current)) {
      continue;
    }

    visited.add(current);

    const neighbors = graph[current] || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        //Push unvisited neighbors onto the stack to explore them later. This is what allows us to go deep into the graph before backtracking.
        stack.push(neighbor);
      }
    }
  }

  return false;
}

//Here is an example of recursive DFS implementation. The logic is similar to the iterative version, but we use the call stack to manage our traversal instead of an explicit stack data structure.
//  We also pass a visited set to keep track of which nodes we've already seen to avoid infinite recursion in graphs with cycles. The base case is when the current node is the target, in which case we return true. If we exhaust all neighbors without finding the target, we return false.

//Note the default parameter for visited is a new Set(), allowing us to trigger the recursion with just the graph, current node, and target. Each recursive call will share the same visited set, ensuring we track all visited nodes across the entire traversal.
function recursiveDFS(graph, current, target, visited = new Set()) {
  if (current === target) {
    return true;
  }

  visited.add(current);

  for (const neighbor of graph[current] || []) {
    if (!visited.has(neighbor)) {
      if (recursiveDFS(graph, neighbor, target, visited)) {
        return true;
      }
    }
  }

  return false;
}

// Example usage
const origin = "Jita";
const destination = "Niarja";

console.log(
  `Iterative DFS: Can travel from ${origin} to ${destination}?`,
  depthFirstSearch(jumpNetwork, origin, destination),
);
console.log(
  `Recursive DFS: Can travel from ${origin} to ${destination}?`,
  recursiveDFS(jumpNetwork, origin, destination),
);

// A pair that is not directly connected in the network but still reachable
const farSystemA = "Motsu";
const farSystemB = "Oursulaert";
console.log(
  `Iterative DFS: Can travel from ${farSystemA} to ${farSystemB}?`,
  depthFirstSearch(jumpNetwork, farSystemA, farSystemB),
);
console.log(
  `Recursive DFS: Can travel from ${farSystemA} to ${farSystemB}?`,
  recursiveDFS(jumpNetwork, farSystemA, farSystemB),
);
