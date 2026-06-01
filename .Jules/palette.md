## 2025-05-14 - [State tracking for shared-preview galleries]
**Learning:** In galleries where multiple items target a shared expansion area (like mmDeveloperSlider), using dual `hovered` and `focused` data flags with a micro-timeout prevents visual flickering and race conditions during mouse-to-keyboard transitions.
**Action:** Use `.data('hovered', true/false)` and `.data('focused', true/false)` combined with `setTimeout(..., 10)` to coordinate expansion/collapse states across different input methods.
