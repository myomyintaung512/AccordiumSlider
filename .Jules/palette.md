## 2025-05-15 - Synchronizing Keyboard Focus and Mouse Hover in Shared Containers

**Learning:** In legacy jQuery components where multiple interactive elements share a container-level visual state (like an expanded preview), simple 'mouseleave' or 'blur' events cause flickering when moving between items. Using a small debounced timer (e.g., 50ms) allowed subsequent focus or hover events to cancel the 'deactivation' of the shared state, creating a smooth transition.

**Action:** Implement container-specific timers to coordinate enter/exit events in shared interactive UI components.
