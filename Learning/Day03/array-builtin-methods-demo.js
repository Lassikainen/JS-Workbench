// ---- MAP ----
const prices = [450000, 1200000, 850000];

// .map() calls the function for every element and returns new array
const iskInMillions = prices.map((price) => {
  return price / 1000000; // transform each price
});

console.log(iskInMillions); // [0.45, 1.2, 0.85]

// Test: input prices → output array of millions

// ---- FILTER ----
const marketItems = [
  { name: "Tritanium", price: 4500, volume: 1000000 },
  { name: "Plex", price: 4800000, volume: 100 },
  { name: "Isogen", price: 12000, volume: 500000 },
  { name: "Mexallon", price: 85000, volume: 200000 },
];

const affordable = marketItems.filter((item) => item.price < 1000000);
// Test: returns only items with price under 1 million
console.log(affordable); // [{ name: "Tritanium", price: 4500, volume: 1000000 }, { name: "Isogen", price: 12000, volume: 500000 }, { name: "Mexallon", price: 85000, volume: 200000 }]

// ---- REDUCE ----

const totalValue = marketItems.reduce((sum, item) => {
  return sum + item.price * item.volume; // accumulate total value
}, 0); // start with 0

console.log("Total market value:", totalValue); // 4500*1,000,000 + 4,800,000*100 = 4,950,000,000

// ---- FOR EACH ----

marketItems.forEach((item) => {
  console.log(`${item.name}: $${item.price.toLocaleString()}`); // e.g. Tritanium: $4,500
});

// ---- FIND ----

const isogen = marketItems.find((item) => item.name === "Isogen"); // returns the first item that matches condition
console.log(isogen); // { name: "Isogen", price: 12000, volume: 500000 }

// ---- SORT ----
//REMEMBER: sort() mutates the original array, so if we want to keep the original order, we should make a copy first
const sortedByPrice = [...marketItems].sort((a, b) => a.price - b.price); // sorts by price ascending
console.log("Sorted by price:", sortedByPrice);

// ---- SLICE ----

const topTwo = marketItems.slice(0, 2); // gets first 2 items (index 0 and 1)
console.log("Top two items:", topTwo); // [{ name: "Tritanium", price: 4500, volume: 1000000 }, { name: "Plex", price: 4800000, volume: 100 }]

// ---- CONCAT ----

const moreItems = [
  { name: "Nocxium", price: 300000, volume: 150000 },
  { name: "Zydrine", price: 500000, volume: 80000 },
];

const allItems = marketItems.concat(moreItems); // combines two arrays
console.log("All market items:", allItems); // array of 6 items

// ---- JOIN ----

const itemNames = marketItems.map((item) => item.name).join(", "); // get names and join into string
console.log("Market items:", itemNames); // "Tritanium, Plex, Isogen, Mexallon"

// ---- INCLUDES ----

//We have two ways to check if an item is in the array: includes() for primitive values, and some() for objects
const hasPlex = marketItems.some((item) => item.name === "Plex"); // checks if any item is named "Plex"
console.log("Market has Plex?", hasPlex); // true

const ranges = [100, 200, 300, 400];
const has200 = ranges.includes(200); // checks if 200 is in the array
console.log("Ranges include 200?", has200); // true

// ---- REVERSE ----

const reversedItems = [...marketItems].reverse(); // reverse order (copy first to avoid mutating original)
console.log("Reversed market items:", reversedItems); // array in reverse order

// ---- SPLICE ----

const splicedItems = [...marketItems]; // copy to avoid mutating original
splicedItems.splice(1, 2); // removes 2 items starting from index 1 (Plex and Isogen)
console.log("After splicing:", splicedItems); // [{ name: "Tritanium", price: 4500, volume: 1000000 }, { name: "Mexallon", price: 85000, volume: 200000 }]

// ---- FLAT ----

const nestedArrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flatArray = nestedArrays.flat(); // flattens one level
console.log("Flat array:", flatArray); // [1, 2, 3, 4, 5, 6]

// ---- SPLIT ----
const itemString = "Tritanium,Plex,Isogen,Mexallon";
const itemArray = itemString.split(","); // splits string into array by comma
console.log("Item array:", itemArray); // ["Tritanium", "Plex", "Isogen", "Mexallon"]
