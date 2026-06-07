// Parent component (src/App.jsx)
import ShipStat from "./components/ShipStat.jsx";
import ShipStatus from "./components/ShipStatus.jsx";
import ModuleList from "./components/ModuleList.jsx";

// This is the main App component that serves as the entry point of the React application. It demonstrates how to use child components (ShipStat, ShipStatus, ModuleList) and pass data to them via props for dynamic rendering.

import { useState } from "react";
function App() {
  const shipData = {
    name: "Caldari Navy Raven",
    hull: 125000,
    shield: 98000,
    isAligned: true,
  };

  return (
    <div className="App">
      <h1>{shipData.name}!</h1>
      <div className="dashboard">
        {/* Props are passed as attributes */}
        <ShipStat label="Hull Integrity" value={shipData.hull} unit="HP" />
        <ShipStat
          label="Shield Strength"
          value={shipData.shield}
          unit="HP"
          warning={shipData.shield < 30000} // boolean prop
        />
        <ShipStatus hull={shipData.hull} shield={shipData.shield} isAligned={shipData.isAligned} />
        <ModuleList
          modules={[
            { id: 1, name: "425mm Railgun II", cpu: 45 },
            { id: 2, name: "Multispectrum Shield Hardener II", cpu: 25 },
            { id: 3, name: "Drone Navigation Computer II", cpu: 15 },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
