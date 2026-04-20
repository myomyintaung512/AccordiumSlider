## 2025-05-14 - Accessibility for Legacy Hover Galleries
**Learning:** In legacy jQuery galleries using `div`s for interactive items, adding `role="link"`, `tabindex="0"`, and mapping both `hover` and `focus` events to a shared animation function ensures keyboard parity and screen reader support.
**Action:** Refactor hover-based animations into reusable `activate`/`deactivate` functions to easily support `focus`/`blur` events in legacy UI components.
