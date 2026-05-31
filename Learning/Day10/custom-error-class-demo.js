//Custom error classes allow you to create more specific and informative error types that can carry additional context about the error, making it easier to handle and debug issues in your code.

class MarketError extends Error {
  //As with any subclass of Error, we call super(message) to ensure the base Error properties are set correctly, and we can add our own custom properties like itemName and code for more detailed error information.
  constructor(message, itemName, code) {
    super(message); // required for proper stack trace
    this.name = "MarketError"; // custom name
    this.itemName = itemName; // domain-specific data
    this.code = code; // e.g. "INSUFFICIENT_ISK"
    this.timestamp = new Date();
  }
}

class InsufficientISKError extends MarketError {
  constructor(itemName, required, available) {
    super(`Insufficient ISK for ${itemName}`, itemName, "INSUFFICIENT_ISK");
    this.required = required;
    this.available = available;
  }
}

// Usage in defensive code
function attemptTrade(itemName, quantity, pricePerUnit) {
  try {
    const totalCost = quantity * pricePerUnit;
    const wallet = 12500000; // simulated

    if (totalCost > wallet) {
      throw new InsufficientISKError(itemName, totalCost, wallet);
    }

    console.log(`✅ Trade executed: ${quantity} × ${itemName}`);
  } catch (error) {
    if (error instanceof InsufficientISKError) {
      console.error(
        `💰 ${error.message} (needed ${error.required.toLocaleString()}, have ${error.available.toLocaleString()})`,
      );
    } else if (error instanceof MarketError) {
      console.error("Market system error:", error.message);
    } else {
      console.error("Unexpected error:", error.message);
    }
  }
}

attemptTrade("Plex", 5, 4800000);
// Test inputs and outputs
// Input: attemptTrade("Plex", 5, 4800000) → throws InsufficientISKError with full details
