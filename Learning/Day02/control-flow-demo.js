// Control flow for tactical decision making
const currentShield = 450; // Current shield HP
const enemyDistance = 12000; // Distance in meters (12km)
const isAligned = true;

// Single if - most basic decision
if (currentShield < 200) {
  console.log("Shield critical - initiating emergency warp");
}

// if + else if + else chain - multiple precise conditions
if (enemyDistance < 5000 && currentShield > 800) {
  console.log("Engage target - within optimal range");
} else if (enemyDistance < 15000 && currentShield <= 800 && !isAligned) {
  console.log("Aligning for warp - enemy too close for comfort");
} else {
  console.log("Maintaining safe distance - no action required");
}

// Test inputs and outputs
// Input: shield=450, distance=12000, aligned=false → Output: "Aligning for warp..."
// Input: shield=1200, distance=3000, aligned=true → Output: "Engage target..."

// Ternary: condition ? valueIfTrue : valueIfFalse
const shouldAlign =
  currentShield > 300 ? "Stay where we are - shields are strong" : "Shield too low - prepare to warp";

console.log(shouldAlign); // "Stay where we are - shields are strong"
