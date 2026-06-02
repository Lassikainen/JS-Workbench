//Graphs are data structures that consist of nodes (or vertices) connected by edges. They can be used to represent various real-world systems, such as social networks, transportation routes, or in this case, a jump network between star systems in EVE Online.
//Graphs can be directed or undirected, weighted or unweighted, and may contain cycles. They are often represented using adjacency lists or adjacency matrices.
//graphs are different from trees in one important way: graphs can have cycles and multiple paths between nodes, while trees are acyclic and have a unique path between any two nodes. This means that when traversing a graph, we need to keep track of visited nodes to avoid infinite loops, which is not a concern with trees.

//Breadth-first search (BFS) is a graph traversal algorithm that explores all neighbors of a node before moving on to the neighbors' neighbors. It uses a queue data structure to keep track of the nodes to visit next.
//BFS is particularly useful for finding the shortest path in an unweighted graph, as it guarantees that the first time we reach the target node, we have found the shortest path to it. In contrast, depth-first search (DFS) may explore deeper paths first and does not guarantee the shortest path unless we explore all paths.
//In this example, we use BFS to find the shortest number of jumps between two star systems in a jump network represented as an adjacency list. We maintain a queue of nodes to visit and a set of visited nodes to avoid cycles. When we reach the target system, we return the number of jumps taken. If we exhaust the queue without finding the target, we return -1 to indicate no path exists.

// Graph as adjacency list
const mapData = {
  Jita: ["Perimeter", "Motsu"],
  Perimeter: ["Jita", "Kisogo"],
  Motsu: ["Jita"],
  Kisogo: ["Perimeter"],
};

// BFS for shortest path in jumps. We can use BFS here because each jump has the same cost. If they didn't, we would need to use a different algorithm like Dijkstra's or A*.
function shortestJumpPath(start, target, jumpNetwork) {
  const queue = [[start, 0]]; // [system, jumps]
  const visited = new Set([start]); // track visited to avoid cycles

  //We use a queue to ensure we explore all neighbors at the current jump level before moving to the next level. This way, when we first reach the target, we know it is the shortest path in terms of jumps. The visited set prevents us from re-exploring systems we've already seen, which is crucial in graphs that may contain cycles.
  //We loop as long as we have systems to explore in the queue.
  while (queue.length > 0) {
    const [current, jumps] = queue.shift(); // dequeue (FIFO)

    if (current === target) return jumps;

    // Add all unvisited neighbors to the queue with incremented jump count
    for (const neighbor of jumpNetwork[current] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, jumps + 1]); // enqueue with +1 jump
      }
    }
  }
  return -1; // no path
}

// Test inputs and outputs
// Input: shortestJumpPath("Jita", "Kisogo", mapData) → Output: 2 (Jita → Perimeter → Kisogo)
