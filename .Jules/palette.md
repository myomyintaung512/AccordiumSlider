## 2025-05-15 - Synchronizing Hover and Focus in Legacy jQuery
**Learning:** In legacy jQuery plugins where interactive elements are represented by non-semantic `div`s, adding `tabindex="0"` and `role="link"` is only the first step. To ensure a consistent UX, hover-based animations must be refactored into shared functions (e.g., `activateBox`) and triggered by both `mouseenter/mouseleave` and `focus/blur` events.
**Action:** When modernizing legacy sliders, extract transition logic into named functions and bind them to both pointer and keyboard focus events to prevent mismatched states.
