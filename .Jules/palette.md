## 2025-05-14 - Accessibility in Legacy jQuery Components
**Learning:** For legacy components that use non-semantic elements (like `div`) for interactivity, it's crucial to explicitly add `role="link"` (or `button`), `tabindex="0"`, and dynamic `aria-label` attributes. Additionally, visual feedback (like hover animations) must be synchronized with `focus` and `blur` events to ensure a consistent experience for keyboard users.
**Action:** Always check for interactive `div` elements and apply these attributes and event listeners.
