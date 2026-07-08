## 2026-07-08 - Keyboard accessibility in custom image galleries
**Learning:** Custom-built image galleries often rely on `hover` events and non-semantic `div` elements, making them completely inaccessible to keyboard and screen reader users.
**Action:** Always ensure that interactive elements have `tabindex="0"`, appropriate `role` attributes, and that visual state changes are triggered by both `mouseenter/focusin` and `mouseleave/focusout`.
