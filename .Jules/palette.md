## 2026-08-15 - Keydown Spacebar Activation in Interactive Containers
**Learning:** When adding keyboard activation (Enter/Space) to custom interactive elements (like gallery `<div>` cards acting as links), triggering action on `e.which === 32` (Space) without `e.preventDefault()` causes the browser window to scroll down before navigating.
**Action:** Always call `e.preventDefault()` when `e.type === "keydown"` and `e.which === 32` on interactive container elements.
