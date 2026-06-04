## 2026-06-04 - Shared State in Shared-Preview Galleries
**Learning:** In galleries where multiple items target a single expansion area, per-item deactivation logic (even with debouncing) can cause race conditions. If Box 1's deactivation timer fires after Box 2 has already activated the preview, Box 1 will incorrectly close it.
**Action:** Use a row-level or global state check (or check if any sibling is currently active) before triggering deactivation animations in shared-preview components.
