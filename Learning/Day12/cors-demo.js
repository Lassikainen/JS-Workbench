//This demonstrates how to handle CORS issues when making cross-origin requests in JavaScript. CORS is a security feature implemented by browsers that restricts web pages from making requests to a different domain than the one that served the web page, unless the server explicitly allows it through CORS headers.
//It's a pretty simple demo - the fetchWithCORSCheck function attempts to fetch data from a specified URL and checks for CORS-related errors. If the server does not include the necessary CORS headers, the browser will block the request, and an error message will be logged to the console.
async function fetchWithCORSCheck(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      // CORS is handled by the browser automatically. The server must include appropriate CORS headers (e.g., Access-Control-Allow-Origin) for this to succeed.
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - check CORS headers on server`);
    }

    return await response.json();
  } catch (error) {
    if (error.message.includes("CORS")) {
      console.error("🌐 CORS blocked this request. Server must allow your origin.");
    }
    throw error;
  }
}

// Test inputs and outputs
// Input: fetchWithCORSCheck("https://mock-eve-api.amsen.edu/market") → succeeds if CORS headers present
