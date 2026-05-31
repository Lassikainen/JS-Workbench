// File: modules-and-imports-demo.js  (the file that uses the utilities)

//The below code demonstrates different ways to import functions from a module in JavaScript. It shows how to import named exports, default exports, and how to import everything from a module. The code also includes examples of using the imported functions and renaming imports for better clarity or to avoid naming conflicts.

// 1. Import named exports - exact names required. If default export is also present it must be imported first (before the named exports).
import createShipLogger, { calculateWarpTime, formatISK } from "./shipUtils.js";

// 1b. Renaming on import (useful when names collide)
//import { calculateWarpTime as warpTime, formatISK, createShipLogger } from "./shipUtils.js";

// 2. Import default export - any name you like
//import createShipLoggerRenamed from "./shipUtils.js";

// 3. Import everything at once (rarely used in production)
//import * as ShipUtils from "./shipUtils.js";

// Usage
console.log(calculateWarpTime(5, 2.5)); // Test: 299195.74 seconds
console.log(formatISK(12500000)); // "12.5M ISK"

const caiphusLog = createShipLogger("Caiphus");
caiphusLog("warp"); // "Caiphus - Warps: 1"
