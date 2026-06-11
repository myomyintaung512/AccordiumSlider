## 2026-06-11 - [Accessibility] Keyboard Navigation and Focus Coordination
**Learning:** Legacy jQuery galleries often lack keyboard focus support. Simply adding `tabindex` isn't enough; visual states (hover effects) must be synchronized with focus states using data flags to prevent flickering when switching between mouse and keyboard.
**Action:** Use jQuery `.data('hovered')` and `.data('focused')` to track interaction states and only trigger deactivation if both are false.
