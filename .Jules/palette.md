## 2026-06-21 - [Accessibility] Keyboard Support for Hover-Based Gallery
**Learning:** Legacy hover-based interactions often exclude keyboard and screen reader users. Adding `tabindex="0"`, `role="link"`, and `aria-label` during initialization, along with `focusin`/`focusout` and `keydown` (Enter key) event handlers, can retroactively make these components accessible without major refactoring.
**Action:** Always check if hover-triggered animations have equivalent focus-triggered animations and ensure interactive elements have appropriate ARIA roles and labels.
