// for loop: perfect for known count (e.g. checking 8 high slots)
for (let slot = 1; slot <= 8; slot++) {
  // start, condition, increment
  console.log(`Checking high slot ${slot} for module...`); //Checking high slot 1 for module...
}

// Test input/output
// Input: slots 1 to 8 → Output: 8 console lines, one for each slot

// while loop: keep firing until capacitor is too low
let capacitor = 800;
let shotsFired = 0;

while (capacitor > 150) {
  // continue while condition is true
  console.log(`Firing laser - capacitor left: ${capacitor}`);
  capacitor -= 120; // each shot drains 120
  shotsFired++;
}

console.log(`Combat complete. Shots fired: ${shotsFired}`);

// Test: capacitor starts at 800 → fires 5 times (800→680→560→440→320→200), then stops

//For-of loop: ideal for iterating over arrays (e.g. activating modules)
const modules = ["Railgun I", "Missile Launcher", "Drone Bay"];
for (const module of modules) {
  // loops through each item directly
  console.log(`Activating: ${module}`); //Activating: Railgun I
}
