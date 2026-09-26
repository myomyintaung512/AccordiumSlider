## 2026-09-26 - Accessible Accordion Gallery Navigation
**Learning:** Legacy jQuery accordion gallery items lacked keyboard focus attributes and event listeners, making them completely inaccessible to keyboard and screen reader users.
**Action:** Always ensure gallery items receive `tabindex="0"`, `role="link"`, descriptive `aria-label` text, and combined `focusin`/`focusout` and `keydown` (`Enter`/`Space`) event handlers.
