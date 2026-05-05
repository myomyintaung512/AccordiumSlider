## 2026-05-05 - [A11y: Keyboard Accessibility for Legacy jQuery Gallery]
**Learning:** Legacy jQuery plugins often rely exclusively on hover events for visual feedback, making them inaccessible to keyboard users. Refactoring these interactions to use `focusin`/`focusout` and shared animation functions, combined with ARIA roles and labels, provides a path to accessibility without major architecture changes.
**Action:** When working with hover-based jQuery components, refactor logic into shared `act`/`deact` functions and bind to both hover and focus events to ensure accessibility.
