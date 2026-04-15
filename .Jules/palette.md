# Palette's Journal

## 2025-05-14 - Legacy jQuery Gallery Accessibility
**Learning:** Legacy jQuery plugins often use non-semantic `div` elements for interactive components, which lack keyboard focusability and ARIA roles by default.
**Action:** Always check for `tabindex`, `role="link"` (or appropriate role), and `aria-label` when encountering `div`-based interactive elements in legacy code. Synchronize `focus`/`blur` events with existing `hover` logic.
