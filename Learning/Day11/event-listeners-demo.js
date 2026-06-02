// Event-driven ship fitting UI
function initializeFittingUI() {
  const fittingPanel = document.querySelector(".fitting-panel");

  // Basic click listener.
  fittingPanel.addEventListener("click", function (event) {
    // event.target is the exact element that was clicked
    if (event.target.classList.contains("module-slot")) {
      console.log("Module slot clicked:", event.target.dataset.slotId);
      // Highlight the slot
      event.target.classList.toggle("selected");
    }
  });

  // Keyboard support
  // Listen for Escape key to deselect all
  //keypress is deprecated, use keydown instead. Keyup can be used if you want to detect when the key is released, but for this use case keydown is more appropriate.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      // Deselect everything
      document.querySelectorAll(".selected").forEach((el) => el.classList.remove("selected"));
    }
  });

  // Event delegation example - more efficient for dynamic content
  // Instead of attaching listeners to every slot, attach once to parent
  const moduleContainer = document.getElementById("module-container");
  moduleContainer.addEventListener("click", function (event) {
    // Check if the click originated from a module slot
    const slot = event.target.closest(".module-slot");
    if (slot) {
      console.log("Delegated click on slot:", slot.dataset.slotId);
    }
  });
}

// Test inputs and outputs
// Input: click on a .module-slot element → Output: "Module slot clicked: high1" and visual highlight
// Input: press Escape key → Output: all selected classes removed
