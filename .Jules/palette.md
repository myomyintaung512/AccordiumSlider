## 2025-05-15 - Synchronized Hover and Focus for Shared Previews
**Learning:** In UIs where multiple items trigger a shared expansion area (like a preview panel or accordion), simple focus/blur listeners can cause visual flickering during transitions.
**Action:** Coordinate state using dual `.data('hovered')` and `.data('focused')` flags combined with a micro-timeout (e.g., 10ms). Only trigger deactivation if all items in the related group (siblings) verify that both interaction flags are false.
