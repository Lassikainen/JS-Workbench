//Demonstrates the use of useEffect to manage side effects in a React component, specifically simulating a live market price ticker. The MarketTicker component sets up an interval to update the price every 2 seconds and includes cleanup logic to clear the interval when the component unmounts, preventing memory leaks.

import { useState, useEffect } from "react";

function MarketTicker() {
  // State to hold the current price
  const [price, setPrice] = useState(4500000);

  // useEffect runs AFTER render.
  // The empty dependency array means this effect runs only once when the component mounts.
  useEffect(() => {
    console.log("Market ticker mounted - starting price simulation");

    // Side effect: set up a timer
    const intervalId = setInterval(() => {
      setPrice((prev) => prev + Math.floor(Math.random() * 10000) - 5000);
    }, 2000);

    // Cleanup will be explained in section 3
    return () => {
      clearInterval(intervalId);
    };
  }, []); // empty dependency array = run only once on mount

  return (
    <div>
      <h2>Tritanium Live Price</h2>
      <p>{price.toLocaleString()} ISK</p>
    </div>
  );
}

export default MarketTicker;
