//Generators are special functions that can pause and resume their execution, allowing you to create iterators that produce a sequence of values on demand. They are defined using the function* syntax and use the yield keyword to return values one at a time, making them ideal for handling infinite sequences or streams of data without consuming large amounts of memory.

//Best practices for generators include using them for lazy evaluation, creating custom iterators, and managing asynchronous data streams. They can be particularly useful in scenarios like generating market price updates, where you want to produce a continuous stream of data without blocking the main thread or consuming excessive resources.

//You shouldn't use generators for simple one-off computations or when you need to return a single value, as they are designed for producing sequences of values over time.

// Generator for simulated market price stream
function* priceGenerator(itemName, basePrice) {
  let currentPrice = basePrice;
  let tick = 0;

  //In this case we are generating an infinite stream of price updates. We could limit this with a for loop if we wanted to simulate a fixed number of ticks instead.
  while (true) {
    // infinite generator
    // Simulate market fluctuation
    const change = Math.random() * 200 - 100;
    currentPrice = Math.max(100, Math.round(currentPrice + change));

    yield {
      // yield pauses and returns value
      item: itemName,
      price: currentPrice,
      tick: tick++,
    };
  }
}

// You must call .next() at least once to start the generator and get the first value. Each subsequent .next() call will resume execution until the next yield, allowing you to get the next price update on demand without running an entire loop or consuming memory for all values at once.

const tritaniumPrices = priceGenerator("Tritanium", 4500);
console.log(tritaniumPrices.next().value); // { item: "Tritanium", price: ~4500, tick: 0 }
console.log(tritaniumPrices.next().value); // next tick
console.log(tritaniumPrices.next().value); // and so on

// Test inputs and outputs
// Each .next().value returns a new price object without running the entire loop
