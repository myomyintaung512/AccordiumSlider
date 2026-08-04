# Palette Journal

## 2026-03-10 - Gallery Keyboard Accessibility and Focus Transitions
**Learning:** In legacy jQuery interactive galleries like mmDeveloperSlider, using individual mouse events (hover) without synchronization for keyboard event listeners (focusin/focusout) results in disjointed expansions and visual flickering. When focus shifts, active states must be coordinated using explicit `.data()` flags rather than relying solely on `e.relatedTarget`.
**Action:** Implement synchronized event listeners for mouse and focus interactions, track states using `.data('hovered')` and `.data('focused')` flags, and use a debouncer to coordinate animations and prevent flickering.
