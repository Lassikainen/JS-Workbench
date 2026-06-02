// Simple fetch for market data
function getMarketPrice(itemName) {
  // fetch returns a Promise that resolves to a Response object
  return fetch(`https://mock-eve-api.amsen.edu/market/${itemName}`)
    .then((response) => {
      // Always check status before parsing.
      // If the response is not OK (status 200-299), throw an error to be caught below
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // .json() returns another Promise with the parsed data
      return response.json();
    })
    .then((data) => {
      console.log(`✅ ${itemName} price: ${data.price} ISK (volume: ${data.volume})`);
      return data; // pass data forward for chaining
    })
    .catch((error) => {
      console.error(`❌ Failed to fetch ${itemName}:`, error.message);
      return null; // graceful fallback
    });
}
