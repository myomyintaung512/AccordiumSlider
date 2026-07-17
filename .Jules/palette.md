# Palette Persona Learnings Journal

## 2026-07-17 - Dual State Flag Synchronization for Legacy Shared Preview Galleries
**Learning:** In legacy jQuery galleries where multiple list items target a shared expanding preview element, relying on standard mouseover/focus event flows creates extreme visual flickering and premature layout closure. Synchronizing interactions using distinct `.data('hovered')` and `.data('focused')` flags on each item, combined with a debounced micro-timeout (10ms) deactivation check, provides a robust, flicker-free bridge between keyboard focus and mouse hover transitions.
**Action:** When enhancing legacy DOM-manipulating slideshows or accordion-like elements, always introduce dual-flag synchronized states and debounced validation checks instead of immediate element-based toggles or raw hover callbacks.
