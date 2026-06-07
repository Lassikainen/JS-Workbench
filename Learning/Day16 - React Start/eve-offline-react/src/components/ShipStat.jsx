//This component demonstrates how to create a reusable component (ShipStat) that accepts props for dynamic content and styling. It also shows how to use conditional classes and default prop values for flexibility.

// Child component (src/components/ShipStat.jsx)
function ShipStat(props) {
  // props is the object containing everything passed down
  // Destructuring for cleaner code (modern best practice)
  const { label, value, unit = "HP", warning = false } = props;

  return (
    <div className={`stat ${warning ? "warning" : ""}`}>
      {/* &nbsp; for non-breaking space. This prevents the label from wrapping to the next line */}
      <span className="label">{label}&nbsp;</span>
      <span className="value">
        {value.toLocaleString()} {unit}
      </span>
    </div>
  );
}

export default ShipStat;
