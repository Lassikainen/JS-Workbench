console.log(calculateWarpSpeed(10000, 100)); // Input: 20000m at 100m/s → Output: 100 seconds

// 1. Function Declaration - hoisted, can be called before it appears in code - good for main logic at top and helpers below. Explains why we are able to call calculateWarpSpeed before it's defined.
function calculateWarpSpeed(distance, maxSpeed) {
  // Parameters: distance and maxSpeed are passed in when calling
  const timeInSeconds = distance / maxSpeed;
  return timeInSeconds; // return sends value back to caller
}

// 2. Function Expression (assigned to variable) - NOT hoisted. If we tried, it would give an error of "calculateCapacitorDrain is not defined" because the variable exists but is not yet assigned to the function at the time of the call.
const calculateCapacitorDrain = function (baseDrain, cycles) {
  return baseDrain * cycles;
};

// 3. Arrow Function (modern, concise - preferred in this course when simple)
const isSafeToWarp = (shield) => shield > 500; // one-line return

// Usage examples with test inputs/outputs
console.log(calculateWarpSpeed(500000, 2500)); // Input: 500km at 2.5km/s → Output: 200 seconds
console.log(calculateCapacitorDrain(120, 5)); // Input: 120 drain per cycle, 5 cycles → Output: 600
console.log(isSafeToWarp(620)); // true
console.log(isSafeToWarp(300)); // false

// ---- DEFAULT PARAMETERS ----

// Default parameters - safety net if caller forgets to pass a value
function fireWeapon(weaponType, damage = 120) {
  // damage defaults to 120
  console.log(`${weaponType} fired for ${damage} damage`);
}

// Rest parameter (...) collects any extra arguments into an array
function logCombatEvent(pilot, ...events) {
  console.log(`Pilot ${pilot} - Events:`, events);
}

// Test calls
fireWeapon("Laser"); // Uses default 120 damage
fireWeapon("Railgun", 450); // Overrides default
logCombatEvent("Caiphus", "Hit", "Miss", "Warp scramble"); // events array = ["Hit", "Miss", "Warp scramble"]
