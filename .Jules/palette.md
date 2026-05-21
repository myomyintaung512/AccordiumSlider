## 2025-05-14 - Accessible Gallery Interactions in Legacy jQuery
**Learning:** In legacy jQuery applications using manual state management for hover effects, implementing keyboard focus requires careful coordination to prevent visual flickering. Using `.data()` flags (e.g., 'hovered', 'focused') allows for synchronized activation/deactivation logic that respects both mouse and keyboard states simultaneously.
**Action:** Use a unified handler for `mouseenter focusin` and `mouseleave focusout`, and only trigger deactivation if both the hover and focus state flags are false.
