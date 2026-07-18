# Palette's Journal - Critical UX/Accessibility Learnings

This journal tracks critical learnings on UX design, accessibility patterns, and UI transitions.

## 2026-03-06 - Gallery Interaction & Sync Focus/Hover State Management
**Learning:** In shared-preview galleries where multiple items target a single expansion area, synchronizing mouse and keyboard interactions is critical. Standard `.hover()` doesn't handle keyboard focus transitions. Using separate `hovered` and `focused` `.data()` flags combined with a debounced micro-timeout (10ms) prevents premature closure and visual flickering when switching between mouse hover and keyboard focus or moving focus across siblings.
**Action:** Always use separate state tracking flags and debounced checks for sibling items when coordinating a shared layout expansion area in legacy projects.
