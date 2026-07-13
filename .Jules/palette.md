## 2026-07-13 - [Keyboard Accessibility for Gallery Boxes]
**Learning:** Custom interactive elements (like divs acting as links) require explicit tabindex, roles, and keyboard event handlers (Enter key) to be accessible. Using focusin/focusout is essential for syncing keyboard focus with existing hover-based animations.
**Action:** Always ensure non-button/link interactive elements have `role`, `tabindex`, and handle `Enter` key. Use focus events to trigger the same logic as hover for consistent UX.
