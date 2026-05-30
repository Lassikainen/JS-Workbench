// coercion-examples.js

// 1. String + Number → String concatenation
console.log("Hull: " + 250); // "Hull: 250"  ← number turned into string

// 2. Number + Number = Number, but watch out for strings
console.log(100 + 50); // 150
console.log("100" + 50); // "10050"  ← string wins

// 3. == (loose equality) does coercion – avoid this
console.log(5 == "5"); // true  ← dangerous!
console.log(0 == false); // true  ← even more dangerous!

// 4. === (strict equality) – ALWAYS use this
console.log(5 === "5"); // false  ← safe and predictable
console.log(0 === false); // false

// 5. Falsy values (coerce to false in boolean contexts)
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
// Everything else is truthy
console.log(Boolean({})); // true
console.log(Boolean([])); // true
console.log(Boolean(" ")); // true

// Dangerous coercion examples - study these

console.log("5" + 3); // "53"   ← string wins, number is converted to string
console.log("5" - 3); // 2      ← minus forces number conversion
console.log("5" * 3); // 15     ← same
console.log("5" == 5); // true   ← loose equality coerces
console.log("5" === 5); // false  ← strict equality does NOT coerce

// Real EVE-style example that will bite you
const sellPriceString = "450000"; // price comes from text input or API as string
const walletBalance = 3200000;

const newBalance = walletBalance + sellPriceString; // This will result in a string concatenation, not addition!
console.log("New balance after sale:", newBalance); // "New balance after sale: 3200000450000" – oops, not what we wanted!
  