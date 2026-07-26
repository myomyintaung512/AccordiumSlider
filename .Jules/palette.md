# Palette UX Journal

## 2026-07-26 - Keyboard Navigation State Coexistence
**Learning:** Adding full keyboard accessibility on a shared-preview image accordion requires decoupling mouse hover and keyboard focus states. When users press 'Tab' or trigger 'focusin', sibling rows must collapse fully while the active row keeps track of its individual item states. If separate `.data('hovered')` and `.data('focused')` flags are not used with a minor timeout debouncer, focus changes will introduce visual flickering or premature collapse.
**Action:** Always coordinate complex hover/focus states using jQuery `.data()` state flags combined with a debouncer (e.g. 10ms) and cross-row deactivation checks to guarantee smooth visual animations.
