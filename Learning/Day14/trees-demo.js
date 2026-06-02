//Trees are a fundamental data structure in computer science, consisting of nodes connected by edges.
// Important: Each node can have multiple children but only one parent, except for the root node which has no parent.
// Trees are used to represent hierarchical data, such as file systems, organizational charts, and skill trees in games.
// They allow for efficient searching, insertion, and deletion of data.

// In this example, we define a SkillNode class to represent each node in the skill tree. Each node has a name, training time, and an array of child nodes (prerequisites).

//We could add the parent reference to make it a full tree structure, but for this demo we will focus on the child nodes and recursive traversal. We would simply add the parent to the constructor and set it when adding children, but it is not necessary for the traversal we are demonstrating here.
class SkillNode {
  constructor(name, minutes) {
    this.name = name;
    this.minutes = minutes;
    this.children = []; // array of SkillNode objects
  }
}

// Build a small tree
const root = new SkillNode("Gunnery V", 120);
const child1 = new SkillNode("Gunnery IV", 60);
root.children.push(child1);
child1.children.push(new SkillNode("Gunnery III", 30));

// Recursive pre-order traversal
function traversePreOrder(node) {
  if (!node) return;
  console.log(`${node.name} - ${node.minutes} min`); // visit root
  for (const child of node.children) {
    //This is pre-order because we visit the node before its children. If we wanted post-order, we would move the console.log after the loop. In-order is not typically defined for general trees, but for binary trees it would involve visiting the left child, then the node, then the right child.
    traversePreOrder(child); // recurse on children
  }
}

//Recursive post-order traversal
function traversePostOrder(node) {
  if (!node) return;
  for (const child of node.children) {
    //This is post-order because we visit the node after its children. In pre-order, we would log the node before the loop. In-order is not typically defined for general trees, but for binary trees it would involve visiting the left child, then the node, then the right child.
    traversePostOrder(child);
  }
  console.log(`${node.name} - ${node.minutes} min`); // visit root after children
}

//Recursive in-order traversal (not standard for general trees, but we can define it as visiting the first child, then the node, then the rest of the children)
function traverseInOrder(node) {
  if (!node) return;
  if (node.children.length > 0) {
    traverseInOrder(node.children[0]); // visit first child
  }
  console.log(`${node.name} - ${node.minutes} min`); // visit node
  for (let i = 1; i < node.children.length; i++) {
    traverseInOrder(node.children[i]); // visit remaining children
  }
}

// Test inputs and outputs
// Input: traversePreOrder(root) → Output: Gunnery V, then Gunnery IV, then Gunnery III
// Input: traversePostOrder(root) → Output: Gunnery III, then Gunnery IV, then Gunnery V
