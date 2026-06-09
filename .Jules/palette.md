## 2025-05-15 - [Keyboard Accessibility for Shared-Preview Galleries]
**Learning:** In galleries where multiple items trigger a shared preview area, adding keyboard focus support requires careful state management. Using `focusin`/`focusout` alongside `mouseenter`/`mouseleave` and tracking states via jQuery `.data()` flags (e.g., 'hovered', 'focused') prevents visual flickering and race conditions when switching between mouse and keyboard interaction.

**Action:** Always use dual-flag state tracking for interactive elements that share a common visual expansion area to ensure smooth transitions for both mouse and keyboard users.
