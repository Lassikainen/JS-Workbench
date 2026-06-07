//Demonstrates the use of useEffect with different dependency arrays to control when side effects run in a React component. The ShipMonitor component includes three useEffect hooks: one that runs only once on mount, one that runs whenever the shipId prop changes, and one that runs on every render (which is generally not recommended).

function ShipMonitor({ shipId }) {
  const [status, setStatus] = useState(null);

  // 1. Runs only once on mount
  useEffect(() => {
    console.log("Fetching initial ship data");
    // fetch ship data here
  }, []);

  // 2. Runs when shipId changes
  useEffect(() => {
    console.log(`Ship ID changed to ${shipId} - refetching`);
    // fetch new data for this ship
  }, [shipId]); // dependency array

  // 3. Runs on every render (almost never what you want)
  // useEffect(() => { ... })   ← no array
}

export default ShipMonitor;
