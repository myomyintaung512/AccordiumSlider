## 2025-05-15 - Debouncing Gallery Row Transitions
**Learning:** In interactive components with shared UI elements (like a preview area per row), simple blur/focusout events cause flickering because the exit event from one item fires before the enter event of the next. Checking both focus and hover state within a debounced timer prevents premature collapse.
**Action:** Use container-specific timers to debounce deactivation animations in shared-UI components.

## 2025-05-15 - Leveraging Legacy Design Tokens
**Learning:** Legacy jQuery plugins often rely on global configuration variables for styling. Hardcoding values like "purple" for focus states breaks theme consistency.
**Action:** Always check for global configuration variables (like `border_color`) and use them for dynamic styling to ensure the enhancement matches the user's theme.
