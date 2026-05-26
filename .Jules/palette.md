## 2025-05-14 - Interaction State Synchronization in Shared-Preview Galleries
**Learning:** When a gallery uses a shared preview area (like a row header) for multiple items, deactivation animations must be strictly conditional on BOTH mouse and keyboard states. Relying on simple event pairs (mouseenter/mouseleave) causes visual flickering or "sticky" states if a user interacts with both input methods simultaneously.
**Action:** Use jQuery `.data()` flags (e.g., `focused`, `hovered`) to track independent interaction states and only trigger deactivation when all flags are false.

## 2025-05-14 - Cross-Input Focus Indicators
**Learning:** Keyboard focus indicators (like outlines) should persist even if the mouse enters and then leaves the element. Standard `mouseleave` handlers often globally reset styles, which inadvertently strips accessibility markers from keyboard users.
**Action:** In event handlers that modify visual state, explicitly check the `focused` state before removing indicators like `outline` or `box-shadow` during mouse events.
