// This demonstrates how to use the useEffect hook for side effects like subscribing to a live data feed. It also shows how to clean up the subscription when the component unmounts to prevent memory leaks.

import { useState, useEffect } from "react";

function LiveMarketFeed() {
  const [price, setPrice] = useState(4500000);

  useEffect(() => {
    console.log("Subscribing to market feed...");

    const intervalId = setInterval(() => {
      // Simulate live price stream
      setPrice((prev) => prev + Math.random() * 2000 - 1000);
    }, 1500);

    // Cleanup function returned here
    return () => {
      console.log("Cleaning up market feed subscription");
      clearInterval(intervalId);
    };
  }, []); // empty array = cleanup only on unmount

  return <p>Live price: {price.toLocaleString()} ISK</p>;
}

export default LiveMarketFeed;
