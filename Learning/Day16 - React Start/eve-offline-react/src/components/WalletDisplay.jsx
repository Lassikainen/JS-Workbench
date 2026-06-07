//Demonstrates using functional updates to ensure state updates are based on the latest value, avoiding stale closures.
// The WalletDisplay component simulates a wallet balance that can be updated with a button click. It uses the functional form of the state updater to ensure that updates are based on the most recent state, which is crucial when multiple updates may occur in quick succession.

import { useState } from "react";

function WalletDisplay() {
  const [balance, setBalance] = useState(12500000);

  function addISK(amount) {
    // Functional updater - always receives latest balance
    setBalance((prevBalance) => {
      const newBalance = prevBalance + amount;
      console.log(`Updated from ${prevBalance} to ${newBalance}`);
      return newBalance; // must return the new value
    });
  }

  return (
    <div>
      <p>Wallet: {balance.toLocaleString()} ISK</p>
      <button onClick={() => addISK(5000000)}>Receive 5M ISK (simulated)</button>
    </div>
  );
}

export default WalletDisplay;
