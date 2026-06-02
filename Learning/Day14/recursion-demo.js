//Recursion is a programming technique where a function calls itself to solve a problem. It typically involves a base case that can be solved directly and a recursive case that breaks the problem into smaller subproblems.
// In this example, we have a skill tree where each skill has a training time and may have prerequisites.
// The calculateTrainingTime function uses recursion to sum the training time of a skill and all of its prerequisites, effectively traversing the skill tree. This is a common pattern for problems that involve hierarchical data structures, such as trees or graphs.

// Recursive function to calculate total training time for a skill tree
function calculateTrainingTime(skill) {
  // We should always start with our base case to avoid infinite recursion.
  //To identify the base case, we check whether we would need to make a recursive call from this point. If not, we can return a simple value immediately. In this case, if the skill has no prerequisites, we can return its training time directly without further recursion.
  if (!skill.prerequisites || skill.prerequisites.length === 0) {
    return skill.trainingMinutes; // just train this skill
  }

  // RECURSIVE CASE - sum this skill + all prerequisites
  let totalTime = skill.trainingMinutes;

  for (const prereq of skill.prerequisites) {
    totalTime += calculateTrainingTime(prereq); // recursive call on smaller sub-tree
  }

  return totalTime;
}

// Example skill tree node
const gunnerySkill = {
  name: "Gunnery V",
  trainingMinutes: 120,
  prerequisites: [
    {
      name: "Gunnery IV",
      trainingMinutes: 60,
      prerequisites: [{ name: "Gunnery III", trainingMinutes: 30, prerequisites: [] }],
    },
  ],
};

// Test inputs and outputs
// Input: calculateTrainingTime(gunnerySkill) → Output: 210 (120 + 60 + 30)
// Each recursive call solves a smaller tree until base case returns immediately
