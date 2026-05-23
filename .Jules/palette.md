## 2025-05-23 - Synchronized Hover and Focus States in Legacy jQuery
**Learning:** In legacy jQuery galleries where animations are triggered by hover, refactoring to chained '.on("mouseenter focusin", ...)' and '.on("mouseleave focusout", ...)' handlers while tracking state via '.data()' (e.g., 'hovered', 'focused') prevents visual flickering and ensures keyboard accessibility without duplicating logic.
**Action:** Use this pattern to modernize legacy event-driven UI components.
