## 2026-06-07 - [Keyboard Accessibility for jQuery Gallery]
**Learning:** Legacy jQuery plugins that rely on `.hover()` are inaccessible to keyboard users. Transitioning to `.on('mouseenter focusin', ...)` and `.on('mouseleave focusout', ...)` while adding `tabindex="0"` and `role="link"` (with `aria-label`) provides a seamless micro-UX improvement for accessibility without changing the visual design.
**Action:** Always check if interactive elements in legacy codebases are focusable and if their state-change animations are triggered by focus events.
