## 2025-05-14 - Coordinating Shared-Preview Interactions
**Learning:** In components where multiple items target a single shared expansion area (like a gallery row preview), independent 'focusout' handlers can trigger premature closing animations. State must be coordinated across all potential triggers in the shared context.
**Action:** Use a debounced check (e.g., via `setTimeout`) that verifies if *any* related element in the group is active (hovered or focused) before triggering deactivation logic.
