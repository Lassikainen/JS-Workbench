// This is a demonstration of how to use closures to create private variables and a module-like structure in JavaScript.

//This function creates a "module" for managing a skill training queue. It uses closures to keep the internal state (the queue, current index, and total time) private, while exposing a public API for interacting with it. This pattern is very common in JavaScript for creating encapsulated functionality without polluting the global namespace.
const createSkillQueue = function () {
  // Private variables - completely inaccessible from outside
  let queue = [];
  let currentSkillIndex = 0;
  let totalTrainingTime = 0;

  // Public API - each method is a closure over the private variables
  return {
    addSkill: function (skillName, trainingMinutes) {
      queue.push({ name: skillName, time: trainingMinutes });
      totalTrainingTime += trainingMinutes;
      console.log(`Added ${skillName} to queue. Total training time: ${totalTrainingTime} minutes`);
    },

    trainNext: function () {
      if (currentSkillIndex >= queue.length) {
        console.log("Skill queue complete.");
        return;
      }
      const current = queue[currentSkillIndex];
      console.log(`Training ${current.name}... (${current.time} minutes remaining)`);
      currentSkillIndex++;
      // Private state updated safely
    },

    getQueueStatus: function () {
      return {
        remainingSkills: queue.length - currentSkillIndex,
        totalTimeLeft:
          totalTrainingTime - queue.slice(0, currentSkillIndex).reduce((sum, s) => sum + s.time, 0),
      };
    },
  };
};

// Usage - this is how you will use modules in real projects
const caiphusQueue = createSkillQueue();

caiphusQueue.addSkill("Gunnery", 45);
caiphusQueue.addSkill("Missile Launcher Operation", 120);
caiphusQueue.trainNext(); // "Training Gunnery..."
caiphusQueue.trainNext(); // "Training Missile Launcher Operation..."

console.log(caiphusQueue.getQueueStatus()); // { remainingSkills: 0, totalTimeLeft: 0 }

// Attempting to access private data directly fails
// console.log(caiphusQueue.queue);          // undefined - private!
