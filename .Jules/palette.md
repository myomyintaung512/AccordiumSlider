## 2025-05-14 - Debouncing shared container animations for a11y
**Learning:** Adding keyboard focus support to a hover-based gallery can cause visual flickering if the container deactivates immediately on blur/mouseleave. Since focus often moves quickly between siblings, a small delay or state check (e.g., using `setTimeout` and checking `hovering`/`focused` flags) ensures a smooth transition.
**Action:** Use container-specific timers and state flags (via `.data()`) to coordinate activation/deactivation across multiple event types (hover, focus).
