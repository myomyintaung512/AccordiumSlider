## 2026-05-29 - [Keyboard Accessibility for Hover Galleries]
**Learning:** In legacy jQuery-based galleries where interactions are exclusively hover-based, adding keyboard support requires more than just `tabindex="0"`. It also needs `focusin`/`focusout` event mapping to existing hover logic and explicit `keydown` handling for Enter key navigation to ensure full accessibility.
**Action:** Always refactor `.hover()` to `.on('mouseenter focusin', ...).on('mouseleave focusout', ...)` when enabling keyboard accessibility for interactive elements.
