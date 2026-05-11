## 2026-05-11 - Gallery Keyboard Accessibility
**Learning:** Legacy jQuery galleries using non-semantic divs for interactive items are completely inaccessible to keyboard users. Using `tabindex="0"` and `role="link"` alongside ARIA labels derived from content or URLs provides an immediate accessibility win. Mapping `focusin` and `focusout` to existing hover animations ensures visual parity for keyboard users.
**Action:** When encountering custom interactive components, always check for keyboard focusability and map existing mouse event handlers to focus events.
