## 2026-05-19 - [Accessibility for Interactive Divs]
**Learning:** Legacy components often use non-semantic elements like `div` for interactive controls, which are invisible to keyboard users and screen readers. Simply adding click handlers is insufficient for modern web standards.
**Action:** Always ensure that interactive `div` elements are upgraded with `tabindex="0"`, appropriate `role` attributes, and `aria-label` when text content is missing. Synchronize focus events with hover events to maintain UI parity between different interaction methods.
