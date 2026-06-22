## 2026-06-22 - [Accessible Clickable Containers]
**Learning:** Legacy components often use 'div' elements with click handlers for navigation, which are inaccessible to keyboard and screen reader users. Simply adding 'tabindex', 'role', and 'aria-label' is not enough; event handlers must also be synchronized for focus/blur to provide visual feedback, and 'Enter' key listeners must be added.
**Action:** Always check for simulated links and apply a full suite of accessibility attributes (tabindex, role, aria-label) and keyboard event listeners (keydown, focusin/focusout).
