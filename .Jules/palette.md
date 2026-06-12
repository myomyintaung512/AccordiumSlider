## 2026-06-12 - Coordinating Mouse and Keyboard State in Shared-Preview Galleries
**Learning:** In galleries where multiple items trigger a shared preview area, simple focus/hover events can cause flickering or "sticky" states. Using dual state flags (e.g., `.data('hovered')` and `.data('focused')`) combined with a micro-timeout (10ms) debouncer ensures smooth transitions and prevents premature closure of the preview during interaction switches.
**Action:** Implement state-tracking flags and a debounced deactivation check for any component with shared interactive previews.
