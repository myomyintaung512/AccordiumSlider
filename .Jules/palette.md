## 2026-05-22 - [Keyboard Accessibility for Legacy jQuery Plugins]
**Learning:** Legacy jQuery plugins often rely on `.hover()` and `.click()`, which exclude keyboard users. Refactoring these to `.on('mouseenter focusin', ...)` and adding `tabindex="0"`/`role="link"` instantly makes them accessible. Tracking focus/hover states via `.data()` prevents visual flickering when both states are active.
**Action:** Always check if interactive elements are focusable and use dual event listeners (mouse + focus) with state tracking for coordinated UI animations.
