# Palette UX/Accessibility Journal

## 2026-07-23 - State-Synchronized Shared Previews and Nested Focus Transitions
**Learning:** Shared preview accordion-style galleries that respond to both mouse hover and keyboard focus are highly prone to layout flickering and premature closure. Using standard event handlers like `focusout` or `mouseleave` triggers immediately, but focus can momentarily transition to a nested element (such as an anchor link) or a sibling element. Relying on dedicated `.data('hovered')` and `.data('focused')` flags paired with a debounced 10ms check resolves the race condition, providing seamless and buttery-smooth state transitions.
**Action:** When designing dual-activation (hover + focus) triggers on shared preview sections, coordinate state flags on a container level and utilize a 10ms micro-timeout to check if siblings or children remain active before starting any closing animations.
