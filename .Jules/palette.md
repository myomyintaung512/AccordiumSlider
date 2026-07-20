# Palette's Journal - Critical UX/Accessibility Learnings

## 2026-07-20 - [Accessibility and Keyboard Navigation in Shared-Preview Galleries]
**Learning:** In a legacy shared-preview gallery built with jQuery, simple mouse-hover logic neglects keyboard-only and screen reader users. Adding tabindex, clean dynamic ARIA labels, and keyboard-triggered focus events allows the gallery to be fully navigable via screen readers and standard keyboards. Integrating focus/hover state coordination prevents flickering and premature collapse during transitions.
**Action:** Always map hover states to focus states with distinct flag states, debounce preview deactivation to handle row transitions, and ensure nested hyperlinks are keyboard accessible without interfering with container navigation handlers.
