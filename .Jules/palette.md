## 2025-05-14 - Debouncing focus transitions in shared containers
**Learning:** In legacy jQuery components where multiple interactive items share a common visual container (e.g., a gallery row with a preview image), tabbing between items can cause "flickering" or premature collapse if the `focusout` of one item triggers deactivation before the `focusin` of the next.
**Action:** Implement container-specific timers to debounce deactivation. Use `focusin`/`focusout` for bubbling, and ensure subsequent focus/hover events cancel any pending deactivation timers for that container.

## 2025-05-14 - Visual state synchronization in debounced galleries
**Learning:** When using debounced deactivation logic to prevent flickering in galleries, visual "sticky" states can occur where multiple items appear active if the activation of a new item doesn't explicitly reset the styles of its siblings.
**Action:** Always perform a synchronous reset of all sibling element styles (e.g., borders, margins) within the shared container before applying the active state to the newly focused or hovered element.
