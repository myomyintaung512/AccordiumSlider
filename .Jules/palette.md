## 2026-08-06 - Coordinating Hover/Focus in Shared Preview Containers

**Learning:** In legacy jQuery galleries with shared preview areas, standard `.hover()` events fail to support keyboard navigation. Simply adding separate `mouseenter` and `focusin` events causes immediate race conditions and UI flickering during keyboard navigation. This happens because the active state toggles off and on between elements, and nested focusable elements (like links) bubble focus events, leading to premature closing animations.

**Action:**
1. Avoid relying on `e.relatedTarget` to determine active status. Instead, maintain separate `.data("hovered")` and `.data("focused")` flags on each item.
2. Use a micro-timeout (e.g., 10ms) debouncer before triggering closing animations on shared previews. This allows the incoming focus or hover state to register and cleanly keep the container open.
3. Check for child element interaction targets (e.g., `$(e.target).is('a')`) in event handlers to prevent container-level navigation from overriding nested link clicks/keys.
