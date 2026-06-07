// Inside any component file (e.g., src/ShipDashboard.jsx)
import { useState } from 'react'

function ShipDashboard() {
  const [hull, setHull] = useState(125000)   // React state hook (covered next day)
  const shipName = "Caldari Navy Raven"
  const isAligned = true

  return (
    <div className="dashboard">   {/* className, not class */}
      <h1>{shipName} Status</h1>   {/* {} embeds JS expression */}
      
      {/* Conditional rendering */}
      <p className={isAligned ? "status-green" : "status-red"}>
        {isAligned ? "Aligned for warp" : "Misaligned"}
      </p>
      
      {/* Dynamic styling and data */}
      <div style={{ width: `${(hull / 125000) * 100}%` }} className="hull-bar">
        Hull: {hull.toLocaleString()} HP
      </div>
      
      {/* List rendering with map */}
      <ul>
        {["Railgun II", "Missile Launcher", "Drone Bay"].map((module, index) => (
          <li key={index} className="module-item">   {/* key is required for lists */}
            {module}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShipDashboard