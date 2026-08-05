# Palette UX Journal

## 2026-08-05 - Gallery Keyboard Accessibility and Focus State Handling
**Learning:** In legacy jQuery sites, simple container-based click/hover galleries fail completely for keyboard navigators. Adding `tabindex="0"`, custom keyboard focus transitions (`focusin`/`focusout`), and unique ARIA labels on dynamic rows are necessary. Using separate `hovered` and `focused` state flags in jQuery's `.data()` avoids race conditions and flickering when moving between mouse and keyboard controls.
**Action:** When working with legacy layout patterns or container-click layouts, implement coordinated keyboard state synchronization, ARIA labels, and interactive keyboard handlers without modifying core visuals.
