## 2025-05-14 - Keyboard-Accessible Preview Galleries
**Learning:** In shared-preview galleries (where multiple items target a single expansion area), transitioning focus between items or from mouse to keyboard can cause "flickering" or premature closure of the preview if handled with simple focus/blur events. Using dual interaction flags (e.g., `hovered` and `focused` data attributes) combined with a micro-timeout (10ms) allows for synchronized state management and smoother transitions.
**Action:** Always coordinate mouse and keyboard states using persistent data flags and a debounced deactivation check to ensure the UI remains stable during rapid interaction changes.

## 2025-05-14 - Accessible Labels from Dynamic Content
**Learning:** For interactive gallery items without explicit titles, generating `aria-label` by cleaning the element's text content (removing extra whitespace/newlines) provides a much better screen reader experience than generic labels.
**Action:** Implement a cleaning utility for text-based labels and always provide a indexed fallback (e.g., "Gallery item 1") to ensure uniqueness.
