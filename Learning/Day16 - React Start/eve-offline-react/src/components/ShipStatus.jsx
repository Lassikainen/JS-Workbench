// This component demonstrates conditional rendering based on ship status (hull, shield, alignment).

function ShipStatus({ hull, shield, isAligned }) {
  return (
    <div>
      {/* 1. Ternary operator - most common */}
      <p className={hull > 50000 ? "status-green" : "status-red"}>
        {hull > 50000 ? "Hull stable" : "Hull critical!"}
      </p>

      {/* 2. Logical AND - render only if true */}
      {shield < 20000 && <div className="alert">⚠️ Shield critically low!</div>}

      {/* 3. If/else inside the component (for more complex logic) */}
      {isAligned ? (
        <span className="aligned">✅ Aligned for warp</span>
      ) : (
        <span className="misaligned">❌ Misaligned - realign required</span>
      )}
    </div>
  );
}

export default ShipStatus;
