// Outer function creates the closure environment.
// The inner function is the closure that retains access to the outer variables.

//Best practice: In real code, you would typically use closures for specific purposes like data encapsulation or event handling.

function createShipLogger(pilotName) {
  // Variables in the lexical environment that will be "closed over"
  let warpCount = 0;
  let totalDamageTaken = 0;

  // Inner function is the closure - it remembers pilotName, warpCount, totalDamageTaken
  return function logEvent(eventType, value = null) {
    if (eventType === "warp") {
      warpCount++; // Modifying the outer variable
      console.log(`${pilotName} completed warp #${warpCount}`);
    } else if (eventType === "damage") {
      totalDamageTaken += value; // Modifying the outer variable
      console.log(`${pilotName} took ${value} damage. Total: ${totalDamageTaken}`);
    }
    // The inner function can access and modify the outer variables forever
  };
}

// Create a closure instance
const caiphusLogger = createShipLogger("Caiphus");

// The outer function has finished, yet the inner function still has access
caiphusLogger("warp"); // "Caiphus completed warp #1"
caiphusLogger("damage", 8500); // "Caiphus took 8500 damage. Total: 8500"
caiphusLogger("warp"); // "Caiphus completed warp #2"

// Test inputs and outputs
// Input: createShipLogger("Caiphus") then two "warp" calls → Output: warp #1 then warp #2
// The variables warpCount and totalDamageTaken survive because of the closure
