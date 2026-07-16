## 2026-05-20 - [Keyboard Accessibility for Interactive Galleries]
**Learning:** In shared-preview galleries where multiple items target a single expansion area, using dual 'hovered' and 'focused' data flags on each item enables synchronized state management, preventing visual flickering during mouse-to-keyboard transitions.
**Action:** Always coordinate interaction states using flags and a micro-timeout debouncer when managing shared UI elements to ensure a smooth transition between different input methods.
