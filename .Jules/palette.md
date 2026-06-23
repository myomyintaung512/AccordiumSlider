## 2025-05-14 - [Keyboard Accessibility & Interaction Coordination]
**Learning:** In shared-preview galleries where multiple items target a single expansion area, using dual 'hovered' and 'focused' data flags on each item enables synchronized state management. This prevents visual flickering during mouse-to-keyboard transitions by ensuring the preview remains open as long as at least one interaction state is active.
**Action:** Use jQuery `.data()` to track multiple interaction states and a micro-timeout debouncer to coordinate deactivation logic in complex UI components.
