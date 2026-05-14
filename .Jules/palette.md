## 2025-05-14 - [Keyboard Accessibility for Legacy jQuery Components]
**Learning:** Legacy jQuery plugins that rely on `.hover()` are inaccessible to keyboard users. Refactoring these to use `.on('mouseenter focusin', ...)` and `.on('mouseleave focusout', ...)` allows for a synchronized experience where keyboard focus triggers the same visual feedback (e.g., animations, expansions) as mouse hover.
**Action:** Always check for `.hover()` in legacy components and replace with bubbled focus events to ensure accessibility.

## 2025-05-14 - [Dynamic ARIA Labels for Minimalist UI]
**Learning:** In galleries with minimal or no text, generating `aria-label` from available metadata (like `url` or specific attributes) is crucial for screen reader users to understand the destination or content of interactive items.
**Action:** Implement a fallback logic for `aria-label` during component initialization: `text content` -> `attribute metadata` -> `generic identifier`.
