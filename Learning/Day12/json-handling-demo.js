async function updateMarketData() {
  try {
    // GET - receive JSON
    const response = await fetch("https://mock-eve-api.amsen.edu/market/prices");
    if (!response.ok) throw new Error("Market service unavailable");

    //await response.json() automatically parses JSON into JS objects/arrays. Await is required because .json() is asynchronous and returns a Promise.
    const prices = await response.json(); // parses JSON automatically

    console.table(prices); // prices is now a clean JS array of objects

    // POST - send JSON
    const newOrder = {
      item: "Plex",
      quantity: 5,
      price: 4800000,
      pilot: "Caiphus",
    };

    // When sending data, we need to stringify our JS object into JSON format. The server expects a JSON string in the body of the request.
    const postResponse = await fetch("https://mock-eve-api.amsen.edu/orders", {
      method: "POST", // important for writes
      headers: {
        "Content-Type": "application/json", // tells server to expect JSON
      },
      body: JSON.stringify(newOrder), // converts object to JSON string
    });
    if (!postResponse.ok) throw new Error("Failed to place order");
    const result = await postResponse.json();
    console.log("✅ Order placed:", result.orderId);

    return result;
  } catch (error) {
    console.error("Data operation failed:", error.message);
  }
}
