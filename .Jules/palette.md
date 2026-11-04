## 2026-11-04 - Accessible Accordion Image Slider Navigation

**Learning:** When turning hover-driven accordion sliders into keyboard-accessible widgets, container click handlers interfere with nested links unless events from inner anchor tags are explicitly ignored. Furthermore, managing row expansion states with separate hovered and focused data flags prevents premature collapse during keyboard navigation between sibling items.

**Action:** Always check `$(e.target).is('a')` when attaching link activation to container elements, and track both hover and focus states when managing expanding accordion rows.
