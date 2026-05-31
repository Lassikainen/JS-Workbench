// Try-catch blocks are used to handle errors gracefully without crashing the program. They allow you to "try" risky code and "catch" any errors that occur, providing a way to respond to those errors.

// Finally blocks are used to execute code that should run regardless of whether an error occurred or not, such as cleanup tasks or logging.

// Defensive market price validation
function validateMarketPrice(itemName, price) {
  try {
    // Risky operations that might fail
    if (typeof price !== "number") {
      throw new TypeError("Price must be a number"); // explicit throw
    }
    if (price <= 0) {
      throw new Error(`Invalid price for ${itemName}: ${price}`);
    }
    if (!itemName || itemName.trim() === "") {
      throw new Error("Item name cannot be empty");
    }

    console.log(`✅ Valid price for ${itemName}: ${price} ISK`);
    return price;
  } catch (error) {
    // Catch block handles any errors thrown in the try block
    // error is the thrown Error object
    console.error(`❌ Market validation failed for ${itemName}:`, error.message);
    console.error("Error name:", error.name); // "TypeError" or "Error"
    return null; // graceful fallback
  } finally {
    // Finally block runs regardless of success or failure
    console.log(`Market validation attempt completed for ${itemName}`);
  }
}

// Test inputs and outputs
// Input: validateMarketPrice("Tritanium", 4500) → "✅ Valid price..." then "Market validation attempt completed"
// Input: validateMarketPrice("Invalid", -100) → "❌ Market validation failed..." then finally block
// Input: validateMarketPrice("", 5000) → catch block + finally
