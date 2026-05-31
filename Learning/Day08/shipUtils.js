// File: shipUtils.js   (this file exports utilities)
export const calculateWarpTime = (distanceAU, speedKms) => {
  // Returns time in seconds - pure utility function
  return (distanceAU * 149597870) / (speedKms * 1000);
};

export const formatISK = (amount) => {
  // Returns human-readable ISK string
  return `${(amount / 1000000).toFixed(1)}M ISK`;
};

// Default export - only ONE per file
export default function createShipLogger(pilotName) {
  let warpCount = 0;
  return (event) => {
    if (event === "warp") warpCount++;
    console.log(`${pilotName} - Warps: ${warpCount}`);
  };
}
