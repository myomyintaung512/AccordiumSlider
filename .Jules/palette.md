## 2026-05-01 - Synchronized Hover/Focus with Shared Containers
**Learning:** In shared interactive components (like this gallery where one preview serves a row), simply debouncing the deactivation isn't enough to prevent "sticky highlights" when using `clearTimeout`. The subsequent activation cancels the shared timer, potentially leaving the previous element in an active state.
**Action:** When an element is activated, explicitly reset the visual state (borders, margins, etc.) of all siblings in the same container to ensure UI consistency regardless of timer race conditions.
